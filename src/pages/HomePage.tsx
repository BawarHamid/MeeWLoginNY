import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonTabBar,
} from "@ionic/react";
import {
  ellipsisHorizontalCircleOutline,
  logInOutline,
  personAddOutline,
  homeOutline,
  personCircleOutline,
} from "ionicons/icons";
import "./HomePage.css";

const HomePage: React.FC = () => {
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
            <IonCardTitle>Home:</IonCardTitle>
            <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="indexB" href="/index">
          <IonIcon icon={ellipsisHorizontalCircleOutline} />
          <IonLabel>MainMenu</IonLabel>
        </IonTabButton>

        <IonTabButton tab="loginB" href="/login">
          <IonIcon icon={logInOutline} />
          <IonLabel>Login</IonLabel>
        </IonTabButton>

        <IonTabButton tab="signupB" href="/signup">
          <IonIcon icon={personAddOutline} />
          <IonLabel>Sign Up</IonLabel>
        </IonTabButton>

        <IonTabButton tab="homeB" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default HomePage;
