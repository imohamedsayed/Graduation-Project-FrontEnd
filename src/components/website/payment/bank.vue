<template>
  <form class="credit_payment" @submit.prevent="confirmOrder()">
    <div class="row">
      <div class="col-md-6">
        <div class="ui search focus mt-30 lbel25">
          <label>الاسم علي البطاقة</label>
          <div class="ui left icon input swdh11 swdh19">
            <input
              class="prompt srch_explore"
              type="text"
              name="holder[name]"
              id="id_holdername"
              maxlength="64"
              placeholder=""
              v-model="state.name"
            />
            <span class="text-danger fw-bold" v-if="v$.name.$error">
              {{ v$.name.$errors[0].$message }}
            </span>
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
              v-model="state.cardNumber"
            />
            <span class="text-danger fw-bold" v-if="v$.cardNumber.$error">
              {{ v$.cardNumber.$errors[0].$message }}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="lbel25 mt-30">
          <label>شهر الانتهاء</label>
          <select
            v-model="state.month"
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
          <span class="text-danger fw-bold" v-if="v$.month.$error">
            {{ v$.month.$errors[0].$message }}
          </span>
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
              v-model="state.endYear"
            />
            <span class="text-danger fw-bold" v-if="v$.endYear.$error">
              {{ v$.endYear.$errors[0].$message }}
            </span>
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
              v-model="state.cvc"
            />
            <span class="text-danger fw-bold" v-if="v$.cvc.$error">
              {{ v$.cvc.$errors[0].$message }}
            </span>
          </div>
        </div>
      </div>
      <button class="chckot_btn mt-2" type="submit" v-if="!state.done">
        تأكيد الدفع
      </button>
      <button class="btn btn-success p-3 mt-2" type="submit" disabled v-else>
        تم تأكيد طلبك <i class="fa-solid fa-check"></i>
      </button>
    </div>
  </form>
  <SpinnerLoading :loading="state.loading" />
  <Toast :theme="toast.theme" :showNotification="toast.showNotification">
    <p>{{ toast.notify }}</p>
  </Toast>
</template>

<script>
import { reactive, computed } from "vue";
import Toast from "@/components/Toast.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, integer, minLength } from "@vuelidate/validators";
export default {
  components: { Toast, SpinnerLoading },
  setup() {
    const state = reactive({
      name: "",
      cardNumber: "",
      cvc: "",
      month: "",
      endYear: "",
      loading: false,
      done: false,
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme, message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      }, 2000);
    };

    const rules = computed(() => {
      return {
        name: { required },
        cardNumber: { required, integer, minLength: minLength(16) },
        cvc: { required, minLength: minLength(3) },
        month: { required, integer },
        endYear: { required, integer },
      };
    });

    const v$ = useVuelidate(rules, state);

    const confirmOrder = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;
        let data = {
          name_on_card: state.name,
          number_on_card: state.cardNumber,
          expire_month: state.month,
          expire_year: state.endYear,
          cvc: state.cvc,
        };
        try {
          let res = await axios.post("/api/orders", data);
          if (res.status == 200) {
            notification("success", "تم تنفيذ الطلب ");
            state.done = true;
          } else {
            notification("error", "حدث خطأ ما, عاود المحاولة لاحقا");
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
        state.loading = false;
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, toast, confirmOrder };
  },
};
</script>

<style scoped>
.ui.search {
  font-size: 1em;
}
.mt-30 {
  margin-top: 30px;
}

.lbel25 label {
  font-size: 25px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
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
.ui[class*="left icon"].swdh19.input > input {
  padding-left: 2em !important;
  padding-right: 2em !important;
  height: 40px !important;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
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
  margin-top: 20px !important;
  min-width: 100% !important;
  padding: 0.78571429em 2.1em 0.785714em 2em !important;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  top: -25px;
}

.ui.swdh11 {
  font-size: 14px !important;
  width: 100%;
}
</style>
