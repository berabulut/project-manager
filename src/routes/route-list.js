import { Login } from "../components/Login";
import { Home } from "../components/Home"; 

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},


]