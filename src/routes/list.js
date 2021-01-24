import { Login } from "../components/Login";
import { Home } from "../components/Home"; 

export const routes = [
	{
		path: '/',
		component: Home,
		layout: "AppLayout"
	},
	{
		path: '/login',
		component: Login,
		layout: "AuthLayout"
	},


]