import router from "@/router";
import store from "@/store";
// import store from "@/store/index";
// import stroe from "@/store/index";
// 路由(全局)前置守卫
// 会在所有路由进入之前触发
// to： 去哪里的路由信息
// from： 来自于哪个路由的信息
// next： 是否进入
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  const token = store.state.user.token;
  if (token) {
    if (!store.state.user.userInfo.userId) {
      store.dispatch("user/getUserInfo");
    }
    // 获取用户信息

    // 1.登录
    // 是否进入登录页
    if (to.path === "/login") {
      // 1.1 是 跳到首页
      // 1.2 不是 直接进入
      // 2. 未登录
      // 访问的是否在白名单(未登录也能访问的页面)
      // 2.1 在白名单 放行
      // 2.2 不在白名单 跳到登录页
      // 进行权限控制
      // 调用了next 进入该路由，如果没有调用则无法进入

      // 1.1 是 跳到首页
      next("/");
    } else {
      // 1.2 不是 直接进入
      next();
    }
  } else {
    // 2 未登录
    // 访问的是否在白名单(未登录也能访问的页面)
    const isCludes = whiteList.includes(to.path);
    if (isCludes) {
      // 2.1 在白名单 放行
      next();
    } else {
      // 2.2 不在白名单(不登录不能访问)跳到登录页
      next("/login");
    }
  }
});
