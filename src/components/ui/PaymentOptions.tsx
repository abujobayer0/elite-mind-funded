import React from "react";

export default function PaymentOptions() {
  const paymentMethods = [
    { name: "VISA", color: "text-blue-600" },
    { name: "G PAY", color: "text-blue-600" },
    { name: "APPLE", color: "text-blue-600" },
    { name: "AMEX", color: "text-blue-600" },
    { name: "PAYPAL", color: "text-blue-600" },
    { name: "MC", color: "text-blue-600" },
  ];

  const cryptoMethods = [
    { symbol: "₿", color: "bg-orange-500" },
    { symbol: "Ξ", color: "bg-blue-500" },
    { symbol: "₿", color: "bg-purple-500" },
  ];

  return (
    <div className="text-center">
      <h3 className="text-white text-lg font-semibold mb-4">
        Payment Options:
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Payment Icons */}
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="w-12 h-8 bg-white rounded flex items-center justify-center"
          >
            <span className={`${method.color} font-bold text-xs`}>
              {method.name}
            </span>
          </div>
        ))}

        {/* Crypto Icons */}
        {cryptoMethods.map((crypto, index) => (
          <div
            key={index}
            className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center`}
          >
            <span className="text-white font-bold text-xs">
              {crypto.symbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
