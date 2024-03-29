import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonIcon,
  useIonLoading,
  useIonToast,
} from "@ionic/react";
import { personAddOutline } from "ionicons/icons";
import "./SignUpPage.css";

import { supabase } from "../supabaseConfig";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [age, setAge] = useState("");
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await showLoading();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
      showToast({
        message: `${error}`,
        duration: 1000,
        color: "danger",
      });
    } else {
      const supabaseAuthUser = supabase.auth.getUser();
      var userId;

      supabaseAuthUser.then((val) => {
        userId = val.data.user!.id;
        // console.log(userId);
        supabase
          .from("UserProfile")
          .insert({
            id: userId,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            address: address,
            age: age,
            jobtitle: jobtitle,
          })
          .select()
          .then((response) => {
            console.log(response);
          });
        showToast({
          message: "Sign up success!",
          duration: 700,
          color: "success",
        });
      });
    }
    await hideLoading();
  };

  return (
    <IonPage>
      <form className="signupform" onSubmit={handleSignUp}>
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
            <IonItem>
              <IonLabel position="floating">First name:</IonLabel>
              <IonInput
                onIonChange={(e) => setFirstName(e.detail.value ?? "")}
                value={firstname}
                placeholder="Enter first name..."
                type="text"
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Last name:</IonLabel>
              <IonInput
                onIonChange={(e) => setLastName(e.detail.value ?? "")}
                value={lastname}
                placeholder="Enter last name..."
                type="text"
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Address:</IonLabel>
              <IonInput
                onIonChange={(e) => setAddress(e.detail.value ?? "")}
                value={address}
                placeholder="Enter address..."
                type="text"
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Age:</IonLabel>
              <IonInput
                onIonChange={(e) => setAge(e.detail.value ?? "")}
                value={age}
                placeholder="Enter age..."
                type="number"
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Current Job:</IonLabel>
              <IonInput
                onIonChange={(e) => setJobTitle(e.detail.value ?? "")}
                value={jobtitle}
                placeholder="Enter job..."
                type="text"
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">E-mail:</IonLabel>
              <IonInput
                onIonChange={(e) => setEmail(e.detail.value ?? "")}
                value={email}
                placeholder="Enter email"
                type="email"
                required
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
                type="submit"
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
      </form>
    </IonPage>
  );
};

export default SignUpPage;
