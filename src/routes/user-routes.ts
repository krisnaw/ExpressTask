import app from "../server";

app.get("/user", (req, res) => {
    res.send('Hello World! ')
})