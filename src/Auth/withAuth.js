import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from "react-router-dom";
const withAuth = (Component) => {
  firebase.auth().onAuthStateChanged((currentUser) => {
    const AuthRoute = () => {
      const isAuth = !(!currentUser && !currentUser.uid);
      if (isAuth) {
        return <Component />;
      } else {
        return <Redirect to="/" />;
      }
    };
    return AuthRoute;
  });
};
export default withAuth;