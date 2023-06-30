<template>
  <div class="coursContent">
    <div class="row">
      <div class="col-3 title">
        <i class="fa fa-list"></i> {{ state.content.length }} درس
      </div>
      <div class="col-4 title"></div>
      <div class="col-12">
        <div class="ul">
          <li v-for="lec in state.content" :key="lec.id">
            <div class="row">
              <div class="col-9">
                <div class="title">
                  <i class="fa fa-video"></i>
                  <a>{{ lec.name }}</a>
                </div>
              </div>
              <div class="col-3">
                <div class="info">
                  <a
                    @click="
                      $router.push({
                        name: 'lesson',
                        params: { cid: id, id: lec.id },
                      })
                    "
                    style="cursor: pointer"
                    class="quist_num"
                  >
                    مشاهدة <i class="fa-regular fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- http://127.0.0.1:8000/Attachment/file.pdf -->
<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      loading: true,
      accepted: false,
      content: [],
      std_id: computed(() => useStore().state.student.id),
    });
    const cours_id = props.id;
    onMounted(async () => {
      await axios
        .get("api/lessons/" + cours_id)
        .then((res) => {
          if (res.data.data) {
            state.content = res.data.data;

          } else {
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });

     
    });
    return { state };
  },
};
</script>

<style lang="scss">
.coursContent {
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
        font-size: 19px;
        color: var(--darker-blue);
      }
      .quist_num {
        width: 100%;
        text-align: left;
        i {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
