<template>
  <v-app id="inspire">
    <NavBar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row class="mr-10">
          <v-col cols="8" md="2">
            <v-btn
              @click="switchTemplate()"
              class="me-4 ml-10 pl-5 pr-5"
              type="submit"
              color="blue"
              style="color: white"
              >{{ btn }}</v-btn
            >
          </v-col>

          <v-col cols="12" sm="10">
            <v-sheet min-height="70vh" rounded="lg" style="padding: 40px">
              <v-data-table
                :headers="headers"
                :items="professors"
                :items-per-page="10"
                v-show="showDataTable"
              >
              <template slot="item.action" slot-scope="props">
              {{ props.item}}</template>
              </v-data-table>
              <div v-show="showForm" style=" width: 90%; margin-left: 20px;">
                <v-text-field label="First name"></v-text-field>
                <v-text-field label="Last name"></v-text-field>
                <v-text-field label="Email"></v-text-field>
                <v-text-field label="Password" type="password"></v-text-field>
                <v-text-field label="Phone" type="number"></v-text-field>
                <v-col cols="12" md="5">
            <v-btn
              @click="insertData()"
              class="me-4 ml-10 pl-5 pr-5"
              type="submit"
              color="blue"
              style="color: white; left: 100%;"
              >Save</v-btn
            >
          </v-col>
                
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axiosInstance from "../axiosInstance.js";
export default {
  data() {
    return {
      professors: [],
      headers: [
        {
          text: "Professors",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "First Name", value: "ime" },
        { text: "Last name", value: "prezime" },
        { text: "Email", value: "email" },
        { text: "Password", value: "sifra" },
        { text: "Phone", value: "broj_telefona" },
        { text: "Action", value: "delete" },
      ],
      showDataTable: false,
      showForm: true,
      btn:"INSERT",
    };
  },
  created() {
    this.fetchData(); // Call the fetchData function when the component is created
  },
  methods: {
    fetchData() {
      axiosInstance
        .get("/nastavnik/dohvati")
        .then((response) => {
          this.professors = response.data;
          console.log(this.professors);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    },
    deleteProfessor(item) {
      console.log(item);
    },
    switchTemplate() {
      this.showDataTable = !this.showDataTable;
      this.showForm = !this.showForm;
    },
    insertData() {},
  },
};
</script>
