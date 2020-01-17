<!--
 * @Description: 
 * @Version: 
 * @Company: ZD
 * @Author: Ivesein Zhang
 * @Date: 2019-09-02 17:47:27
 * @LastEditors: Ivesein Zhang
 * @LastEditTime: 2019-09-03 15:28:55
 -->
<template>
  <div class="jsPdf-page">
    <input
      type="button"
      value="下载PDF"
      @click="getImage"
      class="download-btn"
    />
    <div class="draw-box">
      <h1>这是生成PDF测试</h1>
      <span>第1行</span>
      <span>第2行</span>
      <span>第3行</span>
      <span>第4行</span>
      <span>第5行</span>
      <span>第6行</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { screenShot } from "utils/screenShot.js";
import jsPDF from 'jspdf';
import $ from 'jquery'
import { setTimeout } from 'timers';
export default {
  data() {
    return {

    }
  },
  components: {

  },
  mounted() {
    // setTimeout(() => { this.getImage() }, 0)

  },
  methods: {
    async getImage() {
      let el = $('.draw-box');
      console.log(el)
      // const w = el.outerWidth(),
      //   h = el.outerHeight();
      // var imgWidth = 595.28;//A4纸宽度
      // var imgHeight = 592.28 / w * h;
      let imgSrc = await screenShot(el[0])
      // console.log("imgSrc>>>", imgSrc)
      var pdf = new jsPDF('landscape', 'pt', 'a3');
      pdf.addImage(imgSrc, 'png', 0, 0);
      pdf.save('draw.pdf');
      var blob = pdf.output('blob');
      console.log(pdf)
      console.log("datauri>>>", blob)

    }
  }
}
</script>

<style scoped lang="scss">
.jsPdf-page {
  width: 100%;
  // height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #ccc;

  .draw-box {
    width: 800px;
    height: 1000px;
    background: #fff;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;

    span {
      margin-top: 20px;
    }
  }

  .download-btn {
    position: absolute;
    right: 40px;
    top: 40px;
  }
}
</style>
