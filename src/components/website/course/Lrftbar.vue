<template>
  <div class="lftbar">
    <div class="notify">
      <h4> اعلامات الدورة </h4>
      <div class="ul">
        <li v-for="notify in state.notification" :key="notify.id">
          <h6> - {{ notify.description }} </h6>
        </li>
      </div>
    </div>
    <div class="techer">
      <div class="row">
        <div class="col-12">
          <h4><i class="fa fa-user"></i> عن المدرس </h4>
        </div>
        <div class="col-12">
          <div class="img">
            <img :src="'http://127.0.0.1:8000/'+state.teacher.avatar" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-6  info">
            <i class="fa-solid fa-chevron-left"></i> الاسم
          </div>
          <div class="col-6 pt-3" >  {{state.teacher.name}} </div>
        </div>
        <div class="row">
          <div class="col-6  info">
            <i class="fa-solid fa-chevron-left"></i> تاريخ الانضمام
          </div>
          <div class="col-6 pt-3" > {{ state.teacher.created_at }} </div>
        </div>
        <div class="row">
          <div class="col-6  info">
            <i class="fa-solid fa-chevron-left"></i> عدد الدورات
          </div>
          <div class="col-6 pt-3" > {{ state.teacher.classroom_count }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed,onMounted,reactive } from "vue";
import { useStore } from "vuex";
import axios from 'axios';
export default {
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      loading: true,
      teacher: {},
      notification: [],
      std_id: computed(() => useStore().state.student.id),
    });
    const cours_id = props.id;
    onMounted(async () => {
      await axios
        .get("api/lastFiveNotes/" + cours_id)
        .then((res) => {
          if(res.data.data) {
            state.notification = res.data.data
          }
          else {
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
      await axios
        .get("api/get-teachers/" + cours_id)
        .then((res) => {
          state.teacher = res.data.data;
          console.log(state.teacher);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
    });
    return { state };
  },

}
</script>

<style lang="scss">
.lftbar {
  margin-top: 65px;
  margin-left: 50px;

  .notify {
    margin-bottom: 30px;
    background-color: var(--gray-blue);
    border-radius: 8px;
    padding: 15px;
h4{
  color: #000;
}
    .ul {
      li {
        list-style: none;
        margin: 10px;
        border-bottom: 1px solid #8D8484;
      }
    }
  }

  .techer {
    margin-bottom: 30px;
    background-color: var(--gray-blue);
    border-radius: 8px;
    padding: 15px;

    h4 {
      color: #000;
      
      i {
        color: var(--darker-blue);
        margin-left:10px ;
      }
    }

    .img {
      margin: 20px auto;
      display: flex;
      // width: 50%;
      width: 150px;
      height: 150px;
      justify-content: center;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .info {
      margin: 10px 0;
      color: #000;
    }
    i{
            color: rgb(14, 90, 116);
    }
  }

}
</style>