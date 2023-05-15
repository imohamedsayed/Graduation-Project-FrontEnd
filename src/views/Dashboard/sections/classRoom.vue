<template>
    <Header />
    <div class="main-view">
      <div class="class-room">
        <div class="container">
          <div class="cover">
            <div class="container">
              <div class="bg">
                <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="mt-30">
                    <label class="name">اللغه العربيه</label>
                    <label class="date">2021 / 2022</label>
                    <label class="number-st"><span> عدد الطلاب :</span>30</label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mt-30">
                    <label class="teacher-class"><span> الاستاذ :  </span> وحش الكيمياء</label>
                    <label class="teacher-class"><span> تاريخ البدء :  </span> 11 / 20 / 2032</label>
                    <label class="teacher-class"><span> تاريخ الانتهاء :  </span> 11/20/2023</label>
                    <label class="teacher-class"><span> السعر :  </span> 500$</label>
                    <label class="number-st"><span> السعه :</span>30</label>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="sections">
            <div class="container">
              <div class="bgs">
                <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
      <img src="../../../../public/images/categories/img_read.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">الامتحانات</h5>
        <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            عرض الامتحانات 
          </a>
          <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            اضافه امتحان
          </a>
      </div>
    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30 mb-30">
                    <div class="card h-100">
      <img src="../../../../public/images/categories/img_read.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">المواعيد</h5>
        <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            عرض المواعيد
          </a>
          <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            اضافه تسجيل حضور
          </a>
      </div>
    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
      <img src="../../../../public/images/categories/img_read.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">الطلاب</h5>
        <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            عرض الطلاب
          </a>
          <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            اضافه طالب
          </a>
      </div>
    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
      <img src="../../../../public/images/categories/img_read.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">حضور و غياب </h5>
        <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {},
              })
            "
          >
            عرض الحضور والغياب
          </a>
      </div>
    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mt-30">

                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Footer from "../../../components/Footer.vue";
  import Header from "../../../components/Header.vue";
  import AsideBar from "../../../components/AsideBar.vue";
  import Section from "../../../components/sections/Section.vue";
  import axios from "axios";
  
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { reactive, computed, onMounted } from "vue";
  
  export default {
    components: { Footer, AsideBar, Section, Header },
    setup() {
      const store = useStore();
      const router = useRouter();
      const state = reactive({
        sections: [],
        items: [],
        search: "",
        user: computed(() => store.state.user),
      });
  
      onMounted(async () => {
        if (state.user == null) {
          router.push("/dashboard/login");
        } else {
          let res = await axios
            .get(
              "api_dashboard/classrooms_get_by_branch_id/" +
                state.user.exter_info.branch_id
            )
            .then((res) => {
              state.sections = res.data.data;
              console.log(state.sections);
            })
            .catch((err) => console.log(err));
  
          state.items = state.sections;
        }
      });
  
      const searchCourse = (key) => {
        state.sections = state.items.filter((item) => item.name.includes(key));
      };
  
      return { state, searchCourse };
    },
  };
  </script>
  
  <style lang="scss">
  .class-room {
    margin:20px auto;
  
    @media (max-width: 991px) {
      margin-right: 0;
    }
  }
  .cover .bg{
    background-image: url("../../../../public/images/categories/img_read.jpg") !important;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .class-room .cover .bg .name,
  .class-room .cover .bg .date,
  .class-room .cover .bg .teacher-class,
  .class-room .cover .bg .number-st{
    color: white !important; 
  }
  .class-room .cover .bg .name{
    font-size: 3rem !important;
    line-height: 20px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin-top: 10px !important;
  }
  .class-room .cover .bg .date{
    font-size: 1.3rem !important;
    line-height: 20px !important;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin-top: 30px !important;
  }
 
  .class-room .cover .bg .teacher-class span{
  margin-left:20px ;
  }
  .class-room .cover .bg .number-st span{
    margin-left:20px ;
  }
  .sections{
  padding: 20px;
  }
  .card-title{
    font-size: 1.5rem !important;
    line-height: 20px !important;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin-top: 10px !important;
    margin-bottom: 20px !important;
  }
  .btn {
    padding: 5px 10px !important;
    color: white !important;
    background: var(--blue-color) !important;
    margin-right: 5px;

    &:hover {
      background: var(--darker-blue) !important;
      color: #fff !important;
    }
  }
.card{
  margin-top: 30px;
}
  </style>
  