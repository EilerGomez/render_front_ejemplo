const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Servir los archivos estáticos generados por Angular
app.use(express.static(path.join(__dirname, 'dist/frontendcafeteria')));

// Para cualquier otra ruta, enviar index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/frontendcafeteria/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Angular corriendo en http://localhost:${PORT}`);
});
