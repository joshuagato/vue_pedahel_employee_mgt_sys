<template>
  <article id="email-confirmation__area">
    <div class="email-confirmation__container moveFromTopEmailConfirm">
      <section class="heading__section">
        <h1 class="moveFromBottomZero">Confirm Email</h1>
        <p class="moveFromBottomOne">Check Your Email and Enter Confirmation Code</p>
      </section>
      <section class="email-confirmation-input__section">
        <form action="">
          <div class="confirmation-code moveFromBottomTwo">
            <label for="code" class="blocked margined">Confirmation Code</label>
            <input id="code" type="text" placeholder="Enter Code" class="blocked">
          </div>
          <div class="submit moveFromBottomThree" @click.prevent="emailConfirmation">
            <button type="submit">Confirm Email</button>
          </div>
          <hr class="moveFromBottomFour">
        </form>
      </section>
      <section class="not-received__section">
        <div class="info moveFromBottomFive">
          <p>Haven't received your code?</p>
        </div>
        <div class="resend-code moveFromBottomSix">
          <span>Resend Code</span>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  methods:  {
    emailConfirmation() {}
  }
}
</script>

<style lang="scss" scoped>
.moveFromTopEmailConfirm {
  animation-name: moveFromTop;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromTop {
  from { opacity: 0; transform: translateY(-90px); }
  to { opacity: 1; transform: translateY(0); visibility: visible; }
}
.moveFromBottomZero {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomOne {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomTwo {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 1.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomThree {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomFour {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 2.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomFive {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 2.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomSix {
  animation-name: moveFromBottom;
  animation-duration: 1s;
  animation-delay: 3.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromBottom {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; visibility: visible; }
}

#email-confirmation__area {
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .email-confirmation__container {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    width: 30rem;
    border-radius: 5px;
    padding: 2.5rem 1rem;

    .heading__section {
      margin-bottom: 1.5rem;
      text-align: center;

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

    .email-confirmation-input__section {
      display: flex;
      justify-content: center;
      padding: 0 1.5rem;

      form {
        width: 100%;

        .blocked {
          display: block;
        }
        .margined {
          margin: 2px 0;
        }
        .confirmation-code, .submit {
          margin: 1.5rem 0;
        }
        label {
          font-size: 13px;
          color: #888888;
        }
        input {
          width: 100%;
          padding: 0.7rem;
          border: 1px solid #dbdbdb;
          border-radius: 5px;

          &::placeholder {
            color: #c2bfbf;
          }
        }

        .submit {
          display: flex;
          justify-content: center;

          button {
            width: 100%;
            background-color: #006eff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 0.9rem;
            letter-spacing: 1px;
            cursor: pointer;
            outline: none;
          }
        }

        hr { 
          // background-color: rgba(197, 198, 201, 0.5); //This can stand alone with the border
          border: 1px solid  #dddddd;
          margin-top: 2.5rem;
        }
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
      .resend-code {
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
  }
}
</style>