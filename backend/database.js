
import sqljs from "sql.js";

const SQL = await sqljs();

// Create a database
export const db = new SQL.Database();

const init = `
CREATE TABLE users (id int NOT NULL, firstname varchar(100) NOT NULL, lastname varchar(100) NOT NULL, type varchar(25) NOT NULL);
INSERT INTO users VALUES (100, 'Obiwan', 'Kenobi', 'Jedi');
INSERT INTO users VALUES (101, 'Luke', 'Skywalker', 'Jedi');
INSERT INTO users VALUES (200, 'Boba', 'Fett', 'Bounty Hunter');
INSERT INTO users VALUES (300, 'Darth', 'Vader', 'Sith');
`;
db.run(init);

/**
 * Transforms the data from the database to an array of objects
 * @param {sqljs.QueryExecResult} data 
 * @returns {Record<string, unknown>[]}
 */
function transformToRecords(data) {
  return data.values.map(row => data.columns.reduce((obj, column, index) => {
    obj[column] = row[index];
    return obj;
  }, {}));
}

export function getAllUsers() {
  const rows = db.exec("SELECT * FROM users");
  return transformToRecords(rows[0]);
}