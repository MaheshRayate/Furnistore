import { Suspense } from "react";
import CheckoutClient from "./CheckOutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
