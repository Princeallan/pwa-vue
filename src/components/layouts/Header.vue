<template>
  <header class="header">
      <h1>TODOLIST</h1>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
   </header>
</template>

<style scoped>

header {
    padding: 10px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
}

a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
}

</style>

