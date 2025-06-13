import express from 'express';
import users from "./data/users";


const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.json('¡Bienvenidos!');
});

app.get('/users', (req, res) => {
    res.json(users);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
