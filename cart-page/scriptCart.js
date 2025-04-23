function updateCart() {
    let total = 0;
    const rows = document.querySelectorAll('#cart-items tr');
    let itemCount = 0;
  
    rows.forEach(row => {
      const unitPrice = parseFloat(row.querySelector('.unit-price').textContent);
      const quantityInput = row.querySelector('.quantity');
      const quantity = parseInt(quantityInput.value);
  
      if (isNaN(quantity) || quantity < 1) {
        quantityInput.value = 1;
      }
  
      const subtotal = unitPrice * quantity;
      row.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
      total += subtotal;
      itemCount++;
    });
  
    document.getElementById('summary-subtotal').textContent = `$${total.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('product-count').textContent = itemCount;
    document.getElementById('cart-badge').textContent = itemCount;
  }

  document.querySelectorAll('.refresh-btn').forEach(btn => {
    btn.addEventListener('click', updateCart);
  });
  
  document.getElementById('update-cart').addEventListener('click', updateCart);
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = this.closest('tr');
      row.remove();
      updateCart();
    });
  });

  window.addEventListener('DOMContentLoaded', updateCart);