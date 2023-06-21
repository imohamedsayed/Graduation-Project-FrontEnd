<template>
  <div class="courseexam">
    <div class="row" >
      <div class="col-12 title">
        <i class="fa fa-list"></i> {{ state.exams.length }} اختبار
      </div>
      <div class="col-12">
        <div class="ul">
          <li v-for="exam in state.exams" :key="exam.id">
            <div class="row">
              <div class="col-8">
                <div class="title">
                  <i class="fa-regular fa-newspaper"></i>
                  <span>
                    <router-link :to="{ name: 'test', params: { cid: cid, id: exam.id } }"> {{ exam.name }} </router-link>
                  </span>
                </div>
              </div>
              <div class="col-4">
                <div class="info">
                  <div class="row">
                    <div class="col-6">
                      <div class="quist_num">
                        <i class="fa fa-list"></i> {{ exam.count_questions }} سؤال
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="time">
                        <i class="fa fa-clock border"></i> {{ exam.period }} دقيقة
                      </div>
                    </div>
                  </div>
                </div>
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
import axios from "axios";

export default {
  props: {
    id: String,
    cid: String,
  },
  setup(props) {
    const state = reactive({
      loading: true,
      accepted: false,
      exams: [],
      std_id: computed(() => useStore().state.student.id),
    });
    const cours_id = props.id;
    onMounted(async () => {
      await axios
        .get("api/show-all-previous-exam/" + cours_id)
        .then((res) => {
          if(res.data.data) {
            console.log(res.data.data);
            // state.exams = res.data.data.allExam;
            // state.accepted = true;
          } else {
            // console.log(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
      state.exams.forEach((el) => {
        const start_at = new Date(el.start_at);
        const end_at = new Date(el.end_at);
        const period = end_at - start_at;
        const periodMinutes = period / (1000 * 60);
        el.period = periodMinutes;
      });
    });
    return { state };
  },
};
</script>

<style lang="scss">
.courseexam {
  padding: 20px 30px;

  .title {
    color: var(--darker-blue);
    font-size: 18px;

    i {
      margin-left: 10px;
    }
  }

  .ul {
    padding: 10px;

    li {
      list-style: none;
      background-color: var(--gray-blue);
      padding: 15px;
      margin: 15px;
      border-radius: 8px;
      box-shadow: 4px 2px 8px #00000052;
      transition: 0.5s;

      &:hover {
        scale: 1.1;
      }

      i {
        color: var(--darker-blue);
        margin-left: 10px;
      }

      .title a {
        color: var(--darker-blue);
        font-size: 19px;
      }
    }
  }
}
</style>
