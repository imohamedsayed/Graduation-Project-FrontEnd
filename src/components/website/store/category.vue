<template>
  <div class="col-lg-4 col-md-4">
    <div class="fcrse_1 m-3">
      <div class="tutor150" @click="goToShop(category.shop_id, category.id)">
        <!-- <router-link :to="{ name: 'websiteStore' }" class="tutor_name">
          {{ category.name }}
        </router-link> -->
        <div class="btn btn-light">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  methods: {
    goToShop(sid, id) {
      this.$router.push({
        name: "websiteStore",
        params: { sid, id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tutor150 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.fcrse_1 {
  background-color: var(--darker-blue) !important;
  border: 2px solid white;
}
.fcrse_1:hover {
  box-shadow: 1.6px 2px 2.7px rgba(0, 0, 0, 0.13),
    4.1px 5px 6.9px rgba(0, 0, 0, 0.186),
    8.3px 10.1px 14.2px rgba(0, 0, 0, 0.234),
    17.2px 20.8px 29.2px rgba(0, 0, 0, 0.29), 47px 57px 80px rgba(0, 0, 0, 0.42);
}
.tutor_name {
  font-size: 16px;
  font-weight: 500;
  color: white !important;
  text-align: center;
  position: relative;
}
</style>
