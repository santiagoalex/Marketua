import Home from './components/home.vue';
import Item from './components/item.vue';
import ShoppingCar from './components/shoppingCar.vue';
import Search from './components/search.vue';
import List from './components/list.vue';
import Detail from './components/detail.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/item', component: Item },
    { path: '/search', component: Search },
    { path: '/shoppingCar', component: ShoppingCar },
    { path: '/list', component: List },
    { path: '/detail', component: Detail }
];
export default routes;