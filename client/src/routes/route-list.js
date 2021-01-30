import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { SignUp } from "../components/SignUp";
import { Profile } from "../components/Profile";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/profile",
    component: Profile,
  },
];
