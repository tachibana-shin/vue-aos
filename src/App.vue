<template>
  <div id="app">
    <router-view />
    <app-footer />
  </div>
</template>
<script>
  import AppFooter from "@/components/AppFooter"
  export default {
    name: "app",
    components: {
      AppFooter
    }
  }
</script>
<style lang="scss">
  /* Reset code */
  *,
  :after,
  :before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    text-size-adjust: 100%;
    -weblit-tap-highlight-color: #00000000;
  }

  /* /reset done */

  body {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: rgb(250, 250, 250);
    color: rgb(51, 51, 51);
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe Ul", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    height: auto;
    padding-top: 70px;
    -webkit-font-smoothing: antialiased;

    @media (prefers-color-scheme: dark) {
      background-color: rgb(25, 25, 25);
      color: #fff;
    }
  }
</style>