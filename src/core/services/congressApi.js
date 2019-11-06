import axios from 'axios'

import { PROPUBLICA_KEY } from './key';

const CONGRESS_URL = 'https://api.propublica.org/congress/v1/';

/**
 * Specification: https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members
 * @param {string} payload is the filters to get. Only congress and chamber are used
 * @returns {promise} It has a list of members
 */
const listOfMembers = (payload) => {
    const url = `${CONGRESS_URL}/${payload.congress}/${payload.chamber}/members.json`;
    console.log(url);
    return axios.request({
        method: 'get',
        url,
        headers: {
            'X-API-Key': PROPUBLICA_KEY
        },
        timeout: 15000
    });
};

export default {
    listOfMembers
};