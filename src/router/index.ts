import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/face/Index.vue";
import OCR from "../views/face/OCR.vue";
import Match11 from "../views/face/Match11.vue";
import Match1n from "../views/face/Match1n.vue";
import Gender from "../views/face/Gender.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Face",
    component: Index,
    redirect: "/ocr",
    children: [
      {
        path: "ocr",
        name: "OCR",
        component: OCR,
        meta: {
          title: "Trích xuất thông tin giấy tờ",
        },
      },
      {
        path: "match11",
        name: "Match11",
        component: Match11,
        meta: {
          title: "So khớp khuôn mặt",
        },
      },
      {
        path: "match1n",
        name: "Match1n",
        component: Match1n,
        meta: {
          title: "So khớp nhiều khuôn mặt",
        },
      },
      {
        path: "gender-age",
        name: "Gender",
        component: Gender,
        meta: {
          title: "Xác định giới tính - tuổi",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
