import { baseGet, basePost } from "@/api/axios/base";

export default {
    login(data) {
        return basePost("/login", data);
    },
};
