<script setup lang="ts">
import {StarOutlined, LinkOutlined} from '@ant-design/icons-vue';
import {reactive, ref, VueElement, h} from "vue";
import type {MenuProps, ItemType} from 'ant-design-vue';
import TitleBar from "../components/TitleBar.vue";
import {useRouter} from "vue-router";

const isCollapse = ref(false)
const openKeys = ref<string[]>(['/main/page1']);
const menuItems: ItemType[] = reactive([
  getItem("网页收藏", "/main/link", () => h(LinkOutlined)),
  getItem("nva 2", "page2", () => h(StarOutlined)),
  getItem("nva 3", "page3", () => h(StarOutlined)),
  getItem("nva 4", "page4", () => h(StarOutlined)),
  getItem("nva 5", "page5", () => h(StarOutlined)),
  getItem("nva 6", "page6", () => h(StarOutlined)),
  getItem("nva 7", "page7", () => h(StarOutlined)),
  getItem("nva 8", "page8", () => h(StarOutlined)),
  getItem("nva 9", "page9", () => h(StarOutlined)),
  getItem("nva 10", "page10", () => h(StarOutlined)),
  getItem("nva 11", "page11", () => h(StarOutlined)),
  getItem("nva 12", "page12", () => h(StarOutlined)),
])
const route = useRouter()
const menuClick: MenuProps['onClick'] = e => {
  route.push({path: e.key as string})
}

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}
</script>

<template>
  <div id="app">
    <div class="left-content">
      <img src="/app-icon.svg" ondragstart="return false;" @click="isCollapse = !isCollapse"
           :class="{ largeImg : !isCollapse, smallImg: isCollapse }" alt=""/>
      <a-menu id="menu" :inline-collapsed="isCollapse"
              mode="inline"
              :items="menuItems"
              @click="menuClick"
              v-model:selectedKeys="openKeys"
      />
    </div>
    <div class="right-content">
      <TitleBar/>
      <a-card id="main" :bordered="false">
        <router-view/>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: row;

  .left-content {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    -webkit-app-region: drag;
    user-select: none;

    img {
      margin-top: 20px;
      -webkit-app-region: none;
    }

    .largeImg {
      width: 60px;
      height: 60px;
    }

    .smallImg {
      width: 30px;
      height: 30px;
    }

    #menu {
      margin-top: 20px;
      border-right: 0;
      -webkit-app-region: none;
      overflow-y: auto;
      flex-grow: 1;

      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #48A2FFaa;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #ffffff;
      }
    }
  }

  .right-content {
    flex-grow: 1;
    height: 100vh;
    background-color: #F2F6F9;
    display: flex;
    flex-direction: column;

    #main {
      position: relative;
      height: calc(100% - 20px);
      margin: 0 10px 10px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #48A2FFaa;
      }

      &::-webkit-scrollbar-track {
        border-radius: 5px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #ffffff;
      }
    }
  }
}
</style>
