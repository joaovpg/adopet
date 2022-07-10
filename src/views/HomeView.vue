<template>
  <HeaderComponent />
  <!-- <FooterComponent /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    // FooterComponent
  },
});
</script>

<style>
body {
  background-color: #3772FF;
  height: 200vh;
}
</style>
