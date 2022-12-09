import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
<<<<<<< HEAD
  baseURL: 'https://api.kelompok1.studentdumbways.my.id/api/v1'
=======
  baseURL: 'http://103.179.56.6:5000/api/v1'
>>>>>>> b73585a9872a45ca1170c8685f84a7fa66c32a3a
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
