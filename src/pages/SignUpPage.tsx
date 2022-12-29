import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { personAddOutline } from "ionicons/icons";
import "./SignUpPage.css";

import { supabase } from "../supabaseConfig";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  // const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(supabase);
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <IonCard className="signupCard">
          <img
            height="170 px"
            width="350 px"
            alt="meewLogo"
            className="logoLP"
            src="https://lh3.googleusercontent.com/p/AF1QipO0N52UJYUlZmU9ubcak8yZ5g0PyqnzNHM3SN9F=s1360-w1360-h1020"
          />
          <IonCardHeader>
            <IonCardTitle>Sign up:</IonCardTitle>
            <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCardContent>
          {/* <IonItem>
            <IonLabel position="floating">Full Name:</IonLabel>
            <IonInput
              // value={fullName}
              placeholder="Enter full name"
              type="text"
            />
          </IonItem> */}
          <IonItem>
            <IonLabel position="floating">Email:</IonLabel>
            <IonInput
              onIonChange={(e) => setEmail(e.detail.value ?? "")}
              value={email}
              placeholder="Enter email"
              type="email"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password:</IonLabel>
            <IonInput
              onIonChange={(e) => setPassword(e.detail.value ?? "")}
              value={password}
              placeholder="Enter password"
              type="password"
            />
          </IonItem>
          {/* <IonItem>
            <IonLabel position="floating">Confirm Password:</IonLabel>
            <IonInput
              value={password}
              placeholder="Enter password again"
              type="password"
            />
          </IonItem> */}
          <div className="ion-text-center">
            <IonButton
              onClick={() => supabase.auth.signUp({ email, password })}
              className="signupButton"
              color="secondary"
            >
              <IonIcon size="medium" slot="start" icon={personAddOutline} />
              Sign up
            </IonButton>
          </div>
          <div className="meewlinkSP">
            <p>
              Already Registered User? <Link to="login">Login</Link>
            </p>
          </div>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
