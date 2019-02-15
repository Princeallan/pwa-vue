<template>
  <v-toolbar app>

    <v-btn icon v-if="$route.name !== 'home'"
        @click="$router.go(-1) ">
         <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-side-icon v-if="$route.name == 'home'"></v-toolbar-side-icon>
    <v-toolbar-title >
      <span>PWA</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
        <v-btn icon v-if="$route.name=='post'" @click="navigateTo({name:'camera'})">
            <v-icon>camera_alt</v-icon>
        </v-btn>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo({name: 'home'})">Home</v-btn>
      <v-btn flat @click="navigateTo({name: 'products'})">Products</v-btn>
      <v-btn flat @click="navigateTo({name: 'todos'})">Todos</v-btn>
      <v-btn flat @click="navigateTo({name: 'about'})">About</v-btn>
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

a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
}

</style>

