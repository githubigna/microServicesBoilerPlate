import { Router } from "express";
const router = Router();
router.post('/crear',(req,res)=>{
    res.send("POST SUS")
    return router;
})
router.post('/actualizar',(req,res)=>{
    res.send("PUT SUS")
    return router;
})
router.post('/borrar',(req,res)=>{
    res.send("DELETE SUS")
    return router;
})
router.post('/pedir',(req,res)=>{
    res.send("GET SUS")
    return router;
})
module.exports = router;