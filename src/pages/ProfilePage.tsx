import {
  IonContent,
  IonPage,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonTabBar,
  IonList,
  IonItem,
  IonCardContent,
  useIonRouter,
  IonButton,
  useIonLoading,
  IonInput,
  useIonToast,
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
  walkOutline,
  fingerPrintOutline,
  logOutOutline,
  pencilOutline,
  bagAddOutline,
} from "ionicons/icons";
import { supabase } from "../supabaseConfig";
import { useEffect, useState } from "react";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
  const [session] = useState(() => supabase.auth.getSession());
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const router = useIonRouter();

  const [userprofile, setUserProfile] = useState({
    id: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    age: "",
    jobtitle: "",
  });

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    await showLoading();

    try {
      const user = supabase.auth.getUser();

      const updates = {
        // id: userprofile.id,
        // email: userprofile.email,
        // password: userprofile.password,

        ...userprofile,
        // id: (await user).data.user?.id,
        firstname: userprofile.firstname,
        lastname: userprofile.lastname,
        address: userprofile.address,
        age: userprofile.age,
        jobtitle: userprofile.jobtitle,
      };

      let { data, error } = await supabase
        .from("users")
        .upsert(updates)
        .select();

      showToast({
        message: "Update success!",
        duration: 700,
        color: "warning",
      });
    } catch (error) {
      showToast({
        message: `${error}`,
        duration: 1000,
        color: "danger",
      });
    }
  };

  useEffect(() => {
    getProfile();
  }, [session]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/", "forward", "replace");
  };

  const getProfile = async () => {
    // await showLoading();
    try {
      const user = supabase.auth.getUser();
      let { data, status, error } = await supabase
        .from("users")
        .select(
          "id, email, password, firstname, lastname, address, age, jobtitle"
        )
        .eq("id", (await user!).data.user?.id)
        .single();

      if (data) {
        setUserProfile({
          id: data.id,
          email: data.email,
          password: data.password,
          firstname: data.firstname,
          lastname: data.lastname,
          address: data.address,
          age: data.age,
          jobtitle: data.jobtitle,
        });
      }
    } catch (error) {
      showToast({
        message: `${error}`,
        duration: 1000,
        color: "danger",
      });
    } finally {
      await hideLoading();
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <form className="profileform" onSubmit={handleUpdate}>
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
            <IonCard className="info-card">
              <IonCardHeader>
                {/* <IonCardTitle>
                <IonAvatar className="profile-avatar">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/people-3-2/128/Programmer-Avatar-Backend-Developer-Nerd-512.png"
                    alt="avatar"
                  />
                </IonAvatar>
              </IonCardTitle> */}
                <IonCardSubtitle>
                  {/* <IonIcon slot="start" icon={bagAddOutline} /> */}
                  {/* <IonLabel>User Id:</IonLabel> */}
                  <IonInput
                    color={"success"}
                    value={userprofile.jobtitle}
                    onIonChange={(e) =>
                      setUserProfile({
                        ...userprofile,
                        jobtitle: e.detail.value ?? "",
                      })
                    }
                  ></IonInput>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList className="info-list">
                  <IonItem>
                    <IonIcon slot="start" icon={fingerPrintOutline} />
                    <IonLabel>User Id:</IonLabel>
                    <IonInput value={userprofile.id} disabled></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={personOutline} />
                    <IonLabel>First name:</IonLabel>
                    <IonInput
                      value={userprofile.firstname}
                      onIonChange={(e) =>
                        setUserProfile({
                          ...userprofile,
                          firstname: e.detail.value ?? "",
                        })
                      }
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={personOutline} />
                    <IonLabel>Last name:</IonLabel>
                    <IonInput
                      value={userprofile.lastname}
                      onIonChange={(e) =>
                        setUserProfile({
                          ...userprofile,
                          lastname: e.detail.value ?? "",
                        })
                      }
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={homeOutline} />
                    <IonLabel>Address:</IonLabel>
                    <IonInput
                      value={userprofile.address}
                      onIonChange={(e) =>
                        setUserProfile({
                          ...userprofile,
                          address: e.detail.value ?? "",
                        })
                      }
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={walkOutline} />
                    <IonLabel>Age:</IonLabel>
                    <IonInput
                      value={userprofile.age}
                      onIonChange={(e) =>
                        setUserProfile({
                          ...userprofile,
                          age: e.detail.value ?? "",
                        })
                      }
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={mailOutline} />
                    <IonLabel>E-mail:</IonLabel>
                    <IonInput value={userprofile.email} disabled></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonIcon slot="start" icon={lockClosedOutline} />
                    <IonLabel>Password:</IonLabel>
                    <IonInput value={userprofile.password} disabled></IonInput>
                  </IonItem>
                </IonList>

                <div className="ion-text-center">
                  <IonButton
                    className="updatebtn"
                    color="warning"
                    type="submit"
                  >
                    <IonIcon
                      size="medium"
                      slot="start"
                      icon={pencilOutline}
                    ></IonIcon>
                    Update profile!
                  </IonButton>

                  <IonButton
                    className="logoutbtn"
                    color="danger"
                    onClick={signOut}
                  >
                    <IonIcon
                      size="medium"
                      slot="start"
                      icon={logOutOutline}
                    ></IonIcon>
                    Logout!
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCard>
        </form>
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
