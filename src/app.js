const express = require('express');
const path = require('path');
const app = express();
const PORT = 6868;
const { engine } = require('express-handlebars');

// Template Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "/resources/views"));

// static file
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
   res.render('home');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})