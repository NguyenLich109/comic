<template>
  <div class="grid grid-cols-4 gap-3 items-start pt-[14px]">
    <div class="p-3 bg-slate-200 rounded-md max-[768px]:hidden">
      <h1 class="text-base font-semibold">Truyện mới cập nhật</h1>
      <div v-if="loading" class="col-span-2 h-[200px] flex justify-center">
        <a-spin class="my-auto z-50" />
      </div>
      <ul v-else>
        <li v-for="(val, index) in chapters" class="pt-3" :key="val._id">
          <NuxtLink :to="'/comic?key=' + val.id_story?._id">
            <div class="grid grid-cols-3 gap-1 items-center">
              <p
                class="col-span-2 h-[20px] cursor-pointer text-[0.85rem] font-semibold line-clamp-1 hover:text-blue-500"
              >
                {{ val.id_story?.title }}
              </p>
              <p class="text-[0.65rem] text-center line-clamp-1">
                {{ !!val.id_story?.genre && val.id_story?.genre[0].title }}
              </p>
            </div>
          </NuxtLink>
          <NuxtLink :to="'/chapter?key=' + val.id_story?._id + '&chap='+ val.number_chapter">
            <div
              class="flex items-center justify-between hover:text-blue-500 cursor-pointer"
            >
              <span class="text-[0.8rem]"
                >Chapter: {{ val.number_chapter }}</span
              >
              <span class="text-[0.8rem]">{{
                !!val.createdAt ? CalculateTimeAgo(val?.createdAt) : ""
              }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="col-span-3 border rounded-md p-3 max-[768px]:col-span-4">
      <h1 class="text-base font-semibold">Danh sách truyện</h1>
      <ModuleListComic :all_comics="all_comics" :loading="loading"></ModuleListComic>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModuleListComic from "~/module/ModuleListComic.vue";
import CalculateTimeAgo from "~/times";

const { loading, all_comics, chapters } = defineProps([
  "all_comics",
  "chapters",
  "loading",
]);
</script>
