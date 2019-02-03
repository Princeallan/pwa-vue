<template>
  <v-app>
    <div id="app">

      <Header />

      <v-content>
        
      <router-view/>

      </v-content>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/layouts/Header'
export default {
  name: "App",
   components: {
    Header
  },
}
</script>


<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
