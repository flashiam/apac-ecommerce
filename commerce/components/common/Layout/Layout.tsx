import cn from 'classnames'
import React, { FC, useEffect } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Head from '../Head/Head'
import { CommerceProvider } from '@framework'
import { useUI } from '@components/ui/context'
import type { Page } from '@commerce/types/page'
import { Navbar, Footer } from '@components/common'
import type { Category } from '@commerce/types/site'
import ShippingView from '@components/checkout/ShippingView'
import CartSidebarView from '@components/cart/CartSidebarView'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar, Button, Modal, LoadingDots } from '@components/ui'
import PaymentMethodView from '@components/checkout/PaymentMethodView'
import CheckoutSidebarView from '@components/checkout/CheckoutSidebarView'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, calcCartTotal } from '../../../actions/productAction'
import { fetchCustomer } from '../../../actions/customerAction'
import { useProducts } from '../../../hooks'

import LoginView from '@components/auth/LoginView'
import s from './Layout.module.css'
import { GlobalState } from 'data1'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(
  () => import('@components/auth/SignUpView'),
  dynamicProps
)

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  dynamicProps
)

const FeatureBar = dynamic(
  () => import('@components/common/FeatureBar'),
  dynamicProps
)

interface Props {
  pageProps: {
    pages?: Page[]
    categories: Category[]
  }
  showFooter: boolean
}

const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: FC<{ sidebarView: string; closeSidebar(): any }> = ({
  sidebarView,
  closeSidebar,
}) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'CART_VIEW' && <CartSidebarView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />}
      {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
      {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
    </Sidebar>
  )
}

const SidebarUI: FC = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null
}

const Layout: FC<Props> = ({
  children,
  pageProps: { categories = [], ...pageProps },
  showFooter,
}) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  const navBarlinks = categories.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/search/${c.slug}`,
  }))

  const client = new QueryClient()
  const cartItems = useSelector((state: GlobalState) => state.product.cartItems)
  // hooks for redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartItems())
    dispatch(fetchCustomer())
  }, [dispatch])

  // useEffect(() => {

  // })

  return (
    <QueryClientProvider client={client}>
      <CommerceProvider locale={locale}>
        <Head />
        <div className={cn(s.root)}>
          <Navbar links={navBarlinks} />
          <main className="fit">{children}</main>
          <Footer pages={pageProps.pages} />
          <ModalUI />
          <SidebarUI />
          <FeatureBar
            title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
            hide={acceptedCookies}
            action={
              <Button className="mx-5" onClick={() => onAcceptCookies()}>
                Accept cookies
              </Button>
            }
          />
        </div>
      </CommerceProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Layout
