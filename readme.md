# Digilab docs

Installa ReDoc CLI globalmente sul tuo sistema. Questo ti permetterà di utilizzare ReDoc da qualsiasi directory sul tuo sistema.

    npm install -g redoc-cli

Modifica il file api-spec.yaml utilizzando le specifiche openAPI.

Genera la documentazione HTML con ReDoc.

    redoc-cli bundle api-spec.yaml

Questo genererà un file index.html che contiene la documentazione della tua API. Puoi aprire questo file in un browser per visualizzare la documentazione.

(Opzionale) Se vuoi personalizzare il nome del file HTML generato, puoi farlo utilizzando l'opzione -o o --output.

    redoc-cli bundle api-spec.yaml -o index.html

Per publicare le modifiche sul sito pubblico è sufficente una semplice git push

    git push
