import { Login } from "../components/Login";
import { Home } from "../components/Home"; 
import { SignUp } from "../components/SignUp";

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/signup',
		component: SignUp

	}


]