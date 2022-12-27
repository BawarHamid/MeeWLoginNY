import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipsisHorizontalCircleOutline,
  logInOutline,
  personAddOutline,
  homeOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPageTest from "./pages/LoginPageTest";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs> */}
      <IonRouterOutlet>
        <Route exact path="/index">
          <WelcomePage />
        </Route>

        <Route exact path="/login">
          <LoginPageTest />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/">
          <Redirect to="/index" />
        </Route>
      </IonRouterOutlet>
      {/* <IonTabBar slot="bottom">
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
        </IonTabBar> */}
      {/* </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
