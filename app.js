const express = require('express');
const app = express();

app.get('/API/:code', (req, res) => {
    res.setHeader('content-type', 'application/json');
    const infos = {
        name: 'Express',
        email: 'afonso.evan@gmail.com',
        code: req.params.code
    };
    res.end(JSON.stringify(infos));
});

app.listen(3000, () => {
    console.log('Server Started ...');
});
