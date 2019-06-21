<template>
  <div class="mune-box">
    <div class="make-book-page" v-for="(item, index) in pageData" :key="index">
      <div class="title">
        <p @click="getPic">总目录</p>
      </div>
      <div class="table-box" ref="mytable">
        <div
          class="table-item table-left"
          v-for="(v, index) in item"
          :key="index"
        >
          <el-table
            :data="v.table"
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
  </div>
</template>

<script type="text/ecmascript-6">
import { tableData } from "utils/data.js";
import { cutArray } from "utils/cutArray.js";
import html2canvas from 'html2canvas';
import { arabiaToSimplifiedChinese } from "utils/arabiaToSimplifiedChinese.js"
export default {
  data() {
    return {
      pageData: [],
      infoArr: {},
      imgSrc: ""
    }
  },
  components: {

  },
  created() {
    let num = arabiaToSimplifiedChinese("129");
    console.log("num>>>", num)
    let arr = []
    arr = cutArray(tableData, 58)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = cutArray(arr[i], 29)
    }
    arr.forEach((v1, k1) => {
      let res = null
      let tableData = [];
      v1.forEach((v, k2) => {

        let markeArr = []
        v.forEach(item => {
          v.forEach((i) => {
            i.index = [k1, k2];
          })
          if (item.remarks != "") {
            markeArr.push(item.remarks)
          }
        })
        res = this.handleData(markeArr)
        tableData.push({
          table: v,
          remarkInfo: res
        })
      })
      this.pageData.push(tableData)
    });
    console.log("this.pageData>>>", this.pageData)
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
      // console.log("row>>>", row.index)
      //选择要合并的列 此处为第五列
      if (columnIndex === 4) {
        // console.log("this.pageData index>>>", this.pageData[row.index[0]][row.index[1]])
        for (let i in this.pageData[row.index[0]][row.index[1]].remarkInfo) {
          // console.log("i>>>", i)
          if (row.remarks == i) {
            return {
              rowspan: this.pageData[row.index[0]][row.index[1]].remarkInfo[i],
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
    async getPic() {
      this.imgSrc = await this.screenshot(document.body);
      console.log(this.imgSrc)
    },
    screenshot(element) {
      return new Promise((resolve, reject) => {
        html2canvas(element).then(function (canvas) {
          var dataUrl = canvas.toDataURL();
          resolve(dataUrl)
        }, err => {
          reject(err);
        });
      })
    }
  }
}
</script>

<style scoped lang="scss">
.mune-box {
  width: 100%;
  height: auto;
}
.make-book-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // flex: 1;
  width: 100%;
  padding: 0 80px 80px 80px;

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
  box-sizing: border-box;
}
.el-table--border {
  border: 1px solid #000;
  border-right: none;
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
