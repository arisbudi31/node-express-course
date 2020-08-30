const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
    { name: 'Aris' },
    { name: 'Budi' }
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'succes mendapatkan data user, nice!',
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', (req, res) => {
    //data yang didapat dari input user
    const username = req.body.username;
    const password = req.body.password;

    //didapat dari databae
    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }

})
app.listen(8000, () => {
    console.log("server is listening");
})