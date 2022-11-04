<template>
  <tr class="class-item" dir="rtl">
    <td class="class-id">1</td>
    <td class="class-name">{{ className }}</td>
    <td class="class-actions">
      <div class="d-flex align-items-center gap-4">
        <button class="btn btn-info" @click="showEditForm = true">
            <i class="fa-regular fa-pen-to-square ms-1"></i>
            تعديل
        </button>
        <button class="btn btn-info">
            <i class="fa-solid fa-trash ms-1"></i>
            حذف
        </button>
      </div>
    </td>
  </tr>
  <teleport to="body">
    <div class="edit-class-form" v-if="showEditForm">
      <form dir="rtl">
        <label>تغير اسم الصف</label>
        <input type="text" v-model="className" />
        <div class="actions text-center mt-5" dir="rtl">
          <button class="btn btn-success m-2">حفظ التغييرات</button>
          <button class="btn btn-danger m-2" @click="showEditForm = false">
            الغاء
          </button>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      className: "الأول الثانوي",
      showEditForm: false,
    };
  },
};
</script>

<style lang="scss">
.class-item {
  .btn {
    padding: 10px 20px;
    color: white;
  }
}
.edit-class-form {
  position: fixed;
  min-width: 30%;
  top: 20%;
  left: 5%;
  transform: translate(-10%, -20%);
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba($color: #000000, $alpha: 0.2);
  label {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 40px;
    color: #777;
    font-weight: bold;
  }
  input {
    width: 100%;
    border: none;
    padding: 10px 15px;
    border-bottom: 3px solid var(--blue-color);
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  .btn {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
  0% {
    transform: translate(-100%, -20%);
  }
  100% {
    transform: translate(-10%, -20%);
  }
}
</style>
