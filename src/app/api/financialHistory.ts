import { type NextApiRequest, type NextApiResponse } from 'next'

import db from '../../../db.json'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'GET') {
    res.status(200).json(db.financialHistory)
  } else if (req.method === 'POST') {
    const { userId, type, amount, description } = req.body

    eslint-disable-next-line @typescript-eslint/strict-boolean-expressionss
    if (!userId || !type || !amount || !description) {
      res
        .status(400)
        .json({ message: 'Faltan propiedades obligatorias en la solicitud' })
      return
    }

    const newEntry = {
      id: db.financialHistory.length + 1,
      userId,
      type,
      amount,
      description
    }

    db.financialHistory.push(newEntry)
    res.status(201).json(newEntry)
  } else {
    res.status(405).json({ message: 'Método no permitido' })
  }
}
