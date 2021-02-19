import { Login, SignUp, Profile, Boards, Board } from "pages";

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
  {
    path: "/board/:id",
    component: Board,
  },
];
