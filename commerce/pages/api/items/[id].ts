import { itemsOfProducts } from "../../../data1";

import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse){


    const filtered = itemsOfProducts.filter(product=>product.id.toString()==req.query.id);

    if(filtered.length > 0){
        res.status(200).json(filtered[0]);
    }
    else{
        res.status(404).json({msg:"not found"});
    }


}