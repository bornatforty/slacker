import express from 'express'
import conn from '../db/conn'

const router = express.Router()

router.get('/boo', (req, res, next) => {
	res.json({
		'AHH': true
	})
})

export default router