<script setup>

</script>
<template>
  <main class="main home">
    <div class="home__wallpaper">
      <h2>Welcome to Test Page</h2>
      <h3>Front-end developer</h3>
    </div>
  </main>
</template>
<style lang="scss">
.home {
  &__wallpaper {
    padding: 262px 0;
    background-image: url('../assets/img/welcome-wallpaper.png');
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    text-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
    color:#ffffff;
    h2{
      font-weight: 700;
      font-size: 70px;
    }
    h3{
      font-weight: 400;
      font-size: 36px;
    }
  }
}
</style>