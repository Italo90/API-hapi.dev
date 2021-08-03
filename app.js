'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return {message: 'Hello World!'}; //! foi alterado para um objeto para trazer um json o verdadeiro retorno de uma API
        }
    });

    server.route({
        method: 'GET',
        path: '/user',
        handler: (request, h) =>{
            return {
                id:1,
                nickname:'Ceará',
                name: 'Italo lima',
                email: 'italo.lima123@hotmail.com'
            }
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();