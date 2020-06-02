import express from 'express';

const app = express();

app.get('/Users', (request, response) => {

    response.json(
        [
            "Monique",
            "Evandro"
        ]
    )
});

app.listen(3333);