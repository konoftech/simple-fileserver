const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.get('/files', (req, res) => {
  fs.readdir('public/files', (err, files) => {
    if (err) {
      res.status(500).send('Unable to read directory');
    } else {
      res.send(files);
    }
  });
});

app.get('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const path = `public/files/${filename}`;
  fs.readFile(path, (err, data) => {
    if (err) {
      res.status(500).send('Unable to read file');
    } else {
      res.setHeader('Content-Type', 'application/pdf');
      res.send(data);
    }
  });
});

app.post('/files', upload.single('file'), (req, res) => {
  const file = req.file;
  const path = `public/files/${file.originalname}`;
  fs.rename(file.path, path, (err) => {
    if (err) {
      res.status(500).send('Unable to upload file');
    } else {
      res.send('File uploaded');
    }
  });
});

app.put('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const path = `public/files/${filename}`;
  const data = req.body.data;
  fs.writeFile(path, data, (err) => {
    if (err) {
      res.status(500).send('Unable to update file');
    } else {
      res.send('File updated');
    }
  });
});

app.delete('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const path = `public/files/${filename}`;
  fs.unlink(path, (err) => {
    if (err) {
      res.status(500).send('Unable to delete file');
    } else {
      res.send('File deleted');
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
