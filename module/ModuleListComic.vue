<template>
  <div>
    <div v-if="loading" class="col-span-2 h-[300px] flex justify-center">
      <a-spin size="large" class="my-auto z-50" />
    </div>
    <div v-else class="grid grid-cols-2 gap-3">
      <div
        v-for="(val, index) in all_comics?.comics"
        :key="val._id"
        class="p-2 cursor-pointer max-[768px]:col-span-2"
      >
        <NuxtLink :to="'/comic?key=' + val._id" class="flex">
          <div
            class="h-[120px] w-[80px] overflow-hidden cursor-pointer rounded-lg"
          >
            <img
              class="hover:scale-110 ease-in duration-200"
              :src="val.image"
            />
          </div>
          <div class="flex-1 px-2">
            <h1 class="text-sm font-[500]">{{ val.title }}</h1>
            <p class="text-[0.75rem] py-1">{{ val.author }}</p>
            <p class="text-[0.85rem] text-red-500">
              {{ val.number_chap }}
              <span class="text-[0.6rem]">Chương</span>
            </p>
            <p class="text-[0.8rem] leading-5 max-[768px]:line-clamp-3">
              {{ val.abbreviate }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { loading, all_comics } = defineProps(["all_comics", "loading"]);
</script>
