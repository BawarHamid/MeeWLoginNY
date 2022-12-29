import { useState } from "react";
// import {
//   IonButton,
//   IonContent,
//   useIonToast,
//   IonInput,
//   IonItem,
//   IonLabel,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonIcon,
//   IonCard,
//   IonCardContent,
//   IonCardHeader,
//   IonCardSubtitle,
//   IonCardTitle,
// } from "@ionic/react";
// import { logInOutline, lockClosedOutline, mailOutline } from "ionicons/icons";
// import "./LoginPage.css";

// // import { SignInAsync } from "../supabaseConfig";
// import { supabase } from "../supabaseConfig";
// import { Link, useHistory } from "react-router-dom";

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showToast] = useIonToast();
//   const history = useHistory();

//   // console.log(
//   //   `${supabase ? "You are now logged in" : "Invalid E-mail or Password"}`
//   // );
//   async function SignUpUser() {
//     console.log(email, password);
//     const user = await supabase
//       .from("users")
//       .select("email, password")
//       .match({ email: email, password: password });

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     console.log(user);
//     if (user!) {
//       showToast({
//         message: "Invalid E-mail or Password",
//         color: "danger",
//         duration: 10000,
//         buttons: [
//           {
//             text: "Dismiss",
//             role: "cancel",
//           },
//         ],
//       });
//     } else {
//       history.push("/home");
//       showToast({
//         message: "You are now logged in!",
//         duration: 6000,
//         color: "success",
//       });
//     }
//     // history.push("/home");
//     // showToast({
//     //   message: "You are now logged in!",
//     //   duration: 6000,
//     //   color: "success",
//     // });
//   }

//   // async function LoginUser() {
//   //   await SignInAsync(email, password);
//   //     console.log(
//   //       `${supabase ? "You are now logged in" : "Invalid E-mail or Password"}`
//   //     );
//   //     console.log(
//   //       `${result ? "You are now logged in" : "Invalid E-mail or Password"}`
//   //     );

//   // }

//   return (
//     <IonPage>
//       <IonContent className="ion-padding" fullscreen>
//         <IonCard className="loginCard">
//           <img
//             height="170 px"
//             width="350 px"
//             alt="meewLogo"
//             className="logoLP"
//             src="https://lh3.googleusercontent.com/p/AF1QipO0N52UJYUlZmU9ubcak8yZ5g0PyqnzNHM3SN9F=s1360-w1360-h1020"
//           />
//           <IonCardHeader>
//             <IonCardTitle>Login:</IonCardTitle>
//             <IonCardSubtitle>MeeW Studios</IonCardSubtitle>
//           </IonCardHeader>
//         </IonCard>
//         <br />
//         <IonItem>
//           <IonIcon size="medium" slot="end" icon={mailOutline} />
//           <IonLabel position="floating">Email:</IonLabel>
//           <IonInput
//             // onIonChange={(e) => setEmail(e.detail.value ?? "")}
//             onIonChange={(e) => setEmail(e.detail.value!)}
//             value={email}
//             placeholder="Enter e-mail"
//             type="email"
//             required
//           />
//         </IonItem>
//         <br />
//         <br />
//         <IonItem>
//           <IonIcon size="medium" slot="end" icon={lockClosedOutline} />
//           <IonLabel position="floating">Password:</IonLabel>
//           <IonInput
//             // onIonChange={(e) => setPassword(e.detail.value ?? "")}
//             onIonChange={(e) => setPassword(e.detail.value!)}
//             value={password}
//             placeholder="Enter password"
//             type="password"
//             required
//           />
//         </IonItem>

//         <div className="ion-text-center">
//           <IonButton
//             onClick={
//               () => SignUpUser()
//               // supabase.auth.signInWithPassword({ email, password })
//               // LoginUser()
//             }
//             className="loginPageButton"
//             color="secondary"
//           >
//             <IonIcon size="medium" slot="start" icon={logInOutline} />
//             Login
//           </IonButton>
//         </div>
//         <br />
//         <div className="meewlinkLP">
//           <p>
//             Don't have an account? <Link to="signup">Sign up</Link>
//           </p>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default LoginPage;
