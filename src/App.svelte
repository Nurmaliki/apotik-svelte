<script>
  // Sample data for the dashboard
  let products = [
    { name: 'Aspirin', price: 10.99, quantity: 50 },
    { name: 'Ibuprofen', price: 8.99, quantity: 30 },
    { name: 'Paracetamol', price: 12.99, quantity: 20 }
  ];
</script>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
  }
  .product-list {
    margin-top: 20px;
  }
  .product {
    background-color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="dashboard">
  <h1>Pharmacy Dashboard</h1>
  <div class="product-list">
    {#each products as product}
      <div class="product">
        <h2>{product.name}</h2>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    {/each}
  </div>
</div>