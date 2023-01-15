<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="plat-setting">
      <div class="container">
        <h3 class="header" dir="rtl">
          <i class="fa-solid fa-gear ms-2" style="color: var(--blue-color)"></i>
          اعدادات المنصة
        </h3>
        <div class="settings" dir="rtl">
          <div class="input-field">
            <label>
              <i class="fa-solid fa-picture"></i>
              تغيير اللوجو
            </label>
            <label for="logo-uppload" class="img-upload">
              <i class="fa-solid fa-cloud-arrow-up ms-2"></i>
              اضغط لاختيار لوجو جديد
            </label>
            <input
              type="file"
              id="logo-uppload"
              hidden
              @change="logo = value"
            />
          </div>
          <div class="input-field">
            <label>
              <i class="fa-solid fa-picture"></i>
              تغيير الوان المنصة
            </label>
            <input type="color" v-model="color" />
          </div>
          <div class="input-field">
            <label>
              <i class="fa-solid fa-picture"></i>
              اسم المنصة
            </label>
            <input type="text" v-model="name" />
          </div>
          <h5>
            <i class="fa-solid fa-square-share-nodes ms-2"></i>روابط التواصل
            الاجتماعي
          </h5>

          <div class="row">
            <div class="col-md-6 col-12">
              <label
                ><i class="fa-brands fa-facebook"></i> اضافة رابط
                الفيسبوك</label
              >
              <input type="text" v-model="face" />
            </div>
            <div class="col-md-6 col-12">
              <label
                ><i class="fa-brands fa-linkedin"></i> اضافة رابط لينكدان</label
              >
              <input type="text" v-model="linked" />
            </div>
            <div class="col-md-6 col-12">
              <label
                ><i class="fa-brands fa-whatsapp"></i> اضافة رابط واتساب</label
              >
              <input type="text" v-model="whats" />
            </div>
            <div class="col-md-6 col-12">
              <label
                ><i class="fa-brands fa-square-twitter"></i> اضافة رابط
                تويتر</label
              >
              <input type="text" v-model="twitter" />
            </div>
          </div>
          <div class="text-center">
            <button type="submit">حفظ التعديلات</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
export default {
  components: { Footer, AsideBar, Header },
  data() {
    return {
      color: "#312776d2",
      logo: "",
      whats: "",
      face: "",
      twitter: "",
      linked: "",
      name: "",
    };
  },
};
</script>

<style lang="scss">
.plat-setting {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  padding-top: 10px;
  .header {
    color: var(--text-black);
    font-size: 1.4rem;
    margin-block: 30px;
  }
  .settings {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;
    .input-field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
      label {
        display: block;
        font-size: 1.3rem;
        color: var(--text-black);
        &.img-upload {
          font-weight: 500;
          background: #bfbfbf38;
          padding: 25px 20px;
          border-radius: 40px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      input[type="color"] {
        border: none;
        width: 80px;
        height: 40px;
        margin-left: 10px;
      }
      input[type="text"] {
        flex: 0 0 50%;
        max-width: 50%;
        height: 45px;
        border-radius: 10px;
        padding: 10px 20px;
        border: 1px solid #999;
        transition: all 0.3s ease;
        &:focus {
          outline: none;
          transform: scale(1.05);
        }
      }
    }
    h5 {
      margin-top: 60px;
      font-weight: 500;
      color: var(--blue-color);
    }
    .row {
      margin-top: 30px;
      label {
        font-size: 1.2rem;
        i {
          font-size: 1.4rem;
          &.fa-facebook {
            color: #1877f2;
          }
          &.fa-linkedin {
            color: #0077b5;
          }
          &.fa-whatsapp {
            color: #075e54;
          }
          &.fa-square-twitter {
            color: #1da1f2;
          }
        }
      }
      input {
        width: 100%;
        margin-top: 10px;
        height: 45px;
        border-radius: 10px;
        padding: 10px 20px;
        border: 1px solid #999;
        transition: all 0.3s ease;
        &:focus {
          outline: none;
          transform: scale(1.05);
        }
      }
      > div {
        margin-bottom: 40px;
      }
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      background: var(--blue-color);
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
