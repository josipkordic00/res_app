<template>
    <nav>
      <v-app-bar app color="blue" flat>
        <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
        ></v-avatar>
  
        <v-tabs centered class="ml-n9" color="white">
          <v-tab>
            <router-link to="/" style="color: white; text-decoration: none; padding: 32px;"
              >Homepage</router-link
            >
          </v-tab>
          <v-tab v-for="link in links" :key="link">
            <router-link
              :to="`/${link.toLowerCase()}`"
              style="color: white; text-decoration: none; padding: 32px;" 
              >{{ link }}</router-link
            >
          </v-tab>
        </v-tabs>
  
        <v-avatar
          class="hidden-sm-and-down"
          color="blue darken-3 shrink"
          size="32"
          style="cursor: pointer"
        >
          <b style="color: white">U</b>
        </v-avatar>
      </v-app-bar>
    </nav>
</template>
<script>
export default {
  data: () => ({
    links: ["Reservations", "Notifications", "Evidentions"],
  }),
};
</script>
