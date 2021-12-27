import { Router } from "express";
import { stripeService } from "./Stripe";
let stripe = new stripeService();
const router = Router();
router.post('/create', async (req,res)=>{
    let stripeResponse : any= await stripe.postSubscription(req.body.customerId,req.body.user);
    let response : any = {
        "Endpoint":"POST SUB",
        "Response":stripeResponse
    }
    if (stripeResponse?.Status == 400) {
        res.status(400).send(response)
    }else{
        res.send(response);
    }
    return router;
})
router.post('/update', async (req,res)=>{
    let stripeResponse = await stripe.updateSubscription(req.body.id,req.body.params);
    let response : any = {
        "Endpoint":"UPDATE SUB",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/delete', async (req,res)=>{
    let stripeResponse = await stripe.deleteSubscription(req.body.id);
    let response : any = {
        "Endpoint":"DEL SUB",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/get', async (req,res)=>{
    let stripeResponse = await stripe.getSubscription(req.body);
    let response : any = {
        "Endpoint":"GET SUB",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
module.exports = router;