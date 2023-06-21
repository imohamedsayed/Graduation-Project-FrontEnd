<template>
  <section class="contact" ref="contact" id="section5">
    <SectionTitle>تواصل معنا</SectionTitle>
    <div class="container">
      <div class="box-wrapper" dir="rtl">
        <div class="info-wrap">
          <h2 class="info-title">معلومات الاتصال</h2>
          <ul class="info-details">
            <li>
              <i class="fas fa-phone-alt"></i>
              <span>التليفون :</span>
              <a href="tel:+20 101 336 5784">{{ phone }}</a>
            </li>
            <li>
              <i class="fas fa-paper-plane"></i>
              <span>الايميل :</span>
              <a href="mailto:as6864886@gmail.com">{{ email }}</a>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <span class="map">
                الموقع : {{ location }}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.7371231226443!2d31.208026647012897!3d27.16456005617934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450b0577df445f%3A0xcdee7206311e70dc!2z2YbYstmE2Kkg2LnYqNiv2KfZhNmE2KfZhw!5e0!3m2!1sar!2seg!4v1666608245143!5m2!1sar!2seg"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe
              ></span>
            </li>
          </ul>
          <ul class="social-icons">
            <li>
              <a href=""><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="" style="color: white">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>

            <li>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
        <div class="form-wrap">
          <form action="#" method="POST">
            <h2 class="form-title">ارسل لنا رساله</h2>
            <div class="form-fields">
              <div class="form-group">
                <input
                  type="text"
                  class="fname"
                  placeholder="الاسم الاخير"
                  v-model="firstName"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="lname"
                  placeholder="الاسم الاول"
                  v-model="lastName"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="email"
                  placeholder="الايميل"
                  v-model="useremail"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="phone"
                  placeholder="التليفون"
                  v-model="userphone"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  id=""
                  placeholder="الرساله"
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <input type="submit" value="ارسل الرساله" class="submit-button" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { SectionTitle },
  data() {
    return {
      phone: "+20 101 336 5784",
      email: "as6864886@gmail.com",
      location: "مصر - اسيوط",
      firstName: "",
      lastName: "",
      userphone: "",
      useremail: "",
      message: "",
    };
  },
};
</script>

<style>
.contact {
  margin: 125px 0;
  position: relative;
}
.contact .box-wrapper {
  position: relative;
  display: table;
  width: 1100px;
  margin: auto;
  margin-top: 35px;
  border-radius: 30px;
}
.info-wrap {
  width: 37%;
  height: 590px;
  padding: 40px;
  float: left;
  display: block;
  border-radius: 30px 0px 0px 30px;
  background: linear-gradient(144deg,var(--darker-blue), var(--blue-color));
  color: #fff;
}
.contact .info-title {
  text-align: center;
  font-size: 28px;
  letter-spacing: 0.5px;
}
.contact .info-wrap .info-sub-title {
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
  background: var(--blue-color);
  padding: 12px;
  border-radius: 50%;
  margin-left: 5px;
}
.contact .info-wrap .info-details li a {
  color: #fff;
  text-decoration: none;
}
.contact .info-wrap .info-details li a:hover {
  color: #f44770;
}
.contact .info-wrap .social-icons {
  list-style: none;
  text-align: center;
  margin: 20px 0px;
}
.contact .info-wrap .social-icons li {
  display: inline-block;
}
.contact .info-wrap .info-details iframe {
  display: inline-block;
  margin: 5px auto 0px;
}
.contact .info-wrap .social-icons li i {
  background: var(--blue-color);
  color: #fff;
  padding: 15px;
  font-size: 20px;
  border-radius: 22%;
  margin: 0px 5px;
  cursor: pointer;
  transition: all 0.5s;
}
.contact .info-wrap .social-icons li i:hover {
  background: #fff;
  color: var(--blue-color) !important;
}
.contact .box-wrapper .info-wrap li span iframe {
  display: block;
  width: 250px;
  height: 120px;
}
.contact .box-wrapper .form-wrap {
  width: 63%;
  float: right;
  padding: 40px 25px 35px 25px;
  border-radius: 0px 30px 30px 0px;
  background: #ecf0f3;
  height: 590px;
}
.contact .box-wrapper .form-wrap .form-title {
  text-align: center;
  margin-left: 23px;
  font-size: 28px;
  letter-spacing: 0.5px;
  color: #333;
}
.contact .box-wrapper .form-wrap .form-fields {
  display: table;
  width: 100%;
  padding: 15px 5px 5px 5px;
}
.contact .box-wrapper .form-wrap .form-fields input,
.contact .box-wrapper .form-wrap .form-fields textarea {
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 20px 10px 20px 5px;
  width: 100%;
}
.contact .box-wrapper .form-wrap .form-fields textarea {
  height: 150px;
  resize: none;
}
.contact .box-wrapper .form-wrap .form-group {
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
.submit-button {
  width: 96%;
  height: 60px;
  margin: 20px 12px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  background: var(--landing-blue);
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: 0.5s;
}
.submit-button:hover {
  background: var(--blue-color);
}

@media (max-width: 420px) {
  .contact .box-wrapper {
    width: 600px;
  }
  .contact .info-wrap,
  .contact .box-wrapper .form-wrap {
    width: 80%;
  }
  .contact .box-wrapper .info-wrap {
    border-radius: 30px 30px 0px 0px;
    text-align: center;
  }
  .contact .box-wrapper .form-wrap {
    border-radius: 0px 0px 30px 30px;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group {
    width: 100%;
    float: none;
    margin: 25px 0px;
  }
  .form-fields .form-group:last-child,
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button {
    width: 100%;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button {
    margin: 10px 0px;
  }
}

/* Responsive css */

@media (max-width: 1200px) {
  .contact .box-wrapper {
    width: 100%;
  }
  .contact .info-wrap,
  .contact .box-wrapper .form-wrap {
    width: 100%;
    height: inherit;
    float: none;
  }
  .contact .box-wrapper .info-wrap {
    border-radius: 30px 30px 0px 0px;
    text-align: center;
  }
  .contact .box-wrapper .form-wrap {
    border-radius: 0px 0px 30px 30px;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group {
    width: 100%;
    float: none;
    margin: 25px 0px;
  }
  .form-fields .form-group:last-child,
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button {
    width: 100%;
  }
  .contact .box-wrapper .form-wrap .form-fields .form-group .submit-button {
    margin: 10px 0px;
  }
}
</style>
