
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    if (!id) return res.status(400).json({ message: 'ID tidak boleh kosong' });

    const filePath = path.resolve('./db.json');
    let db = [];
    if (fs.existsSync(filePath)) {
      db = JSON.parse(fs.readFileSync(filePath));
    }
    db.push(id);
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
    res.status(200).json({ message: 'ID berhasil disimpan' });
  } else {
    res.status(405).json({ message: 'Metode tidak diizinkan' });
  }
}
