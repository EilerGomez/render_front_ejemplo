const express = require('express');
const path = require('path');
const app = express();

// Ruta absoluta a tu carpeta de distribución
const distPath = path.join(__dirname, 'dist', 'frontendcafeteria');

app.use(express.static(distPath));

// Para rutas internas, redirige siempre a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
