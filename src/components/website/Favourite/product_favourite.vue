<template>
  <div class="box-product mb-20">
    <a href="#!" class="prod_img">
      <img :src="img" alt="" />
    </a>
    <div class="prod_content">
      <a href="#!" class="box-title">{{Note_name}}</a>
      <a href="#" class="crse-cate">{{Details}}</a>
      <div class=" row">
        <p class="teacher1 col-6"><a href="#">{{TeacherName}}</a></p>
        <div class="price col-6">السعر :  {{price}}</div>
      </div>
      <div class="row">
        <a class="col-7 add-to-cart1" href="#!"
          ><i class="fa fa-shopping-cart"></i> اضافة الي السلة</a
        >
        <a class="col-4 fav" href="#!"
          ><i class="fa-solid fa-trash"></i> ازاله</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    img: require("../../../../public/images/categories/12.jpg"),
    Note_name:"مذكرة الأدب والنصوص",
    Details:"عربي | الصف الثالث الثانوي",
    TeacherName : "محمد عبدالجواد",
    price:"150 جنيه",
    };
  },
};
</script>

<style lang="scss">
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
