import { useGetBestSellerProducts } from "../../services/statisticServices";

const BestSellerProducts = () => {
  const { data, isPending } = useGetBestSellerProducts();

  if (isPending) return <div>Loading...</div>
  return (
    <div className="mt-5">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left">Product</th>
            <th className="text-center">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {data.map((product, index) => (
            <tr key={index} className="border-b border-gray-600 dark:border-gray-400">
              <td className="text-left">{product.productName}</td>
              <td className="text-center">{product.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BestSellerProducts;