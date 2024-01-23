<script setup lang="ts">
const {loading, chapters_all, chapters_five, comic_detail} = defineProps(['chapters_all','chapters_five','comic_detail','loading'])


</script>

<template>
  <div>
    <span class="py-2 text-[1.7rem] font-[300]">Thông tin truyện</span>
    <div v-if="loading" class="col-span-2 h-[200px] flex justify-center">
        <a-spin size="large" class="my-auto z-50" />
    </div> 
    <div v-else>
      <div class="grid grid-cols-6 pt-3 items-start pb-2">
      <div
        class="w-[160px] h-[240px] rounded-lg overflow-hidden cursor-pointer max-[768px]:col-span-2 max-[768px]:w-[110px] max-[768px]:h-[150px]"
      >
        <img
          class="hover:scale-110 ease-in duration-200"
          :src="comic_detail.detail.image"
        />
      </div>
      <div class="col-span-4 max-[768px]:col-span-4 flex-1">
        <h1 class="text-xl font-[500]">{{ comic_detail.detail.title }}</h1>
        <p class="text-sm py-1">
          <span class="font-[500]">Tác giả: </span>{{ comic_detail.detail.author }}
        </p>
        <p class="text-sm pb-1">
          <span class="font-[500]">Thể loại: </span>
          <span v-for="value in comic_detail.detail.genre" :key="value._id" class="px-1">{{ value.title + ',' }}</span>
        </p>
        <p class="text-sm pb-1 text-blue-500">
          <span class="font-[500] text-black">Trạng thái: </span>{{ !comic_detail.detail.status ? 'Đang ra' : 'Hoàn thành' }}
        </p>

        <p class="text-[0.85rem] leading-5">
          {{ comic_detail.detail.abbreviate }}
        </p>
      </div>
    </div>
    <span class="text-2xl font-[300]">Các chương mới nhất:</span>
    <div class="pb-5 pt-2 flex flex-col">
      <NuxtLink v-for="value in chapters_five" :key="value._id" :to="`/chapter?key=`+value.id_story + '&chap='+ value.number_chapter" class="text-sm py-1 leading-5 cursor-pointer hover:text-blue-500">Chương {{ value.number_chapter }}: {{ value.name_chapter }}</NuxtLink>
    </div>
    <span class="text-2xl font-[300]">Danh sách chương:</span>
    <div class="grid grid-rows-10 grid-flow-col gap-2 pt-2">
      <NuxtLink v-for="value in chapters_all.chapters" :key="value._id" :to="`/chapter?key=`+value.id_story + '&chap='+ value.number_chapter" class="text-sm leading-5 cursor-pointer hover:text-blue-500">
        Chương {{ value.number_chapter }}: {{ value.name_chapter }}
      </NuxtLink>
    </div>
    </div>
  </div>
</template>
