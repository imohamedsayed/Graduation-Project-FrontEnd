<template lang="">
    <div class="col-lg-3 col-md-4 col-sm-6 " 
    v-for="item in state.teacherlist" :key="item.id"
    >
      <div class="teachera">
        <div class="img">
        <img src="../../../assets/course/Ellipse_45.png" alt="" srcset="">
        </div>
        <div class="name">
          {{item.name}}
        </div>
        <div class="nikename">
          {{item.nick_name}}
        </div>
      </div>
    </div>
</template>
<script>
import { onMounted,reactive } from 'vue';
import axios from 'axios';
export default {
  props: {
    id: String
  },
  setup(props) {
    const state = reactive({
      teacherlist: [],
    });
    onMounted(async () => {
      console.log(props.id);
      await axios
        .get("/api/teachers/" + props.id)
        .then((res) => {
          state.teacherlist = res.data.data;
          console.log(state.teacherlist);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
    });
    return { state };
  }
}
</script>
<style lang="scss">
.teachera {
  width: 100%;
  height: 300px;
  margin: 20px 0;
  background-color: #D5DEF5;
  border-radius: 20px;
  padding: 10px;
  .img{
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: black;
    img{
      margin: 10px auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }
  }
  .name{
    text-align: center;
    padding: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  .nikename{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
