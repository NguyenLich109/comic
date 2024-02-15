<template>
  <div class="grid grid-cols-4 gap-3 items-start">
    <div class="bg-[#343a40] rounded-md max-[768px]:hidden">
      <div v-if="loading" class="h-[250px] flex justify-center">
        <a-spin class="my-auto z-50" />
      </div>
      <div v-else class="grid grid-cols-2">
        <div v-for="(value, index) in categorys" :key="index">
          <NuxtLink
            :class="
              index % 2 === 0
                ? 'rounded-tl-md rounded-bl-md'
                : 'rounded-tr-md rounded-br-md'
            "
            class="px-4 py-2.5 hover:bg-[#72bbea40] cursor-pointer flex items-center group"
            :to="'/category?key='+value._id+'&name='+value.title"
          >
            <span
              class="text-sm text-white font-semibold group-hover:text-[#4497f8]"
              >{{ value.title }}</span
            >
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-span-2 rounded-md max-[768px]:col-span-4 relative w-full after:block after:pb-[50%]">
      <div
        class="overflow-hidden rounded-md absolute w-full h-full"
      >
        <Swiper
          class="flex cursor-pointer"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
            <img class="h-full w-full object-cover rounded-md" :src="slide" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="bg-[#f4f4f4] rounded-md px-4 py-3 max-[768px]:hidden">
      <h1 class="text-[1.3rem] font-semibold text-center leading-7">
        Bạn muốn biết truyện này đến từ đâu?
      </h1>
      <p class="text-[0.8rem] text-center">
        Trang website truyện này chúng tôi lấy cảm hứng từ trang website nổi
        tiếng là website TruyenYY
      </p>
      <div class="flex justify-center">
        <button
          class="px-4 py-2 my-2 bg-blue-300 rounded-lg text-base text-white text-center hover:bg-[#a4d2ea8a]"
        >
          Trang truyện gốc
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const { categorys, loading } = defineProps(["categorys", "loading"]);

const slides = ref<string[]>([
  "https://yymedia.codeprime.net/media/featured_novels/tinh-mon-desktop-truyenyy.jpg",
  "https://yymedia.codeprime.net/media/featured_novels/ta-dao-khuynh-thien-desktop-truyenyy.jpg",
]);
</script>
