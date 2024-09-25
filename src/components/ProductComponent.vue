<template>
   
        <div
        v-for="(product, index) in products"
        :key="index"
        class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
      >
        <div
          class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg"
        >
          - 30%
        </div>
        <img
          class="w-full h-48 object-cover"
          :src="product.image"
          :alt="product.name"
        />
        <div class="p-3 space-y-3">
          <h3
            class="text-lg font-bold mb-1 text-gray-800 h-11 overflow-hidden"
            style="line-height: 1.5rem"
          >
            {{ product.name }}
          </h3>
          <div class="flex items-center space-x-1">
            <span class="text-lg font-semibold text-red-600">{{
              product.price
            }}</span>
            <span class="text-sm line-through text-gray-500">{{
              product.old_price
            }}</span>
          </div>
          <div class="bg-gray-100 p-1 rounded-md border border-gray-300">
            <p
              class="text-sm text-gray-700 h-12 overflow-hidden flex flex-col justify-between"
            >
              {{ product.description }}
            </p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <!-- Star Rating -->
            <span class="text-yellow-500 text-lg"> ★★★★☆ </span>

            <!-- Favorite Button -->
            <button
              class="text-gray-500 hover:text-red-500 text-sm font-medium"
            >
              Yêu thích ❤️
            </button>
          </div>
        </div>
      </div>
</template>

<script>



export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>