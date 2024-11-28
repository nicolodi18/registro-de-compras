document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('purchase-form');
    const purchaseList = document.getElementById('purchase-list');
  
    // Função para adicionar compra
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const clientName = document.getElementById('client-name').value;
      const purchaseDate = document.getElementById('purchase-date').value;
      const purchaseValue = document.getElementById('purchase-value').value;
  
      const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
      purchases.push({ clientName, purchaseDate, purchaseValue });
      localStorage.setItem('purchases', JSON.stringify(purchases));
  
      document.getElementById('client-name').value = '';
      document.getElementById('purchase-date').value = '';
      document.getElementById('purchase-value').value = '';
  
      displayPurchases();
    });
  
    // Função para exibir compras
    function displayPurchases() {
      purchaseList.innerHTML = '';
      const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
      purchases.forEach(purchase => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${purchase.clientName}</td>
          <td>${purchase.purchaseDate}</td>
          <td>${purchase.purchaseValue}</td>
        `;
        purchaseList.appendChild(row);
      });
    }
  
    // Exibir compras ao carregar a página
    displayPurchases();
  });
  