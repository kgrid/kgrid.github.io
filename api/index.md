---
layout: page
---
## KGrid API

The platform API allows developers to access KGrid and Knowledge Object services.
You can use the KGrid API to evaluate the status of the Activator or Library, import and export Knowledge Objects
discovery Knowledge Object services and interact with Knowledge Object services.
KGrid API is organized around REST. Our API has predictable resource-oriented URLs,
 returns JSON-encoded responses, and uses standard HTTP response codes and verbs.


### KGrid Activator API
The API is defined in a OpenApi specification and can accessed at
[KGrid Activator API](./swagger).

### Resources

##### Endpoints

##### Knowledge Objects

### API Notes

#### CORS
The KGrid API supports cross-origin resource sharing (CORS) so that requests can be sent from browsers
using JavaScript served from any domain.

#### Errors
Failing responses will have an appropriate status and a JSON body containing more details about a p
articular error. Codes in the 2xx range indicate success. Codes in the 4xx range indicate
an error that failed given the information provided. Codes in the 5xx range indicate an error with KGrid servers.

Error Format here






