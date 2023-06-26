<template>
  <tr v-if="dell">
    <td class="check" @click="opened = !opened">
      {{ question.id }} <i v-if="opened" class="fa fa-circle-plus plus"></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td style="width: 20%">{{ question.question }}</td>
    <td class="open">{{ Math.round(question.point) }}</td>
    <td class="open">
      <img
        v-if="question.image"
        :src="'http://127.0.0.1:8000/' + question.image"
        style="width: 120px; height: 80px"
      />
      <p v-else>لا صورة</p>
    </td>
    <td class="open">
      {{ question.explanation ? question.explanation : "لا يوجد" }}
    </td>
    <td class="open">{{ question.type }}</td>
    <td class="open" v-if="type == 0">
      <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'questionMCQ',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
    </td>
    <td class="open" v-if="type == 1">
      <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'question_Multi_MCQ',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
    </td>
    <td class="open" v-if="type == 2">
      <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'questionT_F',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
    </td>
  </tr>
  <tr class="close" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>
          الدرجه:
          
          <div>{{ Math.round(question.point) }}</div>
        </li>
        <li>
          الصوره:
          <div>
            <img
        v-if="question.image"
        :src="'http://127.0.0.1:8000/' + question.image"
        style="width: 120px; height: 80px"
      />
      <p v-else>لا صورة</p>
          </div>
        </li>
        <li>
          التفسير:
         <div> {{ question.explanation ? question.explanation : "لا يوجد" }}</div>
        </li>
        <li>
          النوع:
         <div> {{ question.type }}</div>
        </li>
        <li>
          اضافه:
          <div v-if="type == 0">
            <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'questionMCQ',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
          </div>
          <div v-if="type == 1">
            <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'question_Multi_MCQ',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
          </div>
          <div v-if="type == 2">
            <button
        class="btn"
        :disabled="question.options.length > 0"
        @click="
          $router.push({
            name: 'questionT_F',
            params: { eid: examId, id: question.id },
          })
        "
      >
        اضافه اختيارات
      </button>
          </div>
        </li>


      </ul>
    </td>
  </tr>
  <tr v-if="!opened && dell">
    <td colspan="7">
      <div class="close">
        <div>الخصائص</div>
        <ul>
          <li
            class="btn"
            @click="
              $router.push({
                name: 'editQuestion',
                params: { id: question.id },
              })
            "
          >
            <i class="fa fa-trash"></i> تعديل
          </li>
          <li class="btn" @click="Delete()"><i class="fa fa-trash"></i> حذف</li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "question",
  props: ["question", "examId"],
  data() {
    return {
      opened: true,
      dell: true,
      showEditForm: false,
      type: 0,
    };
  },
  async mounted() {
    switch (this.question.type.toLowerCase()) {
      case "single choice":
        this.type = "0";
        break;
      case "multiple choice":
        this.type = "1";
        break;
      case "t/f":
        this.type = "2";
        break;
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async Delete() {
      Swal.fire({
        title: "هل انت متاكد",
        text: "لن تتمكن من التراجع عن هذا!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#363062",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم ، احذفها!",
        cancelButtonText: "لا ، إلغاء!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await axios.delete(
            "/api_dashboard/questions/" + this.question.id
          );

          if (res.status == 200) {
            Swal.fire("تم الحذف!", "تم حذف السؤال", "نجاح");
            this.dell = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
tr {
  img {
    width: 100px;
    border-radius: 5px;
  }

  div.close {
    display: flex;

    ul {
      display: flex !important;
      flex-wrap: wrap;
      gap: 5px;

      @media (min-width: 767px) {
        flex-direction: row;
      }

      li {
        width: -moz-fit-content !important;
        width: fit-content !important;
        border: none !important;
        border-radius: 5px;
        display: flex;
        justify-content: start;
        gap: 5px !important;
        align-items: center;
        cursor: pointer;

        a {
          color: white !important;
        }
      }
    }
  }
}

tr.close {
  @media (min-width: 767px) {
    display: none !important;
  }
}

.thumb_img {
  width: 100px;
  margin: 0 auto;
}

td {
  width: fit-content !important;
  border-left: 1px solid #efefef !important;
  font-weight: 500;

  .plus,
  .minus {
    margin-right: 5px;
    color: var(--darker-blue) !important;
    padding: 2px;
    background-color: #f7f7f7;
    border: var(--border);
    border-radius: 50%;
  }
}

tr div.close ul > div {
  margin: 0 auto;
}

td.check {
  cursor: pointer;
}

.edit-class-form {
  label {
    margin: 5px 0 !important;
  }

  input {
    padding: 5px 15px !important;
    font-size: 1rem !important;
  }
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  margin-top: 30px;
  border-radius: 5px;
  margin-bottom: 12px;
  thead {
    font-weight: 500;
    padding: 12px !important;
    border-radius: 4px;
    background-color: var(--darker-blue);
    color: #333 !important;
    th {
      border-bottom-left-radius: 0;
      border: 1px solid rgba(119, 119, 119, 0.239);
      font-size: 14px;
      color: white;
      padding: 12px;
      font-weight: bold;
    }
  }
  tbody {
    tr {
      background-color: #fff;
    }
  }
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #8f94fb87;
    border: 1px solid #fff;
    border-radius: 20px;
  }
}
.thumb_img {
  width: 120px;
  margin: 0 auto;
  img {
    width: 100%;
    border-radius: 5px;
  }
}
tr td {
  text-align: center;
  font-weight: 500;
}
button.btn {
  background: var(--darker-blue);
  color: white;
  opacity: 0.9;

  &:hover {
    background: var(--darker-blue);
    color: white;
    opacity: 1;
  }
}
</style>
