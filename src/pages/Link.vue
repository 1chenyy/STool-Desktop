<script setup lang="ts">
import {LinkOutlined, CloudUploadOutlined, CloudDownloadOutlined, SettingOutlined} from '@ant-design/icons-vue';
import {h, ref} from "vue";

const search = ref<string>('');
class Link {
  id: number = 0;
  name: string = "";
  iconUrl: string = "";
  iconBgColor: string = "#ffffff";
  isDefaultIcon: boolean = true;
  comment: string = "";
  uid: string = "";
  timestamp: number = 0;
  serno: string = "";
  isEnc: boolean = false;
}
const list = ref(Array<Link>);

</script>

<template>
  <div>
    <a-divider>
      <LinkOutlined/>
      <span> 网页收藏</span>
    </a-divider>
    <a-row style="margin-bottom: 5px" align="middle">
      <a-col :span="20">
        <a-input v-model.trim:value="search" placeholder="请输入关键字"/>
      </a-col>
      <a-col :span="4">
        <a-row justify="center">
          <a-space>
            <a-tooltip title="上传">
              <a-button type="primary" shape="circle" :icon="h(CloudUploadOutlined)" size="small"/>
            </a-tooltip>
            <a-tooltip title="下载">
              <a-button type="primary" shape="circle" :icon="h(CloudDownloadOutlined)" size="small"/>
            </a-tooltip>
            <a-tooltip title="配置">
              <a-button type="primary" shape="circle" :icon="h(SettingOutlined)" size="small"/>
            </a-tooltip>
          </a-space>
        </a-row>
      </a-col>
    </a-row>
    <a-list
        item-layout="horizontal"
        :data-source="list">
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a>edit</a>
            <a>more</a>
          </template>
          <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <template #avatar>
              <a-avatar :src="item.picture.large"/>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style scoped lang="less">

</style>
