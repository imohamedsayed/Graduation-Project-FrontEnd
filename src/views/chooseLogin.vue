<template>
    <div class="login-user-page">
      <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
      <div class="login-form">
        <h1 class="text-center">تسجيل دخول ك</h1>
          <div class="input d-flex align-items-center justify-content-around">
            <div class="admin" @click="$router.push({ name: 'Admin_Login' })">
          <img src="../../public/images/landing/3535135.png" alt="">
          <p>مسئول</p>
        </div>
            <div class="user" @click="$router.push({ name: 'login' })">
          <img src="../../public/images/landing/admin-icon-12.jpg" alt="">
          <p>طالب</p>
        </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  <style lang="scss" scoped>
  .admin , .user{
    width: 200px;
    height: 200px;
    cursor: pointer;
    margin-bottom: 20px;
    margin: 2px;
  }
  .admin img , .user img{
    width: 100%;
    height: 80%;
    opacity: .7;
    transition: all .3s ease-in-out;
  }
  p{
    text-align: center;
    padding: 10px 15px;
    background: var(--darker-blue);
    color: white !important;
  }
  .admin:hover   img {
  opacity: 1;
}
  .user:hover   img {
  opacity: 1;
}

</style>
  