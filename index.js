const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(
            `
                <h1>Form</h1>
                <form method="post" action="/">
                    <input name="title" type="text">
                    <button type="submit">submit</button>
                </form>
            `
        )
    }

    if(req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            const message = body.toString().split('=')[1];

            res.end(`
            <h1>Russian worship fucking self: ${message}</h1>
        `)
        })


    }
});

server.listen(3000, () => {
    console.log('server is running...')
})