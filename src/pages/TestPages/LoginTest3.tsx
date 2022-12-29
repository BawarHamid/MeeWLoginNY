import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonLabel,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonInput,
  IonButton,
  useIonLoading,
  useIonToast,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { supabase } from "../../supabaseConfig";

const LoginTest3: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log();
    e.preventDefault();
    await showLoading();
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      await showToast({ message: "Check your email for the login link!" });
      history.replace("/home");
    } catch (e: any) {
      await showToast({
        message: e.error_description || e.message,
        duration: 5000,
      });
    } finally {
      await hideLoading();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true}>
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? "")}
                type="email"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                value={password}
                name="password"
                onIonChange={(e) => setPassword(e.detail.value ?? "")}
                type="password"
              ></IonInput>
            </IonItem>
            <div className="ion-text-center">
              <IonButton
                type="submit"
                className="loginPageButton"
                color="secondary"
              >
                Login
              </IonButton>
            </div>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LoginTest3;
