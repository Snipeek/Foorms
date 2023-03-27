import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const maxAge = 30 * 24 * 60 * 60 * 1000;

const app = express()
  .use(cors({ credentials: true, maxAge }))
  .use(fileUpload({ uriDecodeFileNames: true }))
  .use(express.static(__dirname));

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
