<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="ui search focus mt-30 lbel25">
          <label>الاسم</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="holder[name]"
              id="id_holdername"
              required=""
              maxlength="64"
              placeholder=""
              v-model="name"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="ui search focus mt-30 lbel25">
          <label>رقم البطاقة</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="card[number]"
              maxlength="16"
              placeholder=""
              v-model="cardNumber"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="lbel25 mt-30">
          <label>شهر الانتهاء</label>
          <select v-model="month"
            class="ui hj145 dropdown cntry152 prompt srch_explore"
            name="card[expire-month]"
          >
            <option value="">الشهر</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="ui search focus mt-30 lbel25">
          <label>سنة الانتهاء</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="card[expire-year]"
              maxlength="4"
              placeholder=""
              v-model="endYear"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="ui search focus mt-30 lbel25">
          <label>CVC</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="card[cvc]"
              maxlength="3"
              placeholder="CVC"
              v-model="CVC"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
        name:"",
        cardNumber:"",
        CVC:"",
        month:"",
        endYear:''
        };
    },
};
</script>

<style scoped>
.ui.search{
    font-size: 1em;
}
.mt-30 {
	margin-top: 30px;
}

.lbel25 label {
	font-size: 25px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px !important;
    color: #333;
    text-align: right;
	display: block;
    margin-right: 45px !important;

}

.ui.swdh11 {
    font-size: 14px !important;
    width: 100%;
}
.ui[class*="left icon"].swdh19.input>input {
    padding-left: 2em!important;
    padding-right: 2em!important;
    height: 40px !important;
	font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
	text-align: right;
    width: 100%;
}

.srch_explore {
    background: #fff !important;
    border: 1px solid #e5e5e5 !important;
    color: #333 !important;	
	box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.1) !important;
}
.lbel25 select {
    border-top-left-radius: 1.5rem !important;
    border-top-right-radius: 1.5rem !important;
    box-shadow: none !important;
    border: 1px solid #333 !important;
    margin-top: 20px !important;    min-width: 100% !important;
    padding: .78571429em 2.1em 0.785714em 2em !important;
	font-family: 'Roboto', sans-serif;
	color: #333;
	text-align: right;
    top: -25px;
}

.ui.swdh11 {
    font-size: 14px !important;
    width: 100%;
}

</style>
