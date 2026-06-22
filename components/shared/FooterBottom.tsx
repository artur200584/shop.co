import Image from "next/image";
import visa from "@/public/images/cardPay/Badge.png";
import mastercard from "@/public/images/cardPay/Badge (1).png";
import paypal from "@/public/images/cardPay/Badge (2).png";
import applePay from "@/public/images/cardPay/Badge (3).png";
import googlePay from "@/public/images/cardPay/Badge (4).png";

const paymentMethods = [
  { src: visa, alt: "Visa" },
  { src: mastercard, alt: "Mastercard" },
  { src: paypal, alt: "PayPal" },
  { src: applePay, alt: "Apple Pay" },
  { src: googlePay, alt: "Google Pay" },
];

export default function FooterBottom() {
  return (
    <section className="flex md:flex-col items-center  justify-center mt-3 ">
      <p className="text-gray-500 ">© 2000-2021, All rights reserved</p>
      <div className="flex items-center gap-5">
        {paymentMethods.map((paymentMethod) => (
          <Image
            key={paymentMethod.alt}
            src={paymentMethod.src}
            alt={paymentMethod.alt}
          />
        ))}
      </div>
    </section>
  );
}
