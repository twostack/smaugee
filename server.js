const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Simple CORS setup since frontend and backend are served from the same domain
app.use(cors());
app.use(express.static('public'));

const API_BASE = 'https://api.whatsonchain.com/v1/bsv';

app.get('/api/utxos/:network/:address', async (req, res) => {
    try {
        const { network, address } = req.params;
        const response = await fetch(`${API_BASE}/${network}/address/${address}/confirmed/unspent`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/merkleproof/:network/:txhash', async (req, res) => {
    try {
        const { network, txhash } = req.params;
        const response = await fetch(`${API_BASE}/${network}/tx/${txhash}/proof/tsc`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve the static files
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
