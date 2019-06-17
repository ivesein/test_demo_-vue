<template>
  <div class="make-book-page">
    <div class="title">
      <p @click="screenshot">总目录</p>
    </div>
    <div class="table-box" ref="mytable">
      <div
        class="table-item table-left"
        v-for="(item, index) in tableData"
        :key="index"
      >
        <el-table
          :data="item.table"
          style="width: 100%"
          border
          align="center"
          :row-class-name="tableRowClassName"
          :span-method="arraySpanMethod"
        >
          <el-table-column
            align="center"
            prop="id"
            label="序号"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            header-align="center"
            align="left"
          ></el-table-column>
          <el-table-column
            prop="mapNum"
            label="图号"
            width="140"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pageNum"
            label="页码"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="备注"
            width="180"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script type="text/ecmascript-6">
import { tableData } from "utils/data.js";
import { cutArray } from "utils/cutArray.js";
import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      tableData: [],
      infoArr: {},
      imgSrc: ""
    }
  },
  components: {

  },
  created() {
    let arr = cutArray(tableData, 29);
    arr.forEach((v, k) => {
      let markeArr = []
      v.forEach(item => {
        v.forEach(i => {
          i.index = k;
        })
        if (item.remarks != "") {
          markeArr.push(item.remarks)
        }
      })
      let res = this.handleData(markeArr)
      this.infoArr = Object.assign(this.infoArr, res)
      this.tableData.push({
        table: v,
        remarkInfo: res
      })
    })
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // console.log(row, rowIndex)
      if (row.isTitle) {
        return 'title-row'
      } else {
        return ""
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      //选择要合并的列 此处为第五列
      if (columnIndex === 4) {
        // console.log("here item>>>", row)
        for (let i in this.tableData[row.index].remarkInfo) {
          if (row.remarks == i) {
            return {
              rowspan: this.tableData[row.index].remarkInfo[i],
              colspan: 1
            }
          }
        }
      }
    },
    handleData(arr) {
      return arr.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1) || 1;
        return prev;
      }, {});
    },
    screenshot() {
      var _this = this
      console.log("生成图片")
      html2canvas(document.body).then(function (canvas) {
        var dataUrl = canvas.toDataURL();
        _this.imgSrc = dataUrl
      });
    }
  }
}
</script>

<style scoped lang="scss">
.make-book-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // flex: 1;
  width: 100%;
  padding: 0 80px 80px 80px;
  // box-sizing: border-box;

  .title {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 24px;
      color: #000;
      font-weight: bold;
      letter-spacing: 24px;
      text-align: center;
      text-indent: 24px;
    }
  }

  .table-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 1142px;
    border: 1px solid #000;

    .table-item {
      display: block;
      width: 49%;
      height: 1142px;
      border: 1px solid #000;
    }
  }
}
</style>
<style>
.el-table {
  /* border: 1px solid #000; */
}

.el-table .title-row {
  font-weight: bold;
}
.el-table .el-table__row {
  height: 36px !important;
}

.el-table td {
  padding: 0;
  border: 1px solid #000;
}

.el-table th {
  padding: 0;
  border: 1px solid #000;
}
.el-table tr {
  /* border: 1px solid #000; */
}

.el-table .cell {
  display: block;
  height: 36px;
  line-height: 36px;
  color: #000;
}
</style>
