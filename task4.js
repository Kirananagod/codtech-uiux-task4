// Initialize Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [5000, 10000, 7500, 15000, 20000, 25000],
        borderColor: '#2a9d8f',
        backgroundColor: 'rgba(42, 157, 143, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  },
});

// Initialize Customer Chart
const customerCtx = document.getElementById('customerChart').getContext('2d');
const customerChart = new Chart(customerCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Customers',
        data: [100, 150, 200, 250, 300, 350],
        backgroundColor: '#e76f51',
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  },
});

// Filter Interaction
document.getElementById('data-filter').addEventListener('change', (event) => {
  alert(Filter applied: ${event.target.value});
});
