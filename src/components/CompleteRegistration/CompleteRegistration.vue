<template>
  <article id="complete-registration__area">
    <div class="complete-registration__container moveFromBackCompReg">
      <section class="heading__section">
        <img src="data:image/jpeg;base64,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" 
          alt="almost-there" class="moveFromLeftZero">
        <h1 class="moveFromLeftOne">Almost There!</h1>
        <p class="moveFromLeftTwo">Check your email inbox and confirm your account</p>
      </section>
      <section class="division__section">
        <hr class="moveFromLeftThree">
      </section>
      <section class="not-received__section">
        <div class="info moveFromLeftFour">
          <p>Didn't receive any mail?</p>
        </div>
        <div class="resend-confirmation moveFromLeftFive">
          <span>Resend Confirmation</span>
        </div>
      </section>
      <section class="received__section moveFromLeftSix">
        <div class="confirm">
          <router-link to='/email-confirmation'><span>Enter Confirmation Code</span></router-link>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.moveFromBackCompReg {
  animation-name: moveFromBack;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromBack {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); visibility: visible; }
}
.moveFromLeftZero {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftOne {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftTwo {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 1.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftThree {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftFour {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 2.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftFive {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 2.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftSix {
  animation-name: moveFromLeft;
  animation-duration: 1s;
  animation-delay: 3.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; visibility: visible; }
}

#complete-registration__area {
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .complete-registration__container {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    width: 30rem;
    border-radius: 5px;
    padding: 2.5rem 1rem;

    .heading__section {
      margin-bottom: 1.5rem;
      text-align: center;

      img {
        height: 100px;
      }

      h1 {
        font-size: 29px;
        font-weight: 600;
        margin: 0.5rem 0;
      }

      p {
        font-size: 14.5px;
          color: #858585;
      }

      a {
        text-decoration: none;
        color: #3d7bff;
      }
    }

    .division__section {
      padding: 0 1.5rem;

      hr { 
        // background-color: rgba(197, 198, 201, 0.5); //This can stand alone with the border
        border: 1px solid  #dddddd;
        margin-top: 3rem;
      }      
    }

    .not-received__section {
      padding: 0 1.5rem;

      .info {
        margin: 1.5rem 0;

        p {
          text-align: center;
          font-size: 13px;
          color: #838383;
        }
      }
      .resend-confirmation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        border: 1px solid #dbdbdb;
        padding: 0.75rem;
        font-size: 14.5px;

        span {
          color: #006eff;          
        }
      }
    }

    .received__section {
      padding: 0 1.5rem;

      .confirm {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        border: 1px solid #dbdbdb;
        padding: 0.75rem;
        font-size: 14.5px;

        a {
          text-decoration: none;
          
          span {
            color: #006eff;          
          }
          color: #006eff;          
        }
      }
    }
  }
}
</style>