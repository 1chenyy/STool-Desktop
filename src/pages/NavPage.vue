<script setup lang="ts">
import Utils from "../help/Utils.ts";

function click() {
  Utils.startBackendWindows("data")
}
</script>

<template>
  <p>
    src/pages/NavPage.vue
  </p>
  <p>这是一个Electron+vue+antd+vite的应用框架模板</p>
  <p>/electron 是主进程的代码</p>
  <p>若要新增preload代码，建议在src/core/preload目录下定义，然后在electron/preload.ts文件中引用</p>
  <p>若要新增主进程代码，建议在src/core/ipc目录下定义，然后在electron/main.ts文件中引用</p>
  <p>路由信息在src/route/index.ts</p>
  <a-button type="primary" @click="click">打开后台窗口,参数为：data</a-button>
  <p>
    后台窗口用于新建一个新的窗口，用来执行耗时操作，利用Utils.startBackendWindows("data")打开并传递参数，在后台窗口中使用Utils.getBackendWindowParamsOnce()接受参数</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
  <p class="read-the-docs">更多内容.................</p>
</template>

<style scoped>
</style>
