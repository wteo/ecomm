const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `) // When submitted, form will collect any data that has the "name" attribute.);
});

// need to create the post method below. Otherwise, there's no place in the server to accept the data inserted by user

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Account created!");
})

app.listen(3000, () => {
    console.log("Listening");
})