<script setup>

</script>
<template>
  <div class="container-content">
    <header class="header">
      <img class="header__logo" src="../assets/img/logo.svg" alt="Logo">
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__list-item"><a href="#">Home</a></li>
          <li class="menu__list-item"><a href="#">About us</a></li>
          <li class="menu__list-item"><a href="#">Frameworks</a></li>
          <li class="menu__list-item"><a href="#">Applications</a></li>
          <li class="menu__list-item"><a href="#">Contact us</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style scoped lang="scss">
$link: #3d3d3d;
.header {
  padding: 21px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

.menu {
  &__list {
    display: flex;
    gap: 15px;
    list-style: none;
  }

  &__list-item {
    & > a {
      text-decoration: none;
      color: $link;
      text-transform: uppercase;

      &:hover {
        color: #71A3FF;
      }
    }
  }
}
</style>