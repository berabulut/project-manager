import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { SignUp } from "../components/SignUp";
import { Profile } from "../components/Profile";
import { Boards } from "../components/Boards";

export const routes = [
  {
    path: "/",
  },
  {
    path: "/boards",
    component: Boards,
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
