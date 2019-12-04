<template>
  <div>
    <TitleHeader></TitleHeader>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <SortedTable
              :values="examination_logs"
              ascIcon="<span> ▲</span>"
              descIcon="<span> ▼</span>"
            >
              <thead>
                <tr>
                  <th scope="col" style="text-align: left; width: 3rem;">
                    <SortLink name="id">#</SortLink>
                  </th>
                  <th scope="col" style="text-align: left; width: 10rem;">
                    <SortLink name="examination.title">Title</SortLink>
                  </th>
                  <th scope="col" style="text-align: left; width: 10rem;">
                    <SortLink name="examination.examination_type.name">Exam type</SortLink>
                  </th>
                  <th scope="col" style="text-align: left; width: 10rem;">
                    <SortLink name="total_score">Total Score</SortLink>
                  </th>
                  <th scope="col" style="text-align: left; width: 10rem;">
                    <SortLink name="created_at">Test day</SortLink>
                  </th>
                </tr>
              </thead>
              <tbody slot="body" slot-scope="sort">
                <tr v-for="(value, index) in sort.values" :key="value.index">
                  <td>{{ ++index }}</td>
                  <td>{{ value.examination.title }}</td>
                  <td>{{ value.examination.examination_type.name }}</td>
                  <td>{{ value.total_score }}</td>
                  <td>{{ value.created_at }}</td>
                </tr>
              </tbody>
            </SortedTable>
            <paginate
              :page-count="pageCount"
              :click-handler="getToeicHistories"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination'"
              :page-class="'page-item'"
            ></paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SortedTable, SortLink } from "vue-sorted-table";
import request from "@/utils/request";
import TitleHeader from "@/components/layouts/TitleHeader";
export default {
  name: "App",
  components: {
    SortedTable,
    SortLink,
    TitleHeader
  },
  data: function() {
    return {
      examination_logs: [],
      pageCount: 0
    };
  },
  created() {
    this.getToeicHistories();
  },
  methods: {
    getToeicHistories(page = 1) {
      request({
        url: "examination/toeic-exam-histories?page=" + page,
        method: "get"
      })
        .then(res => {
          this.examination_logs = res.data.result_data.examHistories;
          this.pageCount = res.data.result_data.totalPage;
        })
        .catch(err => {
          console.log(err.res);
        });
    }
  }
};
</script>
