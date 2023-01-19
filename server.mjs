import { createServer } from 'http';
import {fs} from 'fs';

createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/html'})
fs.readFile('index.html', function(error, data){
    if(error) {
        res.writeHead(404)
        res.write('error: file not found')
    } else {
        res.write(data)
    }
    res.end()
})
    
}).listen(process.env.PORT);
