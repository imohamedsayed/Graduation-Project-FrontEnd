<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="video">
      <div class="video-con">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h4 class="live-title video-title">
                <i class="fas fa-file-video"></i> {{ state.lesson.name }} |
                {{ state.lesson.classroom_name }}
              </h4>
            </div>
            <div class="col-xl-8 col-lg-8">
              <div class="section3125">
                <div class="live1452">
                  <!-- <iframe
                    src="https://www.youtube.com/embed/VdO43Yq1Mrw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> -->
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="crse_content crse_content_single">
                <div
                  id="accordion"
                  :class="
                    state.lesson.id == lec.id
                      ? 'active-video ui-accordion  ui-widget ui-helper-reset'
                      : 'ui-accordion  ui-widget ui-helper-reset'
                  "
                  v-for="lec in state.allLessons"
                  :key="lec.id"
                >
                  <a
                    @click="watchAnother(lec.id)"
                    class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                  >
                    <div class="section-header-left">
                      <span class="section-title-wrapper">
                        <i class="fas fa-file-video"></i>
                        <span class="section-title-text">{{ lec.name }}</span>
                      </span>
                    </div>
                    <div class="section-header-right">
                      <span class="section-header-length">
                        <i class="fas fa-play"></i
                      ></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import product from "../../../components/website/Favourite/product_favourite.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";
export default {
  components: { Footer, AsideBar, Header, product },
  props: {
    cid: String,
    id: String,
  },
  setup(props) {
    const store = useStore(),
      router = useRouter();

    const state = reactive({
      student: computed(() => store.state.student),
      lesson: "",
      allLessons: [],
    });
    onMounted(async () => {
      if (!state.student) {
        router.push("/login");
      }
      let lessonRes = await axios.get(`/api/lessons/${props.cid}/${props.id}`);

      if (lessonRes.status == 200) {
        state.lesson = lessonRes.data.data;
        document.querySelector(".live1452").innerHTML =
          state.lesson.link_Youtube;
      }
      const allLessonsRes = await axios.get("api/lessons/" + props.cid);
      if (allLessonsRes.status == 200) {
        state.allLessons = allLessonsRes.data.data;
      }
    });

    const watchAnother = (id) => {
      router.push({
        name: "lesson",
        params: { cid: props.cid, id: id },
      });
      setTimeout(() => {
        location.reload();
      }, 200);
    };

    return { state, watchAnother };
  },
};
</script>

<style lang="scss">
.video {
  background: #111;

  margin-right: 15rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.video-con {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  margin-right: 20px;
}
.video-title {
  color: white !important;
  margin-bottom: 50px !important;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
}
.video-title i {
  animation: none;
  font-size: 25px;
  color: white;
  margin-left: 20px;
}
.section3125 {
  direction: rtl;
  width: 100%;
}
.live1452 {
  margin-bottom: 25px;
  float: left;
  width: 100%;
  height: 600px;
}
.live1452 iframe {
  width: 100%;
  height: 100% !important;
  height: 435px;
  border-radius: 10px;
  -webkit-box-shadow: 20px 20px 166px 20px rgba(255, 255, 255, 1);
  -moz-box-shadow: 20px 20px 166px 20px rgba(255, 255, 255, 1);
  box-shadow: 20px 20px 166px 20px rgba(255, 255, 255, 1);
}
.user_dt5 {
  float: right;
  width: 100%;
  margin-bottom: 25px;
}
.user_dt_left {
  float: right;
  height: 100px;
}
.live_user_dt {
  float: left;
  width: 100%;
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: row-reverse;
}
._df7852 {
  color: white !important;
  font-size: 25px !important;
  display: block;
  padding-right: 4px;
  padding-top: 10px;
  margin-bottom: 10px !important;
}
.subscribe-btn {
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px;
  background: white;
  color: black;
  height: 33px;
  padding: 2px 25px;
}
.user_img5 {
  text-align: right;
}
a {
  color: #4e4cc9;
}
.user_img5 img {
  border-radius: 50%;
  border: 1px solid white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 90px !important;
  height: 90px !important;
  margin-left: 10px;
}
.video-desc {
  width: 100%;
  float: right;
  padding: 20px 20px;
  font-size: 20px;
  line-height: 2.3;
  border-radius: 8px;
  color: white;
  padding-top: 0;
  font-weight: 500;
}
.crse_content_single {
  direction: ltr;
  margin-top: 0;
}
.ui-accordion {
  margin-top: 4px;
  float: left;
  width: 100%;
  background: white !important;
  border: 2px solid black;
  border-radius: 10px;
  transition: all 0.6s ease;
}
.ui-accordion:hover {
  background-color: #1991cd !important;
  color: #fff !important;
}
.active-video {
  background: #8f94fb !important;
}
.accordion-header {
  border-radius: 8px !important;
  padding: 20px 30px 20px 20px !important;
}
.accordion-header {
  float: right;
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 1px #efefef;
  cursor: pointer;
  height: auto;
  margin-top: 3px;
  color: black;
  background: #fff;
  flex-direction: row-reverse;
}
.accordion-header .section-header-left {
  flex-basis: 92%;
}
.accordion-header .section-header-left {
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  direction: rtl;
}
.active-video .section-title-text {
  color: white !important;
  font-size: 20px;
}
.active-video .section-title-wrapper i {
  color: white !important ;
  font-size: 20px !important;
  margin: 10px;
}

.section-title-wrapper i {
  color: black !important ;
  font-size: 20px !important;
  margin: 10px;
}
.accordion-header .section-header-right {
  display: flex;
  justify-content: flex-end;
  color: black !important;
  flex-basis: 40% !important;
  direction: rtl !important;
}
.active-video .section-header-length {
  color: white !important;
}
.accordion-header .section-header-length {
  width: 100%;
}
.accordion-header .section-header-length {
  text-align: left;
  width: 42%;
  color: black !important;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
}
.accordion-header .section-header-length i {
  color: black !important;

  display: inline;
}
</style>
