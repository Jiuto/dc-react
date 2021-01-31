import { lazy } from "react";

const Login = lazy(() => import("@/pages/login"));

export default {
    home: {
        path: "/",
        component: Login
    },
    login: {
        path: "/login",
        component: Login
    }
};
