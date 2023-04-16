<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="show-classes">
      <div class="container">
        <div class="classes">
          <div class="row">
            <h3 class="header" dir="rtl">
              <i class="fa-solid fa-bars ms-2" style="color: var(--blue-color)"></i> الصفوف الدراسية
            </h3>
            
          </div>
          <table class="class-list">
            <tr dir="rtl">
              <th>#</th>
              <th>الاسم</th>
              
              <th>خصائص</th>
            </tr>
            <Class v-for="year in displayItems" :key="year.id" :year="year" />
          </table>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import Class from "@/components/classes/Class.vue";
import axios from 'axios';
export default {
  components: { Footer,AsideBar,Class,Header },
  data() {
    return {
      items: [],
      displayItems: [],
    };
  },
  async mounted() {
    let Branchs = await axios.get(
      'api_dashboard/academicYears',)
      .then((res) => {
        this.displayItems = res.data.data;
        this.items = res.data.data;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.errors);
      });
  },
};
</script>

<style lang="scss">
.show-classes {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }

  padding-top: 10px;

  .classes {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;

    .header {
      color: var(--text-black);
      font-size: 1.4rem;
      margin-block: 30px;
    }

    .class-list {
      width: 100%;

      td,
      th {
        &:first-of-type {
          width: 10%;
        }

        &:nth-of-type(2) {
          width: 30%;
        }

        &:last-of-type {
          width: 40%;
        }

        padding: 10px 8px;
        border: 1px solid rgba(119, 119, 119, 0.239);
      }

      th {
        background: var(--darker-blue);
        color: white;
      }
    }
  }
}
</style>
