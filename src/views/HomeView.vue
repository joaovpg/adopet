<template>
  <HeaderComponent />
  <div class="body-container">
    <HeroComponent />
    <BtnHome msg="Já tenho uma conta" />
    <BtnHome msg="Quero me cadastrar" />
    <ImageComponent />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import BtnHome from '@/components/BtnHome.vue';
import ImageComponent from '@/components/ImageComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    BtnHome,
    ImageComponent,
    FooterComponent
  }
  
 
});
</script>

<style scoped>
.body-container {
  background-color: #3772FF;
}
</style>
