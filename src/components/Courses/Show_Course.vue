<template>

                  <tr >
                    <td >{{cours.id}}</td>
                    <td ><div class="thumb_img"><img src="../../../public/images/courses/img-2.jpg" alt=""></div></td>
                    <td >{{cours.name}}</td>
                    <td >{{cours.status}}</td>
                    <td >{{cours.views}}</td>
                    <td >{{cours.subscribes}}</td>
                  </tr>

  
</template>

<script>
export default {
  name: "Show_Course",
  props: ["cours"],
  data(){
    return{
    }
  },



  

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