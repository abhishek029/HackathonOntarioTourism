//import
import PromoComponent from '../js/modules/PromoComponent.js';
import SignupComponent from '../js/modules/SignupComponent.js';
const routes =[
    { path: '/', redirect:{name: "signUp"}},
    { path: '/promo', name: 'promo', component:PromoComponent},
    { path: '/signUp', name: 'signUp', component:SignupComponent}
    
]
const router = new VueRouter({
    routes
});