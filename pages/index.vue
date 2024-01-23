<script lang="ts" setup>
import { ref, reactive } from "vue";
import Content from "~/components/user/Content.vue";
import type { type_category, type_comic, type_chapter } from "@/types";

let loading = ref<boolean>(true);
let all_comics = reactive<{
  page?: number;
  pageSize?: number;
  comics?: type_comic;
}>({});
const chapters = ref<type_chapter[]>();
const categorys = ref<type_category[]>();

const { data: get_comics, pending } = await useFetch(
  `/api/comic/all?page=&key_search=`
);
const { data: get_chapters } = await useFetch("/api/chapter/new");
const { data: get_categorys } = await useFetch("/api/category/all");

loading.value = !pending.value && pending.value;
all_comics = !!get_comics.value && get_comics.value;
chapters.value = !!get_chapters.value && get_chapters.value;
categorys.value = !!get_categorys.value && get_categorys.value;

useSeoMeta({
  title: "Truyện Comic - Thế Giới Truyện Huyền Ảo Kiếm Hiệp",
  ogTitle: "Truyện Comic - Thế Giới Truyện Huyền Ảo Kiếm Hiệp",
  description:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogDescription:
    "Ứng dụng đọc truyện chữ online với nhiều thể loại Kiếm hiệp, Tiên hiệp, Sắc hiệp, Đô thị, Ngôn tình, Truyện Convert, Truyện YY, Truyện Dịch Hoàn Thành Full.",
  ogImage: "/assets/logo_seo.png",
});
</script>
<template>
  <div
    class="px-[30px] py-[16px] min-[768px]:min-w-[1140px] min-[768px]:w-[1140px] max-[768px]:max-w-[1140px] m-auto max-[768px]:px-[8px]"
  >
    <Sidebar :categorys="categorys" :loading="loading"></Sidebar>
    <Content
      :all_comics="all_comics"
      :chapters="chapters"
      :loading="loading"
    ></Content>
  </div>
</template>
