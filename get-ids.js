
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.resolve('./db.json');
  const db = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];
  res.status(200).json({ ids: db });
}
