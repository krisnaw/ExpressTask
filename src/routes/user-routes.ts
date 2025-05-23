import {Router} from "express";

const router = Router();


// CRUD only for the user

router.get('/', (req, res) => {
    res.send('Hello User!')
})

router.get('/:id', (req, res) => {
    res.send(`Hello User ${req.params.id}!`)
})

router.post('/', (req, res) => {
    res.send('Create User!')
})

router.put('/:id', (req, res) => {
    res.send(`Update User ${req.params.id}!`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User ${req.params.id}!`)
})

export default router;