<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.id }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.state }}</td>
    <td class="d-flex justify-content-center w-100">
      <label class="checkbox-btn">
    <label for="checkbox"></label>
    <input id="checkbox" type="checkbox">
    <span class="checkmark"></span>
</label>
    </td>
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
/* Customize the label (the checkbox-btn) */
.checkbox-btn {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-btn input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-btn label {
  cursor: pointer;
  font-size: 14px;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 2.5px solid black;
  transition: .2s linear;
}
.checkbox-btn input:checked ~ .checkmark {
  background-color: transparent;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  visibility: hidden;
  opacity: 0;
  left: 50%;
  top: 40%;
  width: 10px;
  height: 14px;
  border: 2px solid #0ea021;
  filter: drop-shadow(0px 0px 10px #0ea021);
  border-width: 0 2.5px 2.5px 0;
  transition: .2s linear;
  transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
}

/* Show the checkmark when checked */
.checkbox-btn input:checked ~ .checkmark:after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%) rotate(0deg) scale(1);
  animation: pulse 1s ease-in;
}

.checkbox-btn input:checked ~ .checkmark {
  transform: rotate(45deg);
  border: none;
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
  }
}


</style>
