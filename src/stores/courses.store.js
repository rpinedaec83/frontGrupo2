import { defineStore } from 'pinia';
import axios from 'axios';

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    apiURL: 'https://pachatube-db.onrender.com',
    coursesHome: [],
    totalCourses: []
  }),
  actions: {
    async getCoursesHome() {
      const endpoint = '/cursos';
      this.coursesHome = [];

      await axios.get(`${this.apiURL}${endpoint}`)
        .then(response => {
          for (let i = 0; i <= 3; i++) {
            this.coursesHome.push(response.data[i]);
          };
        })
        .catch(error => {
          console.error(`Se produjo un error al traer los cursos: ${error}`);
        });
    },
    async getTotalCourses() {
      const endpoint = '/cursos';
      this.totalCourses = [];

      await axios.get(`${this.apiURL}${endpoint}`)
        .then(response => {
          this.totalCourses = response.data;
        })
        .catch(error => {
          console.error(`Se produjo un error al traer los cursos: ${error}`);
        });
    },
    async getFilterCourses(value) {
      const endpoint = `/cursos?categoria=${value}`;
      this.totalCourses = [];

      await axios.get(`${this.apiURL}${endpoint}`)
        .then(response => {
          this.totalCourses = response.data;
        })
        .catch(error => {
          console.error(`Se produjo un error al traer los cursos: ${error}`);
        });
    },
    async getDetalleCurso(id) {
      const endpoint = '/cursos';

      const { data } = await axios.get(`${this.apiURL}${endpoint}/${id}`)

      return data;
    },
    
  }
});
