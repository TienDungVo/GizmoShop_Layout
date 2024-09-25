<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-white pl-2 pr-2 mx-auto mt-3 mb-4 md:container-flush lg:container hidden md:block"
  >
    <div class="grid grid-cols-12 w-full bg-white" style="height: 400px">
      <div
        class="col-span-2 bg-white border-2 border-gray-300 shadow-lg rounded-lg"
      >
        <ul class="flex flex-col">
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-headphone mr-2"></i>
            <span class="hidden lg:inline">Tai nghe</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-tv mr-2"></i>
            <span class="hidden lg:inline">Tivi</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bxs-camera mr-2"></i>
            <span class="hidden lg:inline">Máy ảnh</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bxs-camera-movie mr-2"></i>
            <span class="hidden lg:inline">Máy quay</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bxs-phone-call mr-2"></i>
            <span class="hidden lg:inline">Điện thoại</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bxs-microphone-alt mr-2"></i>
            <span class="hidden lg:inline"> Micro</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-desktop mr-2"></i>
            <span class="hidden lg:inline">Desktop</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-sync mr-2"></i>
            <span class="hidden lg:inline">Thu cũ</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-laptop mr-2"></i>
            <span class="hidden lg:inline">Laptop</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
          <li
            class="bg-white-200 pt-2 pb-2 pl-4 pr-4 hover:text-black hover:bg-gray-200 flex items-center"
          >
            <i class="bx bx-headphone mr-2"></i>
            <span class="hidden lg:inline"> Tai nghe</span>
            <i class="bx bx-chevron-right ml-auto"></i>
          </li>
        </ul>
      </div>
      <div class="col-span-10 bg-white grid grid-cols-10 w-full">
        <div
          class="md:col-span-10 lg:col-span-7 ml-2 mr-2 shadow-lg border-b border-r border-l rounded-bl-lg rounded-br-lg"
        >
          <div
            class="homedemo w-full relative overflow-hidden"
            style="height: 77%"
          >
            <div
              class="flex transition-transform duration-300 ease-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(product, index) in product_banners"
                :key="index"
                class="min-w-full"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            <!-- Nút điều hướng trước và sau
            <button
              @click="prevSlide"
              class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <i class="bx bx-left-arrow-alt"></i>
            </button>
            <button
              @click="nextSlide"
              class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <i class="bx bx-right-arrow-alt"></i>
            </button> -->
          </div>

          <div class="home w-full" style="height: 23%">
            <div
              class="grid grid-cols-6 items-center text-center h-full justify-center"
            >
              <div
                v-for="(product, index) in product_banners"
                :key="index"
                :class="{
                  'bg-red-200': currentIndex === index, // Highlight sản phẩm hiện tại
                  'bg-white': currentIndex !== index,
                }"
                @click="goToSlide(index)"
                class="transition-all duration-300 flex flex-col justify-center h-full"
              >
                <h3 class="font-normal text-base">{{ product.name }}</h3>
                <p class="font-normal text-sm">{{ product.brand }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-span-3 mt-1 hidden lg:block max-h-[400px] flex-col space-y-4"
        >
          <div class="homedemo w-full h-[30%] shadow-lg">
            <img
              class="w-full h-full rounded-lg object-cover object-center"
              src="https://png.pngtree.com/png-clipart/20210620/original/pngtree-creative-technology-smart-style-mobile-phone-promotion-banner-template-png-image_6440979.jpg"
              alt=""
            />
          </div>
          <div class="homedemo w-full h-[30%] shadow-lg">
            <img
              class="w-full h-full rounded-lg object-cover object-center"
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/roi-iphone16-sliding.jpg"
              alt=""
            />
          </div>
          <div
            class="homedemo w-full h-[30%] border border-gray-300 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              class="w-full h-full object-cover object-center"
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="max-w-4xl mx-auto relative overflow-hidden block md:hidden ml-3 mr-3 mt-3"
  >
    <div
      class="flex transition-transform duration-300 ease-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(product, index) in product_banners"
        :key="index"
        class="min-w-full"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>

    <!-- Previous Button -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white text-3xl px-3 pl-5 py-2 rounded-full hover:bg-gray-300"
    >
      <i class="bx bx-chevron-left"></i>
    </button>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white text-3xl pr-5 px-3 py-2 rounded-l-lg hover:bg-gray-300"
    >
      <i class="bx bx-chevron-right"></i>
    </button>

    <div class="flex justify-center space-x-2 mt-4">
      <button
        v-for="(product, index) in product_banners"
        :key="index"
        :class="{
          'bg-red-400 w-7 h-3': currentIndex === index, // Highlight sản phẩm hiện tại
          'bg-gray-500 w-3 h-3': currentIndex !== index,
        }"
        class="rounded-full focus:outline-none transition-all duration-300"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
  <div class="horizontal-banner mt-1">
    <a href="">
      <img
        class="pl-2 pr-2 mx-auto mt-3 md:container-flush lg:container hidden md:block"
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (1).gif"
        alt=""
      />
      <img
        class="pl-2 pr-2 mx-auto mt-3 block md:hidden"
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:800:150/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (2).gif"
        alt=""
      />
    </a>
  </div>

<SanPhamBanChayComponentVue :products="products" :brands="brands"></SanPhamBanChayComponentVue>




</template>

<script>

import SanPhamBanChayComponentVue from '@/components/SanPhamBanChayComponent.vue';

