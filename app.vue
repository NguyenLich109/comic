<template>
  <div>
    <NuxtLayout :chapters="chapters" :categorys="categorys">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { type_category, type_chapter } from './types';
const chapters = ref<type_chapter[]>()
const categorys = ref<type_category[]>()

const {data:get_chapters} = await useFetch('/api/chapter/new')
const {data:get_categorys} = await useFetch("/api/category/all")

chapters.value = !!get_chapters.value && get_chapters.value;
categorys.value = !!get_categorys.value && get_categorys.value;

</script>
