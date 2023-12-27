import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetBestSellerProducts } from '../../services/statisticServices';

ChartJS.register(ArcElement, Tooltip, Legend);

const fakeData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Quantity',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const BestSellerProducts = () => {
  const { data, isPending } = useGetBestSellerProducts();

  if (data) {
    fakeData.labels = data.map(product => product.productName)
    fakeData.datasets[0].data = data.map(product => product.count)
  }

  if (isPending) return <div>Loading...</div>
  return (
    <div>
      <Doughnut data={fakeData} options={{ maintainAspectRatio: false }} style={{ height: '400px' }} />
    </div>
  )
}

export default BestSellerProducts;