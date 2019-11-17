import axios from 'axios'
export default {
    getDefaultPage: function(path) {
        return axios.get(path);
    }
}