<template>
  <div class="certi_form">
    <div class="all_ques_lest">
      <div class="ques_item">
        <div class="ques_title">
          <span>السؤال 1 :-</span>
          ما الطريقة التي يتم توصيل بها المقاومات في المنزل ؟
        </div>
        <div class="ui form">
          <div class="grouped fields">
            <div class="field fltr-radio">
              <label class="radio-button">
                <input value="1" type="checkbox" />
                <span class="radio"></span> التوالي
              </label>
            </div>
            <div class="field">
              <label class="radio-button">
                <input
                  value="2"
                  type="checkbox"
                />
                <span class="radio"></span> التوازي
              </label>
            </div>
            <div class="field">
              <label class="radio-button">
                <input
                  value="3"
                  type="checkbox"
                />
                <span class="radio"></span> جميع ما سبق
              </label>
            </div>
            <div class="field fltr-radio">
              <label class="radio-button">
                <input
                  value="4"
                  type="checkbox"
                />
                <span class="radio"></span> لا توجد اجابه
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.certi_form {
  float: right;
  width: 100%;
  margin: 25px 100px 0px;
  text-align: right;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.ques_title {
  font-size: 25px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 24px;
}
.ques_title span {
  margin-right: 0;
  margin-left: 10px;
}

.ui.form {
  position: relative;
  max-width: 100%;
  font-size: 1rem;
}
.ui.form .grouped.fields {
  display: block;
  margin: 0 0 1em;
}
.ques_item {
  margin-bottom: 35px;
}

.ques_item:last-child {
  margin-bottom: 0;
}
.ques_title {
  font-size: 25px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 24px;
}

.ques_title span {
  /* font-weight: 600; */
  margin-right: 20px;
}

.ques_item label {
  font-size: 25px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  margin-left: 10px !important;
}
@media screen and (max-width: 767px) {
  .test_timer_bg,
  .certi_form {
    margin-bottom: 0;
  }
}
.radio-button {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px;
    position: relative;
    align-items: center;
    display: inline !important;
  }
  
  .radio-button input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  
  .radio {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 0 !important;
    border: 2px solid var(--darker-blue);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transform: translateZ(-25px);
    transition: all 0.3s ease-in-out;
  }
  
  .radio::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: 5px;
    left: 5px;
    border-radius: 0 !important;
    background-color: var(--darker-blue) !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  
  .radio-button input[type="checkbox"]:checked + .radio {
    border-color: var(--blue-color) !important;
    transform: translateZ(0px);
    background-color: #fff;
  }
  
  .radio-button input[type="checkbox"]:checked + .radio::before {
    opacity: 1;
  }
</style>
