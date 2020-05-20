/*
 * @Date: 2020-05-19 11:13:49
 * @LastEditors: Richard
 * @LastEditTime: 2020-05-19 11:13:59
 */ 
export default [
  {
    path: "/login",
    name: "login",
    meta: {title: "登陆"},
    component: () => import("@/views/login")
  },
  {
    path: "/leader",
    name: "leader",
    meta: {title: "组长账单"},
    component: () => import("@/views/leader")
  },
  {
    path: "/memberList",
    name: "memberList",
    meta: {title: "组员账单"},
    component: () => import("@/views/memberList")
  },
  {
    path: "/member",
    name: "member",
    meta: {title: "组员账单-二级"},
    component: () => import("@/views/member")
  },
  {
    path: "/details",
    name: "details ",
    meta: {title: "账单详情"},
    component: () => import("@/views/details")
  },
];
