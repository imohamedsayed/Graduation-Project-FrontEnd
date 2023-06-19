<template>
  <div class="box-product mb-20">
    <a href="#!" class="prod_img">
      <img
        :src="'http://127.0.0.1:8000/' + product.image"
        alt=""
        style="height: 240px"
      />
    </a>
    <div class="prod_content">
      <a href="#!" class="box-title">{{ product.name }}</a>
      <a href="#" class="crse-cate" v-if="product.description">{{
        product.description
      }}</a>
      <div class="row">
        <p class="teacher1 col-6">
          <a href="#">{{ product.teacher }}</a>
        </p>
        <div class="price col-6">السعر :{{ product.price }}</div>
      </div>
      <div
        class="text-center"
        v-if="!state.alreadyExists"
        style="font-size: 1.6rem"
      >
        <a
          class="btn btn-light"
          v-if="!state.loading"
          @click="addToCart(product.id)"
          ><i class="fa fa-shopping-cart"></i> اضافة الي السلة</a
        >
        <button class="btn btn-primary" disabled v-else>
          لحظة من فضلك
          <span class="spinner-border spinner-border-sm me-1"></span>
        </button>
        <span class="btn btn-outline-light me-4" style="font-size: 1.6rem">
          <i
            class="fa-solid fa-heart text-danger"
            v-if="state.inFav"
            @click="removeFromWishlist(product.id)"
          ></i>
          <i
            class="fa-regular fa-heart text-danger"
            v-else
            @click="addToWishlist(product.id)"
          ></i>
        </span>
      </div>
      <div class="text-center" v-else>
        <button class="btn btn-primary" @click="$router.push('/Website/cart')">
          <i class="fa fa-shopping-cart"></i> شاهده في السلة
        </button>
      </div>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
import Toast from "@/components/Toast.vue";

export default {
  props: ["product"],
  components: { Toast },
  setup(props) {
    const state = reactive({
      loading: false,
      alreadyExists: false,
      inFav: false,
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    // onMounted(() => {
    //   console.log(props.product);
    // });

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
        let res = await axios.post("/api/create-cart", {
          product_id: id,
          quantity: 1,
          status: 1,
        });

        if (res.status == 200) {
          console.log(res);
          if (res.data.message != "Created Successfully") {
            notification("error", "المنتج موجود في سلتك بالفعل");
            state.alreadyExists = true;
          } else {
            notification("success", "تم اضافة المنتج للسلة");
          }
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err.response.data.message);
      }
      state.loading = false;
    };

    /*
    
      ----->>> Wishlist

    */

    const addToWishlist = async (id) => {
      try {
        let res = await axios.post("/api/add-item-to-wishlist", {
          product_id: id,
          quantity: 1,
        });

        if (res.status == 200) {
          if (res.data.message != "Created Successfully") {
            if (res.data.message == "this product already in your cart") {
              notification(
                "error",
                "لا يمكن الاضافة للمفضلة لأنه موجود في سلة الشراء"
              );
            } else {
              notification("error", "المنتج موجود في المفضلة بالفعل");
              state.inFav = true;
            }
          } else {
            notification("success", "تم اضافة المنتج للمفضلة");
            state.inFav = true;
          }
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err.response.data.message);
      }
    };

    const removeFromWishlist = async (id) => {
      try {
        let res = await axios.delete("/api/delete-product-in-wish-list/" + id);
        if (res.status == 200) {
          notification("success", "تم ازالة المنتج من المفضلة  ");
          state.inFav = false;
        } else {
          notification("error", "حدث خطأ ما, حاول مجددا");
        }
      } catch (err) {
        notification("error", err);
      }
    };

    return { toast, state, addToCart, addToWishlist, removeFromWishlist };
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
