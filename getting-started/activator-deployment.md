## Deploying a Kgrid Activator

### Prerequisites
The activator is a java Spring Boot application you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### Running the Activator
Download the latest activator and a sample Knowledge Objects for testing the deployment. 
The latest release can be found on GitHub [Latest Activator Release](https://github.com/kgrid/kgrid-activator/releases/latest).

On the release place you will find the executable java activator jar and sample_shelf.zip.  Download these two file and unzip the sample_shelf.zip into the directory where the activator jar is located.

The activator is executable jar and can be run from the direcoty it is located witht he following command (running on port 8080 by default)
```
java -jar kgrid-activator*.jar 
```
Once Running access the health endpoint. All _statuses_ reported should be **UP**
```
curl http://localhost:8080/health
```
Example response from the activator health endpoint.  
```$xslt
{
  "status" : "UP",
  "shelf" : {
    "status" : "UP",
    "kgrid.shelf.cdostore.*.location" : "file:///Users/developer/Downloads/activator/shelf/"
  },
  "activationService" : {
    "status" : "UP",
    "Knowledge Objects found" : 3,
    "Adapters loaded" : [ "JAVASCRIPT" ],
    "Executors loaded" : [ "hello/world/v0.0.1/welcome", "99999/newkotwo/v0.0.1/welcome", "99999/newko/v0.0.1/welcome" ]
  },
  "diskSpace" : {
    "status" : "UP",
    "total" : 499963170816,
    "free" : 418602975232,
    "threshold" : 10485760
  }    
```
## Validating the Activator 

The sample shelf contains a single Knowledage Object with a simple javascript welcome endpoint.  The following tests view and execute the Hello World Knowledge Object.

View a Knowledge Object on the sample shelf

```
curl http://localhost:8080/hello/world
```

View a Knowledge Object Version on the sample shelf

```
curl http://localhost:8080/hello/world/v0.0.1
```

Execute the welcome endpoint on the hello/world/v0.0.1 knowledge object on the sample shelf
```
curl -X POST -H "Content-Type:application/json"  -d "{\"name\": \"Fred Flintstone\"}" http://localhost:8080/hello/world/v0.0.1/welcome
```

## Configuration
By default the activator will look for a _shelf_ in jar execution directory but the location the _shelf_ can be configured:
```bash
java -jar kgrid-activator*.jar --kgrid.shelf.cdostore.filesystem.location=/data/myshelf
```

To change the port (optional; see Configuration below):
```bash
java -jar kgrid-activator*.jar --server.port=9090

