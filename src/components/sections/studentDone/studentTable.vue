<template>
    <tr class="app-stu" v-if="exists">
      <td>{{ student.id }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.date }}</td>
    </tr>
  </template>
  
  <script>
  export default {
    props: ["student"],
    data() {
      return {
        exists: true,
      };
    },

  };
  </script>
  
  <style lang="scss">
  .app-stu {
    transition: all 0.3s ease;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
    button {
      &.approve {
        background: #4caf50 !important;
      }
      &.reject {
        background: #e91e63 !important;
      }
    }
  }
  </style>
  