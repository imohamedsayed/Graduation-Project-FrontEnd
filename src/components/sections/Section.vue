<template>
  <tr>
    <td class="check" @click="opened = !opened">{{ section.id }} 
      <i v-if="opened" class="fa fa-circle-plus plus "></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td>{{ section.course }}</td>
    <td class="open">
      {{ section.tech }}
    </td>
    <td class="open">{{ section.max }}</td>
    <td class="open">{{ section.price }}EGP</td>
    <td class="open">
      <i class="fa-solid fa-circle-check exam" v-if="section.exam"></i>
      <i class="fa-solid fa-circle-xmark exam" v-else></i>
    </td>
    <td class="open">{{ section.start }}</td>
    <td class="open">{{ section.end }}</td>
    <td class="open">
      <a class=" show" @click="this.redirectTo({
        name: 'applicant_students',
        params: { id: section.id, course: section.course, }
      })"> عرض الطلاب </a>
    </td>
  </tr>
  <tr class="close" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>المدرس : <div>{{ section.tech }}</div>
        </li>
        <li>السعة : <div>{{ section.max }}</div>
        </li>
        <li>السعر : <div>{{ section.price }} EGP</div>
        </li>
        <li>امتحان : <div><i class="fa-solid fa-circle-check exam" v-if="section.exam"></i>
        <i class="fa-solid fa-circle-xmark exam" v-else></i></div>
        </li>
        <li>تاريخ البدء : <div>{{ section.start }}</div>
        </li>
        <li>تاريخ الانتهاء : <div>
          {{ section.end }}
        </div>
        </li>
        <li> الطلاب : <a class="btn"
          @click="this.redirectTo({
            name: 'applicant_students',
            params: { id: section.id, course: section.course, }
          })"> عرض الطلاب 
          </a>
        </li>
      </ul>
    </td>
  </tr>
  <tr v-if="!opened">
    <td colspan="9">
      <div class="close">
        <div>الخصائص</div>
        <ul>
          <li class="btn" @click="
            this.redirectTo({
              name: 'Editesection', params: {
                id: section.id,
                course: section.course,
              }
            })
          
          ">
            <i class="fa fa-trash"></i> تعديل
          </li>
          <li class="btn" @click="Delete()"> <i class="fa fa-trash"></i> حذف</li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Manger",
  props: ["section"],
  data() {
    return {
      opened: true,
      showEditForm: false,
    }
  },
  methods:
  {
    ...mapActions(['redirectTo']),
    Delete() {
      Swal.fire({
        title: 'هل انت متاكد',
        text: "لن تتمكن من التراجع عن هذا!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#363062',
        cancelButtonColor: '#d33',
        confirmButtonText: 'نعم ، احذفها!',
        cancelButtonText: 'لا ، إلغاء!',
      }).then((result) => {
        if(result.isConfirmed) {
          Swal.fire(
            'تم الحذف!',
            'تم حذف الفرع',
            'نجاح'
          )
        }
      })
    }
  }
}
</script>



<style lang="scss">
.table-responsive tbody tr
{
  transition: all .5s ease-in-out;
  &:hover
  {
    background-color: rgb(0, 0, 0,.1);
  }
  a.show
  {
    background-color: var(--darker-blue) !important;
    display: block;
    width: fit-content;
    padding: 5px 10px;
    margin: auto;
    color: var(--white-color);
    cursor: pointer;
    border-radius: 5px;
    &:hover
    {
      color: antiquewhite;
    }
    
  }
  i.exam
  {
    background-color: var(--white-color);
    color: var(--darker-blue);
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
