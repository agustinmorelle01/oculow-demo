import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Blog from './pages/blog.vue';
import Shopping from './pages/shopping.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      components: { default: Blog, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      components: { default: Shopping, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
