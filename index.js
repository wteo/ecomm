const express = require("express");
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");

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

app.post("/", async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send("Email in use.");
    }
    if (password !== passwordConfirmation) {
        return res.send("Passwords must match.");
    }
    res.send("Account created!");
})

app.listen(3000, () => {
    console.log("Listening");
})