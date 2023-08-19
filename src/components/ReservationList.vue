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
                <template>
                <v-card
                  v-for="reservation in reservations"
                  :key="reservation"
                  class="mx-auto mb-2"
                  max-width="544"
                  
                  outlined
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4"></div>
                      <v-list-item-title class="text-h5 mb-1">
                        {{ reservation.user }}
                      </v-list-item-title>
                      <v-list-item-subtitle>{{
                        reservation.content
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions> </v-card-actions>
                </v-card>
                
              </template>
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
    reservations: [
      { user: "Josip Kordic", content: "sdadsadasddaaad" },
      { user: "Josip Kordic", content: "lorem ipsi" },
      { user: "Josip Kordic", content: "lorem ipsi" },
      { user: "Josip Kordic", content: "lorem ipsiwe" },
      { user: "Josip Kordic", content: "lorem ipsi" },
    ],
  }),
};
</script>
