# Digilab docs

Questa app fornisce:

1. index.html: pagina statica html generata tramite redoc.
2. Server Dummy (Prism) in esecuzione su http://127.0.0.1:4010
3. Swagger UI disponibile su http://127.0.0.1:3000/api-docs
4. Redoc disponibile su http://127.0.0.1:3000/redoc
5. Openapi JSON file su http://127.0.0.1:3000/openapi.json

## Operazioni preliminari

1. l'app è stata testata con nodejs versione 20x. In caso di malfunzionamenti assicurarsi di avere questa versione node installata ed in uso.
2. scaricare il progetto

   git clone nome-del-repository

3. cambiare directory e installare le dipendenze con

   cd nome-del-repository && npm install

## Develeopment

    npm start

Lanciando `npm start` si aprirà una finestra del browser dove poter visualizzare la documentazione redoc (pagina statica index.html). La build e l'aggiornamento della pagina avviene automaticamente al salvataggio delle modifiche

    npm start

## Redoc

npm start assicura già questo step, ma se si vuole compilarlo manualmente

Modifica il file redoc.yaml e genera la documentazione HTML con ReDoc.

    redoc-cli bundle redoc.yaml

Questo genererà un file index.html che contiene la documentazione della tua API. Puoi aprire questo file in un browser per visualizzare la documentazione.

(Opzionale) Se vuoi personalizzare il nome del file HTML generato, puoi farlo utilizzando l'opzione -o o --output.

    redoc-cli bundle redoc.yaml -o index.html

## Dummy server

npm start assicura già questo step, ma se si vuole eseguirlo manualmente

    npx prism mock redoc.yaml

## Swagger server

npm start assicura già questo step, non è possibile lanciarlo manualmente

## Export to PDF

    redoc-cli bundle redoc.yaml -o pdf.html --options redoc-config.json

    node generate-pdf.js
