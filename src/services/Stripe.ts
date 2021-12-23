import  Stripe from 'stripe';
let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
const stripe = new Stripe('sk_test_51K8lUWAJHHybirKFYUBNTNN6necAoE4EHMRbQpQ8bDWSgL05KxHyt72kWOx2j8bQHy2HqouEwwyf93rid70fbZA900X2QjHRXo',conf);
export namespace stripe{
    interface card{
        number:string;
        exp_month:number,
        exp_year:number,
        cvc:string,
    }
    interface paymentMethod{
        type:string;
        card:card;
    }
    interface client{

    }
    interface subscription{

    }
}