import { Carousel, Button, Space } from "antd";
import React from "react";
import useStore from "../GlobalStore";
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
  useIonRouter,
  useIonAlert,
} from "@ionic/react";
import {
  ellipsisHorizontalCircleOutline,
  logInOutline,
  personAddOutline,
  homeOutline,
  personCircleOutline,
  logOutOutline,
} from "ionicons/icons";
import { supabase } from "../supabaseConfig";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const [presentAlert] = useIonAlert();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/", "forward", "replace");
  };

  const { count, increment, decrement } = useStore();

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

        <Carousel
          autoplay
          effect="fade"
          speed={4000}
          className="homeCarousel"
          dots
        >
          <div>
            <img
              src="https://wallpaperaccess.com/full/5120324.jpg"
              alt="image1"
            />
          </div>
          <div>
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Nice-Backgrounds-for-desktop-download.jpg"
              alt="image2"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg"
              alt="image3"
            />
          </div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/5030514.jpg"
              alt="image4"
            />
          </div>
        </Carousel>

        <div>
          <p>Count: {count}</p>
          <Space wrap>
            <Button onClick={increment} type="primary" danger>
              Increment
            </Button>
            <Button onClick={decrement} ghost>
              Decrement
            </Button>
          </Space>
        </div>
      </IonContent>

      <IonTabBar slot="bottom">
        {/* <IonTabButton tab="indexB" href="/index">
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
        </IonTabButton> */}

        <IonTabButton tab="homeB" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>

        <IonTabButton
          tab="logout"
          onClick={() => {
            presentAlert({
              header: "Logging out...",
              buttons: [
                {
                  text: "Cancel",
                  role: "cancel",
                },
                {
                  text: "Confirm",
                  role: "confirm",
                  handler: () => {
                    signOut();
                  },
                },
              ],
            });
          }}
        >
          <IonIcon icon={logOutOutline} />
          <IonLabel>Log out</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default HomePage;
