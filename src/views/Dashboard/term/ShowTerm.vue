<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <Termlist />
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
import Termlist from "../../../components/Terms/Termlist.vue";
export default {
  name: "ShowwTerm",
  components: { Footer, AsideBar, Header, Termlist },
  data() {
    return {
      search: "",
      select: 10,
    };
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
      font-size: 22px;
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
  .content-action-btns {
    padding: 5px 15px;
    background: var(--darker-blue);
    color: white !important;
    margin: 5px 0;
    border-radius: 15px;
  }
  .content-action-btns a {
    color: white !important;
  }
  .content-action-btns:hover {
    background: var(--blue-color);
  }
  .left {
    float: right;
    span{
            font-weight: 500;
      font-size: 22px;
      color: var(--darker-blue);      
    }
    input {
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
  text-align: center;
}
</style>
