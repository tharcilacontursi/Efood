import React, { useState } from 'react'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Payment from '../../components/Payment'

const Carrinho: React.FC = () => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'payment'>('cart')
  const [deliveryData, setDeliveryData] = useState<any>(null)

  const handleProceedToCheckout = () => {
    console.log('Proceeding to checkout')
    setStep('checkout')
  }

  const handleProceedToPayment = (data: any) => {
    console.log('Proceeding to payment with data:', data)
    setDeliveryData(data)
    setStep('payment')
  }

  const handleOrderComplete = () => {
    console.log('Order completed')
    setStep('cart')
  }

  const handleBackToCart = () => {
    console.log('Going back to cart')
    setStep('cart')
  }

  const handleBackToCheckout = () => {
    console.log('Going back to checkout')
    setStep('checkout')
  }

  return (
    <div>
      {step === 'cart' && <Cart onProceed={handleProceedToCheckout} />}
      {step === 'checkout' && (
        <Checkout
          onProceedToPayment={handleProceedToPayment}
          onBackToCart={handleBackToCart}
        />
      )}
      {step === 'payment' && (
        <Payment
          deliveryData={deliveryData}
          onOrderComplete={handleOrderComplete}
          onBackToCheckout={handleBackToCheckout}
        />
      )}
    </div>
  )
}

export default Carrinho