export default {
  name: "ProductCarousel",
  components :{

    SanPhamBanChayComponentVue
  },
  data() {
    return {
      currentIndex: 0,
      brands: [
        { name: "Apple", description: "Brand to phone" },
        { name: "Samsung", description: "Brand to phone and electronics" },
        { name: "Sony", description: "Brand to electronics and entertainment" },
        { name: "Dell", description: "Brand to laptops and computers" },
        { name: "HP", description: "Brand to laptops and computers" },
        { name: "Asus", description: "Brand to laptops and gaming devices" },
        { name: "Bose", description: "Brand to headphones and audio devices" },
        { name: "Beats", description: "Brand to headphones and audio devices" },
        { name: "Lenovo", description: "Brand to laptops and tablets" },
        { name: "Xiaomi", description: "Brand to phones, laptops" },
        { name: "Lenovo", description: "Brand to laptops and tablets" },
      ],
      product_banners: [
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/roi-iphone16-sliding.jpg",
          name: "iPhone 16",
          description: "Latest iPhone with cutting-edge features.",
          price: "$999",
          brand: "Apple",
        },
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png",
          name: "Samsung Fold",
          description: "Experience the future with a foldable phone.",
          price: "$1200",
          brand: "Samsung",
        },
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/thang-oppo-muon-van-uu-dai-home.jpg",
          name: "Oppo Reno",
          description: "Affordable, feature-packed smartphone.",
          price: "$650",
          brand: "Oppo",
        },
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/roi-iphone16-sliding.jpg",
          name: "iPhone 16",
          description: "Latest iPhone with cutting-edge features.",
          price: "$999",
          brand: "Apple",
        },
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png",
          name: "Samsung Fold",
          description: "Experience the future with a foldable phone.",
          price: "$1200",
          brand: "Samsung",
        },
        {
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/thang-oppo-muon-van-uu-dai-home.jpg",
          name: "Oppo Reno",
          description: "Affordable, feature-packed smartphone.",
          price: "$650",
          brand: "Oppo",
        },
        // Thêm các sản phẩm khác nếu cần
      ],
      products: [
        {
          image:
            "https://i.pinimg.com/564x/37/f3/17/37f3176c24e57aedfb9d6a055923c654.jpg",
          name: "IPhone 16 ProMax 126GB",
          description: "Latest iPhone with cutting-edge features.",
          price: "40.000.000đ",
          old_price: "43.000.000đ",
          brand: "Apple",
        },
        {
          image:
            "https://i.pinimg.com/564x/ac/f3/78/acf3780e27fdc2022aee2c5d6cb5cef9.jpg",
          name: "iPhone 14 Pro Max",
          description: "Advanced iPhone with ProMotion display and A16 chip.",
          price: "30.000.000đ",
          old_price: "35.000.000đ",
          brand: "Apple",
        },
        {
          image:
            "https://i.pinimg.com/564x/9d/15/6b/9d156b5abe42100fa6a6c6bfbe33a84f.jpg",
          name: "Dell XPS 13",
          description:
            "High-performance laptop with 11th Gen Intel processors.",
          price: "25.000.000đ",
          old_price: "28.000.000đ",
          brand: "Dell",
        },
        {
          image:
            "https://i.pinimg.com/736x/33/af/41/33af4190530d626e6d3af556a357ceaf.jpg",
          name: "Samsung Galaxy S21 Ultra",
          description:
            "Premium smartphone with a 108MP camera and 120Hz display.",
          price: "35.000.000đ",
          old_price: "40.000.000đ",
          brand: "Samsung",
        },
        {
          image:
            "https://i.pinimg.com/564x/62/f1/41/62f141f11915449b5801d663b55b835b.jpg",
          name: "LG Gram 17",
          description: "Lightweight 17-inch laptop with long battery life.",
          price: "27.000.000đ",
          old_price: "32.000.000đ",
          brand: "LG",
        },
        {
          image:
            "https://i.pinimg.com/564x/e8/d6/d8/e8d6d87e066b6505bd8fe4e216ec95bb.jpg",
          name: "Xiaomi Redmi Note 11 Pro 5G",
          description:
            "Feature-rich phone with 5G connectivity and 108MP camera.",
          price: "15.000.000đ",
          old_price: "18.000.000đ",
          brand: "Xiaomi",
        },
        {
          image:
            "https://i.pinimg.com/564x/eb/43/b6/eb43b6eb9a8c761671f92d68b40b5c56.jpg",
          name: "HP Omen 17",
          description:
            "High-performance gaming laptop with NVIDIA GeForce RTX graphics.",
          price: "40.000.000đ",
          old_price: "45.000.000đ",
          brand: "HP",
        },
        {
          image:
            "https://i.pinimg.com/474x/c9/97/8d/c9978d70126c052197acb945dccec32c.jpg",
          name: "Sony WH-1000XM4",
          description: "Top-rated noise-canceling wireless headphones.",
          price: "8.000.000đ",
          old_price: "10.000.000đ",
          brand: "Sony",
        },
        {
          image:
            "https://i.pinimg.com/564x/9f/83/d9/9f83d9dd4cc63df479b0e2917411149a.jpg",
          name: "Apple AirPods Pro",
          description:
            "Wireless earbuds with active noise cancellation and transparency mode.",
          price: "5.000.000đ",
          old_price: "6.500.000đ",
          brand: "Apple",
        },
        {
          image:
            "https://i.pinimg.com/564x/37/f3/17/37f3176c24e57aedfb9d6a055923c654.jpg",
          name: "IPhone 16 ProMax 126GB",
          description: "Latest iPhone with cutting-edge features.",
          price: "40.000.000đ",
          old_price: "43.000.000đ",
          brand: "Apple",
        },
      ],

      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.product_banners.length;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.product_banners.length - 1
          : this.currentIndex - 1;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3500); // Tự động chuyển sau mỗi 2 giây
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>
