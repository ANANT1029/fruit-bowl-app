export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🥗 Fruit Bowl</h1>
      <p>Fresh • Healthy • Delivered in 15 minutes</p>

      <hr />

      <div style={{ marginTop: 20 }}>
        <h2>🍎 Mixed Fruit Bowl</h2>
        <p>Seasonal fruits with honey</p>
        <p><b>₹99</b></p>
        <a href="/order?item=Mixed Fruit Bowl">
  <button>Order Now</button>
</a>

      </div>

      <div style={{ marginTop: 20 }}>
        <h2>🥑 Protein Salad</h2>
        <p>High-protein salad for gym lovers</p>
        <p><b>₹149</b></p>
       <a href="/order?item=Protein Salad">
  <button>Order Now</button>
</a>

      </div>
    </main>
  );
}
