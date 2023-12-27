import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetMonthlySales } from '../../services/statisticServices';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const fakeData = {
  labels,
  datasets: [
    {
      data: labels.map(() => getRandomIntInclusive(0, 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const style = {
  height: 400,
}

const MonthlySales = () => {
  const { data, isPending } = useGetMonthlySales();

  if (data) {
    fakeData.datasets[0].data = data.map(sale => sale.totalSales)
    fakeData.labels = data.map(sale => sale.month)
  }

  if (isPending) return <div>Loading...</div>
  return (
    <div>
      <Line options={options} data={fakeData} style={style} />
    </div>
  )
}

export default MonthlySales;