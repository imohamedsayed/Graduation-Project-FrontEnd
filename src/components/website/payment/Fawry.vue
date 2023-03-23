<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="ui search focus mt-30 lbel25">
          <label >الاسم</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="account[holdername}"
              required=""
              maxlength="64"
              v-model="name"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="ui search focus mt-30 lbel25">
          <label>رقم الموبايل</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="Account[number]"
              maxlength="10"
              v-model="phone"
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
        phone:"",

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
</style>
