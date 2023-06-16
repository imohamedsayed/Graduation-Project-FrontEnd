<template>
  <div class="courseexam">
    <div class="row">
      <div class="col-12 title">
        <i class="fa fa-list"></i> اعلامات الدورة
      </div>
      <div class="col-12">
        <div class="ul">
          <li v-for="notify in state.notification" :key="notify.id">
            <div class="row">
              <div class="col-12">
                <div> <i class=" fa fa-bell"></i> {{ notify.description }} </div>
              </div>
              <div class="col-4 align-left " >
                <div>{{ notify.name }} </div>
              </div>
            </div>
          </li>
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
      accepted: false,
      notification: [],
      std_id: computed(() => useStore().state.student.id),
    });
    const cours_id = props.id;
    onMounted(async () => {
      await axios
        .get("api/notes/" + cours_id)
        .then((res) => {
          if(res.data.data) {
            state.notification = res.data.data
            // console.log(res.data.data);
          }
          else {
          }
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

</style>