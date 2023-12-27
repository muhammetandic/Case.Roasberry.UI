import { useQuery } from "@tanstack/react-query"

const apiUrl = import.meta.env.DEV ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_PROD;

export const useGetBestSellerProducts = () => {
  return useQuery({
    queryKey: ['best-seller-products'],
    queryFn: () => fetch(`${apiUrl}/api/Statistics/best-seller-products`).then(res => res.json()),
  })
}

export const useGetDailySales = () => {
  return useQuery({
    queryKey: ['daily-sales'],
    queryFn: () => fetch(`${apiUrl}/api/Statistics/daily-sales`).then(res => res.json()),
  })
}

export const useGetMonthlySales = () => {
  return useQuery({
    queryKey: ['monthly-sales'],
    queryFn: () => fetch(`${apiUrl}/api/Statistics/monthly-sales`).then(res => res.json()),
  })
}
