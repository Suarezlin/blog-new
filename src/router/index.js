import Vue from 'vue';
import Router from 'vue-router';
import vContent from '../components/content/content';
import blog from '../components/blog/blog';
import edit from '../components/edit/edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: vContent
    },
    {
      path: '/index',
      name: 'index',
      component: vContent
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    }
  ]
});
