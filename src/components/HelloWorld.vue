<template>
  <v-app id="inspire">
    <NavBar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" style="padding: 10px">
              <div v-if="currentClassroom" class="p-4">
                <p><strong>Number:</strong> {{ currentClassroom.broj }}</p>
                <p v-if="currentClassroom.datum_rezervacije">
                  <strong>Reserved:</strong><br />
                  {{ currentClassroom.datum_rezervacije }}
                </p>
                <p
                  v-if="
                    findCurrentProfessor && currentClassroom.datum_rezervacije
                  "
                >
                  <strong>Professor:</strong><br />
                  {{ findCurrentProfessor.ime }} <br />
                  {{ findCurrentProfessor.prezime }}
                </p>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg" style="padding: 10px">
              <form>
                <v-select
                  v-model="selectedInstitution"
                  :items="institutions"
                  item-text="naziv"
                  label="Choose institution"
                ></v-select>
              </form>

              <div v-if="selectedClassrooms.length">
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                    v-for="(classroom, index) in selectedClassrooms"
                    :key="index"
                  >
                    <v-card
                      @click="showClassroom(classroom)"
                      type="submit"
                      :style="{
                        backgroundColor: classroom.datum_rezervacije
                          ? 'lightblue'
                          : 'white',
                      }"
                    >
                      <v-card-title>{{ classroom.broj }}</v-card-title>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Choose reservation date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" style="padding: 10px">
              <v-select
                v-model="selectedProfessorEmail"
                :items="professors"
                item-text="email"
                label="Choose professor"
              ></v-select>
              <v-sheet v-if="selectedProfessorObject">
                <p>
                  <strong>Name:</strong> {{ selectedProfessorObject.ime }}
                  {{ selectedProfessorObject.prezime }}
                </p>
                <p>
                  <strong>Phone Number:</strong>
                  {{ selectedProfessorObject.broj_telefona }}
                </p>
              </v-sheet>
            </v-sheet>
            <br />
            <br />
            <br />
            <v-btn
              @click.prevent.self="findCurrentProfessor2"
              class="me-4 ml-10"
              type="submit"
              color="blue"
              style="color: white"
            >
              reserve
            </v-btn>
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
      selectedInstitution: null,
      selectedProfessorEmail: null,
      currentClassroom: null,
      currentProfessor: null,
      institutions: [],
      professors: [],
      classrooms: [],
    };
  },
  created() {
    this.fetchData(); // Call the fetchData function when the component is created
  },
  computed: {
    selectedProfessorObject() {
      console.log("radi");
      return this.professors.find(
        (professor) => professor.email === this.selectedProfessorEmail
      );
    },
    selectedInstitutionObject() {
      return this.institutions.find(
        (institution) => institution.naziv === this.selectedInstitution
      );
    },
    selectedClassrooms() {
      var id = 0;
      if (this.selectedInstitutionObject) {
        id = this.selectedInstitutionObject.id;
      } else {
        id = 0;
      }
      const filteredClassrooms = this.classrooms.filter(
        (classroom) => classroom.ustanova_id === id
      );
      return filteredClassrooms;
    },
    findCurrentProfessor() {
      const prof = this.professors.find(
        (professor) => professor.id === this.currentClassroom.nastavnik_id
      );
      return prof;
    },
  },
  methods: {
    showClassroom(classroom) {
      this.currentClassroom = classroom;
    },
    fetchData() {
      axiosInstance
        .get("/ustanova/dohvati")
        .then((response) => {
          this.institutions = response.data;
          console.log(this.institutions);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
      axiosInstance
        .get("/ucionica/dohvati")
        .then((response) => {
          this.classrooms = response.data;
          console.log(this.classrooms);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
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
  },
};
</script>
