import request from "@/utils/request";

/**
 *
 * @param {Object} data
 * @returns  promise
 */

export function login(data) {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
}

export function getUserInfoApi() {
  return request({
    url: "/sys/profile",
    method: "POSt",
  });
}

export function getUserDetail(id) {
  return request({
    url: "/sys/user/" + id,
  });
}
