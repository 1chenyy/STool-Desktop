<script setup lang="ts">
import Utils from "../help/Utils.ts";

function titleClickEvent(type: string) {
  Utils.adjustWindows(type)
}
</script>

<template>
  <div class="bar">
    <span class="min" @click="titleClickEvent('min')" title="最小化">
      <svg t="1595917239849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1155" style="width:8px;height:14px"><path
          d="M0 479.936C0 444.64 28.448 416 64.064 416L959.936 416C995.328 416 1024 444.736 1024 479.936L1024 544.064C1024 579.392 995.552 608 959.936 608L64.064 608C28.672 608 0 579.264 0 544.064L0 479.936Z"
          p-id="1156" fill="#ffffff"></path></svg>
    </span>
    <span class="max" @click="titleClickEvent('max')" title="最大化">
      <svg t="1595917343956" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1540" style="width:8px;height:14px"><path
          d="M416 416 64.064 416C28.448 416 0 444.64 0 479.936L0 544.064C0 579.264 28.672 608 64.064 608L416 608 416 959.936C416 995.552 444.64 1024 479.936 1024L544.064 1024C579.264 1024 608 995.328 608 959.936L608 608 959.936 608C995.552 608 1024 579.36 1024 544.064L1024 479.936C1024 444.736 995.328 416 959.936 416L608 416 608 64.064C608 28.448 579.36 0 544.064 0L479.936 0C444.736 0 416 28.672 416 64.064L416 416Z"
          p-id="1541" fill="#ffffff"></path></svg>
    </span>
    <span slot="reference" class="close" @click="titleClickEvent('close')" title="关闭">
        <svg t="1595917372551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1685" style="width:8px;height:14px"><path
            d="M511.968 376.224 796.096 92.096C833.536 54.624 894.4 54.624 931.84 92.096 969.312 129.568 969.312 190.4 931.84 227.872L647.744 512 931.84 796.096C969.312 833.568 969.312 894.4 931.84 931.872 894.4 969.344 833.536 969.344 796.096 931.872L511.968 647.744 227.84 931.872C190.4 969.344 129.536 969.344 92.096 931.872 54.624 894.4 54.624 833.568 92.096 796.096L376.224 512 92.096 227.872C54.624 190.4 54.624 129.568 92.096 92.096 129.536 54.624 190.4 54.624 227.84 92.096L511.968 376.224Z"
            p-id="1686" fill="#ffffff"></path></svg>
    </span>
  </div>
</template>

<style scoped lang="less">
.bar {
  width: 100%;
  height: 30px;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  user-select: none;

  span {
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 50%;
    text-align: center;
    line-height: 14px;
    display: inline-block;
    -webkit-app-region: no-drag;
  }

  .min {
    background-color: #32dc36;
  }

  .max {
    background-color: #ffbe2a;
  }

  .close {
    background-color: #ff5f56;
    margin-right: 20px;
  }
}
</style>
