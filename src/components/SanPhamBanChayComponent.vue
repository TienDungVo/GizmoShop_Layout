<template>
     <div class="sanPhambanChay">
   <div
    class="list-phonehot pl-2 pr-2 mx-auto mt-5 md:container-flush lg:container"
  >
    <div class="grid grid-cols-1 md:grid-cols-9 items-center">
      <!-- Phần tiêu đề -->
      <div class="md:col-span-3 text-left justify-center">
        <p class="font-bold text-xl">SẢN PHẨM BÁN CHẠY</p>
      </div>

      <!-- Phần button các thương hiệu -->
      <div
        class="md:col-span-6 flex items-center flex-nowrap space-x-2 overflow-hidden"
      >
        <button
          v-for="(brand, index) in brands.slice(0, 11)"
          :key="index"
          class="bg-gray-50 hover:bg-gray-100 text-black text-sm p-1.5 pr-2.5 pl-2.5 max-h-10 border rounded-lg border-gray-200 m-1"
        >
          {{ brand.name }}
        </button>
        <button
          class="bg-gray-50 hover:bg-gray-100 text-black text-sm p-1.5 pr-2.5 pl-2.5 border rounded-lg border-gray-200 m-1"
        >
          Xem tất cả
        </button>
      </div>
    </div>
  </div>
  <div class="product pl-2 pr-2 mx-auto mt-5 md:container-flush lg:container">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
     <ProductComponentVue :products="products"></ProductComponentVue>
    </div>
  </div>
 </div>
</template>
<script>
import ProductComponentVue from './ProductComponent.vue'
export default {
    name: 'SanPhamBanChayComponent',
    components:{
      ProductComponentVue
    },
    props : {
        brands :{
            type : Array
        },
        products :{
            type : Array
        }
    }
}
</script>