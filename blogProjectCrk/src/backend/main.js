import express from 'express'
import cors from 'cors'
import {
    getAllGeneralContent,
    createGeneralContent,
    getGeneralContentById,
    deleteGeneralContent,
    updateGeneralContent,
    getAllUsers,
    createUser,
    getUserByEmailAndPassword
} from './db.js'


const app = express()
app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
const port = 3000

// Para errores
app.use((err, req, res, next) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Error de conexión con la base de datos:', err.message);
      res.status(500).send('Error interno en el servidor.');
    } else {
      console.error(err.stack);
      res.status(500).send('Error interno en el servidor.');
    }
});

app.get('/', (req, res) => {
    res.send('Cookie Run Kindom Eunice BLOG')
})

// Endpoint para obtener todos el contenido generales
app.get('/general-content', async (req, res, next) => {
    try {
      const generalContent = await getAllGeneralContent();
      res.json(generalContent);
    } catch (error) {
      next(error);
    }
  });
  
// Endpoint para crear un nuevo contenido general
app.post('/general-content', async (req, res, next) => {
    try {
      const { title, content, theme } = req.body;
      const result = await createGeneralContent(title, content, theme);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
});
  
// Endpoint para obtener un contenido general por su ID
app.get('/general-content/:contentId', async (req, res, next) => {
    try {
      const { contentId } = req.params;
      const content = await getGeneralContentById(contentId);
  
      if (content) {
        res.json(content);
      } else {
        res.status(404).json({ error: 'Contenido no encontrado' });
      }
    } catch (error) {
      next(error);
    }
});
  
  // Endpoint para eliminar un contenido general por su ID
app.delete('/general-content/:contentId', async (req, res, next) => {
    try {
      const contentId = req.params.contentId;
      const result = await deleteGeneralContent(contentId);
  
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Contenido no encontrado' });
      }
    } catch (error) {
      next(error);
    }
});

// Endpoint para actualizar un contenido general por su ID
app.put('/general-content/:contentId', async (req, res, next) => {
try {
    const contentId = req.params.contentId;
    const { title, content, theme } = req.body;
    const updatedContent = await updateGeneralContent(contentId, title, content, theme);

    if (updatedContent) {
    res.json(updatedContent);
    } else {
    res.status(404).json({ error: 'Contenido no encontrado' });
    }
} catch (error) {
    next(error);
}
});

// Endpoint para obtener todos los usuarios
app.get('/users', async (req, res, next) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
});

// Endpoint para buscar un usuario por su email y contraseña
app.post('/login', async (req, res, next) => {
    try {
      const { email, userpassword } = req.body;
      const userFound = await getUserByEmailAndPassword(email, userpassword);
  
      if (userFound) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      next(error);
    }
});

app.post('/register', async (req, res, next) => {
    try {
      const { username, email, userpassword } = req.body;
      const result = await createUser(username, email, userpassword);
  
      if (result) {
        res.status(201).json({ success: true });
      } else {
        res.status(500).json({ error: 'Error al registrar el nuevo usuario' });
      }
    } catch (error) {
      next(error);
    }
});
  
app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})