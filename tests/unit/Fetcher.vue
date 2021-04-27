<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'fetcherComponent',
  mounted() {
    axios.get('/')
  }
}
</script>
