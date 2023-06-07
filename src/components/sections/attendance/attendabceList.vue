<template>
  
</template>

<script>
export default {
  props: ["student","room_id"],
  setup(props) {





    setTimeout(() => {
      let select = document.querySelectorAll('#mySelect' + props.student.id);
      select.forEach(element => {
        element.addEventListener('change',() => {
          let selectedValue = element.value;
          if(selectedValue) {
            console.log(props.student.id + "    :   " + selectedValue);
          }
        })

      });
    },1000);
    return {}
  },
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

.radio-button {
  display: flex;
  gap: 10px;
  justify-content: srart;
  margin: 10px;
  position: relative;
  align-items: center;
}

.radio-button input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.radio {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transform: translateZ(-25px);
  transition: all 0.3s ease-in-out;
}

.radio::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.radio-button input[type="radio"]:checked+.radio {
  border-color: #5cb85c;
  transform: translateZ(0px);
  background-color: #fff;
}

.radio-button input[type="radio"]:checked+.radio::before {
  opacity: 1;
}
</style>
