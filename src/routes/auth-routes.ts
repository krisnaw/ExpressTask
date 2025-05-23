import {Router} from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello Auth!')
})

router.get('/login', (req, res) => {
    res.send('Login')
})

router.post('/register', (req, res) => {
    console.log(req.query)
    res.send('Register')
})

router.get('/logout', (req, res) => {
    res.send('Logout')
})

router.get('/forgot-password', (req, res) => {
    res.send('Forgot Password')
})

router.get('/reset-password', (req, res) => {
    res.send('Reset Password')
})

router.get('/verify-email', (req, res) => {
    res.send('Verify Email')
})

export default router;

