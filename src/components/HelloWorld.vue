<template>
  <v-app id="inspire">
    <NavBar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg" style="padding: 10px">
              <form>
                <v-select label="Choose institution"></v-select>

                <v-select label="Choose classroom number"></v-select>

                <v-btn @click="fetchData"
                  class="me-4"
                  type="submit"
                  color="blue"
                  style="color: white"
                >
                  submit
                </v-btn>
              </form>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" style="padding: 10px">
              User info <br />
              ime <br />
              prezime
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axiosInstance from '../axiosInstance.js';
export default {
  data: () => ({
    res: ""
  }),
  methods: {
    fetchData() {
      axiosInstance.get('/ustanova/dohvati')
        .then(response => {
          this.res = response.data;
          console.log(response.data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }
  },
};
</script>
