import { login } from "@/api/user";

export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getToken(context, payload) {
      // 发送请求获取用户token
      console.log(payload);
      const res = await login(payload);
      context.commit("setToken", res);
    },
  },
};
