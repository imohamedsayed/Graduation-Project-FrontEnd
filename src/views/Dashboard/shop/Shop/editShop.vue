<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="newCategory">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> تعديل المجر
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert"> تم التعديل فصل بنجاح . <span style="
                       {
                        font-size: 18px;
                        cursor: pointer;
                        display: inline-block;
                        transition: 0.5s a;
                      }
                    " @click="$router.push({ name: 'showshops' })"> عرض جميع المتاجر </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <form class="form" @submit.prevent="">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-9 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label> تعديل اسم المتجر</label>
                          <input type="text" v-model="state.name" name="" id="" />
                          <span class="text-danger fw-bold" v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" data-direction="finish" @click="editshop()" class="btn btn-default steps_btn"> حفظ
                    التعديل </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>
  
<script>
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
import Toast from "@/components/Toast.vue";

import axios from "axios";

import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "Create_section",
  components: { Footer,AsideBar,Header,Toast },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      save: false,
      name: "",
      status: false,
    });

    onMounted(async () => {
      if(state.user == null) {
        router.push("/dashboard/login");
      } else {
        if(state.user.role_id != 3) {
          router.push("/dashboard");
        } else {
          await axios
            .get('api_dashboard/shops/' + props.id)
            .then(res => {
              state.name=res.data.data.name
            })
            .catch(err => {
              notification("error",err.response.data.errors);
            })
        }
      }

    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };

    // Store and router

    const store = useStore();
    const router = useRouter();

    // validations

    const rules = computed(() => {
      return {
        name: { required },
      };
    });

    const v$ = useVuelidate(rules,state);

    // add new class room

    const editshop = async () => {
      v$.value.$validate();
      if(!v$.value.$error) {
        let data = {
          name: state.name,
          branche_id: state.user.exter_info.branch_id
        };
        // Start Sending Request

        let res = await axios.post('api_dashboard/shops/' + props.id,data)
          .then(res => {
          state.save = true;
          })
          .catch(err => {
              notification("error",err.response.data.message);

        })

    
      } else {
        notification("error","Missing Data !");
      }
    };

    return { state,v$,editshop,toast };
  },
};
</script>
  
<style lang="scss" scoped>
.newCategory {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.cover {
  padding: 30px 20px;
  width: 100%;

  .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  .bg {
    background: #fff;
    margin-top: 30px;
    padding: 0 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  label {
    font-weight: 500;
    font-size: 15px !important;
    margin-bottom: 10px !important;
    color: var(--text-black);
    text-align: right;
    display: block;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  input,
  textarea,
  select {
    padding: 15px 15px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: var(--border);
    width: 100%;
    margin-top: 10px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 150px;
  }

  .form_content {
    .box {
      margin-top: 30px;
      position: relative;
    }
  }

  .view_info {
    display: block;
    width: 100%;
    float: right;
    padding: 30px 30px 0;

    .left {
      float: left;
      width: 40%;

      .view_img {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      @media (max-width: 991px) {
        width: 100%;
      }
    }

    .right {
      float: right;
      width: 50%;
      margin-left: 30px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #686f7a;
        line-height: 26px;
        text-align: right;
        margin-bottom: 20px;
      }

      .upload_input {
        width: 100% !important;
        padding: 10px;
      }

      @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

  .course_price {
    float: right;
    width: 100%;
    margin-top: 50px;
    padding: 40px 30px 0;
    border-top: 1px solid #efefef;
  }

  .price {
    >span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 10px;
      background: var(--darker-blue);
      color: white;
      border-radius: 10px;
      font-size: 12pt;
      margin-top: 15px;
    }
  }

  .steps_btn {
    color: var(--white-color);
    margin: 25px 25px;
    float: right;
    padding: 10px 50px !important;
    margin-bottom: 0;
    margin-top: 50px;
    font-size: 12pt !important;
    height: auto !important;
    background: var(--light-blue) !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;

    &:hover {
      background: var(--light-blue) !important;
      color: var(--white-color);
    }
  }

  .upload_input {
    input {
      margin: 0 -50px !important;
    }
  }
}
</style>
  