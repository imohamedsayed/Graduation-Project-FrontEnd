<template>
  <div class="fcrse_1" v-if="state.exists">
    <a href="course_detail_view.html" class="hf_img">
      <img
        class="cart_img"
        :src="'http://127.0.0.1:8000/' + product.product_image"
        alt=""
      />
    </a>
    <div class="hs_content mb-4">
      <div class="eps_dots eps_dots10 more_dropdown">
        <span @click="removeFromCart()"><i class="uil uil-times"></i></span>
      </div>
      <a href="course_detail_view.html" class="crse14s title900 pt-2">{{
        product.product_name
      }}</a>
      <a href="#" class="crse-cate">{{ product.product_subject }}</a>
      <div class="auth1lnkprce">
        <p class="cr1fot">
          <a>{{ product.product_teacher }}</a>
        </p>
        <div class="prce142">السعر : {{ product.product_price }}</div>
      </div>
    </div>
    <div class="quantity">
      <span class="btn btn-outline-dark ms-2 me-4 mb-2" @click="increase()"
        >+</span
      >
      <input
        type="number"
        min="1"
        style="width: 40px; height: 34px"
        class="text-center py-3"
        @change="() => (changed = true)"
        v-model="state.quantity"
      />
      <span class="btn btn-outline-dark me-2 mb-2" @click="decrease()">-</span>
    </div>

    <div class="update-product" v-show="state.changed">
      <button
        class="btn btn-success"
        v-if="!state.doneUpdating"
        @click="update()"
      >
        تحديث الكمية
      </button>
      <button class="btn btn-success" v-else>
        تم التحديث<i class="fa-solid fa-check me-2"></i>
      </button>
    </div>
  </div>
  <SpinnerLoading :loading="state.loading" />
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Toast from "@/components/Toast.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { reactive } from "vue";
import axios from "axios";
export default {
  props: ["product"],
  components: { Toast, SpinnerLoading },
  setup(props) {
    const state = reactive({
      product: props.product,
      quantity: props.product.quantity_in_cart,
      doneUpdating: false,
      changed: false,
      loading: false,
      exists: true,
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

    const increase = () => {
      state.quantity += 1;
      state.changed = true;
    };
    const decrease = () => {
      if (state.quantity > 1) {
        state.quantity -= 1;
        state.changed = true;
      }
    };

    const update = async () => {
      state.loading = true;
      let data = {
        product_id: state.product.product_id,
        status: 1,
        quantity: state.quantity,
      };
      try {
        let res = await axios.post("/api/ubdate-cart", data);
        if (res.status == 200) {
          notification("success", "تم تعديل الكمية  ");
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err);
      }

      state.changed = false;
      state.loading = false;
    };

    const removeFromCart = async () => {
      state.loading = true;

      try {
        let res = await axios.delete(
          "api/delete_product/" + state.product.product_id
        );
        if (res.status == 200) {
          notification("success", "تم ازالة المنتج من سلتك  ");
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err);
      }
      state.exists = false;
      state.loading = false;
    };

    return { state, increase, decrease, update, toast, removeFromCart };
  },
};
</script>

<style lang="scss">
.fcrse_1 {
  background: #f1f3f8;
  width: 100%;
  float: right;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #efefef;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  position: relative;
}
.update-product {
  position: absolute;
  bottom: 14px;
  left: 20px;
  transition: all 0.6s ease;
}
.hf_img {
  width: 30%;
  float: right;
  /* position: relative; */
}
@media (max-width: 575.98px) {
  .hf_img {
    width: 100%;
    float: left;
    position: relative;
  }
  .hs_content {
    text-align: center !important;
    width: 100% !important;
    padding: 0px 0px 0px 0px !important;
  }
  .prce142 {
    float: right !important;
  }
}
.hf_img img {
  width: 100%;
  border-radius: 5px;
}
.hs_content {
  padding: 0px 15px 0px 20px;
  float: left;
  width: 70%;
  position: relative;
}
.eps_dots10 {
  top: 5px;
}
.eps_dots {
  position: absolute;
  left: 0;
}

.eps_dots span {
  font-size: 20px;
  color: #afafaf !important;
  cursor: pointer;
}

.eps_dots span:hover {
  color: #333 !important;
}
@media (max-width: 575.98px) {
  .eps_dots10 {
    top: 10px !important;
  }
}
.uil-times::before {
  font: var(--fa-font-solid);
  content: " \f00d";
}

.crse14s {
  display: block;
  font-size: 25px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  margin-bottom: 7px;
  line-height: 24px;
}
.crse14s:hover {
  color: black;
}
.crse-cate {
  display: block;
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  text-align: right;
  padding-top: 2px;
}
.crse-cate:hover {
  color: black;
}
.auth1lnkprce {
  float: right;
  width: 100%;
  margin-top: 18px;
}
p:first-child {
  margin-top: 0;
}
.cr1fot {
  margin-bottom: 0;
  margin-top: 18px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  float: right;
  font-weight: bold;
  color: black;
  text-align: right;
  line-height: 24px;
}
.cr1fot a {
  color: #333;
  font-weight: 500;
}

.prce142 {
  float: left;
  font-size: 17px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: left;
}
@media (max-width: 768px) {
  .auth1lnkprce {
    display: flex !important;
    flex-direction: column !important;
  }
  .prce142 {
    text-align: right;
  }
}
</style>
