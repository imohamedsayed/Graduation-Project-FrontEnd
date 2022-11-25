<template>
  <div class="section-title text-center mt-5 mb-5">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-title {
  position: relative;
  padding: 10px 0;
  &::before {
    content: "";
    position: absolute;
    width: 260px;
    height: 4px;
    background: var(--darker-blue);
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--landing-blue);
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  h1 {
    font-size: 2.4rem;
  }
}
</style>
