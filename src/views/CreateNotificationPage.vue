<template>
  <div class="sa4d25">
			<div class="container-fluid">			
				<div class="row">
					<div class="col-lg-12">	
						<h2 class="st_title"><i class="fas fa-bell"></i> الاشعارات</h2>
					</div>					
				</div>				
				<div class="row">
					<div class="col-12">

						<div class="all_msg_bg">
							<div class="channel_my item all__noti5">
								<div class="profile_link">
									<img src="images/profile/01.jpg" alt="">
									<div class="pd_content">
										<h6>الاختبارات</h6>
										<p class="noti__text5"> قام <b>يوسف رجب</b> بانهاء اختبار الوحدة الأولي</p>
										<span class="nm_time">منذ دقيقتين</span>
									</div>							
								</div>							
							</div>
							<div class="channel_my item all__noti5">
								<div class="profile_link">
									<img src="images/profile/01.jpg" alt="">
									<div class="pd_content">
										<h6>اشتراك جديد</h6>
										<p class="noti__text5"> قام <b>يوسف رجب</b> بالاشتراك في منهج الفيزياء للثانوية العامة</p>
										<span class="nm_time">منذ دقيقتين</span>
									</div>							
								</div>							
							</div>
                            <div class="channel_my item all__noti5">
								<div class="profile_link">
									<img src="images/profile/01.jpg" alt="">
									<div class="pd_content">
										<h6>الاختبارات</h6>
										<p class="noti__text5"> قام <b>يوسف رجب</b> بانهاء اختبار الوحدة الأولي</p>
										<span class="nm_time">منذ دقيقتين</span>
									</div>							
								</div>							
							</div>
							<div class="channel_my item all__noti5">
								<div class="profile_link">
									<img src="images/profile/01.jpg" alt="">
									<div class="pd_content">
										<h6>اشتراك جديد</h6>
										<p class="noti__text5"> قام <b>يوسف رجب</b> بالاشتراك في منهج الفيزياء للثانوية العامة</p>
										<span class="nm_time">منذ دقيقتين</span>
									</div>							
								</div>							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  name: "CreateNotificationPage",
  components: { Footer },
};
</script>
<style lang="scss">
 .sa4d25 {
    direction: rtl;
    padding: 30px 20px;
    width: 100%;
    margin-right:20px ;
    
}
.sa4d25 .st_title{
    margin-bottom: 20px !important; 
    color: var(--text-black);
    font-size: 20px;
    font-weight: 500px;
    color: #333;
    line-height: 1.2;
}
 .sa4d25 .st_title i {
      color: var(--light-blue);
      margin-left: 10px;
      font-size: 22px;
    }
    .all_msg_bg {
        margin: 0 20px 20px 0;
        background: #fff;
        }
    .channel_my{
        padding: 15px !important;
        border-bottom:1px solid #efefef !important ;
        min-width: 100%;
        max-width: 100%;
        white-space: normal;
    }
    .profile_link{
        display: flex;
    }
    .profile_link img{
        margin-top: 3px;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border: 2px solid #fff;
        border-radius: 100%;
        box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 10%);
    }
    .pd_content{
        width: 80%;
        white-space: normal;
    }
    .pd_content h6{
    font-size: 17px;
    font-weight: 600;
    margin-top: 11px;
    text-align: right;
    position: relative;
    }
    .noti__text5{
        margin-bottom: 8px;
        color: #686f7a;
        text-align: right;
        line-height: 20px;
        margin-top: 8px;
    }
    .pd_content p b{
        color: #1abcff;
        font-weight: bolder;
    }
    .pd_content span.nm_time{
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 0;
        color: #afafaf;
        text-align: right;
    }
</style>
