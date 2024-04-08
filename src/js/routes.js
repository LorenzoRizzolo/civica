
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import AugPage from "../pages/augustan_age.svelte"
import GiapoPage from "../pages/giappone.svelte"
import covidPage from "../pages/covid.svelte"
import crescerePage from "../pages/crescere.svelte"
import cyberPage from "../pages/cyber.svelte"
import manicomiPage from "../pages/manicomi.svelte"
import borsellinoPage from "../pages/borsellino.svelte"
import penamortePage from "../pages/penadimorte.svelte"


function get_routes(){
  return [
    {
      path: '/',
      name:"home",
      title:"Home",
      component: HomePage,
      icon: "material:house"
    },
    {
      path: '/augustan_age/',
      name:"augustan_age",
      title:"Augustan Age",
      component: AugPage,
      icon: "material:newspaper"
    },
    {
      path: '/giapponesi/',
      name:"giappponesi",
      title:"Giappone 1920",
      component: GiapoPage,
      icon: "material:newspaper"
    },
    {
      path: '/covid/',
      name:"covid",
      title:"Covid-19",
      component: covidPage,
      icon: "material:newspaper"
    },
    {
      path: '/crescere/',
      name:"crescere",
      title:"Onesti Cittadini",
      component: crescerePage,
      icon: "material:newspaper"
    },
    {
      path: '/cyber/',
      name:"cyber",
      title:"Cyber Security",
      component: cyberPage,
      icon: "material:newspaper"
    },
    {
      path: '/manicomi/',
      name:"manicomi",
      title:"Manicomi",
      component: manicomiPage,
      icon: "material:newspaper"
    },
    {
      path: '/borsellino/',
      name:"borsellino",
      title:"Paolo Borsellino",
      component: borsellinoPage,
      icon: "material:newspaper"
    },
    {
      path: '/penamorte/',
      name:"penamorte",
      title:"Pena di Morte",
      component: penamortePage,
      icon: "material:newspaper"
    },
    {
      path: '(.*)',
      name:"404",
      title:"404",
      component: NotFoundPage,
      icon: "material:house"
    },
  ];
}

let routes = get_routes()
export let pages = get_routes()
export default routes;
