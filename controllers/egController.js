exports.getRoute=(req,res)=>{
    res.json({
        message:"Get request Working"
    })
}
exports.postRoute =(req,res)=>{
    const name=req.body.name
   res.send(`I am ${name}`)
}
exports.putRoute =(req,res)=>{
    res.json({
        message:"Put request Working"
    })
}
exports.patchRoute =(req,res)=>{
    res.json({
        message:"Patch request Working"
    })
}
exports.deleteRoute =(req,res)=>{
    res.json({
        message:"Delete request Working"
    })
}
