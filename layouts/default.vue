<template>
    <div>
      <Header :chapters="chapters" :categorys="categorys"></Header>
      <slot />
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/user/Header.vue"
const {categorys, chapters} = defineProps(['categorys','chapters'])
</script>