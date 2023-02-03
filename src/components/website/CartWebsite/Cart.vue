<template>
  <div class="fcrse_1">
    <a href="course_detail_view.html" class="hf_img">
      <img
        class="cart_img"
        :src="img"
        alt=""
      />
    </a>
    <div class="hs_content">
      <div class="eps_dots eps_dots10 more_dropdown">
        <a href="#"><i class="uil uil-times"></i></a>
      </div>
      <a href="course_detail_view.html" class="crse14s title900 pt-2"
        >{{Note_name}}</a
      >
      <a href="#" class="crse-cate">{{Details}}</a>
      <div class="auth1lnkprce">
        <p class="cr1fot"><a>{{TeacherName}}</a></p>
        <div class="prce142">السعر : {{price}}</div>
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
.fcrse_1 {
  background: #d9d9d9;
  width: 100%;
  float: right;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #efefef;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
}
.hf_img {
  width: 30%;
  float: right;
  /* position: relative; */
}
@media (max-width: 575.98px) {
  .hf_img {
    width: 100%;
    float: left;
    position: relative;
  }
  .hs_content {
    text-align: center !important;
    width: 100% !important;
    padding: 0px 0px 0px 0px !important;
  }
  .prce142 {
    float: right !important;
  }
}
.hf_img img {
  width: 100%;
  border-radius: 5px;
}
.hs_content {
  padding: 0px 15px 0px 20px;
  float: left;
  width: 70%;
  position: relative;
}
.eps_dots10 {
  top: 5px;
}
.eps_dots {
  position: absolute;
  left: 0;
}

.eps_dots a {
  font-size: 20px;
  color: #afafaf !important;
}

.eps_dots a:hover {
  color: #333 !important;
}
@media (max-width: 575.98px) {
  .eps_dots10 {
    top: 10px !important;
  }
}
.uil-times::before {
  font: var(--fa-font-solid);
  content: " \f00d";
}

.crse14s {
  display: block;
  font-size: 25px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  margin-bottom: 7px;
  line-height: 24px;
}
.crse14s:hover {
  color: black;
}
.crse-cate {
  display: block;
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  text-align: right;
  padding-top: 2px;
}
.crse-cate:hover {
  color: black;
}
.auth1lnkprce {
  float: right;
  width: 100%;
  margin-top: 18px;
}
p:first-child {
  margin-top: 0;
}
.cr1fot {
  margin-bottom: 0;
  margin-top: 18px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  float: right;
  font-weight: bold;
  color: black;
  text-align: right;
  line-height: 24px;
}
.cr1fot a {
  color: #333;
  font-weight: 500;
}
.prce142 {
  font-size: 16px;
}
.prce142 {
  float: left;
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: black;
  text-align: left;
}
</style>
