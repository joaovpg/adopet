<template>
  <main class="home-container">
    <HeroComponent />
    <div class="btn-container">
      <BtnComponent @click="goToLogin" msg="Já tenho conta" />
      <BtnComponent @click="goToCadastro" msg="Quero me cadastrar" />
    </div>
    <ImageComponent class="image-container" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroComponent from '@/components/HeroComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import ImageComponent from '@/components/ImageComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroComponent,
    BtnComponent,
    ImageComponent,
  },
  beforeRouteEnter() {
    document.body.style.backgroundColor = '#3772FF'
  },
  beforeRouteLeave() {
    document.body.style.backgroundColor = '#FFF'
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    },

    goToCadastro() {
      this.$router.push('/cadastro')
    }

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
  margin-bottom: -150px;
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
    margin-bottom: -150px;
  }
}

@media screen and (min-width: 1440px) {
  .home-container {
    width: 488px;
    padding: 0;
    margin: 36px auto -150px;
  }

  .btn-container {
    max-width: 362px;
  }
}
</style>
