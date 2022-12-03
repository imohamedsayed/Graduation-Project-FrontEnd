<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-course">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i>
                انشاء فصل جديد
              </h2>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>اسم الدورة </label
                          >
                          <select class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1" selected>فيزياء</option>
                            <option value="1">كيمياء</option>
                            <option value="1">عربي</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-chalkboard-user"></i> اسم المدرس</label
                          >
                          <select class="">
                            <option value="1" selected>اسم المدرس</option>
                            <option value="2">اسم المدرس</option>
                            <option value="3">اسم المدرس</option>
                            <option value="4">اسم المدرس</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-dollar-sign"></i> السعر</label
                          >
                          <input type="number" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> السعة القصوى </label
                          >
                          <input type="number" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-clipboard-question"></i>  امتحان مسبق</label
                          >
                          <input type="text" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ البدء </label
                          >
                          <input type="datetime-local" name="" id="">
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ الانتهاء</label
                          >
                          <input type="datetime-local" name="" id="">
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <button
                    data-direction="finish"
                    class="btn btn-default steps_btn"
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
export default {
  name: "Create_section",
  components: { Footer, AsideBar, Header },
};
</script>

<style lang="scss">
.new-course {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}

</style>
