import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // url 주소
      path: "/news",
      // url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
