<template>
  <article id="signup__area">
    <div class="signup__container moveFromFront">
      <section class="heading__section">
        <h1 class="moveFromTop">Create an Account</h1>
        <p class="moveFromRight">
          <span>Have an Account? </span><router-link to="/login">Sign In</router-link>
        </p>
      </section>
      <section class="signup-input__section">
        <form action="" @submit.prevent="completeRegistration">
          <div class="email moveFromLeft">
            <label for="email" class="blocked margined">Email</label>
            <input id="email" type="email" placeholder="Enter Email Address" class="blocked">
          </div>
          <div class="password moveFromRight">
            <label for="password" class="blocked margined">Password</label>
            <input id="password" type="password" placeholder="Enter Password" class="blocked">            
          </div>
          <div class="submit moveFromBottom">
            <button type="submit">Create Account</button>
          </div>
          <div class="terms-of-service moveFromLeftTwo">
            <p class="message">By creating an account, you agree to our</p>
            <router-link to="#"><p>Terms of Service</p></router-link>
          </div>
          <hr class="moveFromBackTwo">
        </form>
      </section>
      <section class="open-auth__section">
        <div class="info moveFromRightTwo">
          <p>Or create an account using:</p>
        </div>
        <div class="google-signup moveFromTopThree">
          <img src="https://i.pinimg.com/originals/c3/a2/6c/c3a26c0c8b6110d2e232e72c79c1ba68.jpg" 
            alt="google-login">
          <span>Continue with Google</span>
        </div>
        <div class="facebook-signup moveFromBottomThree">
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
    completeRegistration() {
      this.$router.replace('/complete-registration');
    }
  }
}
</script>

<style lang="scss" scoped>
#signup__area {
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .signup__container {
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

    .signup-input__section {
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

        .terms-of-service {
          margin: 1.5rem 0;
          text-align: center;
          font-size: 13px;

          p {
            color: #838383;
            margin: 5px 0;
          }

          a {
            text-decoration: none;

            p {
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
      .google-signup, .facebook-signup {
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