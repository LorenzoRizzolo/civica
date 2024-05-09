
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import AugPage from "../pages/2020/augustan_age.svelte"
import GiapoPage from "../pages/2024/giappone.svelte"
import covidPage from "../pages/2020/covid.svelte"
import crescerePage from "../pages/2020/crescere.svelte"
import cyberPage from "../pages/2023/cyber.svelte"
import manicomiPage from "../pages/2023/manicomi.svelte"
import borsellinoPage from "../pages/2022/borsellino.svelte"
import penamortePage from "../pages/2023/penadimorte.svelte"
import CarceriPage from "../pages/2024/carceri.svelte"


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
      path:"/2020/",
      name:"2020",
      routes:[
        {
          path: 'augustan_age/',
          name:"augustan_age",
          title:"Augustan Age",
          component: AugPage,
          icon: "material:newspaper"
        },
        {
          path: 'crescere/',
          name:"crescere",
          title:"Onesti Cittadini",
          component: crescerePage,
          icon: "material:newspaper"
        },
        {
          path: 'covid/',
          name:"covid",
          title:"Covid-19",
          component: covidPage,
          icon: "material:newspaper"
        },
      ]
    },
    {
      path:"/2021/",
      name:"2021",
      routes:[]
    },
    {
      path:"/2022/",
      name:"2022",
      routes:[
        {
          path: 'borsellino/',
          name:"borsellino",
          title:"Paolo Borsellino",
          component: borsellinoPage,
          icon: "material:newspaper"
        },
      ]
    },
    {
      path:"/2023/",
      name:"2023",
      routes:[
        {
          path: 'cyber/',
          name:"cyber",
          title:"Cyber Security",
          component: cyberPage,
          icon: "material:newspaper"
        },
        {
          path: 'penamorte/',
          name:"penamorte",
          title:"Pena di Morte",
          component: penamortePage,
          icon: "material:newspaper"
        },
        {
          path: 'manicomi/',
          name:"manicomi",
          title:"Manicomi",
          component: manicomiPage,
          icon: "material:newspaper"
        },
      ]
    },
    {
      path:"/2024/",
      name:"2024",
      routes:[
        {
          path: 'giapponesi/',
          name:"giappponesi",
          title:"Giappone 1920",
          component: GiapoPage,
          icon: "material:newspaper"
        },
        {
          path: 'carceri/',
          name:"carceri",
          title:"Situazione carceraria",
          component: CarceriPage,
          icon: "material:newspaper"
        },
      ]
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
