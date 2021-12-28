import { Router } from "express";
import { stripeService } from "./Stripe";
import {Stripe} from "stripe";
let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
let stripe = new stripeService(`${process.env.STRIPE_SK}`,conf);
const router = Router();
router.post('/get', async (req,res)=>{
    let stripeResponse : any= await stripe.getSubscriptionItem(req.body.id);
    let response : any = {
        "Endpoint":"GET SUB ITEM",
        "Response":stripeResponse
    }
    res.send(response);
    return router;
})
router.post('/update', async (req,res)=>{
    let stripeResponse : any= await stripe.updateSubscriptionItem(req.body.id,req.body.params);
    let response : any = {
        "Endpoint":"PUT SUB ITEM",
        "Response":stripeResponse
    }
    res.send(response);
    return router;
})
router.post('/createUsageRecord', async (req,res)=>{
    let stripeResponse : any= await stripe.createSubscriptionItemUsageRecord(req.body.id,req.body.params);
    let response : any = {
        "Endpoint":"POST SUB ITEM USAGE RECORD",
        "Response":stripeResponse
    }
    res.send(response);
    return router;
})
router.post('/getUsageRecordList', async (req,res)=>{
    let stripeResponse : any= await stripe.getSubscriptionItemUsageRecord(req.body.id);
    let response : any = {
        "Endpoint":"GET SUB ITEM USAGE RECORDS",
        "Response":stripeResponse
    }
    res.send(response);
    return router;
})
module.exports = router;