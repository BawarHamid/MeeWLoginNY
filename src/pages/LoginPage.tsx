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
  useIonLoading,
} from "@ionic/react";
import { logInOutline, lockClosedOutline, mailOutline } from "ionicons/icons";
import "./LoginPage.css";
import { supabase } from "../supabaseConfig";
import { Link, useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const [message, setMessage] = useState({});
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await showLoading();

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      setMessage({
        message: error.message ? error.message : "Something went wrong",
        type: "error",
      });
      showToast({
        message: `${error}`,
        duration: 1000,
        color: "danger",
      });
    } else {
      showToast({
        message: "You are now logged in!",
        duration: 100,
        color: "success",
      });
    }
    await hideLoading();
  };

  return (
    <IonPage>
      <form className="loginform" onSubmit={handleLogin}>
        <IonContent className="ion-padding" fullscreen>
          <IonCard className="loginCard">
            <img
              height="170 px"
              width="350 px"
              alt="meewLogo"
              className="logoLP"
              src="https://lh3.googleusercontent.com/p/AF1QipO0N52UJYUlZmU9ubcak8yZ5g0PyqnzNHM3SN9F=s1360-w1360-h1020"
            />
            <IonCardHeader>
              <IonCardTitle>Login:</IonCardTitle>
              <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <br />
          <IonItem>
            <IonIcon size="medium" slot="end" icon={mailOutline} />
            <IonLabel position="floating">Email:</IonLabel>
            <IonInput
              onIonChange={(e) => setEmail(e.detail.value ?? "")}
              value={email}
              placeholder="Enter e-mail"
              type="email"
              required
            />
          </IonItem>
          <br />
          <br />
          <IonItem>
            <IonIcon size="medium" slot="end" icon={lockClosedOutline} />
            <IonLabel position="floating">Password:</IonLabel>
            <IonInput
              onIonChange={(e) => setPassword(e.detail.value ?? "")}
              value={password}
              placeholder="Enter password"
              type="password"
              required
            />
          </IonItem>

          <div className="ion-text-center">
            <IonButton
              type="submit"
              className="loginPageButton"
              color="secondary"
            >
              <IonIcon size="medium" slot="start" icon={logInOutline} />
              Login
            </IonButton>
          </div>
          <br />
          <div className="meewlinkLP">
            <p>
              Don't have an account? <Link to="signup">Sign up</Link>
            </p>
          </div>
        </IonContent>
      </form>
    </IonPage>
  );
};

export default LoginPage;
