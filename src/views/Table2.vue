<template>
  <div class="table-page">
    <el-table
      :data="tableData"
      style="width: 100%;height: 100%;margin:0 auto"
      class="tableBox"
      :cell-style="cellStyle"
      row-key="task_id"
      @selection-change="handleSelectionChange"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="task_id" label="序号" width="60"></el-table-column>
      <el-table-column
        prop="serialNumber"
        label="任务代码"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="task_name"
        label="WBS任务名称"
        width="120"
      ></el-table-column>
      <el-table-column label="设计（勘察、测绘）">
        <el-table-column prop="design_owner" label="承担人" width="100">
        </el-table-column>
        <el-table-column prop="design_endtime" label="开始日期" width="100">
        </el-table-column>
        <el-table-column prop="design_endtime" label="结束日期" width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="复核">
        <el-table-column label="阶段" width="200">
          <template slot-scope="scope">
            <div class="recheck-box" v-show="!(scope.row.type === 'project')">
              <div class="recheck-top">
                首次复核
              </div>
              <div class="recheck-mid">
                <div class="mid-left">
                  整改
                </div>
                <div class="mid-right">
                  <div class="mid-right-item mid-right-top">
                    修改
                  </div>
                  <div class="mid-right-item">
                    修改确认
                  </div>
                </div>
              </div>
              <div class="recheck-bot">
                复核确认
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="承担人">
          <template slot-scope="scope">
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_first_owner }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_first_owner }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_first_owner }}
            </div>
            <div
              class="checek-man"
              style="border:none"
              v-show="!(scope.row.type === 'project')"
            >
              {{ scope.row.review_first_owner }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="持续时间">
          <template slot-scope="scope">
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_first_duration }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_modify_duration }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.review_mod_con_duration }}
            </div>
            <div
              class="checek-man"
              style="border:none"
              v-show="!(scope.row.type === 'project')"
            >
              {{ scope.row.review_confirm_duration }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="完成并提交日期"
          prop="review_submittime"
        ></el-table-column>
      </el-table-column>
      <el-table-column label="一审">
        <el-table-column label="阶段" width="200">
          <template slot-scope="scope">
            <div class="recheck-box" v-show="!(scope.row.type === 'project')">
              <div class="recheck-top">
                首次审核
              </div>
              <div class="recheck-mid">
                <div class="mid-left">
                  整改
                </div>
                <div class="mid-right">
                  <div class="mid-right-item mid-right-top">
                    修改
                  </div>
                  <div class="mid-right-item">
                    修改确认
                  </div>
                </div>
              </div>
              <div class="recheck-bot">
                审核确认
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="承担人">
          <template slot-scope="scope">
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_first_owner }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_modify_owner }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_mod_con_owner }}
            </div>
            <div
              class="checek-man"
              style="border:none"
              v-show="!(scope.row.type === 'project')"
            >
              {{ scope.row.audit_first_duration }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="持续时间">
          <template slot-scope="scope">
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_first_duration }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_modify_duration }}
            </div>
            <div class="checek-man" v-show="!(scope.row.type === 'project')">
              {{ scope.row.audit_mod_con_duration }}
            </div>
            <div
              class="checek-man"
              style="border:none"
              v-show="!(scope.row.type === 'project')"
            >
              {{ scope.row.audit_confirm_duration }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="完成并提交日期"
          prop="review_submittime"
          width="100"
        ></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import tableData from "../utils/table"
export default {
  data() {
    return {
      multipleSelection: [],
      tableData: null
    }
  },
  components: {

  },
  created() {
    console.log(tableData)
    this.tableData = tableData
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "padding-left: 0px!important;padding-right: 0px!important;"
    }
  }
}
</script>

<style scoped lang="scss">
.table-page {
  width: 100%;
  // height: 100%;
  overflow: auto;
}
.recheck-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.recheck-box div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.recheck-box .recheck-top {
  width: 100%;
  height: 30px;
}
.recheck-box .recheck-mid {
  width: 100%;
  display: flex;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.recheck-box .recheck-mid .mid-left {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.recheck-box .recheck-mid .mid-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid #ebeef5;
}
.mid-right-item {
  width: 100%;
  height: 30px;
}
.mid-right-top {
  border-bottom: 1px solid #ebeef5;
}
.recheck-bot {
  width: 100%;
  height: 30px;
}
.checek-man {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
}
</style>
<style>
.my-cell {
  padding-left: 0;
  padding-right: 0;
}
.el-table .cell {
  padding: 0px;
}
</style>
