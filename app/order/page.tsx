import { Suspense } from "react";
import OrderContent from "./order-content";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={<div className="p-5 text-lg">Loading checkout...</div>}>
      <OrderContent />
    </Suspense>
  );
}
