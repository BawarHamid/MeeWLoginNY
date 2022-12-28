import { useState } from "react";
import {
  IonButton,
  IonContent,
  useIonToast,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { logInOutline, lockClosedOutline, mailOutline } from "ionicons/icons";
import "./LoginPage.css";

//import { LoginAsync } from "../supabaseConfig";
import { supabase } from "../../supabaseConfig";
import { Link, useHistory } from "react-router-dom";

const LoginPageTest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [showToast] = useIonToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Sign in with Supabase using the email and password
      const user = await supabase.auth.signInWithPassword({ email, password });
      console.log(`Logged in as ${user.data}`);
      showToast({
        message: `Logged in as ${supabase.auth.getUser.name}`,
        duration: 2000,
      });
      // Navigate to the home page
      history.push("/home");
    } catch (error) {
      console.error(error);
      showToast({
        message: "Error logging in",
        color: "danger",
        duration: 2000,
      });
    }
  };

  // async function LoginUser() {
  //   const result = await LoginAsync(email, password);
  //   console.log(
  //     `${result ? "You are now logged in" : "Invalid E-mail or Password"}`
  //   );
  // }

  return (
    <form onSubmit={handleSubmit}>
      <IonInput
        type="email"
        placeholder="Email"
        value={email}
        onIonChange={(event) => setEmail(event.detail.value!)}
        required
      />
      <IonInput
        type="password"
        placeholder="Password"
        value={password}
        onIonChange={(event) => setPassword(event.detail.value!)}
        required
      />
      <IonButton type="submit">Log In</IonButton>
    </form>
  );
};

export default LoginPageTest;
