<script lang="ts" setup>
import { ref, watchEffect, watch } from "vue";
import ModuleListComic from "../../module/ModuleListComic.vue";
import type { type_category, type_chapter, type_comic } from "~/types";

let loading = ref<boolean>(true);
let name_key = ref<any>("");
let all_comics = reactive<{
  page?: number;
  pageSize?: number;
  comics?: type_comic;
}>({});

const route = useRoute();
const { name } = route.query;
const { data: get_comics, pending } = await useFetch(
  `/api/comic/all?page=${route.query?.page}&key_search=&genre=${route.query?.key}`
);

loading.value = !pending.value && pending.value;
name_key.value = name;
all_comics = !!get_comics.value && get_comics.value;

watch(
  () => route.fullPath,
  async () => {
    const { data: get_comics, pending } = await useFetch(
      `/api/comic/all?page=${route.query?.page}&key_search=&genre=${route.query?.key}`
    );

    loading.value = !pending.value && pending.value;
    name_key.value = name;
    all_comics.comics = !!get_comics.value && get_comics.value.comics;
    all_comics.pageSize = !!get_comics.value && get_comics.value.pageSize;
  }
);


useSeoMeta({
  title: `Đọc Truyện ${name_key.value} - Comic`,
  ogTitle: `Đọc Truyện ${name_key.value} - Comic`,
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
    <span class="py-2 text-[1.5rem] font-[300]"
      >Truyện {{ name_key}} Mới Cập Nhật</span
    >
    <ModuleListComic
      :all_comics="all_comics"
      :loading="loading"
      class="pt-4"
    ></ModuleListComic>
  </div>
</template>
