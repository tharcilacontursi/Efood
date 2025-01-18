import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import MenuList from '../../components/MenuList'
import Payment from '../../components/Payment'
import RestaurantHeader from '../../components/RestaurantHeader'
import { useGetRestaurantDetailsQuery } from '../../services/api'

const CardapioRestaurante = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestaurantDetailsQuery(id!)

  const [step, setStep] = useState<'cart' | 'checkout' | 'payment'>('cart')
  const [deliveryData, setDeliveryData] = useState<any>(null)

  const handleProceedToCheckout = () => setStep('checkout')
  const handleProceedToPayment = (data: any) => {
    setDeliveryData(data)
    setStep('payment')
  }
  const handleOrderComplete = () => setStep('cart')
  const handleBackToCart = () => setStep('cart')
  const handleBackToCheckout = () => setStep('checkout')

  if (!restaurante || isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <RestaurantHeader />
      <div className="container">
        {step === 'cart' && (
          <>
            <MenuList menu={restaurante.cardapio} />
            <Cart onProceed={handleProceedToCheckout} />
          </>
        )}
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
    </>
  )
}

export default CardapioRestaurante
