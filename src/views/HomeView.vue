<template>
  <HeaderComponent />
  <div class="home-container">
    <HeroComponent />
    <div class="btn-container">
      <BtnComponent link="/catalogo" msg="Já tenho conta" />
      <BtnComponent link="/cadastro" msg="Quero me cadastrar" />
    </div>
    <ImageComponent class="image-container" />
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
  },
  beforeRouteEnter() {
    document.body.style.backgroundColor = '#3772FF'
  },
  beforeRouteLeave() {
    document.body.style.backgroundColor = '#FFF'
  }
});
</script>

<style scoped>
.home-container {
  width: 100%;
  padding: 56px;
  margin: 98px 0 -30px 0;
}

.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 34px;
}

.btn-container button {
  margin-bottom: 16px;
  min-width: 180px;
  max-width: 344px
}

.btn-container button:last-child {
  margin-bottom: 0;
}

.image-container {
  margin-top: 24px;
  margin-bottom: -45px;
}

@media screen and (min-width: 768px) {
  .home-container {
    width: 344px;
    padding: 0;
    margin: 180px auto 0;
  }

  .btn-container {
    margin: 0 auto;
    min-width: 344px;
    padding: 0;
  }

  .btn-container button {
    margin-bottom: 16px;
  }

  .image-container {
    margin-top: 40px;
    margin-bottom: -45px;
  }
}

@media screen and (min-width: 1440px) {
  .home-container {
    width: 488px;
    padding: 0;
    margin: 36px auto -30px;
  }

  .btn-container {
    max-width: 362px;
  }
}
</style>
