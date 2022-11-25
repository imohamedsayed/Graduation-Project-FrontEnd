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
          <button class="start">ابدأ الان</button>
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
    <div class="custom-shape-divider-bottom-1668036219">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
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
  background: url("../../../public/images/landing/1.png") top center;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  .content {
    z-index: 2;
    display: flex;
    align-items: center;
    position: relative;
    .txt {
      width: 520px;
      border-radius: 10px;
      padding: 20px;
      flex: 1;
      h1 {
        text-align: center;
        font-size: 2.8rem;
        color: #fff;
      }
      .paragraph {
        margin: 40px 0;
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
</style>
