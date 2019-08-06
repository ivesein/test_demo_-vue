<template>
  <div class="drag-demo-page">
    <div class="drag-item-box">
      <div
        class="drag-item drag-text"
        @mousedown="handleMouseDown($event)"
        @mouseup="handleMouseUp($event)"
      >
        text
      </div>
      <div class="drag-item drag-input">input</div>
      <div class="drag-item drag-date">date</div>
    </div>
    <!-- <div
      class="drag-container"
      @ondrop="drop($event)"
      @ondragover="allowDrop($event)"
    ></div>
    <div class="drag-item-box">
      <div
        class="drag-item drag-text"
        @dragstart="drag($event)"
        draggable="true"
        id="text"
      >
        text
      </div>
      <div class="drag-item drag-input">input</div>
      <div class="drag-item drag-date">date</div>
    </div>
    <div
      class="drag-container"
      @drop="drop($event)"
      @dragover="allowDrop($event)"
    ></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery';
export default {
  data() {
    return {
      isDragging: false,
      targetEl: null
    }
  },
  components: {

  },
  mounted() {
    document.addEventListener('mousemove', this.mouseMove)
  },
  methods: {
    handleMouseDown(e) {
      console.log("handleMouseDown>>>", e)
      this.isDragging = true
      // e.target.draggable=true
      this.targetEl = e.target
    },
    handleMouseUp(e) {
      console.log("handleMouseUp>>>", e)
      this.isDragging = false
      // e.target.draggable=false
      this.targetEl = null
    },
    mouseMove() {
      console.log("here")
      if (this.isDragging) {
      }
    },
    // allowDrop(ev) {
    //   ev.preventDefault();
    // },
    // drag(ev) {
    //   ev.dataTransfer.setData("Text", ev.target.id);
    // },
    // drop(ev) {
    //   ev.preventDefault();
    //   var data = ev.dataTransfer.getData("Text");
    //   ev.target.appendChild(document.getElementById(data));
    // }
  }
}
</script>

<style scoped lang="scss">
.drag-demo-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .drag-item-box {
    position: relative;
    width: 200px;
    height: 800px;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    align-items: center;

    .drag-item {
      width: 160px;
      height: 40px;
      border: 1px dashed #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px 0;
      font-size: 16px;
      color: #333;
    }
  }

  .drag-container {
    position: relative;
    width: 800px;
    height: 800px;
    border: 1px solid #333;
  }
}
</style>
