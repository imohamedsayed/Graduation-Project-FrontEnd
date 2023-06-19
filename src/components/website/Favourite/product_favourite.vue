<template>
  <div class="box-product mb-20" v-if="state.exists">
    <a class="prod_img">
      <img
        alt=""
        :src="'http://127.0.0.1:8000/' + product.product_image"
        style="height: 250px"
      />
    </a>
    <div class="prod_content">
      <a href="#!" class="box-title"> {{ product.product_name }} </a>
      <a href="#" class="crse-cate">{{ product.product_subject }} </a>
      <div class="row">
        <p class="teacher1 col-6">
          <a href="#"> {{ product.product_teacher }} </a>
        </p>
        <div class="price col-6">السعر : {{ product.product_price }}</div>
      </div>
      <div class="row">
        <a class="col-7 add-to-cart1" @click="addToCart(product.product_id)"
          ><i class="fa fa-shopping-cart"></i> اضافة الي السلة</a
        >

        <a class="col-4 fav" @click="removeFromWishlist(product.product_id)"
          ><i class="fa-solid fa-trash"></i> ازاله</a
        >
      </div>
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
      exists: true,
      loading: false,
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

    const addToCart = async (id) => {
      state.loading = true;
      try {
        let res = await axios.post("/api/forward-to-cart/" + id);
        console.log(res);
        if (res.status == 200) {
          if (res.data.message != "Update") {
            notification("error", "المنتج موجود في سلتك بالفعل");
          } else {
            state.exists = false;
            notification("success", "تم اضافة المنتج للسلة");
            setTimeout(() => {
              location.reload();
            }, 1500);
          }
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err.response.data.message);
      }
      state.loading = false;
    };

    const removeFromWishlist = async (id) => {
      try {
        let res = await axios.delete("/api/delete-product-in-wish-list/" + id);
        if (res.status == 200) {
          notification("success", "تم ازالة المنتج من المفضلة  ");
          state.exists = false;
          setTimeout(() => {
            location.reload();
          }, 1500);
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err);
      }
    };

    return { state, toast, removeFromWishlist, addToCart };
  },
};
</script>

<style lang="scss" scoped>
.box-product {
  background-color: #fff;
  width: 100%;
  float: left;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
}
.prod_img {
  width: 100%;
  position: relative;
  a {
    background-color: transparent;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
}
a {
  cursor: pointer;
}
.prod_content {
  padding: 10px 5px;
  width: 100%;
  .box-title {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: right;
    margin-bottom: 7px;
    line-height: 24px;
  }
  .crse-cate {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #333;
    text-align: right;
    padding-top: 2px;
    margin-bottom: 15px;
  }
  .teacher1 a {
    font-size: 16px;
    font-weight: 600;
    color: black !important;
    text-align: right;
    margin-bottom: 7px;
  }
  .price {
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
}
.prod_content .row .add-to-cart1 {
  text-align: center;
  padding: 10px;
  background: var(--blue-color) !important;
  color: white !important;
  float: left;
  border-radius: 8px;
  margin: 0 0 0 18px;
  font-size: 14px;
  font-weight: bold;
}
.prod_content .add-to-cart1:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}
.prod_content .fav {
  text-align: center;
  padding: 10px;
  background: var(--blue-color) !important;
  color: white !important;
  float: right;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}
.prod_content .fav:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}
</style>
