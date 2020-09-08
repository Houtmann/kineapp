import _ from 'lodash'

const createAsyncMutation = (type) => ({
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
    PENDING: `${type}_PENDING`,
    loadingKey: _.camelCase(`${type}_PENDING`),
    stateKey: _.camelCase(`${type}_DATA`)
})

export const GET_USER_INFO_ASYNC = createAsyncMutation('GET_USER_INFO')
export const GET_USER_PROGRAM_ASYNC = createAsyncMutation('GET_USER_PROGRAM')


