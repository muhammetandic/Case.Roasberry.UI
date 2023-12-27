import Box from './components/Base/Box'
import BestSellerProducts from './components/Graphs/BestSellerProducts'
import DailySales from './components/Graphs/DailySales'
import MonthlySales from './components/Graphs/MonthlySales'
import Header from './components/Header/Header'
import BestSellerProductsTable from './components/Tables/BestSellerProducts'

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-200 flex flex-col min-h-screen'>
      <Header />
      <div className='w-full max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 m-5 mb-0'>
        <Box title={'Daily Sales'}>
          <DailySales />
        </Box>
        <Box title={'Best Seller Products'}>
          <BestSellerProducts />
        </Box>
        <Box title={'Monthly Sales'}>
          <MonthlySales />
        </Box>
        <Box title={'Best Seller Products'}>
          <BestSellerProductsTable />
        </Box>
      </div>
      </div>
    </div>
  )
}

export default App
