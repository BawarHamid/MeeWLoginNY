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

// import { LoginAsync } from "../supabaseConfig";
import { supabase } from "../supabaseConfig";
import { Link, useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(
    `${supabase ? "You are now logged in" : "Invalid E-mail or Password"}`
  );
  // const history = useHistory();
  // const [showToast, setShowToast] = useState(false);

  // const handleLogin = () => {
  //   if (email === email && password === password) {
  //     // navigate to the home page
  //     // replace 'HomePage' with the name of your home page component
  //     history.push("/home");
  //   } else {
  //     // show an error toast if the login fails
  //     setShowToast(true);
  //   }
  // };

  // async function LoginUser() {
  //   const result = await LoginAsync(email, password);
  //   // console.log(
  //   //   `${result ? "You are now logged in" : "Invalid E-mail or Password"}`
  //   // );
  // }

  return (
    <IonPage>
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
            <IonCardSubtitle>MeeW Studios Hot</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <br />
        <IonItem>
          <IonIcon size="medium" slot="end" icon={mailOutline} />
          <IonLabel position="floating">Email:</IonLabel>
          <IonInput
            onIonChange={(e) => setEmail(e.detail.value ?? "")}
            // value={email}
            placeholder="Enter e-mail"
            type="email"
          />
        </IonItem>
        <br />
        <br />
        <IonItem>
          <IonIcon size="medium" slot="end" icon={lockClosedOutline} />
          <IonLabel position="floating">Password:</IonLabel>
          <IonInput
            onIonChange={(e) => setPassword(e.detail.value ?? "")}
            // value={password}
            placeholder="Enter password"
            type="password"
          />
        </IonItem>

        <div className="ion-text-center">
          <IonButton
            onClick={
              () => supabase.auth.signInWithPassword({ email, password })
              // LoginUser()
            }
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
    </IonPage>

    /* <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Login her" />
      </IonContent>
    </IonPage> */
  );
};

export default LoginPage;
