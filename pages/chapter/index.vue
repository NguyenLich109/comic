<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { type_chapter } from "~/types";
import MoveChapter from "~/move_chapter";

let loading = ref<boolean>(true);
const chapter_detail = reactive<{ detail?: type_chapter }>({});

const route = useRoute();
const { key, chap } = route.query;
const { data: get_chapter_detail, pending } = await useFetch(
  `/api/chapter/detail?key=${key}&chap=${chap}`
);

loading.value = !pending.value && pending.value;
chapter_detail.detail = !!get_chapter_detail.value && get_chapter_detail.value;

watch(
  () => route.fullPath,
  async () => {
    const { data: get_chapter_detail, pending } = await useFetch(
      `/api/chapter/detail?key=${route.query.key}&chap=${route.query.chap}`
    );

    loading.value = !pending.value && pending.value;
    chapter_detail.detail =
      !!get_chapter_detail.value && get_chapter_detail.value;
  }
);

useSeoMeta({
  title: `${chapter_detail.detail?.name_chapter} | chapter: ${chapter_detail.detail?.number_chapter}`,
  ogTitle: `${chapter_detail.detail?.name_chapter} | chapter: ${chapter_detail.detail?.number_chapter}`,
  description:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogDescription:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogImage: `${chapter_detail.detail?.id_story?.image}`,
});

const handleMoveChapter = ({value}:{value:number}) => {
  const router = useRouter() 
  const val = MoveChapter({value, data:chapter_detail.detail})
  router.push(`/chapter?key=${chapter_detail.detail?.id_story?._id}&chap=${val}`)
}
</script>

<template>
  <div
    class="px-[30px] py-[16px] min-[768px]:min-w-[1140px] min-[768px]:w-[1140px] max-[768px]:max-w-[1140px] m-auto max-[768px]:px-[12px]"
  >
    <span class="text-2xl font-[400] flex justify-center"><NuxtLink :to="'/comic?key=' + chapter_detail.detail?.id_story?._id" >{{ chapter_detail.detail?.id_story?.title }}</NuxtLink></span>
    <h1 class="text-xl font-[300] text-center py-2">
      Chương {{ chapter_detail.detail?.number_chapter }}: {{ chapter_detail.detail?.name_chapter }}
    </h1>
    <div class="flex justify-center">
      <button
        @click="() => handleMoveChapter({value: -1})"
        class="px-3 py-2 border rounded-md flex items-center hover:bg-blue-100"
      >
        <img src="/assets/previous.svg" alt="" class="h-4 pr-2" />
        Trước
      </button>
      <button
        @click="() => handleMoveChapter({value: 1})"
        class="px-3 py-2 border rounded-md flex items-center hover:bg-blue-100"
      >
        Sau
        <img src="/assets/next.svg" alt="" class="h-4 pl-2" />
      </button>
    </div>
    <div class="py-2 text-2xl font-[400] leading-10" v-html="chapter_detail.detail?.content_chapter"></div>
    <div class="flex justify-center py-3">
      <button
        @click="() => handleMoveChapter({value: -1})"
        class="px-3 py-2 border rounded-md flex items-center hover:bg-blue-100"
      >
        <img src="/assets/previous.svg" alt="" class="h-4 pr-2" />
        Trước
      </button>
      <button
        @click="() => handleMoveChapter({value: 1})"
        class="px-3 py-2 border rounded-md flex items-center hover:bg-blue-100"
      >
        Sau
        <img src="/assets/next.svg" alt="" class="h-4 pl-2" />
      </button>
    </div>
  </div>
</template>
