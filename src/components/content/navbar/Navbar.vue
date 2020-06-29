<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="left-icon">
        <slot name="left"></slot>
      </div>
      <div class="center-menu">
        <slot name="center"></slot>
      </div>
      <div class="right-text">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name : "Navbar",

  data () {
    return {
    };
  },
}

</script>
<style scoped>
.navbar{
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.navbar-content{
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 100%;
}
.navbar-content > div{
  height: 100%;
}
.left-icon{
 margin-right: 15px;
}
.center-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-text{
  margin-left: auto;
}
</style>