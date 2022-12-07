<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="edit-appointment">
      <div class="container">
        <h3 class="header" dir="rtl">
          <i
            class="fa-solid fa-pen-to-square ms-2"
            style="color: var(--blue-color)"
          ></i>
          تعديل الموعد رقم : {{ id }}
        </h3>
        <div class="app-data" dir="rtl">
          <form>
            <div class="row">
              <div class="col-md-6 col-12">
                <label>اختر الدرس</label>
                <select name="class" v-model="lesson">
                  <option value="ar">عربي</option>
                  <option value="en">انجليزي</option>
                </select>
              </div>
              <div class="col-md-6 col-12">
                <label> اضافة موعد</label>
                <input type="date" v-model="date" />
              </div>
              <div class="col-md-6 col-12">
                <label> اضافة المكان</label>
                <input type="text" v-model="location" />
              </div>
            </div>
            <div class="text-center">
              <button type="submit">حفظ التعديلات</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
export default {
  components: { Footer, AsideBar, Header },
  props: ["id"],
  data() {
    return {
      location: "",
      lesson: "",
      date: "",
    };
  },
};
</script>

<style lang="scss">
.edit-appointment {
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
  .app-data {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;
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
    .row {
      margin-top: 30px;
      label {
        font-size: 1.2rem;
      }
      input,
      select {
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
