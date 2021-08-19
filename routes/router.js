const express = require("express");
const router = express.Router();
const Pool = require("../lib/pool");

router.get("/", (req, res) => {
  Pool.getConnection((error, connection) => {
    if (error) throw error;
    let q = ""
    connection.query(q,(error,rows,fields)=>{
        if (error) throw error;
        res.send({data:rows})
    })
    connection.release()
  });
});

module.exports = router;
