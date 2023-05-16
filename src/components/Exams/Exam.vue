<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.name }}</td>
    <td>{{ student.desc }}</td>
    <td>{{ student.startDate }}</td>
    <td>{{ student.endDate }}</td>
    <td>
      <i class="fa-solid fa-circle-check exam" v-if="status"></i>
      <i class="fa-solid fa-circle-xmark exam" v-else></i>
    </td>
    <td>
      <a
        class="show"
        @click="
          this.redirectTo({
            name: '',
            params: {},
          })
        "
      >
        عرض الاسئله
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      exists: true,   
      status:true 
    };
  },

};
</script>

<style lang="scss" scoped>
td i{
background-color: var(--white-color);
color:var(--darker-blue);
font-size: 20px;
font-weight: bold;
}

a.show {
    background-color: var(--darker-blue) !important;
    display: block;
    width: fit-content;
    padding: 5px 10px;
    margin: auto;
    color: var(--white-color);
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      color: antiquewhite;
    }
  }

</style>
