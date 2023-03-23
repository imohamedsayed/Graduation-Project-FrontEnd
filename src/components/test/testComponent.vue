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
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="example1"
                  tabindex="0"
                  class="hidden"
                  id="a1"
                />
                <label for="a1">توازي</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="example1"
                  tabindex="0"
                  class="hidden"
                  id="a2"
                />
                <label for="a2">توالي</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="example1"
                  tabindex="0"
                  class="hidden"
                  id="a3"
                />
                <label for="a3">جميع ما سبق</label>
              </div>
            </div>
            <div class="field fltr-radio">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="example1"
                  tabindex="0"
                  class="hidden"
                  id="a4"
                />
                <label for="a4">لا يوجد اجابة صحيحة</label>
              </div>
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
}

.ques_title {
	font-size: 25px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
	color: #686f7a;
}
.form input {
    margin-left: 10px;
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.5rem;
  border-radius: 50%;
  border: 3px solid #FFF;
}


.test_submit_btn svg {
    margin-left: 5px;
    position: relative;
    top: 1px;
}
@media screen and (max-width: 767px) {
    .test_timer_bg, .certi_form {
        margin-bottom: 0;
    }
}

</style>
