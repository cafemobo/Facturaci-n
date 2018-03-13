# Facturación
 
Microservicio serverless generado en AWS Lambda, con uso de Node JS y DynamoDB:

Se requiere una tabla en dynamodb que registre los siguientes atributos

ID
cantidad
precio
producto


Para consultar mediante postman o curl:

curl -X GET "https://lrdn4dblvb.execute-api.us-west-1.amazonaws.com/prod/Facturacion"

Para registrar compra:

Usar postman a la URL con una petición POST con el body del archivo JSON

add.json
