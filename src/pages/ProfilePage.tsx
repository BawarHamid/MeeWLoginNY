import {
  IonContent,
  IonPage,
  IonAvatar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonTabBar,
  IonBadge,
  IonList,
  IonItem,
  IonCardContent,
} from "@ionic/react";
import {
  ellipsisHorizontalCircleOutline,
  logInOutline,
  personAddOutline,
  personOutline,
  homeOutline,
  personCircleOutline,
  mailOutline,
  lockClosedOutline,
} from "ionicons/icons";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
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
            <IonCardTitle>Profile:</IonCardTitle>
            <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
          </IonCardHeader>
          <br />
          <br />
          <IonCard className="info-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonAvatar className="profile-avatar">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/people-3-2/128/Programmer-Avatar-Backend-Developer-Nerd-512.png"
                    alt="avatar"
                  />
                </IonAvatar>
              </IonCardTitle>
              <IonCardSubtitle>Software Developer:</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList className="info-list">
                <IonItem>
                  <IonIcon slot="start" icon={personOutline} />
                  <IonLabel>Full name:</IonLabel>
                  <IonBadge color="secondary">@testname</IonBadge>
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" icon={mailOutline} />
                  <IonLabel>Email:</IonLabel>
                  <IonBadge color="secondary">@testmail</IonBadge>
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" icon={lockClosedOutline} />
                  <IonLabel>Password:</IonLabel>
                  <IonBadge color="secondary">@testpassword</IonBadge>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
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

export default ProfilePage;
