const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())
app.get('/', (req, res) => res.send('Hello World! Myself Tanvir Ahmed and this is my first node app'))

const users = [
    { id:0, name: 'Tanvir Ahmed' },
    { id:1, name: 'Arifin Opu' },
    { id:2, name: 'Rashedul Islam' },
    { id:3, name: 'Rashedul' },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const result = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        res.send(result);
    }else{
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users[userId];
    res.send(user);
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))