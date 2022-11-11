<template>
    <Header />
    <div class="main-view">
      <AsideBar />
      <div class="new-exam">
		<div class="sa4d25">
			<div class="container">			
				<div class="row">
					<div class="col-lg-12">	
						<h2 class="st_title cr_course_title"><i class="fas fa-plus-circle"></i> اضافة اختبار</h2>
					</div>					
				</div>				
				<div class="row">
					<div class="col-12">
						<div class="course_tabs_1">
							<div id="add-course-tab" class="step-app">
								<div class="step-content">
									<div class="step-tab-panel step-tab-info active create-course-tab" id="tab_step1"> 
										<div class="tab-from-content">
											<div class="course__form">
												<div class="general_info10">
													<div class="row">
														<div class="col-lg-12 col-md-12">															
															<div class="ui search focus mt-30 lbel25">
																<label><i class="fas fa-pencil-alt"></i> الاسم</label>
																<input type="text" />
															</div>									
														</div>
                            <div class="col-lg-6 col-md-12">
															<div class="mt-30 lbel25">
																<label><i class="fas fa-list"></i> الدورة</label>
																<select class="ui hj145 cntry152">
																	<option selected disabled value="">اختيار من القائمة</option>
																	<option value="1">مجاني</option>
																	<option value="1">مدفوع</option>
																</select>
															</div>
														</div>
														<div class="col-lg-6 col-md-12">															
															<div class="ui search focus mt-30 lbel25">
																<label><i class="fas fa-pencil-alt"></i> مدة الاختبار</label>
																<input type="number" />
															</div>									
														</div>
													</div>
												</div>
												<button data-direction="finish" class="btn btn-default steps_btn">حفظ</button>
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
        <Footer></Footer>
      </div>
    </div>
  </template>

  <script>
  import Footer from "../../../components/Footer.vue";
  import Header from "../../../components/Header.vue";
  import AsideBar from "../../../components/AsideBar.vue";
  
  export default {
    name: "new_Exam",
    components: { Footer, AsideBar, Header },
  };
  </script>  
  <style lang="scss">
    
  .sa4d25 {
    direction: rtl;
    padding: 30px 20px;
    width: 100%;
  }
  .new-exam {
    margin-right: 14rem;
    @media (max-width: 991px) {
      margin-right: 0;
    }
  }
  
  .sa4d25 .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;
  }
  .sa4d25 .st_title i {
    color: var(--light-blue);
    margin-left: 10px;
    font-size: 22px;
  }
  .course_tabs_1 {
    background: #fff;
    margin-top: 30px;
    padding: 0 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
  }
  .lbel25 select {
    padding: 0px 15px !important;
    height: auto !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    border: 1px solid #ced4da;
    width: 100%;
    margin-top: 10px;
    font-weight: 500;
    box-shadow: none !important;
    height: 54.4px !important;
}
.lbel25 select:focus{
  outline: none;
}
  .course_tabs_1 label {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px !important;
    margin-top: 25px !important;
    color: var(--text-black);
    text-align: right;
    display: block;
  }
  .course_tabs_1 label i {
    color: var(--light-blue);
    margin-left: 10px;
  }
  .course_tabs_1 input {
    padding: 15px 15px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: var(--border);
    width: 100%;
    margin-top: 10px;
  }
  .course_tabs_1 input:focus {
    outline: none;
  }
  .tab-from-content {
    padding: 30px 0;
  }
  .course_tabs_1 .steps_btn {
    margin: 25px 25px;
    padding: 10px 50px !important;
    margin-bottom: 0;
    margin-top: 50px;
    font-size: 20px !important;
    height: auto !important;
    background: #1abcff !important;
    color: white;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;
    border-radius: 50px;
    font-weight: bold;
  }
  .course_tabs_1 .steps_btn:hover {
    color: black !important;
  }
  </style>
  