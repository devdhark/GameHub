import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a1754f04c4094724aa52e82564c904e8'
    }
})