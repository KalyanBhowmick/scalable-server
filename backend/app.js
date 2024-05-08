const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3030;

app.use(cors())


app.get('/', function (req, res) {
    res.send('hello world')
});

app.get('/spin/:count', function (req, res) {
    console.log(req.params.count)
});

app.get('/hit', function (req, res) {
    // console.log('request details', req);
    console.log('requested origin', req.headers.origin);
    res.send('Thanks')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});