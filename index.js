const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from NodeJs</h1>');
    res.end(`
        <div style="background: red; width: 200px; height: 200px">Russian worship fuck your salf</div>
    `);
});

server.listen(3000, () => {
    console.log('server is running...')
})