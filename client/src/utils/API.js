import axios from "axios";

export default {
    logIn: function (user) {
        return axios.post("/login", user)
    }
}