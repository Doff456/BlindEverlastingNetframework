
const yauzl = require('yauzl');
const fs = require('fs');
const path = require('path');

function extractZip(zipPath) {
  yauzl.open(zipPath, {lazyEntries: true}, (err, zipfile) => {
    if (err) {
      console.error('Erro ao abrir o arquivo ZIP:', err);
      return;
    }
    
    zipfile.readEntry();
    
    zipfile.on('entry', (entry) => {
      if (/\/$/.test(entry.fileName)) {
        // É um diretório
        fs.mkdirSync(entry.fileName, {recursive: true});
        zipfile.readEntry();
      } else {
        // É um arquivo
        const dirPath = path.dirname(entry.fileName);
        if (dirPath !== '.') {
          fs.mkdirSync(dirPath, {recursive: true});
        }
        
        zipfile.openReadStream(entry, (err, readStream) => {
          if (err) {
            console.error('Erro ao ler entrada:', err);
            return;
          }
          
          const writeStream = fs.createWriteStream(entry.fileName);
          readStream.pipe(writeStream);
          
          writeStream.on('close', () => {
            console.log(`Extraído: ${entry.fileName}`);
            zipfile.readEntry();
          });
        });
      }
    });
    
    zipfile.on('end', () => {
      console.log('Extração concluída!');
    });
  });
}

// Executa a extração
extractZip('cdt-mobile-app.zip');
