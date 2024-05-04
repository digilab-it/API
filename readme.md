Per creare un progetto con ReDoc per la documentazione API, segui questi passaggi:

Installa ReDoc CLI globalmente sul tuo sistema. Questo ti permetterà di utilizzare ReDoc da qualsiasi directory sul tuo sistema.

    npm install -g redoc-cli

Crea un file YAML o JSON per la tua API. Questo file conterrà tutte le specifiche per la tua API. Puoi chiamarlo come preferisci, ad esempio api-spec.yaml.

Genera la documentazione HTML con ReDoc. Questo creerà un file HTML che contiene la documentazione della tua API.

    redoc-cli bundle api-spec.yaml

Questo genererà un file redoc-static.html che contiene la documentazione della tua API. Puoi aprire questo file in un browser per visualizzare la documentazione.

(Opzionale) Se vuoi personalizzare il nome del file HTML generato, puoi farlo utilizzando l'opzione -o o --output.

    redoc-cli bundle api-spec.yaml -o index.html

not working api

    npx redoc-cli build-docs api-spec.yaml -o index.html
