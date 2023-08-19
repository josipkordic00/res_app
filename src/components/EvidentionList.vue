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
                <div class="users" v-for="user in users" :key="user">
                    {{ user }}
                </div>
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
  export default {
    data: () => ({
      users: ["josip@email.com", "saka@gmail.com", "amsm@gmail.com"]
    }),
  };
  </script>
  