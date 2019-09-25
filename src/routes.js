import Home from './components/home.vue';
import Item from './components/item.vue';
import ShoppingCar from './components/shoppingCar.vue';
import Search from './components/search.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/item', component: Item },
    { path: '/search', component: Search },
    { path: '/shoppingCar', component: ShoppingCar  },
];
export default routes;

