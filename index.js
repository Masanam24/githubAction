    // importing express framework
    const express = require("express");
    const app = express();

    const tutorialRoutes = require('./routes/tutorialRoutes');

    app.use(express.json());

    app.use('/tutorial', tutorialRoutes);

    app.get("/", function (req, res) {
     return res.send("Node API");
    });

    // listen to port 7000 by default
    app.listen(process.env.PORT || 7000, () => {
      console.log("Server is running");
    });

    module.exports = app;