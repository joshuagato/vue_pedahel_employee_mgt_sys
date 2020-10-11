<template>
  <article id="password-reset__area">
    <div class="password-reset__container moveFromBackPassRes">
      <section class="heading__section">
        <h1 class="moveFromRightZero">Password Reset</h1>
        <p class="moveFromRightOne">We Will Help You Reset your Password</p>
      </section>
      <section class="password-reset-input__section">
        <form action="" @submit.prevent="passwordReset">
          <div class="email moveFromRightTwo">
            <label for="email" class="blocked margined">Email</label>
            <input id="email" type="email" placeholder="Enter Email Address" class="blocked">
          </div>
          <div class="submit moveFromRightThree">
            <button type="submit">Reset Password</button>
          </div>
          <hr class="moveFromRightFour">
        </form>
      </section>
      <section class="password-remembered__section">
        <div class="info moveFromRightFive">
          <p>Remembered your Password?</p>
        </div>
        <div class="back-to-signin moveFromRightSix">
          <router-link to="/login"><span>Back to Sign In</span></router-link>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    passwordReset() {}
  }
}
</script>

<style lang="scss" scoped>
.moveFromBackPassRes {
  animation-name: moveFromBack;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromBack {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); visibility: visible; }
}
.moveFromRightZero {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightOne {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightTwo {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 1.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightThree {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightFour {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 2.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightFive {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 2.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightSix {
  animation-name: moveFromRight;
  animation-duration: 1s;
  animation-delay: 3.1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; visibility: visible; }
}

#password-reset__area {
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .password-reset__container {
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
        font-size: 14px;
        color: #858585;
      }

      a {
        text-decoration: none;
        color: #3d7bff;
      }
    }

    .password-reset-input__section {
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
        .email, .submit {
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
          margin-top: 3rem;
        }
      }
    }

    .password-remembered__section {
      padding: 0 1.5rem;

      .info {
        margin: 1.5rem 0;

        p {
          text-align: center;
          font-size: 13px;
          color: #838383;
        }
      }
      .back-to-signin {
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
        }
      }
    }
  }
}
</style>