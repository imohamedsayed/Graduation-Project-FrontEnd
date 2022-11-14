<template>
  <div class="landing-page">
    <div class="header">
      <div class="right">
        <div class="logo d-flex gap-2 align-items-center">
          <div class="nav-toggler" @click="toggleSide">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="img">
            <img
              src="../../public/images/logo/logo_01.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div class="nav d-lg-none d-none">
          <ul class="list-unstyled">
            <li class="active">الصفحة الرئيسية</li>
            <li>حول</li>
            <li>اّراء الاخرين</li>
            <li>اتصل بنا</li>
          </ul>
        </div>
      </div>
      <div class="action">
        <button class="btn btn ms-3 login">تسجيل الدخول</button>
        <button class="btn btn sign">انشاء حساب</button>
      </div>
    </div>
    <div class="sideBar closed" ref="side">
      <ul class="list-unstyled">
        <li class="active" @click="navTo($refs.intro)" data-index="section1">
          <i class="fa-solid fa-house"></i>
        </li>
        <li @click="navTo($refs.about)" data-index="section2">
          <i class="fa-solid fa-user-tie"></i>
        </li>
        <li @click="navTo($refs.services)" data-index="section3">
          <i class="fa-solid fa-briefcase"></i>
        </li>
        <li><i class="fa-solid fa-comments"></i></li>

        <li @click="navTo($refs.Testimonials)" data-index="section4">
          <i class="fa-solid fa-message-smile"></i>
        </li>
        <li @click="navTo($refs.contact)" data-index="section5">
          <i class="fa-solid fa-address-card"></i>
        </li>
      </ul>
    </div>
    <section class="intro" ref="intro" id="section1">
      <div class="overlay"></div>
      <div class="content container">
        <div class="txt">
          <h1 class="mt-4">أهلا بك في موقعنا</h1>
          <div class="paragraph">
            <p>
              تساهم الدراسة في بناء المهارات الشخصية والنفسية وصقلها لدى
              الأفراد، وهو ما يلازم الأشخاص طوال حياتهم غالباً، ومن ذلك
              المثابرة، وضبط النفس، والمرونة، والصبر، حيث يُمكن أن تساعد هذه
              المهارات في مجموعة متنوعة من تحديات الحياة ابتداءً من العمل إلى
              الحياة الأسرية.
            </p>
          </div>
          <div class="actions">
            <button class="read">قراءة المزيد</button>
            <button class="start">ابدأ الان</button>
          </div>
        </div>
        <div class="img-container d-lg-block d-none">
          <div class="img">
            <img
              src="../../public/images/landing/girl.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1668036219">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <section class="about" ref="about" id="section2">
      <div class="container">
        <div class="section-title text-center mt-5 mb-5">
          <h1>من نحن؟</h1>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6 col-12 paragraph position-relative">
            <p>
              أهلًا بكم بوابة نذاكر دوت اورج نتيجة الشهادة الإعدادية بالإسم 2022
              نتيجة امتحانات الصف الثالث الاعدادى من خلال نذاكر نت نتائج الطلاب
              بالرقم القومي والاهم نتيجة الشهادة الإعدادية محافظة الدقهلية الفصل
              الدراسي الأول مديرية التربية والتعليم الجيزة 2022 نتيجة الثانوية
              العامة 2022 ونتيجه الشهاده الاعداديه القاهرة الكبري بالإسم فقط
              Nezakr أو رابط
            </p>
            <img
              src="../../public/images/landing/p.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-md-6 col-12">
            <img
              src="../../public/images/landing/23.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="services" ref="services" id="section3">
      <div class="container">
        <div class="section-title text-center mt-5 mb-5">
          <h1>خدماتنا</h1>
        </div>
        <div class="row" dir="rtl">
          <Service
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>
    <div class="how-to-use" dir="rtl">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <h1>كيف تستخدم المنصة ؟</h1>
            <div class="instructions">
              <p>
                يوجد اسفل هنا مجموعه من الفيديوهات الي تساعد الطالب علي فهم كيف
                يستخدم المنصه .
              </p>
              <div class="row questions">
                <div class="col-6">
                  <a href="#">ازاي تسأل المدرس عن سؤال؟ </a>
                </div>
                <div class="col-6">
                  <a href="#">كيف تسجل علي المنصه؟ </a>
                </div>
                <div class="col-6">
                  <a href="#">ازاي تعرف درجات امتحانك ؟</a>
                </div>
                <div class="col-6">
                  <a href="#">ازاي تسجل في دورة علي المنصة ؟</a>
                </div>
                <div class="col-6">
                  <a href="#">ازاي تسلم واجباتك والمهام المطلوبة ؟</a>
                </div>
                <div class="col-6">
                  <a href="#">ازاي تتصفح كل دوراتك ؟</a>
                </div>
              </div>
              <div class="text-center mt-5">
                <span class="call-support"
                  >لازالت لديك مشكلة ؟ اتصل بالدعم الان</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 text-center">
            <img
              src="../../public/images/landing/Rectangle_69.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <section class="Testimonials" ref="Testimonials" id="section4">
      <div class="section-title text-center mt-5 mb-5">
          <h1>
            أراء الآخرين
            <i class="fa-regular fa-scroll-old"></i>
          </h1>
        </div>
      <Testimony></Testimony>
    </section>

    <section class="contact" ref="contact" id="section5">
      <div class="box-wrapper" dir="rtl">
        <div class="info-wrap">
          <h2 class="info-title">معلومات الاتصال</h2>
          <ul class="info-details">
              <li>
                  <i class="fas fa-phone-alt"></i>
                  <span>التليفون :</span> <a href="tel:+20 101 336 5784">{{phone}}</a>
              </li>
              <li>
                  <i class="fas fa-paper-plane"></i>
                  <span>الايميل :</span> <a href="mailto:as6864886@gmail.com">{{email}}</a>
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                  <span class="map"> الموقع : {{location}} <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.7371231226443!2d31.208026647012897!3d27.16456005617934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450b0577df445f%3A0xcdee7206311e70dc!2z2YbYstmE2Kkg2LnYqNiv2KfZhNmE2KfZhw!5e0!3m2!1sar!2seg!4v1666608245143!5m2!1sar!2seg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></span> 
              </li>
          </ul>
          <ul class="social-icons">
              <li><a href=""><i class="fab fa-facebook"></i></a></li>
              <li> <a href="" style="color: white;">
                <i class="fa-brands fa-github"></i>
                </a></li>
            
              <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
    </div>
    <div class="form-wrap">
        <form action="#" method="POST">
            <h2 class="form-title">ارسل لنا رساله</h2>
            <div class="form-fields">
                <div class="form-group">
                    <input type="text" class="fname" placeholder="الاسم الاخير" v-model="firstName">
                </div>
                <div class="form-group">
                    <input type="text" class="lname" placeholder="الاسم الاول" v-model="lastName">
                </div>
                <div class="form-group">
                    <input type="email" class="email" placeholder="الايميل" v-model="useremail">
                </div>
                <div class="form-group">
                    <input type="number" class="phone" placeholder="التليفون" v-model="userphone">
                </div>
                <div class="form-group">
                    <textarea name="message" id="" placeholder="الرساله" v-model="message"></textarea>
                </div>
            </div>
            <input type="submit" value="ارسل الرساله" class="submit-button">
        </form>
    </div>
      </div>
    </section>

       
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Service from "@/components/landing/Service.vue";
import Testimony from "../components/Testimony.vue"
import { onMounted } from "@vue/runtime-core";

