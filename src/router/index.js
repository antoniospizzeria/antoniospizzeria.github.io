
import MainPage from "@/views/MainPage.vue"
import LocationPage from "@/views/LocationPage.vue"
import MenuPage from "@/views/MenuPage.vue"
import VeganPage from "@/views/VeganPage.vue"
import CateringPage from "@/views/CateringPage.vue"
import EventPage from "@/views/EventPage.vue"
import ContactPage from "@/views/ContactPage.vue"
import AboutPage from "@/views/AboutPage.vue"
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "Main",
        component: MainPage
      },
   
    {
        path: "/location",
        name: "Location",
        component: LocationPage
    },
   
    {
        path: "/menu/full",
        name: "Full Menu",
        component: MenuPage
    },
   
    {
        path: "/menu/vegan",
        name: "Vegan Menu",
        component: MenuPage
    },
    
    {
        path: "/vegan",
        name: "Vegan",
        component: VeganPage
    },
   
    {
        path: "/catering",
        name: "Catering",
        component: CateringPage
    },
   
    {
        path: "/events",
        name: "Events",
        component: EventPage
    },
    
    {
        path: "/about",
        name: "About",
        component: AboutPage
    },
    
  
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage
    }
    
      
  ]

  const router = new VueRouter({
    routes,
    mode: 'history',
 })
  
  export default router