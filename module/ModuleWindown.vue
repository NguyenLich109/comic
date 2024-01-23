<template>
  <a-dropdown :placement="'bottomRight'" :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <slot name="icon"></slot>
    </a>
    <template #overlay>
      <slot></slot>
    </template>
  </a-dropdown>
</template>
