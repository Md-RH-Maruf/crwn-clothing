import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JlyEFIfcd92sO8FhG81ZunoaNk02UjJDEbC9P1mWhvtqTWaOfZg9lp3KfVRyVGynaMdApGwxkJNpAtXRVMwzSpr000TufbAHL';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfully');
    }

    return (<StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={'Your total is $' + price}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    ></StripeCheckout>);
};

export default StripeCheckoutButton;