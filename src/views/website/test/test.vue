<template>
    <Header />
    <div class="main-view">
      <AsideBar />
      <div class="test">
        <div class="test-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="test-title125">
                  <div class="test-titleleft">
                    <div class="test-ttl121">
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <router-link :to="{name : 'home'}">الرئيسية </router-link>
                          </li>
                          <li class="breadcrumb-item ">
                            <router-link :to="{name : 'course'}">منهج الفيزياء للثانوية العامة</router-link>
                            
                          </li>
                          <li class="breadcrumb-item active" aria-current="page">
                            نتيجة اختبار الوحدة الأولي
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="title126">
                  <img
                    src="../../../../public/images/categories/Right.png"
                    alt=""
                  />
                  <h2>نتيجة اختبار الوحدة الأولي</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="test-cart">
        <div class="test-content2">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
              <testComponent />
              <t_fOption />
              <multiChoiceOption />
              <button class="test_submit_btn" type="submit">
      <i class="fas fa-check"></i> لقد انتهيت !
    </button>
              </div>
              <div class="col-lg-4">
                <div class="faq1256">
			<div class="container">
				<div class="row justify-content-md-center">					
						<div class="certi_form rght1528">
							<div class="test_timer_bg">
								<ul class="test_timer_left">
									<li>
										<div class="timer_time">
											<h4>20</h4>
											<p>سؤال</p>
										</div>
									</li>
									<li>
										<div class="timer_time">
											<h4 id="timer">60</h4>
											<p>دقيقة</p>
										</div>
									</li>
								</ul>
						</div>
					</div>			
				</div>
			</div>
		</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from "../../../components/Footer.vue";
  import Header from "../../../components/Header.vue";
  import AsideBar from "../../../components/WebsiteAsideBar.vue";
  import testComponent from "../../../components/test/testComponent.vue";
  import t_fOption from "../../../components/test/t_fOption.vue";
  import multiChoiceOption from "../../../components/test/multiChoiceOption.vue";
  export default {
    components: { Footer, AsideBar, Header,testComponent , t_fOption ,multiChoiceOption },
    data() {
      return {};
    },
  };
  </script>
  
  <style lang="scss">
  .test{
    margin-right: 13rem;
    @media (max-width: 991px) {
      margin-right: 0;
    }
  }
  .test-content {
    direction: rtl;
    padding: 30px 20px;
    width: 100%;
  }
  .test-content2 {
    background-color: #d9d9d9;
    direction: rtl;
    padding: 30px 10px;
    width: 100%;
  }
  .test-title125 {
    width: 100%;
    float: left;
  }
  
  .test-titleleft {
    float: right;
  }
  
  .titleright {
    float: left;
  }
  
  .test-ttl121 .breadcrumb {
    padding: 0 !important;
    direction: rtl;
  }
  .test-ttl121 .breadcrumb-item {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    font-family: "Roboto", sans-serif;
    line-height: 24px;
  }
  .test-ttl121 .breadcrumb-item a {
    color: #333;
  }
  .breadcrumb-item.active {
    color: #6c757d;
  }
  .breadcrumb-item + .breadcrumb-item {
    padding-right: 0.5rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: "/";
    display: inline-block;
    padding-left: 0.5em;
    color: #6c757d;
    float: right !important;
  }
  .title126 {
    float: left;
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    margin-top: 25px !important;
  }
  .title126 img {
    width: 35px;
    height: 35px;
    margin: 0 0 0 20px;
  }
  .title126 h2 {
    font-size: 28px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #333;
    text-align: right;
    line-height: 30px;
    margin-top: 10px;
  }
  .rght1528 {
    position: sticky;
    top: 90px;
  }
  .certi_form {
    float: right;
    width: 100%;
    margin: 50px 0 65px;
	text-align: right;
}
.rght1528 {
    position: sticky;
    top: 90px;
}
.test_timer_bg {
	background: #fff;
    width: 100%;
    float: left;
    padding: 0;
    border-radius: 10px;
    margin-bottom: 50px;
    border: 1px solid #efefef;
    transition: all .2s ease-in-out;
}
.test_timer_left {
	width: 100%;
    float: left;
	display: flex;
	flex-direction: row-reverse;
}
.timer_time {
	float: left;
	width: 100%;
	text-align: center;
}
.timer_time h4 {
	font-size: 24px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-bottom:15px;
    text-align: center;
    line-height: 26px;
    height: 100px;
    width: 100px;
    display: inline-block;
    border: 2px solid #333;
    border-radius: 100%;
    padding: 35px 0;
	background: #fff ;
}
h4:first-child{
    margin-top: auto;
}
h4:last-child{
    margin-bottom: 0;
}
.timer_time p {
	font-size: 25px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-top: 0;
    text-align: center;
    line-height: 26px;
}
.test_timer_left li {
	width: 50%;
	float: left;
	display: inline-block;
	padding: 30px 20px;
	border-left: 1px solid #efefef;
}
  @media screen and (max-width: 767px) {
    .test_timer_bg, .certi_form {
        margin-bottom: 0;
    }
    .test_timer_bg, .certi_form {
        margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    .rght1528 {
        margin-top: 25px;
    }
  }
  .test_submit_btn {
    font-size: 15px;
  margin-right: 80px;
  margin-bottom: 80px;
  font-weight: 600;
  color: #fff !important;
  background-color: var(--blue-color) !important ;
  border-radius: 20px;
  text-align: center;
  border: 0;
  width: 50%;
  float:right;
  height: 40px;
  padding: 10px 0;
}
  .test_submit_btn:hover{
    color: white !important;
  background: var(--darker-blue) !important;
}
  </style>
  