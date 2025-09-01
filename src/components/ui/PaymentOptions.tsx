import React from "react";

export default function PaymentOptions() {
  const paymentMethods = [
    {
      name: "VISA",
      icon: "/assets/payment-icons/visa.png",
      alt: "Visa",
    },
    {
      name: "Google Pay",
      icon: "/assets/payment-icons/logos_google-pay.png",
      alt: "Google Pay",
    },
    {
      name: "Apple Pay",
      icon: "/assets/payment-icons/apple.png",
      alt: "Apple Pay",
    },
    {
      name: "American Express",
      icon: "/assets/payment-icons/amex.png",
      alt: "American Express",
    },
    {
      name: "PayPal",
      icon: "/assets/payment-icons/paypal.png",
      alt: "PayPal",
    },
    {
      name: "Union Pay",
      icon: "/assets/payment-icons/union.png",
      alt: "Union Pay",
    },
  ];

  const cryptoMethods = [
    {
      symbol: "₿",
      icon: "/assets/payment-icons/electric_currency.png",
      alt: "Crypto",
    },
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <div
        className="text-center px-4 sm:px-8 md:px-12 py-4 rounded-xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-[1060px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 8, 9, 0) 0%, rgba(246, 169, 28, 0.1) 100%)",
          border: "0.5px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(25px)",
          borderRadius: "16px",
        }}
      >
        <h3 className="text-white text-base sm:text-lg font-semibold whitespace-nowrap">
          Payment Options:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {/* Payment Icons */}
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="w-[70px] h-[45px] sm:w-[84px] sm:h-[54px] bg-white/[0.06] rounded-[10px] flex items-center justify-center p-2 sm:p-3"
            >
              <img
                src={method.icon}
                alt={method.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}

          {/* Crypto Icons */}
          {cryptoMethods.map((crypto, index) => (
            <div
              key={index}
              className="w-[150px] h-[45px] sm:w-[206px] sm:h-[54px] bg-white/[0.06] rounded-[10px] flex items-center justify-center p-2 sm:p-3"
            >
              <img
                src={crypto.icon}
                alt={crypto.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
