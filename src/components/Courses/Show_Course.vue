<template>
  <tr>
    <td >{{id}}</td>
    <td ><div class="thumb_img"><img src="images/courses/img-2.jpg" alt=""></div></td>
    <td >{{name}}</td>
    <td >{{status}}</td>
    <td >{{views}}</td>
    <td >{{subscribes}}</td>
  </tr>
</template>

<script>
export default {
  name: "Show_Course",
  data(){
    return{
      id: 1,
      name:"منهج الفيزياء",
      status:"قيد الانشاء",
      views:70,
      subscribes:1150,
      }
  },
}
</script>

<style lang="scss">
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