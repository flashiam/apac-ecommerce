import axios from 'axios'
import { useQuery } from 'react-query'

const fetcher = async () => await axios.get('http://localhost:8000/products')
// Hook to fetch products
const useProducts = () => useQuery('products', fetcher)

export default useProducts
