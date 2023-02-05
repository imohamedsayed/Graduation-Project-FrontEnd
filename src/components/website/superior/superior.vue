<template>
  <div class="col-lg-3 col-md-4">
    <div class="fcrse_1 mt-10">
      <div class="tutor_img">
        <a href="instructor_profile_view.html"
          ><img :src="img" alt=""
        /></a>
      </div>
      <div class="tutor_content_dt">
        <div class="tutor150">
          <a href="instructor_profile_view.html" class="tutor_name"
            >{{studentName}}</a
          >
        </div>
        <div class="tutor_cate">{{course}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../../../public/images/profile/01.jpg"),
      studentName: "محمد عبدالجواد",
      course:"فيزياء",
    };
  },
};
</script>

<style lang="scss">
.fcrse_1 {
    background: #fff !important;
    width: 100%;
	float: left;
    padding: 10px;
    border-radius: 10px;
	border: 1px solid #efefef;
	transition: all .2s ease-in-out;
}
.tutor_img {
    width: 100%;
    float: left;
	padding: 20px;
	text-align: center;
}
.tutor_img img {
    text-align: center;
    width: 100px !important;
    height: 100px !important;
    display: inline-block !important;
    border-radius: 100%;
	border: 2px solid #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 1600px){
.tutor_img img{
width: 75px  !important;
height: 75px  !important;
}
}
.tutor_content_dt {
	text-align: center;
	float: left;
    width: 100%;
    margin-bottom: 20px;
	padding: 0 10px;
}
.tutor150 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.tutor_name {
	font-size: 16px;
    font-weight: 500;
    color: #333 !important;
    text-align: center;
	position: relative;
}
.tutor_cate {
    font-size: 14px;
    color: #686f7a;
    margin-top: 10px;
    font-weight: 400;
    margin-bottom: 17px;
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

</style>
