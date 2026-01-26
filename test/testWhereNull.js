var mybatisMapper = require("../index")
mybatisMapper.createMapper(["./test/testWhereNull.xml"])
var assert = require("assert")

describe("Unit Tests for Issue of Where Null", function () {
  it("1) test for Issue of Where Null", function (done) {
    var param = {
      msg: "Merge branch '#1398' into develop",
    }
    var format = { language: "sql", indent: " " }
    var query = mybatisMapper.getStatement("testWhereNull", "testSelect", param, format)
    console.log("query", query)
    assert.equal(
      query,
      `SELECT
  test
FROM
  test
WHERE
  msg IS NULL`,
    )
    done()
  })
})
