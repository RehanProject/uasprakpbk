<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-toolbar-title class="title">
          <q-icon name="cloud_queue" size="md" />
          RAMALAN CUACA
        </q-toolbar-title>
        <q-btn-dropdown flat class="custom-btn" label="Tugasnya Rehan" rounded>
          <q-list>
            <q-item clickable @click="navigateToLink('https://rehantifanno-project-cv.vercel.app/')">
              <q-item-section>
                TUGAS 1
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas2-nu.vercel.app/')">
              <q-item-section>
                TUGAS 2
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas3-eight.vercel.app/')">
              <q-item-section>
                TUGAS 3
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas4-rehan.vercel.app/')">
              <q-item-section>
                TUGAS 4
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas5-rehan.vercel.app/')">
              <q-item-section>
                TUGAS 5
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas6-rehan.vercel.app/')">
              <q-item-section>
                TUGAS 6
              </q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://tugas7-rehan.vercel.app/')">
              <q-item-section>
                TUGAS 7
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-card class="q-pa-md custom-card" flat bordered>
          <q-card-section class="row items-center">
            <div class="col-12 col-md-6 text-center">
              <q-icon name="wb_sunny" size="100px" class="text-warning" />
            </div>
            <div class="col-12 col-md-6">
              <div class="text-h5 text-weight-bold">Weather Widget</div>
              <WeatherWidget />
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue'

export default {
  name: 'App',
  components: {
    WeatherWidget
  },
  methods: {
    navigateToLink(url) {
      window.location.href = url;
    }
  }
}
</script>

<style>
.custom-header {
  background: linear-gradient(45deg, #2196F3, #21CBF3);
  color: white;
}
.title {
  display: flex;
  align-items: center;
}
.title q-icon {
  margin-right: 10px;
}
.custom-btn {
  background-color: #673AB7;
  color: white;
}
.custom-btn .q-btn__content {
  color: white;
}
.custom-card {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  transition: transform 0.3s;
}
.custom-card:hover {
  transform: translateY(-5px);
}
</style>
