<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="show-sections">
      <div class="container">
        <div class="cover">
          <div class="container">
            <div class="bg">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="mt-30">
                    <label class="head">
                      <i class="fa-solid fa-file-pdf ms-2"></i> الملفات
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="right">
                    <router-link
                      :to="{ name: 'add_attachment', params: { id: id } }"
                      class="link"
                    >
                      اضافه ملف جديد
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="left">
                    <span>بحث : </span>
                    <input
                      v-model="state.search"
                      @keyup="searchAttachment(state.search)"
                      class="form-control form-control-sm"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="co-md-12">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class="thead-s">
                        <tr>
                          <th width="3%">#</th>
                          <th class="" width="10%">الفصل</th>
                          <th class="open" width="10%">اسم الملف</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Attachment
                          v-for="attachment in state.attachments"
                          :key="attachment.id"
                          :attachment="attachment"
                        />
                      </tbody>
                    </table>
                    <div
                      v-if="state.attachments.length <= 0"
                      class="alert alert-info"
                      role="alert"
                    >
                      لا توجد نتائج لعرضها !
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import AsideBar from "@/components/AsideBar.vue";
import axios from "axios";
import Attachment from "@/components/sections/Attachment/Attachment.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { Footer, AsideBar, Header, Attachment },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      attachments: [],
      items: [],
      search: "",
      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        try {
          let attachRes = await axios.get(
            "api_dashboard/attachment_get_by_classroom_id/" + props.id
          );
          if (attachRes.status == 200) {
            state.attachments = attachRes.data.data;
            state.items = attachRes.data.data;
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    });

    const searchAttachment = (key) => {
      state.attachments = state.items.filter((item) =>
        item.description.includes(key)
      );
    };

    return { state, searchAttachment };
  },
};
</script>

<style lang="scss">
.show-sections {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
