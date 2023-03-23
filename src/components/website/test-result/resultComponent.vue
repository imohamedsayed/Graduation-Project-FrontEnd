<template>
  <div class="result-Component">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="certi_form rght1528">
            <div class="test_result_bg">
              <ul class="test_result_left">
                <li>
                  <div class="result_dt">
                    <i class="fa-solid fa-check"></i>
                    <p>
                      <span>({{ correctAnswer }})</span> صحيحة
                    </p>
                  </div>
                </li>
                <li>
                  <div class="result_dt">
                    <i class="uil uil-times wrong_ans"></i>
                    <p>
                      <span>({{ wrongAnswer }})</span> خاطئة
                    </p>
                  </div>
                </li>
                <li>
                  <div class="result_dt">
                    <h4>{{ score }}</h4>
                    <p>درجتك</p>
                  </div>
                </li>
              </ul>
              <div v-if="score >= degreePassing" class="result_content">
                <h2>
                  <span class="Cong">تهانينا </span> , لقد اجتزت الاختبار !
                </h2>
                <p>
                  حصلت علي درجة <b>{{ score }}</b> من <b>{{ total }}</b>
                </p>
              </div>
              <div v-else class="result_content">
                <h2><span class="sorry">للاسف </span> , لم تجتاز الاختبار !</h2>
                <p>
                  حصلت علي درجة <b>{{ score }}</b> من <b>{{ total }}</b>
                </p>
              </div>
              <div class="result_content1">
                <a
                  href="http://gambolthemes.net/html-imgs/certificate.jpg"
                  class="download_btn"
                  download="w3logo"
                  target="_blank"
                  >عرض نموذج الأجابة <i class="fas fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultComponent",
  data() {
    return {
      correctAnswer: 15,
      wrongAnswer: 15,
      score: 2,
      degreePassing: 15,
      total: 30,
    };
  },
};
</script>

<style lang="scss">
.rght1528 {
  position: sticky;
  top: 90px;
}
@media screen and (max-width: 991px) {
  .rght1528 {
    margin-top: 25px;
    margin-bottom: 25px !important;
  }
}
.certi_form {
  float: right;
  width: 100%;
  margin: 50px 0 65px;
  text-align: right;
}

@media screen and (max-width: 767px) {
  .certi_form {
    margin-bottom: 0;
  }
}
.test_result_bg {
  width: 100%;
  float: right;
}
.test_result_left {
  width: 100%;
  float: right;
  display: flex;
  direction: rtl;
}

.test_result_left li {
  width: 33.333%;
  display: inline-block;
  padding: 0;
  margin: 7px;
}

.result_dt {
  float: right;
  width: 100%;
  text-align: center;
}
.result_dt .fa-check {
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
  text-align: center;
  line-height: 26px;
  height: 100px;
  width: 100px;
  display: inline-block;
  border: 2px solid #01b200;
  border-radius: 100%;
  padding: 26px 0;
  background: #01b200;
}

.result_dt p {
  font-size: 22px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-top: 0;
  line-height: 26px;
  text-align: center !important;
}

.result_dt span {
  color: #686f7a;
  margin-left: 5px;
  font-weight: 400;
}
.result_dt .wrong_ans {
  font-size: 46px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #fff;
  margin-bottom: 15px;
  text-align: center;
  line-height: 26px;
  height: 100px;
  width: 100px;
  display: inline-block;
  border: 2px solid #fb3838;
  border-radius: 100%;
  padding: 26px 0;
  background: #fb3838;
}
.result_dt h4 {
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #fff;
  margin-bottom: 15px;
  text-align: center;
  line-height: 26px;
  height: 100px;
  width: 100px;
  display: inline-block;
  border: 2px solid #57a4ff;
  border-radius: 100%;
  padding: 35px 0;
  background: #57a4ff;
}
h4:first-child {
  margin-top: auto;
}

.result_content {
  margin-top: 57px;
  width: 100%;
  text-align: right;
}
.result_content1 {
  width: 100%;
  text-align: right;
}

.result_content .Cong {
  color: green;
}
.result_content .sorry {
  color: red;
}
.result_content h2 {
  font-size: 42px;
  font-weight: 600;
  color: #333;
  font-family: "Roboto", sans-serif;
  text-align: right;
  padding-bottom: 15px;
  margin-top: 0;
}

.result_content p {
  font-size: 25px;
  font-weight: 400;
  color: #686f7a;
  font-family: "Roboto", sans-serif;
  text-align: right;
  margin-top: 0;
}
.download_btn {
  font-weight: 500;
  color: #fff;
  background-color: var(--darker-blue) !important;
  font-size: 18px;
  border-radius: 20px;
  border: 0;
  padding: 15px 25px;
  display: inline-block;
  margin-top: 25px;
}
.download_btn:hover {
  background: var(--blue-color) !important;
  color: #fff !important;
}
</style>
