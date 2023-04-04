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
                <i class="fas fa-file-video"></i> مقدمة الوحدة الأولي | منهج
                الفيزياء للثانوية العامة
              </h4>
            </div>
            <div class="col-xl-8 col-lg-8">
              <div class="section3125">
                <div class="live1452">
                  <iframe
                    src="https://www.youtube.com/embed/VdO43Yq1Mrw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="user_dt5">
                  <div class="user_dt_left">
                    <div class="live_user_dt">
                      <div class="user_cntnt">
                        <a href="#" class="_df7852">محمد عبد الجواد </a>
                        <button class="subscribe-btn">
                          <i class="fas fa-eye"></i> الملف الشخصي
                        </button>
                      </div>
                      <div class="user_img5">
                        <a href="#"
                          ><img src="../../../../public/images/profile/01.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="video-desc">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة
                على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن
                يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن أن يتم
                تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم،
                غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
              </p>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="crse_content crse_content_single">
                <div
                  id="accordion"
                  class="ui-accordion ui-widget ui-helper-reset"
                >
                  <a
                    href="javascript:void(0)"
                    class="accordion-header active-video ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                  >
                    <div class="section-header-left">
                      <span class="section-title-wrapper">
                        <i class="fas fa-file-video"></i>
                        <span class="section-title-text"
                          >مقدمة في الفيزياء</span
                        >
                      </span>
                    </div>
                    <div class="section-header-right">
                      <span class="section-header-length"
                        >مجاني <i class="fas fa-play"></i
                      ></span>
                    </div>
                  </a>
                </div>
                <div
                  id="accordion"
                  class="ui-accordion ui-widget ui-helper-reset"
                >
                  <a
                    href="javascript:void(0)"
                    class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                  >
                    <div class="section-header-left">
                      <span class="section-title-wrapper">
                        <i class="fas fa-file-video"></i>
                        <span class="section-title-text"
                          >الوحدة الاولي - الدرس الأول</span
                        >
                      </span>
                    </div>
                    <div class="section-header-right">
                      <span class="section-header-length">
                        مجاني<i class="fas fa-play"></i
                      ></span>
                    </div>
                  </a>
                </div>
                <div
                  id="accordion"
                  class="ui-accordion ui-widget ui-helper-reset"
                  v-for="lec in content" :key="lec.id"
                >
                  <a  
                    href="javascript:void(0)"
                    class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                  >
                    <div class="section-header-left">
                      <span class="section-title-wrapper">
                        <i class="fas fa-file-video"></i>
                        <span class="section-title-text"
                          >{{ lec.name }}</span
                        >
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import product from "../../../components/website/Favourite/product_favourite.vue";
export default {
  components: { Footer, AsideBar, Header, product },
  data() {
    return {
      content: [
        {
          id: 1,
          name: 'الوحده الاولي _ الدرس التاني ',
          quist_num: 15,
          period: 20
        },
        {
          id: 2,
          name: 'الوحده الاولي _ الدرس الثالث ',
          quist_num: 15,
          period: 20
        },
        {
          id: 3,
          name: 'الوحده الاولي _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
        {
          id: 4,
          name: 'الوحده الاولي _ الدرس الخامس ',
          quist_num: 15,
          period: 20
        },
        {
          id: 5,
          name: 'الوحده الثانيه - الدرس الاول',
          quist_num: 15,
          period: 20
        },
        {
          id:6,
          name: 'الوحده الثانيه _ الدرس التاني ',
          quist_num: 15,
          period: 20
        },
        {
          id: 7,
          name: 'الوحده التانيه _ الدرس الثالث ',
          quist_num: 15,
          period: 20
        },
        {
          id: 8,
          name: 'الوحده التانيه _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.video {
  background: black;
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
    color:white !important;
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
    -webkit-box-shadow: 20px 20px 166px 20px rgba(255,255,255,1);
-moz-box-shadow: 20px 20px 166px 20px rgba(255,255,255,1);
box-shadow: 20px 20px 166px 20px rgba(255,255,255,1);
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
    border-radius:15px ;
    background: white ;
    color: black;
    height: 33px;
    padding: 2px 25px;
}
.user_img5 {
    text-align: right;
}
a {
    color: #4e4cc9
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
    padding:20px 20px;
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
}
.ui-accordion:hover{
  background-color: #8f94fb !important;
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
    color:white !important;
    font-size: 20px;
}
.active-video .section-title-wrapper i{
    color: white !important ;
    font-size: 20px !important; 
margin: 10px;
}

.section-title-wrapper i{
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
    font-family: 'Roboto', sans-serif;
    font-size: 20px !important; 
}
.accordion-header .section-header-length i {
    color:black !important;

    display : inline;
}
</style>

