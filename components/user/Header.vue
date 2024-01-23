<template>
  <div class="bg-slate-100">
    <div
      class="h-[56px] min-[768px]:min-w-[1140px] min-[768px]:w-[1140px] mx-auto flex justify-between items-center px-[30px] max-[768px]:max-w-[1140px] max-[768px]:px-[8px] bg-slate-100"
    >
      <NuxtLink to="/">
        <img
          src="/assets/logo_comic.png"
          alt=""
          class="h-[40px] max-[768px]:h-[32px] cursor-pointer"
      /></NuxtLink>
      <form @submit.prevent="" class="flex items-center">
        <input
          class="w-[450px] max-[768px]:max-w-[120px] px-3 py-1.5 rounded-tl-md rounded-bl-md text-md max-[768px]:text-sm text-[#3e3e3e] border hover:border-gray-300 focus:border-blue-500 focus:outline-none"
          v-model="input_search"
          placeholder="Tìm kiếm truyện..."
        />
        <button
          class="px-3 py-1.5 max-[768px]:py-1 border border-l-0 rounded-tr-md rounded-br-md hover:bg-slate-200 bg-white"
        >
          <Search></Search>
        </button>
      </form>
      <div class="flex items-center">
        <ModuleWindown class="px-2">
          <template #icon>
            <Bell class="cursor-pointer h-[24px] w-[24px]" />
          </template>
          <template #default>
            <div class="w-[280px] bg-white rounded-md shadow-lg">
              <div
                v-for="(value, index) in chapters"
                class="px-2 py-1 flex items-center"
                :key="value._id"
              >
                  <NuxtLink class="flex items-center pt-2" :to="'/chapter?key=' + value.id_story?._id + '&chap='+ value.number_chapter">
                      <img
                        class="hover:scale-110 ease-in duration-200 h-[45px] w-[30px] rounded-lg"
                        :src="value.id_story?.image"
                      />
                    <div class="pl-2 w-[calc(280px-30px-1.5rem)]">
                      <div class="flex justify-between items-center">
                        <p
                          class="h-[20px] cursor-pointer text-[0.85rem] font-semibold line-clamp-1 hover:text-blue-500"
                        >
                          {{ value.id_story?.title }}
                        </p>
                        <p
                          class="text-[0.65rem] text-right line-clamp-1 px-[1px] text-red-500"
                        >
                          {{
                            !!value.id_story?.genre &&
                            value.id_story?.genre[0].title
                          }}
                        </p>
                      </div>
                      <div
                        class="flex items-center justify-between hover:text-blue-500 cursor-pointer"
                      >
                        <span class="text-[0.8rem]"
                          >Chapter: {{ value.number_chapter }}</span
                        >
                        <span class="text-[0.8rem] text-right">{{
                          !!value.createdAt
                            ? CalculateTimeAgo(value?.createdAt)
                            : ""
                        }}</span>
                      </div>
                    </div>
                  </NuxtLink>
              </div>
            </div>
          </template>
        </ModuleWindown>
        <ModuleWindown class="hidden max-[768px]:block">
          <template #icon>
            <Menu class="cursor-pointer h-[24px] w-[24px]"></Menu>
          </template>
          <template #default>
            <div class="grid grid-cols-2 bg-[#343a40] rounded-md w-[250px]">
              <div v-for="(value, index) in categorys" :key="index">
                <NuxtLink
                  :class="
                    index % 2 === 0
                      ? 'rounded-tl-md rounded-bl-md'
                      : 'rounded-tr-md rounded-br-md'
                  "
                  class="px-4 py-2.5 hover:bg-[#72bbea40] cursor-pointer flex items-center group"
                  :to="'/category?key=' + value._id + '&name=' + value.title"
                >
                  <span
                    class="text-sm text-white font-semibold group-hover:text-[#4497f8]"
                    >{{ value.title }}</span
                  >
                </NuxtLink>
              </div>
            </div>
          </template>
        </ModuleWindown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Bell from "../icons/Bell.vue";
import Search from "../icons/Search.vue";
import Menu from "~/icons/Menu.vue";
import ModuleWindown from "../../module/ModuleWindown.vue";
import CalculateTimeAgo from "~/times";

const input_search = ref<string>("");
const { chapters, categorys } = defineProps(["categorys", "chapters"]);
</script>
