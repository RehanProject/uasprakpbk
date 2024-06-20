<template>
    <div>
      <q-btn label="Tugas 1" @click="goToNetlify"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task1',
    methods: {
      goToNetlify() {
        window.open('https://your-netlify-task1-url.netlify.app', '_blank');
      }
    }
  };
  </script>
  