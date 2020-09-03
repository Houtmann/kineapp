import axios from 'axios'


/**
 * httpService
 * @description Overrides axios' methods to set Token in headers
 * @param {string} token token for backend validation
 * @returns {Object} overriden axios object
 */
const httpService = (token = null) => {
    const defaultOptions = {
        headers: {
            'Authorization': token ? `Token ${token}` : '',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
        },
    };

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        patch: (url, data, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};




const doAsync = ({commit}, req, mutationTypes) => {

    commit(mutationTypes.PENDING)

     req
            .then(response => {
                commit(mutationTypes.SUCCESS, response.data)
            })
            .catch(error => {
                console.log(error)
                commit(mutationTypes.FAILURE)
            })

}

export {httpService, doAsync}




