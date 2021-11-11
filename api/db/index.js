const sqlPool = require("./sqlPool");
const get = require("lodash/get");

module.exports = {
  query: async (query) => {
    const pool = await sqlPool;
    const result = await pool.query(query);
    return get(result, "rows", []);
  },
  create: async (tableName, dataParams, primaryKey) => {
    const pool = await sqlPool;
    let columnString = "";
    let valueString = "";
    let dataValues = [];

    const query = {
      name: "",
      text: "",
      values: [],
    };

    let i = 1;
    if (dataParams) {
      columnString = "(";
      valueString = "(";
      const setKeys = Object.keys(dataParams);

      setKeys.forEach((key, index, arr) => {
        columnString += `"${key}"`;
        valueString += `$${i}`;
        i++;

        if (index !== arr.length - 1) {
          columnString += `,`;
          valueString += `,`;
        } else {
          columnString += `)`;
          valueString += `)`;
        }

        dataValues.push(dataParams[key]);
      });
    }

    query.values = dataValues;
    query.text = `insert into ${tableName} ${columnString} values ${valueString} RETURNING ${primaryKey};`;
    console.log(query);
    const result = await pool.query(query);
    return get(result, "rows[0]", {});
  },
};
