<template>
  <div class="card-Branch rounded mb-3">
    <div
      class="row flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse"
    >
      <div class="col-md-4 map"></div>
      <div class="col-md-8">
        <div class="card-body text-center">
          <h5 class="card-title">{{ branch.name }}</h5>
          <p class="card-text">{{ branch.address }}</p>
          <p class="d-flex justify-content-between">
            <small>
              <i class="fa-solid fa-phone"></i> الخط الساخن :
              {{ branch.hot_line }}
            </small>
            <small
              ><i class="fa-solid fa-phone"></i> رقم التلفون :
              {{ branch.phone_number }}
            </small>
          </p>
          <button
            type="button"
            :name="'chooseBranch'+branch.id"
            class="btn btn-light"
            @click="choseBrach(branch.id, branch.name)"
          >
            <i class="fa-solid fa-school ms-2"></i>

            اختر هذا الفرع
          </button>
          <button
            type="button"
            class="btn btn-light me-2"
            v-if="state.shop != null"
            @click="chooseShop(branch.id, state.shop.id, branch.name)"
          >
            <i class="fa-solid fa-shop ms-2"></i>
            المتجر
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  props: ["wbranch"],
  data() {
    return {
      branch: this.wbranch,
    };
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      branch: props.wbranch,
      shop: null,
    });

    onMounted(async () => {
      let map = document.querySelectorAll(".map");

      for (let i = 0; i < map.length; i++) {
        if (props.wbranch.id === i + 1) {
          map[i].innerHTML = props.wbranch.map_location;
        }
      }
      let iframs = document.querySelectorAll("iframe");
      iframs.forEach((element) => {
        element.width = "100%";
        element.height = 255;
      });

      /*
        ------ Get Shop Data
      */

      let shopRes = await axios.get(
        "/api/get-shops-for-branch/" + state.branch.id
      );

      if (shopRes.status == 200) {
        state.shop = shopRes.data.data;
      }
    });

    const choseBrach = (id, name) => {
      localStorage.branch_name = name;
      store.dispatch("studentBrach", id);
      router.push("/branch");
    };

    const chooseShop = (bid, sid, name) => {
      localStorage.branch_name = name;
      store.dispatch("studentBrach", bid);

      router.push({ name: "shop_cats", params: { id: sid } });
    };

    return { choseBrach, state, chooseShop };
  },
};
</script>

<style scoped>
.card-Branch {
  background-color: var(--light-blue);
  color: white;
  margin-right: 60px;
}

.card-body {
  padding: 30px;
}

.card-body h5 {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
}
.card-body p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

iframe {
  margin-right: 5px;
  width: 100000000000px;
}
button.btn{
  background: #EBF0F6;
  color: black;
}
</style>
