<template>
  <div class="table-page">
    <el-table
      :data="tableData"
      style="width: 100%;height: 100%;margin:0 auto"
      class="tableBox"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        prop="task_id"
        label="序号"
        width="60"
      ></el-table-column>
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
        <el-table-column
          prop="design_owner"
          label="承担人"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="design_endtime"
          label="开始日期"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="design_endtime"
          label="结束日期"
          width="100"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column label="复核阶段">
        <el-table-column label="首次复核">
          <el-table-column
            prop="review_first_owner"
            label="承担人"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="review_first_duration"
            label="持续时间"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="review_submittime"
            label="完成并提交日期"
            width="100"
          ></el-table-column>
        </el-table-column>
        <el-table-column label="整改">
          <el-table-column label="修改">
            <el-table-column
              prop="review_modify_owner"
              label="承担人"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="review_mod_con_owner"
              label="持续时间"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="review_submittime"
              label="完成并提交日期"
              width="100"
            ></el-table-column>
          </el-table-column>
          <el-table-column label="修改确认">
            <el-table-column
              prop="review_first_owner"
              label="承担人"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="review_modify_duration"
              label="持续时间"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="review_submittime"
              label="完成并提交日期"
              width="100"
            ></el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="复核确认">
          <el-table-column
            prop="review_confirm_owner"
            label="承担人"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="review_confirm_duration"
            label="持续时间"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="review_submittime"
            label="完成并提交日期"
            width="100"
          ></el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="一审阶段">
        <el-table-column label="首次审核">
          <el-table-column
            prop="audit_first_owner"
            label="承担人"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="audit_first_duration"
            label="持续时间"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="audit_submittime"
            label="完成并提交日期"
            width="100"
          ></el-table-column>
        </el-table-column>
        <el-table-column label="整改">
          <el-table-column label="修改">
            <el-table-column
              prop="audit_modify_owner"
              label="承担人"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="audit_modify_duration"
              label="持续时间"
              width="100"
            ></el-table-column>
          </el-table-column>
          <el-table-column label="修改确认">
            <el-table-column
              prop="audit_mod_con_owner"
              label="承担人"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="audit_mod_con_duration"
              label="持续时间"
              width="100"
            ></el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="审核确认">
          <el-table-column
            prop="audit_confirm_owner"
            label="承担人"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="audit_confirm_duration"
            label="持续时间"
            width="100"
          ></el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="audit_submittime"
        label="完成并提交日期"
        width="100"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData: [
        {
          task_id: 1, //序号
          serialNumber: "00", //任务代码
          task_name: "西藏墨脱项目", //任务名称
          design_owner: "", //设计承担人
          design_starttime: "", //设计开始日期
          design_endtime: "", //设计结束日期
          review_first_owner: "", //复核首次复核承担人
          review_modify_owner: "", //复核整改修改承担人
          review_mod_con_owner: "", //复核整改修确认承担人
          review_confirm_owner: "", //复核确认承担人
          review_first_duration: "", //复核首次复核持续时间
          review_modify_duration: "", //复核整改修持续时间
          review_mod_con_duration: "", //复核整改修确认持续时间
          review_confirm_duration: "", //复核确认持续时间
          review_submittime: "", //完成并提交日期
          audit_first_owner: "", //一审阶段 首次审核 承担人
          audit_modify_owner: "", //一审阶段 整改 修改 承担人
          audit_mod_con_owner: "", //一审阶段 整改 修改确认 承担人
          audit_confirm_owner: "", //一审阶段 审核确认 承担人
          audit_first_duration: "", //一审阶段 首次审核 持续时间
          audit_modify_duration: "", //一审阶段 整改 修改 持续时间
          audit_mod_con_duration: "", //一审阶段 整改 修改确认 持续时间
          audit_confirm_duration: "", //一审阶段 审核确认 持续时间
          audit_submittime: "", // 完成并提交日期
          qualityplan_version: "", //任务版本号
          d_pid: -1 //任务代码
        },
        {
          task_id: 2,
          serialNumber: "01",
          task_name: "内页设计工作",
          design_owner: "",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 1
        },
        {
          task_id: 3,
          serialNumber: "0101",
          task_name: "基础数据处理",
          design_owner: "",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 2
        },
        {
          task_id: 4,
          serialNumber: "010101",
          task_name: "平纵数据自检修改完成",
          design_owner: "设计人1",
          design_starttime: "2019-10-31",
          design_endtime: "2019-10-31",
          review_first_owner: "设计人2",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "0.4",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "2019-11-04",
          audit_first_owner: "审核人1",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "1",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "2019-11-08",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 5,
          serialNumber: "010102",
          task_name: "路基",
          design_owner: "设计人1",
          design_starttime: "2019-10-31",
          design_endtime: "2019-10-31",
          review_first_owner: "设计人2",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "0.4",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "2019-11-04",
          audit_first_owner: "审核人1",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "1",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "2019-11-08",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 6,
          serialNumber: "010103",
          task_name: "桥梁",
          design_owner: "设计人1",
          design_starttime: "2019-10-31",
          design_endtime: "2019-10-31",
          review_first_owner: "设计人2",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "0.4",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "2019-11-04",
          audit_first_owner: "审核人1",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "1",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "2019-11-08",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 7,
          serialNumber: "010104",
          task_name: "涵洞",
          design_owner: "设计人1",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 8,
          serialNumber: "010105",
          task_name: "平纵数据他检修改完成",
          design_owner: "设计人1",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 9,
          serialNumber: "010106",
          task_name: "路基数据进行CTR文件编辑",
          design_owner: "设计人1",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 3
        },
        {
          task_id: 10,
          serialNumber: "010107",
          task_name: "基础数据处理审核",
          design_owner: "设计人1",
          design_starttime: "",
          design_endtime: "",
          review_first_owner: "",
          review_modify_owner: "",
          review_mod_con_owner: "",
          review_confirm_owner: "",
          review_first_duration: "",
          review_modify_duration: "",
          review_mod_con_duration: "",
          review_confirm_duration: "",
          review_submittime: "",
          audit_first_owner: "",
          audit_modify_owner: "",
          audit_mod_con_owner: "",
          audit_confirm_owner: "",
          audit_first_duration: "",
          audit_modify_duration: "",
          audit_mod_con_duration: "",
          audit_confirm_duration: "",
          audit_submittime: "",
          qualityplan_version: "",
          d_pid: 3
        }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.table-page {
  width: 100%;
  // height: 100%;
  overflow: auto;
}
</style>
