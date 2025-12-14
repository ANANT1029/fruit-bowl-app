export default function PaymentPage() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>💳 Payment</h1>

      <p>Please pay using UPI</p>

      <h3>UPI ID</h3>
      <p><b>yourupi@bank</b></p>

      <img
        src="/upi-qr.png"
        alt="UPI QR"
        style={{ width: 220, marginTop: 10 }}
      />

      <p style={{ marginTop: 20 }}>
        After payment, please keep the screenshot.
      </p>

      <p>
        We will confirm and update your order status.
      </p>
    </main>
  );
}
