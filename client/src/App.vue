<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
    meta: {
        script: {
            ldJson: {
                type: 'text/javascript',
                innerHTML: `{ "@context": "http://schema.org" }`
            }
        },
    }
}
</script>
