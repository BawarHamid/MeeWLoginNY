import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import { logInOutline, personAddOutline } from "ionicons/icons";

import "./WelcomePage.css";

const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonCard className="welcomeCard">
          {/* <IonAvatar>
            <img
              alt="meewLogo"
              className="logoMeeW"
              src="https://lh3.googleusercontent.com/p/AF1QipO0N52UJYUlZmU9ubcak8yZ5g0PyqnzNHM3SN9F=s1360-w1360-h1020"
            />
          </IonAvatar> */}

          <img
            height="170 px"
            width="350 px"
            alt="meewLogo"
            className="logoWP"
            src="https://lh3.googleusercontent.com/p/AF1QipO0N52UJYUlZmU9ubcak8yZ5g0PyqnzNHM3SN9F=s1360-w1360-h1020"
          />

          <IonCardHeader>
            <br />
            <IonCardTitle>Welcome to MeeW</IonCardTitle>
            <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <br />
            <div className="ion-text-center">
              <IonButton className="wcLoginB" href="/login" color="secondary">
                <IonIcon
                  size="medium"
                  slot="start"
                  icon={logInOutline}
                ></IonIcon>
                Login
              </IonButton>

              <IonButton className="signupB" href="/signup" color="secondary">
                <IonIcon
                  size="medium"
                  slot="start"
                  icon={personAddOutline}
                ></IonIcon>
                Sign Up
              </IonButton>
            </div>

            <div className="meewlinkWCP">
              <a href="https://www.meew.dk/">Visit our main website!</a>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
