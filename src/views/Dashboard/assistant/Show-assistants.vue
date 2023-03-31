<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <assistantlist />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import assistantlist from "../../../components/assistants/assistantlist.vue";

import { reactive, computed, onMounted } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Show-assistant",
  components: { Footer, AsideBar, Header, assistantlist },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
    });

    onMounted(() => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 2) {
          router.push("/dashboard");
        }
      }
    });
  },
};
</script>

<style lang="scss">
.ShowCources {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.cover {
  padding: 30px 20px;
  width: 100%;

  .bg {
    background: #fff;
    padding: 30px 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
    label {
      font-weight: 500;
      font-size: 22px !important;
      margin-bottom: 10px !important;
      color: #333;
      text-align: right;
      display: block;
      i {
        color: var(--darker-blue);
        margin-left: 5px;
      }
    }
  }
  .ShowCources .cover .content-action-btns {
    padding: 5px 15px;
    background: var(--darker-blue);
    color: white !important;
    margin: 5px 0;
    border-radius: 15px;
    font-size: 20px;
  }
  .content-action-btns a {
    color: white !important;
  }
  .content-action-btns:hover {
    background: var(--blue-color);
  }
  .left {
    select {
      padding: 0.375rem 0.75rem 0.375rem 1.75rem;
      margin: 0 10px;
      font-weight: 400;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid var(--darker-blue);
      border-radius: 0.25rem;
      appearance: none;
      background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
        no-repeat left 0.75rem center/8px 10px;
    }
  }
  .right {
    float: left;
    input {
      display: inline-block;
      width: auto;
      height: calc(1.8125rem + 2px);
      padding: 0.25rem 0.5rem;
      margin: 0 10px;
      border-radius: 0.2rem;
      border: 1px solid var(--darker-blue);
    }
    @media (max-width: 767px) {
      float: right;
      margin: 20px 0 0 0;
    }
  }
  .open {
    @media (max-width: 767px) {
      display: none !important;
    }
  }
}
.row th {
  border-right: 1px solid white;
  border-left: 1px solid white;
}
</style>
