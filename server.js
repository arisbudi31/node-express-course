const express = require('express');
const app = express();

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
app.listen(8000, () => {
    console.log("server is listening");
})