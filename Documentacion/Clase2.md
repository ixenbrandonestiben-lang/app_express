# aplicacion de funcionalidades de ExpressJS

![img](./img/image.png)

**Estados HTTP**

Los códigos de estado HTTP son respuestas numéricas de tres dígitos que un servidor web envía a un navegador o cliente para indicar el resultado de una solicitud.

Cada vez que se hace clic en un enlace o ingresa una URL, el navegador envía una solicitud al servidor web del sitio al que se intenta acceder, pues el servidor recibe y procesa esta solicitud, y luego devuelve los recursos pertinentes junto con un encabezado HTTP.

Los códigos de estado de HTTP son proporcionados al navegador a través de este encabezado, donde aunque estos códigos se envían cada vez que el navegador solicita una página web o un recurso, en la mayoría de las ocasiones no son visibles.


# Tabla de códigos de estado HTTP para README.md

| Código | Descripción (Informational) | Código | Descripción (Success) | Código | Descripción (Redirection) | Código | Descripción (Client Errors) | Código | Descripción (Server Errors) |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **100** | Continue[cite: 2] | **200** | Ok[cite: 2] | **300** | Multiple Choices[cite: 2] | **400** | Bad Request[cite: 2] | **500** | Internal Server Error[cite: 2] |
| **101** | Switching Protocols[cite: 2] | **201** | Created[cite: 2] | **301** | Moved Permanently[cite: 2] | **401** | Unauthorized[cite: 2] | **501** | Not Implemented[cite: 2] |
| **102** | Processing[cite: 2] | **202** | Accepted[cite: 2] | | | **402** | Payment Required[cite: 2] | **502** | Bad Gateway[cite: 2] |
| **103** | Early Hints[cite: 2] | **203** | Non-Authoritative Information[cite: 2] | | | **403** | Forbidden[cite: 2] | **503** | Service Unavailable[cite: 2] |
| | | **204** | No Content[cite: 2] | | | **404** | Not Found[cite: 2] | **504** | Gateway Timeout[cite: 2] |
| | | **205** | Reset Content[cite: 2] | | | **405** | Method Not Allowed[cite: 2] | **505** | HTTP Version Not Supported[cite: 2] |
| | | **206** | Partial Content[cite: 2] | | | **406** | Not Acceptable[cite: 2] | **507** | Insufficient Storage[cite: 2] |
| | | **207** | Multi Status[cite: 2] | | | **407** | Proxy Authentication Is Required[cite: 2] | **508** | Loop Detected[cite: 2] |
| | | **208** | Already Reported[cite: 2] | | | **408** | Request Time Out[cite: 2] | **510** | Not Extended[cite: 2] |
| | | **226** | IM Used[cite: 2] | | | **409** | Conflict[cite: 2] | **511** | Network Authentication Required[cite: 2] |
| | | | | | | **410** | Gone[cite: 2] | | |
| | | | | | | **411** | Length Required[cite: 2] | | |
| | | | | | | **412** | Precondition Failed[cite: 2] | | |
| | | | | | | **413** | Payload Too Large[cite: 2] | | |
| | | | | | | **414** | URI Too Long[cite: 2] | | |
| | | | | | | **415** | Unsupported Media Type[cite: 2] | | |
| | | | | | | **416** | Range Not Satisfiable[cite: 2] | | |


Obtener parámetros y encabezados

**Params:**

Se refieren a los parámetros enviados a través del enrutador en una solicitud HTTP. Los parámetros son partes variables de la URL.

Cuando se recibe una solicitud que coincide con una ruta que contiene parámetros, Express extrae los valores de los parámetros y los hace accesibles a través del objeto `req.params`, este objeto contiene pares clave-valor, donde la clave es el nombre del parámetro definido en la ruta y el valor es el valor que se captura de la URL.

Los parámetros se definen en la ruta utilizando dos puntos (:) seguidos de un nombre de variable.