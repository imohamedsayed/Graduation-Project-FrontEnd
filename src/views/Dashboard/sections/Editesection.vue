<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="Editesection">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> تعديل فصل : {{ updatedsection.course }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم اضافه  فصل بنجاح . 
                <span style="{
                font-size:18px;
                cursor: pointer;
                display: inline-block;
                transition: .5s a,}
                " 
                @click="
                this.redirectTo({
                  name: 'showsections', 
                  params: {}
                })">
                عرض جميع الفصول 
              </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>اسم الدورة </label>
                          <select v-model="updatedsection.course"  class="">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option value="1" selected>فيزياء</option>
                            <option value="2">كيمياء</option>
                            <option value="3">عربي</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-chalkboard-user"></i> اسم المدرس</label>
                          <select v-model="updatedsection.tech"  class="">
                            <option value="1" selected>اسم المدرس</option>
                            <option value="2">اسم المدرس</option>
                            <option value="3">اسم المدرس</option>
                            <option value="4">اسم المدرس</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-dollar-sign"></i> السعر</label>
                          <input v-model="updatedsection.price"  type="number" name="" id="" />
                        </div>
                      </div>
                      
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> السعة القصوى </label>
                          <input v-model="updatedsection.max" type="number" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-clipboard-question"></i> امتحان مسبق</label>
                          <select v-model="updatedsection.exam" class="">
                            <option value="true" selected> yes </option>
                            <option value="false">No </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ البدء </label>
                          <input v-model="updatedsection.start" type="datetime-local" name="" id="">
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ الانتهاء</label>
                          <input v-model="updatedsection.end" type="datetime-local" name="" id="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                  @click="Updatesection()"
                  data-direction="finish" 
                  class="btn btn-default steps_btn"
                  > حفظ </button>
                  
                </div>
              </div>
            </div>
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
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: "Editesection",
  components: { Footer,AsideBar,Header },
  props: ["id"],
  data() {
    return {
      save: false,
      updatedsection:{},
      
    }
  },
  // async mounted() {
  //   let section = await axios.get('http://localhost:3000/sections/'+this.id);
  //   if(section.status === 200) {
  //     this.updatedsection = section.data;
  //     console.log(this.updatedsection.course);
        
  //   }
  // },
  // methods:
  // {
  //   ...mapActions(['redirectTo']),
  //   async Updatesection() {
  //     let section = await axios.put('http://localhost:3000/sections/'+this.id,
  //       {
  //         course: this.updatedsection.course,
  //         tech: this.updatedsection.tech,
  //         max: this.updatedsection.max,
  //         price: this.updatedsection.price,
  //         exam: this.updatedsection.exam,
  //         start: this.updatedsection.start,
  //         end: this.updatedsection.end,
  //       })
  //     if(section.status == 200) {
  //       this.save = true;
  //     }
  //   }
  // },
};
</script>

<style lang="scss">
.Editesection {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
