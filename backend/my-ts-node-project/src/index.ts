import express, { Request, Response } from 'express';
import users from './data/users';

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("No hay usuarios");
});

app.get("/api", (req: Request, res: Response) => {
  res.json("users para obtener los usuarios");
});

app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
