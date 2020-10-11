<template>
  <article id="signin__area">
    <div class="signin__container moveFromFront">
      <section class="heading__section">
        <h1 class="moveFromTop">Sign In</h1>
        <p class="moveFromRight"><span>New to Our Product? </span>
          <router-link to="/register">Create an Account</router-link>
        </p>
      </section>
      <section class="signin-input__section">
        <form action="" @submit.prevent="login">
          <div class="email moveFromLeft">
            <label for="email" class="blocked margined">Email</label>
            <input id="email" type="email" placeholder="Enter Email Address" class="blocked">
          </div>
          <div class="password moveFromRight">
            <label for="password" class="blocked margined">Password</label>
            <input id="password" type="password" placeholder="Enter Password" class="blocked">            
          </div>
          <div class="signed-in moveFromLeft">
            <input id="keepme" type="checkbox">
            <label for="keepme">Keep me signed in</label>
          </div>
          <div class="submit moveFromBottom">
            <button type="submit">Sign In</button>
          </div>
          <div class="forgot-password moveFromLeftTwo">
            <router-link to="/password-reset"><p>Forgot your password?</p></router-link>
          </div>
          <hr class="moveFromBackTwo">
        </form>
      </section>
      <section class="open-auth__section">
        <div class="info moveFromRightTwo">
          <p>Or sign in using:</p>
        </div>
        <div class="google-login moveFromTopThree">
          <img src="https://i.pinimg.com/originals/c3/a2/6c/c3a26c0c8b6110d2e232e72c79c1ba68.jpg" 
            alt="google-login">
          <span>Continue with Google</span>
        </div>
        <div class="facebook-login moveFromBottomThree">
          <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2020/07/fb-1200.png?w=780&h=408&crop=1" 
            alt="facebook-login">
          <span>Continue with Facebook</span>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    login() {}
  }
}
</script>

<style lang="scss" scoped>
#signin__area {
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .signin__container {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    width: 30rem;
    border-radius: 5px;
    padding: 2.2rem 1rem;

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

        span {
          color: #858585;
        }
      }

      a {
        text-decoration: none;
        color: #3d7bff;
      }
    }

    .signin-input__section {
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
        .email, .password, .signed-in, .submit, .alternative {
          margin: 1rem 0;
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

        .signed-in {
          display: flex;
          align-items: center;
          // margin-top: 1rem;

          input {
            width: 1rem;
            margin-right: 5px;
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

        .forgot-password {
          margin: 1.5rem 0;

          a {
            text-decoration: none;

            p {
              text-align: center;
              font-size: 13px;
              color: #006eff;
            }
          }
        }

        hr { 
          // background-color: rgba(197, 198, 201, 0.5); //This can stand alone with the border
          border: 1px solid  #dddddd;
        }
      }
    }

    .open-auth__section {
      padding: 0 1.5rem;
      
      .info {
        margin: 1.5rem 0;

        p {
          text-align: center;
          font-size: 13px;
          color: #838383;
        }
      }
      .google-login, .facebook-login {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        border: 1px solid #dbdbdb;
        padding: 0.5rem;
        color: #006eff;

        img {
          height: 25px;
        }
      }
    }
  }
}
</style>