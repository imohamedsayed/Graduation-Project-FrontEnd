<template>
  <div class="card-Branch rounded mb-3">
    <div class="row flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse">
      <div class="col-md-4 map ">
      </div>
      <div class="col-md-8">
        <div class="card-body text-center">
          <h5 class="card-title">{{ branch.name }}</h5>
          <p class="card-text"> {{ branch.address }} </p>
          <p class="d-flex justify-content-between">
            <small>
              <i class="fa-solid fa-phone"></i> الخط الساخن : {{ branch.hot_line }} </small>
            <small><i class="fa-solid fa-phone"></i> رقم التلفون : {{ branch.phone_number }} </small>
          </p>
          <button type="button" @click="$router.push({
            name: 'stdhome',
            params: {
              id: branch.id,
              name: branch.name,
            },
          })" class="btn btn-light">اضغط هنا</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  props: ["wbranch"],
  data() {
    return {
      branch: this.wbranch
    };
  },
  setup(props) {
    const router = useRouter();
    onMounted(() => {
      let map = document.querySelectorAll('.map');
      for(let i = 0; i < map.length; i++) {
        if(props.wbranch.id === i + 1) {
          map[i].innerHTML = props.wbranch.map_location;
        }
      }
    })



  }
};
</script>

<style scoped>
.card-Branch {
  background-color: var(--light-blue);
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

iframe {
  margin-right: 5px;
}
</style>
