import express from 'express'
import conn from '../db/conn'

const router = express.Router()

router.get('/chat1', function(req, res, next) {
	const sql = `
	SELECT username, timestamp, message, image
	FROM chat1
	`
conn.query(sql, (err, results, fields) => {
	res.json(results)
})
})

router.get('/chat2', function(req, res, next) {
	const sql = `
	SELECT username, timestamp, message, image
	FROM chat2
	`
conn.query(sql, (err, results, fields) => {
	res.json(results)
})
})

router.get('/chat3', function(req, res, next) {
	const sql = `
	SELECT username, timestamp, message, image
	FROM chat3
	`
conn.query(sql, (err, results, fields) => {
	res.json(results)
})
})

export default router