<script setup lang="ts">
import { useToasteo } from "../composables";

const toasteo = useToasteo();
</script>

<template>
  <div>
    <div>Toasteo container contains {{ toasteo.toasts.length }} toasts</div>
    <ul>
      <li v-for="toast in toasteo.toasts" :key="toast.uuid">
        {{ toast.title }}
      </li>
    </ul>
  </div>
</template>
