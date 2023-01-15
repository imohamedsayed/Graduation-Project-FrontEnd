<template>
  <div class="table-responsive ">
							<table class="table ucp-table">
								<thead class="thead-s">
									<tr>
										<th class="text-center" scope="col">#</th>
										<th class="cell-ta" scope="col">صورة</th>
										<th class="cell-ta" scope="col">عنوان</th>
										<th class="cell-ta" scope="col">الحالة</th>
										<th class="text-center" scope="col">مشاهدات</th>
										<th class="text-center" scope="col">المشتركين</th>
									</tr>
								</thead>
                
								<tbody>
                  <tr v-for="course in courses" :key="course.id">
                    <td >{{course.id}}</td>
                    <td ><div class="thumb_img"><img src="../../../public/images/courses/img-2.jpg" alt=""></div></td>
                    <td >{{course.name}}</td>
                    <td >{{course.status}}</td>
                    <td >{{course.views}}</td>
                    <td >{{course.subscribes}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
</template>

<script>
export default {
  name: "Show_Course",
  data(){
    return{
      courses:[],
    }
  },
  mounted() {
    this.items = [
      {
        id: 1,
        name:"منهج الفيزياء",
        status:"قيد الانشاء",
        views:70,
        subscribes:1150,
      },
      {
        id: 2,
        name:"منهج الكيمياء",
        status:"قيد الانشاء",
        views:70,
        subscribes:1150,
      },
      {
        id: 3,
        name:"منهج الاحياء",
        status:"قيد الانشاء",
        views:70,
        subscribes:1150,
      },      
    ];
    this.courses = this.items;
  },
  
   // mounted() {
  //   fetch("")
  //   .then(res=>res.json())
  //   .then(data=>this.courses=data)
  //   .catch(err=> console.log(err.message))
  // },
}
</script>

<style lang="scss">
.table-responsive
    {
      display: block;
      width: 100%;
      overflow-x: auto;
      margin-top: 30px;
      border-radius: 5px;
      margin-bottom: 12px;
      thead {
        font-weight: 500;
        padding: 12px !important;
        border-radius: 4px;
        background-color: var(--darker-blue);
        color: #333 !important;
        th {
          border-bottom-left-radius: 0;
          border: 1px solid rgba(119, 119, 119, 0.239);
          font-size: 14px;
          color: white ;
          padding: 12px;
          font-weight: bold;
      }      
    }
    tbody{
      tr{
        background-color: #fff ;
      }
    }
    &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #8f94fb87;
    border: 1px solid #fff;
    border-radius: 20px;
  }
  }
  .thumb_img
      {
        width: 120px;
        margin: 0 auto;
        img{
          width: 100%;
          border-radius: 5px;
        }
      }
      tr td {
        text-align: center;
        font-weight: 500;
      }
</style>