export default {
  components: { Service, Footer ,Testimony },

import { onMounted } from "@vue/runtime-core";

export default {
  components: { Service, Footer },

  setup() {
    window.addEventListener("scroll", () => {
      if (scrollY >= 207) {
        document.querySelector(".sideBar").classList.add("colored");
      } else {
        document.querySelector(".sideBar").classList.remove("colored");
      }
      if (scrollY >= 746) {
        document.querySelector(".header").classList.add("colored");
      } else {
        document.querySelector(".header").classList.remove("colored");
      }

      sections.forEach((sec) => {
        let sectionOffsets = sec.getBoundingClientRect();

        if (sectionOffsets.top > -300 && sectionOffsets.top <= 150) {
          HandleActiveClasses(sec.id);
        }
      });
    });
    var sections, menuLinks;
    onMounted(() => {
      sections = document.querySelectorAll("section");
      menuLinks = document.querySelectorAll(".sideBar li");
    });

    function HandleActiveClasses(sectionId) {
      menuLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.dataset.index == sectionId) {
          a.classList.add("active");
        }
      });
    }
  },
  data() {
    return {
    phone:'+20 101 336 5784',
    email:'as6864886@gmail.com',
    location:'مصر - اسيوط',
    firstName:'',
    lastName:'',
    userphone:'',
    useremail:'',
    message:'',
      services: [
        {
          id: 0,
          name: "دعم فني",
          icon: "fa-solid fa-headset",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 1,
          name: "محاضرات  مباشرة",
          icon: "fa-solid fa-home",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 2,
          name: "محاضرات  مسجلة",
          icon: "fa-solid fa-globe",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 3,
          name: "محاضرين  متميزين",
          icon: "fa-solid fa-chalkboard-user",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
      ],
    };
  },
  methods: {
    toggleSide() {
      this.$refs.side.classList.toggle("closed");
    },
    navTo(ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.landing-page {
  background: #fff;
  .header {
    height: 80px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    padding-right: 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background: transparent;
    box-shadow: 0 1px 1px 1px rgba($color: #fff, $alpha: 0.2);
    backdrop-filter: blur(6px);
    transition: background 0.4s ease-out;
    &.colored {
      background: var(--landing-blue);
    }
    .right {
      display: flex;
      align-items: center;
      .logo {
        .img {
          width: 140px;
        }
        .nav-toggler {
          background: linear-gradient(to right, #6b5fbbd2, var(--landing-blue));
          color: #fff;
          width: 100px;
          height: 80px;
          font-size: 2rem;
          display: grid;
          place-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      .nav {
        ul {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          li {
            padding: 10px 20px;
            background: #fffefe70;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 10px;
            &:hover {
              background: #3227768d;
            }
            &.active {
              border-right: 4px solid var(--landing-blue);
              background: linear-gradient(to left, #3422aa87, #3227765b);
            }
          }
        }
      }
    }
    .action {
      .login {
        border: 1px solid #fff;
        color: #ffff;
        transition: all 0.3s ease;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
      .sign {
        background: var(--landing-blue);
        color: #fff;
        transition: all 0.3s ease;
        &:hover {
          background: #242043;
        }
      }
    }
  }
  .sideBar {
    position: fixed;
    z-index: 100;
    height: calc(100vh - 80px);
    width: 100px;
    top: 80px;
    box-shadow: -3px 3px 4px 1px rgba($color: #fff, $alpha: 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
    transition: background 0.4s ease-out;
    &.colored {
      background: var(--landing-blue);
    }
    ul {
      margin: 0;
      padding: 0 10px;
      width: 100%;
      li {
        width: 100%;
        margin: 40px 0;
        padding: 10px 20px;
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        background: #ffffff4b;
        color: #ececec;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        &.active {
          border-right: 4px solid var(--darker-blue);
          background: rgba(255, 255, 255, 0.62);
          color: var(--landing-blue);
        }
      }
    }
    transition: transform 0.7s ease-out;
    &.closed {
      transform: translateX(200px);
    }
  }
  .intro {
    height: calc(100vh);
    width: 100%;
    background: url("../../public/images/landing/1.png") top center;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
    .content {
      z-index: 2;
      display: flex;
      align-items: center;
      .txt {
        width: 520px;
        border-radius: 10px;
        padding: 20px;
        flex: 1;
        h1 {
          text-align: center;
          font-size: 2.8rem;
          color: #fff;
        }
        .paragraph {
          margin: 40px 0;
          p {
            font-size: 1.6rem;
            font-weight: 600;
            color: #fff;
          }
        }
        .actions {
          text-align: center;
          > button {
            margin: 0 10px;
            padding: 10px 20px;
            width: 150px;
            border-radius: 20px;
            border: none;
            outline: none;
            background: transparent;
            font-size: 1.2rem;
            &.read {
              border: 1px solid #fff;
              color: #ffff;
              transition: all 0.4s ease;
              &:hover {
                background: #fff;
                color: #000;
              }
            }
            &.start {
              background: linear-gradient(
                to left,
                var(--blue-color),
                var(--landing-blue)
              );
              color: #fff;
            }
          }
        }
      }
      .img-container {
        flex: 1;
        .img {
          width: 100%;
        }
        img {
          height: 100%;
        }
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0);
    }
    .custom-shape-divider-bottom-1668036219 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
      svg {
        position: relative;
        display: block;
        width: calc(135% + 1.3px);
        height: 154px;
        .shape-fill {
          fill: #ffffff;
        }
      }
    }
  }
  .section-title {
    position: relative;
    padding: 10px 0;
    &::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 4px;
      background: var(--darker-blue);
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &::after {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid var(--landing-blue);
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    h1 {
      font-size: 2.4rem;
    }
  }
  .about {
    margin-top: 125px;
    .paragraph {
      p {
        font-size: 1.3rem;
        line-height: 2;
        word-spacing: 4px;
      }
      img {
        position: absolute;
        top: -190px;
        opacity: 0.4;
        transform: rotate(190deg);
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .services {
    margin: 125px 0;
    position: relative;
  }
  .how-to-use {
    margin: 225px 0;
    h1 {
      color: var(--landing-blue);
      font-weight: bolder;
    }
    .instructions {
      margin: 20px 0;
      p {
        font-size: 1.4rem;
        color: var(--text-black);
      }
      .questions {
        margin-top: 20px;
        .col-6 {
          margin: 10px 0;
        }
        a {
          color: var(--blue-color);
          font-size: 1.1rem;
          font-weight: 600;
        }
      }
      .call-support {
        display: inline-block;
        background: linear-gradient(
          89.7deg,
          #6061d7 3.74%,
          rgba(146, 150, 240, 0.71) 99.74%
        );
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        color: #fff;
        font-size: 1.4rem;
        padding: 10px 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
 .contact {
    margin: 125px 0;
    position: relative;
  }
.contact .box-wrapper{
  position: relative;
  display: table;
  width:1100px;
  margin:auto;
  margin-top:35px;
  border-radius: 30px;
}
.info-wrap{
  width:37%;
  height: 590px;
  padding: 40px;
  float: left;
  display: block;
  border-radius: 30px 0px 0px 30px;
  background: linear-gradient(144deg, #6061D7 0%, #3a3276d8 49%);
  color: #fff;
}
.contact .info-title{
  text-align: center;
  font-size: 28px;
  letter-spacing: 0.5px;
}
.contact .info-wrap .info-sub-title{
  font-size: 18px;
  font-weight: 300;
  margin-top: 17px;
  letter-spacing: 0.5px;
  line-height: 26px;
}
.contact .info-wrap .info-details {
  list-style: none;
  margin: 60px 0px;
}
.contact .info-wrap .info-details li {
  margin-top: 25px;
  font-size: 15px;
  display: block;
  color: #fff;
}
.contact .info-wrap .info-details li i {
  background: #6061D7;
  padding: 12px;
  border-radius: 50%;
  margin-left: 5px;
}
.contact .info-wrap .info-details li a {
  color: #fff;
  text-decoration: none;
}
.contact .info-wrap .info-details li a:hover {
  color: #F44770;
}
.contact .info-wrap .social-icons {
  list-style: none;
  text-align: center;
  margin: 20px 0px;
}
.contact .info-wrap .social-icons li {
  display: inline-block;
}
.contact .info-wrap .info-details iframe{
  display:inline-block;
  margin: 5px auto 0px;
}
.contact .info-wrap .social-icons li i {
  background: #6061D7;
  color: #fff;
  padding: 15px;
  font-size: 20px;
  border-radius: 22%;
  margin: 0px 5px;
  cursor: pointer;
  transition: all .5s;
}
.contact .info-wrap .social-icons li i:hover {
  background: #fff;
  color: #3a3276d8;
}

.contact .box-wrapper .info-wrap li span iframe{
  display: block;
  width:250px;
   height:120px;
}
.contact .box-wrapper .form-wrap{
  width:63%;
  float: right;
  padding:40px 25px 35px 25px;
  border-radius: 0px 30px 30px 0px;
  background: #ecf0f3;
  height: 590px;
}

.contact .box-wrapper .form-wrap .form-title{
  text-align:center;
  margin-left: 23px;
  font-size: 28px;
  letter-spacing: 0.5px;
  color: #333;
}
.contact .box-wrapper .form-wrap .form-fields{
  display: table;
  width: 100%;
  padding: 15px 5px 5px 5px;
}
.contact .box-wrapper .form-wrap .form-fields input, 
.contact .box-wrapper .form-wrap .form-fields textarea{
  border: none;
  outline:none;
  background: none;
  font-size: 18px;
  color:#555;
  padding: 20px 10px 20px 5px;
  width:100%
}
.contact .box-wrapper .form-wrap .form-fields textarea{
  height: 150px;
  resize: none;
}
.contact .box-wrapper .form-wrap .form-group{
  width: 46%;
  float: left;
  padding: 0px 30px;
  margin: 14px 12px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}
.contact .box-wrapper .form-wrap .form-fields .form-group:last-child {
  width: 96%;
}
 .submit-button{
  width: 96%;
  height: 60px;
  margin: 20px 12px;
  border-radius: 30px;
  font-size: 20px;;
  font-weight: 700;
  outline: none;
  border:none;
  cursor: pointer;
  color:#fff;
  text-align: center;
  background: var(--landing-blue) ;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: .5s;
}
 .submit-button:hover{
  background:#9296f0;
}

@media  (max-width: 420px) {
  .contact .box-wrapper{
      width: 600px;
  }
  .contact .info-wrap,
  .contact .box-wrapper .form-wrap{
      width: 80%;
  }
  .contact .box-wrapper .info-wrap{
      border-radius: 30px 30px 0px 0px;
      text-align: center;
  }
  .contact .box-wrapper .form-wrap{
      border-radius: 0px 0px 30px 30px;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group{
      width:100%;
      float: none;
      margin: 25px 0px;
  }
  .form-fields .form-group:last-child, 
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button{
      width: 100%;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button{
      margin: 10px 0px;
  }
}

/* Responsive css */

@media  (max-width: 1200px) {
  .contact .box-wrapper{
      width: 100%;
  }
  .contact .info-wrap,
  .contact .box-wrapper .form-wrap{
      width: 100%;
      height: inherit;
      float: none;  
  }
  .contact .box-wrapper .info-wrap{
      border-radius: 30px 30px 0px 0px;
      text-align: center;
  }
  .contact .box-wrapper .form-wrap{
      border-radius: 0px 0px 30px 30px;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group{
      width:100%;
      float: none;
      margin: 25px 0px;
  }
  .form-fields .form-group:last-child, 
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button{
      width: 100%;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button{
      margin: 10px 0px;
  }
}

</style>
