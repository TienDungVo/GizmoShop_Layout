<template>
  <div>
    <h2>User Details</h2>
    <div v-if="user">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>First Name:</strong> {{ user.firstName }}</p>
      <p><strong>Last Name:</strong> {{ user.lastName }}</p>
      <p><strong>Birthday:</strong> {{ user.birthday }}</p>
    </div>
    <div v-else>
      <p>User not found or error loading user data.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
      error: null,
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      // Lấy id từ URL bằng cách sử dụng window.location
      const url = window.location.href;
      const userId = url.substring(url.lastIndexOf('/') + 1); // Lấy phần cuối của URL làm id

      try {
        const response = await axios.get(
          `http://localhost:8081/users/${userId}`
        );
        this.user = response.data; // Gán dữ liệu người dùng từ API vào `user`
      } catch (error) {
        console.error("Error fetching user data:", error);
        this.error = "Failed to load user data";
      }
    },
  },
};
</script>
