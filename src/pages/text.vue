<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-white pl-2 pr-2 mx-auto mt-3 md:container-flush lg:container hidden md:block"
  >
    <div class="grid grid-cols-12 w-full bg-white" style="height: 400px">
      <!-- Sidebar danh mục sản phẩm -->
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
          <!-- Các danh mục sản phẩm khác -->
          <!-- (Bạn có thể bổ sung các mục tương tự như trong code của bạn) -->
        </ul>
      </div>

      <!-- Carousel và thông tin sản phẩm -->
      <div class="col-span-10 bg-white grid grid-cols-10 w-full">
        <div
          class="md:col-span-10 lg:col-span-7 ml-2 mr-2 shadow-lg border-b border-r border-l rounded-bl-lg rounded-br-lg"
        >
          <!-- Phần trên là carousel ảnh sản phẩm -->
          <div
            class="homedemo w-full relative overflow-hidden"
            style="height: 77%"
          >
            <div
              class="flex transition-transform duration-300 ease-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(product, index) in products"
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

          <!-- Thông tin sản phẩm hiển thị bên dưới carousel -->
          <div class="home w-full" style="height: 23%">
            <div
              class="grid grid-cols-6 items-center text-center h-full justify-center"
            >
              <div
                v-for="(product, index) in products"
                :key="index"
                :class="{
                  'bg-red-200': currentIndex === index, // Highlight sản phẩm hiện tại
                  'bg-white': currentIndex !== index,
                }"
                class="transition-all duration-300 flex flex-col justify-center h-full"
              >
                <h3 class="font-normal text-base">{{ product.name }}</h3>
                <p class="font-normal text-sm">{{ product.brand }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phần quảng cáo bên cạnh (bạn có thể thay đổi hình ảnh) -->
        <div
          class="col-span-3 mt-1 hidden lg:block max-h-[400px] flex-col space-y-4"
        >
          <div class="homedemo w-full h-[30%] shadow-lg">
            <img
              class="w-full h-full rounded-lg object-cover object-center"
              src="https://png.pngtree.com/png-clipart/20210620/original/pngtree-creative-technology-smart-style-mobile-phone-promotion-banner-template-png-image_6440979.jpg"
              alt="Quảng cáo 1"
            />
          </div>
          <div class="homedemo w-full h-[30%] shadow-lg">
            <img
              class="w-full h-full rounded-lg object-cover object-center"
              src="https://png.pngtree.com/png-clipart/20210620/original/pngtree-creative-technology-smart-style-mobile-phone-promotion-banner-template-png-image_6440979.jpg"
              alt="Quảng cáo 2"
            />
          </div>
          <div
            class="homedemo w-full h-[30%] border border-gray-300 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              class="w-full h-full object-cover object-center"
              src="https://png.pngtree.com/png-clipart/20210620/original/pngtree-creative-technology-smart-style-mobile-phone-promotion-banner-template-png-image_6440979.jpg"
              alt="Quảng cáo 3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCarousel", // Đặt tên component với nhiều từ
  data() {
    return {
      currentIndex: 0,
      products: [
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
          name: "Samsung Fold ",
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
          name: "Samsung Fold ",
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
      ],
      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.products.length - 1
          : this.currentIndex - 1;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 2000); // Tự động chuyển sau mỗi 2 giây
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

<style scoped>
/* Bạn có thể thêm CSS tùy chỉnh tại đây */
</style>
