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
                      <i class="fa-solid fa-bars ms-2"></i> الملاحظات
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="right">
                    <router-link
                      :to="{ name: 'add_note', }"
                      class="link"
                    >
                      اضافه ملاحظة جديدة
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
                      @keyup="searchNote(state.search)"
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
                          <th class="open" width="10%">الملاحظة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Note
                          v-for="note in state.notes"
                          :key="note.id"
                          :note="note"
                        />
                      </tbody>
                    </table>
                    <div
                      v-if="state.notes.length <= 0"
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
import Note from "@/components/sections/Notes/Note.vue";
import axios from "axios";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { Footer, AsideBar, Note, Header },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      notes: [],
      items: [],
      search: "",
      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        try {
          let notesRes = await axios.get(
            "api_dashboard/notes_get_by_classroom_id/" + props.id
          );
          if (notesRes.status == 200) {
            state.notes = notesRes.data.data;
            state.items = notesRes.data.data;
          }
        } catch (err) {
          console.error(err);
        }
      }
    });

    const searchNote = (key) => {
      state.notes = state.items.filter((item) =>
        item.description.includes(key)
      );
    };

    return { state, searchNote };
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
