# Bitcoin UTXO & Merkle Proof Viewer

A simple web application that allows users to view UTXOs and their corresponding merkle proofs for any Bitcoin address.

## Features

- Input any Bitcoin address
- View all UTXOs associated with the address
- See merkle proofs for each UTXO
- Printer-friendly output format

## Deployment Instructions (Render.com)

1. Create a new account on [Render.com](https://render.com)

2. Click "New +" and select "Web Service"

3. Connect your GitHub repository

4. Fill in the following details:
   - Name: `bitcoin-utxo-viewer` (or your preferred name)
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`

5. Click "Create Web Service"

That's it! Render will automatically deploy your application and provide you with a URL.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

3. Open `http://localhost:3000` in your browser

## Environment Variables

- `PORT`: Port number (default: 3000)
- `NODE_ENV`: Set to 'production' in production environment
