---
layout: page
---
# KGrid API

The platform API allows developers to access KGrid and Knowledge Object services.
You can use the KGrid API to evaluate the status of the Activator or Library, import and export Knowledge Objects
discovery Knowledge Object services and interact with Knowledge Object services.

## KGrid Activator API
KGrid Activator API provides access to the Knowledge Object Endpoints, Knowledge Objects and
KGrid Activator server endpoints. The API captured in OpenApi specification and can accessed  at
[KGrid Activator API](./swagger)


## KGrid Library API
KGrid Library API provides access to the Knowledge Objects and KGrid Library server endpoints

## API Notes

### CORS
The KGrid API supports cross-origin resource sharing (CORS) so that requests can be sent from browsers
using JavaScript served from any domain.

### Errors
Failing responses will have an appropriate status and a JSON body containing more details about a p
articular error. See error responses for more example ids.

Error Attributes
| Name	    | Type	  | Description	Example |
| id	      | string	| id of error raised	"rate_limit" |
| message	  | string	| end user message of error raised	"Your account reached the API limit. Please wait a few minutes before making new requests" |

Note that the url is included only when relevant and may not be present in the response.




