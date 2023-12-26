import Box from './components/Box'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-200 flex flex-col min-h-screen'>
      <Header />
      <div className='w-full max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 mb-0'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      </div>
    </div>
  )
}

export default App
