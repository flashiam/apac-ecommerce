// import { itemsOfProducts } from '../../../data1'
import { productsH } from '../../../data2'

import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(productsH)
}
