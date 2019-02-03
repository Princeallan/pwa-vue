<template>
  <v-toolbar app>

    <v-btn icon v-if="$route.name !== 'home'"
        @click="$router.go(-1) ">
         <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title >
      <span>PWA</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo({name: 'home'})">Home</v-btn>
      <v-btn flat @click="navigateTo({name: 'about'})">About</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>

  </v-toolbar>

</template>
<script>
export default {
    name: "Header",
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>


<style scoped>

/* header {
    padding: 10px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
} */

a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
}

</style>

