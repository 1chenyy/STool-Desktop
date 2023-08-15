<script setup lang="ts">
import {ref} from "vue";
import Utils from "../../help/Utils.ts";

const data = ref(Utils.getBackendWindowParamsOnce())
</script>

<template>
  <div>
    <p>src/pages/backend/BackendPage.vue</p>
    <p>这是一个后台界面，接收到的参数是：{{ data }}</p>
  </div>
</template>

<style scoped lang="less">

</style>
