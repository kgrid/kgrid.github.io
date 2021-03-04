# Component API
## Sub API
A short explanation of the purpose of this sub API. Each endpoint should be a header contained in tick marks that expresses the Http Method and Endpoint location. Path variables are contained in curly braces, and query parameters should be expressed.
### `POST /{pathVariable}?queryParameter=value` 
- Explanation of the purpose of this endpoint
  - Any extra information or tricky things about this endpoint
  - Should be contained in sub bullets like this
  - Then the rest of the section becomes uniform documentation
- Headers
  ```
  Accept: Always a good header to include
  Content-type: only required for POST and PUT
  ```
- Request Body
  ```text
  {"key":"value"} 
  ```
- Curl Command
  ```bash
  curl --location --request POST 'http://localhost:8080/pathVariable?queryParameter=value' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "key": "value"
  }'
  ```
- Responses
  - 200: It's a good idea to at least detail the 200 response, or 300 if it redirects. Notice that the json block is indented to match the response code.
    ```json
    {
  	  "result": "Stuff happened"
    }
    ```
- Errors
    - 500: 400 and 500 level errors that seem important should be documented if possible. Please document how they actually behave currently, not how they *should* behave. If they don't behave correctly, we should write a story and mention the docs need to change as part of that story.
      ```json
      {
          "Status": "500 Internal Server Error",
          "Instance": "uri=/pathVariable?queryParameter=value",
          "Title": "Hopefully a well handled and informative exception type here",
          "Time": "Sun Feb 14 22:23:16 EST 2021",
          "Detail": "The original exception message usually goes here"
      }
      ```
      
## Proposed Changes
  - This is just a list of various changes we plan to implement in the future, so they are all contained in one place.
  - Change we plan to make
    - Some details about the change
    - Here's another detail
