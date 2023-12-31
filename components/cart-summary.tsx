// "use client"

// import { useState } from "react"
// import { Loader2 } from "lucide-react"
// import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

// import { Button } from "@/components/ui/button"

// export function CartSummary() {
//   const { totalPrice, cartDetails, cartCount, formattedTotalPrice } = useShoppingCart()
 
//   console.log(cartDetails)
// // function onCheckOut{}
//   return (
//     <section
//       aria-labelledby="summary-heading"
//       className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
//     >
//       <h2 id="summary-heading" className="text-lg font-medium">
//         Order summary
//       </h2>

//       <dl className="mt-6 space-y-4">
//         <div className="flex items-center justify-between">
//           <dt className="text-sm">{totalPrice} Rs.</dt>
//           <dd className="text-sm font-medium">Subtotal Amount</dd>
//         </div>
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
//           <dt className="text-base font-medium">{totalPrice} Rs.</dt>
//           <dd className="text-base font-medium">{cartCount} Nos.</dd>
//         </div>
//       </dl>

//       <div className="mt-6">
//         <Button className="w-full" >
//           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           Proceed To Pay
//         </Button>
//       </div>
//     </section>
//   )
// }
"use client"
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";

export function CartSummary() {
  const { totalPrice, formattedTotalPrice, cartCount, cartDetails } = useShoppingCart();

  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);

  const [isProcessing, setIsProcessing] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "9934827996"; // Replace with the desired phone number

    // Construct the message with product details and cart total
    const message = `I want to place an order:\n\n${cartItems
      .map((product) => {
        return `${product.title} - ${product.quantity} Nos.`;
      })
      .join("\n")}\n\nTotal: ${totalPrice}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setIsProcessing(true);

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">{totalPrice}</dt>
          <dd className="text-sm font-medium">Subtotal Amount</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">{totalPrice}</dt>
          <dd className="text-base font-medium">{cartCount} Nos.</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button className="w-full" onClick={openWhatsApp} disabled={isProcessing}>
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Proceed To Pay"
          )}
        </Button>
      </div>
    </section>
  );
}
