<template>
  <div class="card-Branch rounded mb-3">
    <div
      class="row flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse"
    >
    <div class="col-md-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.39964813004!2d31.259683542352697!3d30.016769756486905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2z2KfZhNis2YrYstip2Iwg2YLYs9mFINin2YTYudmF2LHYp9mG2YrYqdiMINin2YTYrNmK2LLYqdiMINmF2LXYsQ!5e0!3m2!1sar!2sus!4v1679705202827!5m2!1sar!2sus"
          width="99%"
          class="rounded mt-1 mb-1"
          height="95%"
          style="border: 0%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-md-8">
        <div class="card-body text-center">
          <h5 class="card-title">{{ BranchName }}</h5>
          <p class="card-text">
            {{ Adress }}
          </p>
          <p class="d-flex justify-content-between">
            <small>
              <i class="fa-solid fa-phone"></i> الخط الساخن : {{ Hotline }}
            </small>
            <small
              ><i class="fa-solid fa-phone"></i> رقم التلفون : {{ Phone }}
            </small>
          </p>
          <button type="button" class="btn btn-light">اضغط هنا</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BranchName: "اسم الفرع",
      Adress:
        "العنوان بالتفصيل : القاهره مدينه الزمالك شارع 15 بجوار مطعم كنتاكي",
      Phone: "0165486767",
      Hotline: "545545",
      src: "",
    };
  },
};
</script>

<style scoped>
.card-Branch{
    background-color:var(--light-blue) ;
    color: white;
    margin-right: 60px;
  }
.card-body {
  padding: 30px;
}
.card-body h5 {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
}
.card-body p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
iframe{
  margin-right: 5px;
}
</style>
