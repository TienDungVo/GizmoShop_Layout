<template>
  <div>
    <h2>Add New User</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input v-model="user.username" type="text" id="username" required />
      </div>

      <div>
        <label for="password">Password:</label>
        <input v-model="user.password" type="password" id="password" required />
      </div>

      <div>
        <label for="firstName">First Name:</label>
        <input v-model="user.firstName" type="text" id="firstName" required />
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input v-model="user.lastName" type="text" id="lastName" required />
      </div>

      <div>
        <label for="birthday">Birthday:</label>
        <input v-model="user.birthday" type="date" id="birthday" required />
      </div>

      <button type="submit">Add User</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        birthday: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:8081/users",
          this.user
        );

        // Nếu yêu cầu thành công (mã 2xx)
        if (response.status === 200) {
          console.log("User added successfully:", response.data);
          alert("User added successfully!");
        }
      } catch (error) {
        if (error.response) {
          // Phản hồi có lỗi từ phía server (nhưng request đã đến server)
          const statusCode = error.response.status;

          // Xử lý từng mã trạng thái khác nhau
          if (statusCode === 400) {
            console.error("Bad request:", error.response.data);
            alert("Error 400: Bad Request. Please check the input data.");
          } else if (statusCode === 404) {
            console.error("Resource not found:", error.response.data);
            alert("Error 404: Resource not found.");
          } else if (statusCode === 500) {
            console.error("Server error:", error.response.data);
            alert("Error 500: Internal Server Error. Please try again later.");
          } else {
            // Xử lý các mã lỗi khác
            console.error("Unexpected error:", error.response.data);
            alert(`Error ${statusCode}: ${error.response.statusText}`);
          }
        } else if (error.request) {
          // Không nhận được phản hồi từ server
          console.error("No response received:", error.request);
          alert("No response from the server. Please try again later.");
        } else {
          // Lỗi khác khi thiết lập yêu cầu
          console.error("Error setting up request:", error.message);
          alert("Error: Failed to send request.");
        }
      }
    },
  },
};
</script>
