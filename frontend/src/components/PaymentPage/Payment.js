import React,{ useEffect} from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../OrdersPage/CheckoutSteps'
import { useSelector, useDispatch} from 'react-redux'
import { creatingOrders} from '../../actions/orderAction'
import {emptyCart} from '../../actions/cartAction'
import { API_BASE_URL } from '../../config/apiConfig';
import { toast } from 'react-toastify';
import { formatNumberWithCommas } from '../../utility/utilsFunction';
import ToastAlert from '../../layout/ToastAlert';
import { Helmet } from 'react-helmet';


const Payment = () => {
  const publishableKey = "pk_test_51M3EDcLvaK7iIutswTMranEQXWPAQsPIMVfdTnppjJ82FMa4dQV3vg1ga1rLavLZ4f2bA0L34W89nuRXhLsak7DZ00LwvV86c8"
  
  let navigate = useNavigate();
  const dispatch = useDispatch()
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const {newUser} = useSelector((state)=> state.user)

  const orderInfo = JSON.parse(sessionStorage.getItem("amountInfo"));

//   const paymentAmount = {
//   amount: Math.round(orderInfo.total * 100),
// };

// sending order data to backend
const order = {
  shippingInfo,
  orderItem: cartItems,
  // paymentInfo: cartItems, //todo
  itemPrice: orderInfo.subTotal,
  taxPrice: orderInfo.tax,
  shippingPrice: orderInfo.shippingCharge,
  totalPrice: orderInfo.total,
  user: newUser._id,
}


  const onToken = async token =>{

    try{
    const config ={headers: {"Content-Type": "application/json"}}
    let data = {
      amount: Math.round(orderInfo.total * 100),
      token,
    }
    let url = `${API_BASE_URL}/api/payment/process`
        const response = await axios.post(url, data,
          // {token,
          // paymentAmount,},
         config)


          if (response.status ===200) {
            order.paymentInfo = {
              id: token.card.id,
              status: "Succeeded"
            }
           dispatch(creatingOrders(order))
           toast.success("Your Order has been Placed!")
           navigate('/order-placed')
           dispatch(emptyCart())
           sessionStorage.removeItem("amountInfo")
           localStorage.removeItem("ordersInfo")
          }
          else{
            alert("Some error occured")
          }

      } catch (error) {
        
      }
    
    }



// useEffect
useEffect(() => {
  // if (error) {
  //   toast.error(error)
  //   dispatch(clearErrors())
  // }
    // else if(isAuthenticate===true){
    //   navigate("/")
    // }
  },[dispatch]);

  return (
    <>
<Helmet>
<title>Payment Process | iElectronixTech</title>
</Helmet>
    <ToastAlert/>

    <CheckoutSteps activeStep={2} />

<div className="container my-12 items-center justify-center text-center">


<StripeCheckout
        token={onToken}
        stripeKey={publishableKey}

        // label={"Pay with Credit Card"}
        name={"Pay with Credit Card"}
        // description={""}
        description={`Your total is Rs. ${formatNumberWithCommas(orderInfo.total.toFixed(2))}`}
        amount={orderInfo.total * 100}

        image = {newUser.avatar.url}
        email= {newUser.email}
        // locale= {"kddsa"}
        // panelLabel = {"Pay - "}

        />

        </div>

    </>
  )
}

export default Payment
