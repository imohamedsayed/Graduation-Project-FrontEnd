<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.id }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.date }}</td>
    <td>
    حضر و دفع
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
