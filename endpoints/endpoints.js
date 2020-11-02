const EXPRESS = require("express")

router = EXPRESS.Router();

router.get("/api/status", function(req, res){
  res.end(JSON.stringify({"status":"good"}))
})

router.get("/api/data", function(req, res){
  let x = Math.sin((new Date()).getTime()/500)
  let y = Math.cos((new Date()).getTime()/500)
  let z = Math.tan((new Date()).getTime()/500)

  res.set("Content-Type", "Application/json")
  res.end(JSON.stringify({"X":x,"Y":y,"Z":z}))	
})

module.exports = router;
