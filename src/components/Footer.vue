<template>
  <footer class="footer mt-30 ">
    <div class="container">
      <div class="row ">
        <div class="col-lg-3 col-md-3 col-sm-6">
        <ul>
          <li><a href="">من نحن</a></li>
          <li><a href="">سياسة الخصوصية</a></li>
          <li><a href="">شروظ الاستخدام</a> </li>
          <li><a href="">الدعم الفنى</a></li>
        </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <ul>
            <li><a href="">المدربين</a> </li>
            <li><a href="">الدورات</a></li>
            <li><a href="">العروض المباشرة </a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <ul>
            <li><a href="">تسجيل الدخول</a></li>
            <li><router-link :to="{ name: 'signup'}">تسجيل الحساب</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
        </div>
        <div class="col-lg-12">
          <div class="footer_bottom">
            <div class="row">
              <div class="col-md-6">
                <ul class="left" style="padding: 0px 0px;">
                  <li>
                    <a href="">
                      <div class="logo " style="">
                        <img 
                        src="../../public/images/logo/logo_01.png"
                        class="img-fluid"
                        alt=""
                        style="height: 28px; width: auto;">
                      </div>
                    </a>
                  </li>
                <li><p> جميع الحقوق محفوظة © 2023</p></li>
                </ul>
              </div>
              <div class="col-md-6">
                <div class="social_links">
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.footer
{
  background: linear-gradient(to right, var(--blue-color), var(--darker-blue));
  border-top: 1px solid rgb(255,255,255,0.15);
  width: 100%;
  direction: rtl;
  ul{
    padding-top: 50px ;
    a{
      color: var(--white-color);
      font-weight: 500;
      font-size: 16px;
      padding-right: 20px;
      display: block;
      padding-bottom: 10px;
      margin-bottom: 10px;
      transition: all 0.3s ease-in-out;
      &:hover{
        opacity: .7;
      }
    }
  }
  .footer_bottom
  {
    border-top: 1px solid white;
    margin-top: 20px;
    padding: 20px 0 0 0;
    .left{
      display: flex;
      align-items: center;
      color: var(--white-color);
      margin: 0;
      p{
        margin-right: 20px;
      }
    }
    .social_links {
    padding-right: 10px;
    a
    {
      padding-top: 0px;
      line-height: 30px;
      color: var(--white-color);
      padding-left: 15px;
      font-size: 16px;
      display: inline-block;
      transition: all 0.3s ease-in-out;
      &:hover
      {
        transform: scale(1.1);
      }
    }
  }
  }
}
</style>