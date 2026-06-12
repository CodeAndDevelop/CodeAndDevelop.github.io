import express from 'express';

const app = express();


app.get("/", function (req, res) {
    res.end("Hello from backend");
})


app.get("/info", function (req, res) {
    res.send("My name is Bikash Kumar Bhusal. I am a software developer. I have experience in web development, mobile app development, and game development. I am passion");
    res.send("007");
})
app.get("/send", function (req, res) {
    const name = req.query.name;
    const address = req.query.address;
    res.send(name);
    console.log("name received", name);
    console.log("address received", address);
});

// http://localhost:3000/send?name=bikash&address=ktm

function startserver() {
    console.log("server is running");
    app.listen(3000, function () {
        console.log("server is running at port 3000");
    });
}


startserver();



