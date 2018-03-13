'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        case 'DELETE':
            dynamo.deleteItem(JSON.parse(event.body), done);
            break;
        case 'GET':
            dynamo.scan({TableName: 'facturacion'}, done);
            break;
        case 'POST':
            const json = JSON.parse(event.body);
            dynamo.putItem({TableName: 'facturacion', Item: json}, done);
            break;
      
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
