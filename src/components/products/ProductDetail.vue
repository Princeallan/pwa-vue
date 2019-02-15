<template>
<v-container>
  <v-layout>
    <v-flex :key="product.id" v-for="product in products" xs12 sm6 md4 pa-2>
      <v-card>
        <v-img
          :src="require('../../assets/logo.png')"
          aspect-ratio="1.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.title }}</h3>
            <div>
                <p v-if="product.inventory > 10">
                 <small class="inStock">In Stock</small> <br /> 
                 {{ product.inventory }} Items available!
             </p>
             <p v-else-if="product.inventory > 0 && product.inventory <= 10 ">
                 <small class="inStock">Almost out of Stock</small> <br />
                 {{ product.inventory }} Items available!
             </p>
             <small v-else class="outOfStock">Out of Stock</small>

             <p>{{ product.info }}</p>
             <h1>${{ product.price }}</h1>
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn color="success">Details</v-btn>
          <v-btn color="info">Buy</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
export default {
    data() {
        return {
            products: [
                    {
                    id: 1,               
                    title: "Vue Socks",
                    info: "Vue socks are cotton socks with a vue logo",
                    image: '../../assets/logo.png',
                    price: 65,
                    inventory: 10
                },
                {
                    id: 2,        
                    title: "Vue Socks",
                    info: "Vue socks are cotton socks with a vue logo",
                    image: '../../assets/logo.png',
                    price: 65,
                    inventory: 10
                }
            ]
        }
    }
}
</script>

<style scoped>
    .inStock {
        color: #5b967a !important;
    }
    .outOfStock {
        color: #ff0000;
    }
</style>

