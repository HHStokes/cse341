const fileSystem = require('fs');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Generic Greeting</title></head>');
        response.write('<body><h1>Greetings Organics</h1><p>Oh yes I am human, definitly human, why do you ask? I most certanly am not a computer</p>');
        response.write('<form action="/create-user" method="POST"><label for="username">Username</label><input type="text" id="username" name="username"><button type="submit">Send Username</button></input></form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }
        
    if(url === '/users'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Users Page</title></head>');
        response.write('<body><h1>List of Users</h1><p>');
        response.write('<table>');
        response.write('<tr><th>Name</th></tr>');
        response.write('<tr><td>William "Bill" S. Preson Esq.</td></tr>');
        response.write('<tr><td>Ted "Theodore" Logan</td></tr>');
        response.write('<tr><td>Marty McFly</td></tr>');
        response.write('<tr><td>Dr. Emmett Brown</td></tr>');
        response.write('<tr><td>Jodie Whittaker</td></tr>');
        response.write('<tr><td>');

        const addToList = fileSystem.readFileSync('message.txt', 'utf-8') 
        response.write(addToList.toString());
        
        response.write('</tr></td>');
        response.write('</table>');
        response.write('</body>');
        response.write('</html>');    
        return response.end()
    }
    
    if(url === '/create-user' && method === "POST"){
        const body = [];
        request.on('data', (chunkOfData)=>{ body.push(chunkOfData); console.log(chunkOfData);});
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fileSystem.writeFile('message.txt', message, (oops) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
}
module.exports = requestHandler;