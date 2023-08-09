
import Image from 'next/image';

const PaymentSuccess = () => {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <Image src="/public/products/phonepe.jpg" alt="Payment Success" width={300} height={200} />
    </div>
  );
};

export default PaymentSuccess;
