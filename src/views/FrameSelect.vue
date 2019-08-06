<template>
  <div class="frame-select-page">
    <div class="table-box" ref="area" id="area">
      <el-table
        :data="tableData"
        border
        ref="myTable"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
        @select="handleSelect"
      >
        <el-table-column type="selection" width="55" :selectable="selectable">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      mouseStopId: null,  // 定时器id
      mouseOn: false,  //是否开启框选功能
      // 用来存放鼠标点击初始位置
      startX: 0,
      startY: 0,
      multipleSelection: [],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
      ],
      beginSelect: false,
      selectedRow: []
    }
  },
  components: {

  },
  created() {
    this.tableData.forEach((v, k) => {
      v.index = k
    })
  },
  computed: {
  },
  mounted() {
    // this.createFrame()
  },
  methods: {
    handleSelect(selection, row) {
      console.log("selection>>>", selection)
      console.log("row>>>", row)

    },
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.myTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.myTable.clearSelection();
    //   }
    // },
    selectable(row, index) {
      console.log("row>>>", row)
      console.log("index>>>", index)
      if (this.multipleSelection.length === 0) {
        return true
      } else if (row.index === this.multipleSelection[0].index - 1 || row.index === this.multipleSelection[this.multipleSelection.length - 1].index + 1) {
        return true
      } else if (row.index === this.multipleSelection[0].index || row.index === this.multipleSelection[this.multipleSelection.length - 1].index) {
        return true
      } else {
        return false
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.sort(this.createComprison("index"));
      // console.log("val>>>", val)
      console.log("multipleSelection>>>", this.multipleSelection)
    },
    createComprison(val) {
      return (obj1, obj2) => {
        var value1 = obj1[val];
        var value2 = obj2[val]
        if (value1 < value2) {
          return -1
        } else if (value1 > value2) {
          return 1
        } else {
          return 0
        }
      }
    },
    handleRowClick(row) {
      console.log(row)
      // if (this.multipleSelection.length === 0) {
      //   this.$refs.myTable.toggleRowSelection(row);
      //   return
      // }
      // if (Math.abs(row.index - this.multipleSelection[0].index) === 1 || Math.abs(row.index - this.multipleSelection[this.multipleSelection.length - 1].index) === 1) {
      //   this.$refs.myTable.toggleRowSelection(row);
      // } else {
      //   this.$message.error("请连续选取")
      // }
      // this.multipleSelection.push(row)
    },
    // cellMouseEnter(row) {
    //   // console.log(this.beginSelect)
    //   // if (this.beginSelect) {
    //   //   console.log(row)
    //   //   if (this.selectedRow.includes(row.index)) { return }
    //   //   this.selectedRow.push(row.index)
    //   // }
    // },
    createFrame() {
      let areaDom = this.$refs.area;
      let tableOffsetTop = this.$refs.myTable;
      console.log("tableOffsetTop>>>", tableOffsetTop)
      // let areaDom = document.getElementById("area");
      console.log("areaDom>>>>", areaDom)
      // 监听鼠标移动事件
      areaDom.addEventListener("mousedown", e => {
        // console.log(e)
        //阻止事件冒泡
        this.clearEventBubble(e);
        this.mouseOn = true;
        // 判断是否为鼠标左键被按下
        if (e.buttons !== 1 || e.which !== 1) return;
        // this.mouseStopId = setTimeout(() => {
        if (!this.mouseOn) return;
        // clientX clientY 点击位置距离当前body可是区域的x，y坐标
        this.startX = e.clientX - areaDom.offsetLeft + areaDom.scrollLeft;
        this.startY = e.clientY - areaDom.offsetTop + areaDom.scrollTop;
        //创建一个选框元素
        var fsDiv = document.createElement("div");
        fsDiv.style.cssText = "position:absolute;width:0;height:0;margin:0;padding:0;border:1px dashed #eee;background-color:#aaa;z-index:1000;opacity:0.6;display:none;";
        fsDiv.id = "frameSelect"
        //添加选框元素到容器内
        areaDom.appendChild(fsDiv);
        //根据起始位置 添加定位
        fsDiv.style.left = this.startX + 'px';
        fsDiv.style.top = this.startY + 'px';
      });
      // 监听鼠标移动事件
      areaDom.addEventListener("mousemove", e => {

        // console.log(e)
        //并非选框开启  退出
        if (!this.mouseOn) return;
        if (!this.beginSelect) {
          this.beginSelect = true
        }
        //阻止事件冒泡
        this.clearEventBubble(e);
        // 获取当前坐标
        var _x = e.clientX - areaDom.offsetLeft + areaDom.scrollLeft;
        var _y = e.clientY - areaDom.offsetTop + areaDom.scrollTop;
        var _h = areaDom.clientHeight;
        //鼠标移动超出容器内部
        //向下拖拽
        if (_y >= _h && areaDom.scrollTop <= _h) {
          areaDom.scrollTop += _y - _h
        }
        //向上拖拽
        if (e.clientY <= areaDom.offsetTop && areaDom.scrollTop > 0) {
          areaDom.scrollTop = Math.abs(e.clientY - areaDom.offsetTop)
        }
        // 根据坐标给选框修改样式
        var fsDiv = document.getElementById("frameSelect");
        // console.log("fsDiv>>>", fsDiv)
        if (!fsDiv) return
        fsDiv.style.display = 'block';
        fsDiv.style.left = Math.min(_x, this.startX) + 'px';
        fsDiv.style.top = Math.min(_y, this.startY) + 'px';
        fsDiv.style.width = Math.abs(_x - this.startX) + 'px';
        fsDiv.style.height = Math.abs(_y - this.startY) + 'px';
      });

      //框选结束 松开左键
      areaDom.addEventListener("mouseup", e => {
        this.mouseOn = false;
        this.beginSelect = false
        this.clearEventBubble(e);
        // setTimeout(() => {
        var fsDiv = document.getElementById("frameSelect");
        var fstop = fsDiv.offsetTop
        var fsbot = fsDiv.offsetTop + fsDiv.offsetHeight;
        // var l = fsDiv.offsetLeft;
        // var t = fsDiv.offsetTop;
        // var w = fsDiv.offsetWidth;
        // var h = fsDiv.offsetHeight;
        let rows = document.getElementsByClassName("el-table__row");
        console.log(rows)
        let selectedEls = []
        for (var i = 0; i < rows.length; i++) {
          var seltop = rows[i].offsetTop;
          var selbot = rows[i].offsetHeight + rows[i].offsetTop;
          console.log("fstop", fstop)
          console.log("fsbot", fsbot)
          console.log("seltop", seltop)
          console.log("selbot", selbot)
          console.log("---------------")

          if (seltop < fstop && selbot > fsbot) {
            selectedEls.push(rows[i]);
          }
        }
        console.log(selectedEls);
        if (fsDiv) {
          areaDom.removeChild(fsDiv)
        }
      })
    },
    clearEventBubble(e) {
      if (e.stopPropagation) e.stopPropagation();
      else e.cancelBubble = true;

      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
    }
  }
}
</script>

<style scoped lang="scss">
.frame-select-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .table-box {
    position: relative;
    width: 1200px;
    height: 800px;
    border: 1px solid #eee;
    overflow: hidden;
    overflow-y: auto;
  }
  .fileDiv {
    display: inline-block;
    width: 100%;
    height: 100px;
    margin: 24px;
    background-color: #0082cc;
  }
}
</style>
<style>
.el-table .row-selected {
  background: #0082cc !important;
}
</style>
