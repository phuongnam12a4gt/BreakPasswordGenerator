'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM password'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM password WHERE id = ?'
        db.query(sql, [req.params.passwordId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let passwordId = req.params.passwordId;
        let sql = 'UPDATE password SET ? WHERE id = ?'
        db.query(sql, [data, passwordId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO password SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM password WHERE id = ?'
        db.query(sql, [req.params.passwordId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}