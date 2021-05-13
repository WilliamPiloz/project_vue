import Home from './components/Home.vue';
import slide1 from './components/slide_car.vue';
import slide2 from './components/slide_landscape.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/slide1', component: slide1, name: 'slide1' },
    { path: '/slide2', component: slide2, name: 'slide2' },
];

export default routes;