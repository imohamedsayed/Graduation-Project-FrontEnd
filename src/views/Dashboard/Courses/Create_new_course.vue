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
                انشاء دورة جديدة
              </h2>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>عنوان الدورة</label
                          >
                          <input type="text" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="course_des mt-30 box">
                          <label>
                            <i class="far fa-sticky-note"></i> وصف الدورة
                          </label>
                          <textarea
                            id=""
                            placeholder="اكتب وصف المحتوي..."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fas fa-list"></i> القسم الرئيسي
                          </label>
                          <select class="ui hj145 cntry152">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">الاول الثانوي</option>
                            <option value="1">الثاني الثانوي</option>
                            <option value="1">الثالث الثانوي</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="box">
                          <label>
                            <i class="fas fa-list"></i>المرحلة الدراسية
                          </label>
                          <select class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">فيزياء</option>
                            <option value="1">كيمياء</option>
                            <option value="1">عربي</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="view_info">
                    <div class="left">
                      <div class="view_img">
                        <img
                          src="../../../../public/images/courses/add_img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="right">
                      <h4>صورة الغلاف</h4>
                      <p>
                        قم بتحميل صورة الدورة التدريبية الخاصة بك هنا. يجب أن
                        تفي بمعايير جودة صورة الدورة التدريبية لدي نا حتى يتم
                        قبولها. إرشادات مهمة: 750 × 420 بكسل ؛ .jpg ، .jpeg ،.
                        gif أو png.
                      </p>
                      <div class="upload_input">
                        <input type="file" name="" id="" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="course_price">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="box">
                          <label><i class="fas fa-dollar-sign"></i>السعر</label>
                        </div>
                      </div>
                      <div class="col-lg-9 col-md-4 col-sm-6 col-xs-6 col-6">
                        <input type="number" name="" id="" />
                      </div>
                      <div
                        class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 price"
                      >
                        <span>EGP</span>
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
  name: "CreateCourse",
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
    > span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 10px;
      background: var(--darker-blue) ; 
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
    background: #1abcff !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;
  }
}
</style>
