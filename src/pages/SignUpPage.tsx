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

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://vylxztnmdgqgpddzeocv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bHh6dG5tZGdxZ3BkZHplb2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMTA0NzgsImV4cCI6MTk4NzU4NjQ3OH0.tAgJ2XcH7HPgEwtPqkQNrnGsMM6QtCsfIsgQNOA6844"
);
const SignUpPage: React.FC = () => {
  // const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(supabase);
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
            <a href="/login">Already Registered? Click here to login</a>
          </div>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
