const sqlPool = require('./sqlPool');
const get = require('lodash/get');

module.exports = {
    query: async (query) => {
        const pool = await sqlPool;
        const result = await pool.query(query);
        return get(result, 'rows', []);
    }
};