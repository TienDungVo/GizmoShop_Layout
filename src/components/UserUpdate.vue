<template>
  <div>
    <h2>Update User</h2>
    <form @submit.prevent="updateUser">
      <div>
        <label for="username">Username:</label>
        <input v-model="user.username" id="username" type="text" required />
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input v-model="user.firstName" id="firstName" type="text" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input v-model="user.lastName" id="lastName" type="text" required />
      </div>
      <div>
        <label for="birthday">Birthday:</label>
        <input v-model="user.birthday" id="birthday" type="date" required />
      </div>
      <button type="submit">Update</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        birthday: '',
      },
      error: null,
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const url = window.location.href;
      const userId = url.substring(url.lastIndexOf('/') + 1);

      try {
        const response = await axios.get(`http://localhost:8081/users/${userId}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        this.error = 'Failed to load user data';
      }
    },
    async updateUser() {
      const url = window.location.href;
      const userId = url.substring(url.lastIndexOf('/') + 1);

      try {
        await axios.put(`http://localhost:8081/users/${userId}`, this.user);
        alert('User updated successfully!');
      } catch (error) {
        console.error('Error updating user data:', error);
        this.error = 'Failed to update user data';
      }
    },
  },
};
</script>
