const express = require("express");
const swaggerUi = require("swagger-ui-express");
const redoc = require("redoc-express");
const YAML = require("yamljs");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

// Convertire il file OpenAPI YAML in JSON
const swaggerDocument = YAML.load("./api-spec.yaml");

// Servire Swagger UI su /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Server index
app.get("/home", (req, res) => {
  console.log("Server index");
  res.sendFile(path.join(__dirname, "home.html"));
});
// Servire Redoc su /redoc
app.get(
  "/redoc",
  redoc({
    title: "API Docs",
    specUrl: "/openapi.json",
    nonce: "",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>API Documentation</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.css">
      </head>
      <body>
        <redoc spec-url='/openapi.json'></redoc>
        <script src="https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js"></script>
      </body>
      </html>
    `,
  })
);

// Servire il file OpenAPI come JSON
app.get("/openapi.json", (req, res) => {
  res.json(swaggerDocument);
});

// Avviare il server Mock con Prism CLI
exec("prism mock api-spec.yaml --port 4010", (err, stdout, stderr) => {
  if (err) {
    console.error(`Errore nell'avviare Prism: ${err.message}`);
    return;
  }
  console.log(`Prism in esecuzione su http://127.0.0.1:4010`);
});

// Avviare il server Express
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://127.0.0.1:${PORT}`);
  console.log(`Swagger UI disponibile su http://127.0.0.1:${PORT}/api-docs`);
  console.log(`Redoc disponibile su http://127.0.0.1:${PORT}/redoc`);
});
