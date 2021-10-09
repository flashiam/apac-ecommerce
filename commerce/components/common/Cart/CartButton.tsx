import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
const CartButton = () => {
    const router=useRouter()
    return (
        
            <Link href="/cart/123">
            <span className="material-icons-outlined relative">
shopping_cart
<span className="absolute -top-5 w-2 h-2 text-white">5</span>p
</span>
            </Link>

       
    )
}

export default CartButton
