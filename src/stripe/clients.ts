import { Router } from "express";
import { stripeService } from "./Stripe";
let stripe = new stripeService();
const router = Router();
router.post('/create', async (req,res)=>{
    let stripeResponse = await stripe.postClient(req.body);
    let response = {
        "Endpoint":"POST CLIENT",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/update', async (req,res)=>{
    let stripeResponse = await stripe.updateClient(req.body.id);
    let response = {
        "Endpoint":"PUT CLIENT",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/delete', async (req,res)=>{
    let stripeResponse = await stripe.deleteClient(req.body.id);
    let response = {
        "Endpoint":"DELETE CLIENT",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/get', async (req,res)=>{
    let stripeResponse = await stripe.getClient(req.body.id);
    let response = {
        "Endpoint":"GET CLIENT",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
module.exports = router;