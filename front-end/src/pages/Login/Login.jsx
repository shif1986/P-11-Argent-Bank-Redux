import { useDispatch } from "react-redux";
import {setToken, setUser} from "../../redux/actions/userActions";
import { useState } from "react";
import {getUser, signIn} from "../../services/userService";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // envoyer les info dans redux
  const dispatch = useDispatch();
  // redirection de page
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    
    e.preventDefault();
    console.log(email, password);
    // call API, plus stockage de token 
    try {
      const response = await signIn(email, password );
      console.log("MY RESPONSE,",response);
      if (response.status === 200) {
        dispatch(setToken(response.body.token));

        // on recupere l'utilisateur connecté
        const profile = await getUser(response.body.token);
        console.log(profile);
        const data = await profile.body;
        // Stockage l'utilisateur connecté dans Redux
        dispatch(setUser(data));
        navigate("/user")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      {/* Formulaire */}
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>    
    </section>
  );
};

export default Login;
