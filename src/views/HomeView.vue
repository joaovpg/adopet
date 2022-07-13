<template>
  <HeaderComponent />
  <div class="body-container">
    <HeroComponent />
    <BtnComponent link="/login" msg="Já tenho conta" />
    <BtnComponent link="/cadastro" msg="Quero me cadastrar" />
    <ImageComponent />
  </div>
  <FooterComponent />
  <BlobComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import ImageComponent from '@/components/ImageComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BlobComponent from '@/components/BlobComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    BtnComponent,
    ImageComponent,
    FooterComponent,
    BlobComponent
  }
});
</script>

<style scoped>
.body-container {
  background-color: #3772FF;
}
</style>
