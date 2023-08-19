<template>
    <reservation-list />
  </template>
  
  <script>
    import ReservationList from '../components/ReservationList'
  
    export default {
      name: 'ReservationView',
  
      components: {
        ReservationList,
      },
    }
  </script>