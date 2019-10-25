<template>
  <div id="app" style=" height: 100%;
    width: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from "./pages/Index"
export default {
  components: {
    // Index,
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0
  }
  html,body{
    height: 100%;
    width: 100%;
  }
  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
}
</style>
