const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
  test("Test sqlForPartialUpdate function", function () {
    //data we will be converting
    const data = { firstName: "Aliya", age: 32 };

    //second parameter
    let toSQL = {
      firstName: "first_name",
      age: "age",
    };

    //test
    let res = sqlForPartialUpdate(data, toSQL);

    // the expected result
    let expectedRes = {
      setCols: '"first_name"=$1, "age"=$2',
      values: ["Aliya", 32],
    };

    expect(res).toHaveProperty("setCols");
    expect(res).toMatchObject(expectedRes);
  });
});
