<template>
  <div id="app">
    <div2 class="title-home">
      <h1>Home Page:</h1>
    </div2>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.scan-button {
  position: absolute;
  border: none;
  outline: none;
  background: none;
  border-radius: 2px;
  right: 0px;
}
.scan-button:hover {
  cursor: pointer;
}
.scan-button img {
  width: 50px;
}
.title-home {
  position:absolute;
  font-size:2rem;
  left: 20%;
  color:rgb(73, 3, 73);
  background: -webkit-linear-gradient(
    100deg,
    rgb(28, 8, 141), 
    rgb(91, 150, 37));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>