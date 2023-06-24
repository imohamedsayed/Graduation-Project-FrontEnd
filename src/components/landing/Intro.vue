<template>
  <section class="intro" ref="intro" id="section1">
    <div class="overlay"></div>
    <div class="content container">
      <div class="txt">
        <h1 class="mt-4">أهلا بك في موقعنا</h1>
        <div class="paragraph">
          <p>
            تساهم الدراسة في بناء المهارات الشخصية والنفسية وصقلها لدى الأفراد،
            وهو ما يلازم الأشخاص طوال حياتهم غالباً، ومن ذلك المثابرة، وضبط
            النفس، والمرونة، والصبر، حيث يُمكن أن تساعد هذه المهارات في مجموعة
            متنوعة من تحديات الحياة ابتداءً من العمل إلى الحياة الأسرية.
          </p>
        </div>
        <div class="actions">
          <button class="read">قراءة المزيد</button>
          <button class="start" @click="$router.push({ name: 'login' })">
            ابدأ الان
          </button>
        </div>
      </div>
      <div class="img-container d-lg-block d-none">
        <div class="img">
          <img
            src="../../../public/images/landing/girl.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.intro {
  height: calc(100vh);
  width: 100%;
  background: url("../../../public/images/landing/wave-haikei.png") top center;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  .content {
    z-index: 2;
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    .txt {
      width: 520px;
      border-radius: 10px;
      padding: 20px;
      margin: 0 80px 0 0;
      flex: 1.1;
      h1 {
        text-align: center;
        font-size: 2.8rem;
        color: #fff;
      }
      .paragraph {
        margin: 20px 0;
        p {
          font-size: 1.6rem;
          font-weight: 600;
          color: #fff;
        }
      }
      .actions {
        text-align: center;
        > button {
          margin: 0 10px;
          padding: 10px 20px;
          width: 150px;
          border-radius: 20px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 1.2rem;
          &.read {
            border: 1px solid #fff;
            color: #ffff;
            transition: all 0.4s ease;
            &:hover {
              background: #fff;
              color: #000;
            }
          }
          &.start {
            background: linear-gradient(
              to left,
              var(--blue-color),
              var(--landing-blue)
            );
            color: #fff;
          }
        }
      }
    }
    .img-container {
      flex: 1;
      .img {
        width: 100%;
      }
      img {
        height: 100%;
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0);
  }
  .custom-shape-divider-bottom-1668036219 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    svg {
      position: relative;
      display: block;
      width: calc(135% + 1.3px);
      height: 154px;
      .shape-fill {
        fill: #ffffff;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .intro{
  background: #002233 !important;
  }

}
@media (max-width: 768px) {
  .intro{
  background: #002233 !important;
  }
  .content{
    position: absolute;
    top: 80px;
    .txt {
      width: 100% !important;
      border-radius: 10px;
      padding: 0px;
      margin: 0 0 0 0 !important;
      flex: 1.1;
      h1 {
        text-align: center !important;
        font-size: 2rem !important;
        color: #fff;
      }
      .paragraph {
        margin: 0 0 !important;
        p {
          font-size: 1.3rem !important;
          font-weight: 600;
          color: #fff;
        }
      }
      .actions {
        > button {
          &.read {
            margin-bottom: 20px !important;
          }
        }
      }
    }
  }
}

</style>
