var mybatisMapper = require("../index")
mybatisMapper.createMapper(["./test/testSinglequote.xml"])
var assert = require("assert")

describe("Unit Tests for Issue of Single quote", function () {
  it("1) test for Issue of Single quote", function (done) {
    var param = {
      msg: "Merge branch '#1398' into develop",
    }
    var format = { language: "sql", indent: " " }
    var query = mybatisMapper.getStatement("testSinglequote", "testInsert", param, format)
    assert.equal(
      query,
      `
    INSERT test
SET
  msg = 'Merge branch ''#1398'' into develop'
    `.trim()
    )
    done()
  })
})
