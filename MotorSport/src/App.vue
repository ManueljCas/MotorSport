<template>
  <div id="app">
     <router-view />  <!--nos permitira movernos de ruta a ruata -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>

</style>