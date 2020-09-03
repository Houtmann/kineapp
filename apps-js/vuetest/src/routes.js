// /src/routes.js
import Home from './modules/home/Home'
import Programmes from "@/modules/home/Programmes";
import Programme from "@/modules/home/Programme";
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/programmes',
        name: 'Programmes',
        component: Programmes
    },
    {
        path: '/programme/:programmeId',
        name: 'Programme',
        component: Programme,

        props:true

    },

];

