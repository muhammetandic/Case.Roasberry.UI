import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGetDailySales } from '../../services/statisticServices';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
  },
};

const style = {
  width: 750,
  height: 400,
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const fakeData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomIntInclusive(0, 1000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
const DailySales = () => {
  const { data, isPending } = useGetDailySales();

  
  if (data) {
    fakeData.datasets[0].data = data.map(sale => sale.totalSales)
    fakeData.labels = data.map(sale => sale.dateOfSales)
  }

  if (isPending) return <div>Loading...</div>
  return (
    <div>
      <Bar options={options} data={fakeData} style={style} />
    </div>
  )
}

export default DailySales;