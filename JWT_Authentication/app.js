const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000 || process.env.PORT;

app.get('/api', (req, res) => {
    res.json({message: 'Welcome route api'});
});

// end-point that you gonna protect with jwt 
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, decoded) => {
        if (!err) res.status(200).json({ message: 'Post created...', decoded });
        else res.status(500).json({ message: 'Error trying to get posts', err });
    });
});

app.post('/api/login', (req, res) => {
    // usually you make a request to login and get the users data back 
    // and then call the jwt sign method
    const user = {
        _id: 1,
        username: 'thiago',
        email: 'thiago4x70@gmail.com'
    }

    // 1: payload, 2: option to expire token, 3: secret key (could be anything),
    // 4: callback returning the token
    jwt.sign({ user: user }, 'secretKey', { expiresIn: '1min' }, (err, token) => {
        if(!err) res.status(200).json({ token: token });
        else res.status(500).json({ message: 'Something went wrong trying to get your token...' })
    });  
});

// medleware
function verifyToken(req, res, next) {
    // FORMAT OF TOKEN
    // Authorization: Bearer <access_token>

    const bearerHeader = req.headers['authorization'];  // get auth header value
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        next();
    } else res.status(403).json({ message: 'Forbidden!' })
}

app.listen(port, process.env.IP, () => {
    console.log(`Server is running on port: ${port}`);
});