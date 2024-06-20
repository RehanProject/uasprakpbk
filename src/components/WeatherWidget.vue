<template>
  <q-card-section class="weather-widget">
    <div class="row justify-center items-center">
      <div class="col-12 text-center">
        <q-input
          v-model="city"
          label="Masukkan Nama Kota"
          outlined
          dense
          class="city-input"
          @keyup.enter="fetchWeather"
        >
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" @click="fetchWeather" />
          </template>
        </q-input>
      </div>
      <div v-if="weather.main" class="col-12 text-center q-mt-md">
        <div class="text-h5">{{ city }}</div>
        <div class="weather-icon-container">
          <q-icon 
            :name="weatherIcon" 
            size="70px" 
            class="text-primary q-my-md" 
            :class="weatherIconClass" 
          />
        </div>
        <div>{{ weatherDescription }}</div>
        <div class="text-h6">{{ temperature }}°C</div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      city: 'Jakarta',
      weather: {},
      temperature: null,
    }
  },
  computed: {
    weatherIcon() {
      switch (this.weather.main) {
        case 'Clear': return 'wb_sunny'
        case 'Clouds': return 'cloud'
        case 'Rain': return 'umbrella'
        case 'Snow': return 'ac_unit'
        case 'Thunderstorm': return 'flash_on'
        case 'Drizzle': return 'grain'
        default: return 'wb_cloudy'
      }
    },
    weatherIconClass() {
      switch (this.weather.main) {
        case 'Clear': return 'sunny-icon'
        case 'Clouds': return 'cloudy-icon'
        case 'Rain': return 'rainy-icon'
        case 'Snow': return 'snowy-icon'
        case 'Thunderstorm': return 'thunderstorm-icon'
        case 'Drizzle': return 'drizzle-icon'
        default: return ''
      }
    },
    weatherDescription() {
      return this.weather.description ? this.weather.description.charAt(0).toUpperCase() + this.weather.description.slice(1) : ''
    }
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      const API_KEY = '296f8390da4390c90a7f0f5da4155943'
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`)
        this.weather = response.data.weather[0]
        this.temperature = response.data.main.temp
      } catch (error) {
        console.error("Error fetching weather data:", error)
        alert("Kota tidak ditemukan atau terjadi kesalahan jaringan.")
      }
    }
  },
  mounted() {
    this.fetchWeather()
  }
}
</script>

<style>
.weather-widget {
  background: rgba(239, 247, 0, 0.822);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 300px; /* Ensure the widget has some height */
}
.city-input {
  max-width: 250px;
  margin: 0 auto; /* Center the input box */
}
.q-my-md {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.sunny-icon {
  animation: spin 4s linear infinite;
  color: yellow; /* Ensure the sunny icon is yellow */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.cloudy-icon {
  animation: drift 5s linear infinite;
}

@keyframes drift {
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
}

.rainy-icon {
  animation: rain 1s linear infinite;
}

@keyframes rain {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.snowy-icon {
  animation: snow 2s linear infinite;
}

@keyframes snow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.thunderstorm-icon {
  animation: flash 1s linear infinite;
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
