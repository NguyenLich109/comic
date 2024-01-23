<script lang="ts" setup>
import { ref,reactive } from "vue";
import DetailComic from "~/components/user/DetailComic.vue";
import type { type_chapter, type_comic } from "~/types";

let loading = ref<boolean>(true);
let chapters_all = reactive<{
  page?: number;
  pageSize?: number;
  chapters?: type_chapter;
}>({});
const chapters_five = ref<type_chapter[]>();
const comic_detail = reactive<{detail?:type_comic}>({});

const { key } = useRoute().query;

const {data:get_chapters_all} = await useFetch(`/api/chapter/all?key=${key}`)
const {data:get_chapters_five} = await useFetch(`/api/chapter/chapter_five?key=${key}`)
const {data:get_comics_detail,pending} = await useFetch(`/api/comic/detail?key=${key}`)

loading.value = !pending.value && pending.value;
comic_detail.detail = !!get_comics_detail.value && get_comics_detail.value;
chapters_five.value = !!get_chapters_five.value && get_chapters_five.value;
chapters_all = !!get_chapters_all.value && get_chapters_all.value;

useSeoMeta({
  title: `${comic_detail.detail?.title} | Comic`,
  ogTitle: `${comic_detail.detail?.title} | Comic`,
  description:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogDescription:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogImage: `${comic_detail.detail?.image}`,
});

</script>
<template>
  <div
    class="px-[30px] py-[16px] min-[768px]:min-w-[1140px] min-[768px]:w-[1140px] max-[768px]:max-w-[1140px] m-auto max-[768px]:px-[8px]"
  >
    <DetailComic :loading="loading" :comic_detail="comic_detail" :chapters_five="chapters_five" :chapters_all="chapters_all" ></DetailComic>
  </div>
</template>
