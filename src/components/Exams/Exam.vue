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


</style>
