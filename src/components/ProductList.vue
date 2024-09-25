<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.username }} - {{ product.password }}
      </li>
    </ul>
  </div>
</template>

<script>
import productService from '../services/productService';

export default {
  name: 'ProductList',
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await productService.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
