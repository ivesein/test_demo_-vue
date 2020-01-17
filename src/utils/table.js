var tData = [
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
    parent: 0, //任务代码
    type: "project" // 任务类型
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
    parent: 1, //任务代码
    type: "project" // 任务类型
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
    parent: 1, //任务代码
    type: "project" // 任务类型
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
    review_modify_duration: "0.2",
    review_mod_con_duration: "0.5",
    review_confirm_duration: "0.6",
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
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
    parent: 3, //任务代码
    type: "task" // 任务类型
  }
];

let arr = []; //用于存储所有任务的parent值和index值
let pidArr = [];
tData.forEach(function(v, k) {
  arr.push({
    pid: v.parent,
    index: k
  });
  // pidArr.push(v.pid);
});

// 取出所有项目的par
arr.forEach(function(v) {
  pidArr.push(v.pid);
});
// 数组去重 获取有子任务的task_id值
function distinct(a) {
  let result = [];
  let obj = {};
  for (let i of a) {
    if (!obj[i]) {
      result.push(i);
      obj[i] = 1;
    }
  }
  return result;
}
// pid数组去重  获取所有任务 所属的父任务 parent有哪些
pidArr = distinct(pidArr);

// 将所有parent相同的任务的 index值 存储到index数组
let arr2 = [];
pidArr.forEach(function(v) {
  arr2.push({
    pid: v,
    index: []
  });
});
arr2.forEach(function(v2) {
  arr.forEach(function(v1) {
    if (v2.pid === v1.pid) {
      v2.index.push(v1.index);
    }
  });
});

// 为每个任务添加children数组
let tableData = [];
arr2.forEach(function(v) {
  tData.forEach(function(td) {
    if (td.task_id === v.pid) {
      td.children = [];
      v.index.forEach(function(vindexv) {
        td.children.push(tData[vindexv]);
      });
    }
  });
});
// 拿到所有父级任务用与最终显示
tData.forEach(function(tdv) {
  if (tdv.parent == 0) {
    tableData.push(tdv);
  }
});
export default tableData;
