import img from "../assets/close.svg";

function Signup() {
  return (
    <div className="Login">
      <section className="white">
        <p className="login">Sign up</p>
        <p className="welcome">Welcome</p>
        <form action="#">
          <p>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Write your email"
              required
              autofocus
            />
          </p>
          <p>
            <label for="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="•••••••••"
              required
            />
          </p>
          <p>
            <label for="confirm">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="•••••••••"
              required
            />
          </p>

          <div className="buttons">
            <button className="ButtonLogin">Login</button>
            <p className="or">OR</p>
            <button className="Facebook">Continue with Facebook</button>
            <button className="Google">Continue with Google</button>
          </div>
        </form>
      </section>
      <section className="orange">
        <p className="dont">Why is it worth registering?</p>
        <ul>
          <li> you can save and hide ads</li>
          <li> you can request notification of new properties</li>
          <li> you can post an ad</li>
          <li> you can send a message to advertisers</li>
          <li> you can see which property you can buy</li>
        </ul>
        <p className="aleardy">Do you already have an account?</p>
        <button className="Sign">Login</button>
      </section>
    </div>
  );
}

export default Signup;
