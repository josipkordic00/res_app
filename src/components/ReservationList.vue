<template>
  <v-app id="inspire">
    <NavBar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row class="mr-10">
          <v-col cols="8" md="2">
            <v-col cols="8" md="2">
      <v-btn
        @click="switchTemplate"
        class="me-4 ml-10 pl-5 pr-5"
        type="submit"
        color="blue"
        style="color: white"
        v-if="showDataTable"
      >{{ btn[0] }}</v-btn>
      <v-btn
        @click="switchTemplate"
        class="me-4 ml-10 pl-5 pr-5"
        type="submit"
        color="blue"
        style="color: white"
        v-else
      >{{ btn[1] }}</v-btn>
    </v-col>
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
                  <v-btn
                    @click="deleteProfessor(props.item)"
                    color="red"
                    style="color: white"
                  >
                    DELETE
                  </v-btn></template
                >
              </v-data-table>

              <div v-show="showForm" style="width: 90%; margin-left: 20px">
                <v-text-field
                  v-model="formData.firstName"
                  label="First name"
                ></v-text-field>
                <v-text-field
                  v-model="formData.lastName"
                  label="Last name"
                ></v-text-field>
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  v-model="formData.password"
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="formData.phone"
                  label="Phone"
                  type="number"
                ></v-text-field>
                <v-col cols="12" md="5">
                  <v-btn
                    @click="insertData()"
                    class="me-4 ml-10 pl-5 pr-5"
                    type="submit"
                    color="blue"
                    style="color: white; left: 100%"
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
        { text: "Action", value: "action" },
      ],
      showDataTable: true,
      showForm: false,
      btn:["INSERT","BACK"],
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
      },
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
          
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    },
    deleteProfessor(item) {
      axiosInstance
        .get(`/nastavnik/izbrisi/${item.id}`)
        .then((response) => {
          this.professors = response.data;
          
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
        window.location.reload()
    },
    switchTemplate() {
      this.showDataTable = !this.showDataTable;
      this.showForm = !this.showForm;
    },
    insertData() {
      const requestData = {
        email: this.formData.email,
        sifra: this.formData.password,
        ime: this.formData.firstName,
        prezime: this.formData.lastName,
        broj_telefona: this.formData.phone,
        qr_code_path: null,
      };
      axiosInstance
        .post(`/nastavnik/dodaj`, requestData)
        .then((response) => {
          this.professors = response.data;
          console.log(response.data)
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
        
        setTimeout(() => {
        window.location.reload();
      }, 200);
    },
  },
};
</script>
