# Kgrid Documentation Strategy

## Which docs go where?
### Reference Documentation
- Docs concerning a component of Kgrid should live within that component's git repo
  - These docs should be aimed at the following actors
    - KO developers that are using components of the Kgrid, developing KOs for existing runtimes, or creating new runtimes
    - Operators (System Administrators and such) that are setting up and maintaining a Kgrid, and need information about configuration, the APIs exposed, and administration.
    - Client developers that are writing apps that integrate with a running Kgrid
  - See the [Reference Documentation Structure](#ReferenceStructure) section of this document for more details.
  
### User Guides
- Guides for developers, integrators, and different actors using the kgrid, getting started with the Kgrid, or using more advanced features.
  - Found in the [kgrid guides](https://github.com/kgrid/guides) repo
  
### Standards and Background
- The brains behind the whole operation. This is the documentation for the research and ideas that have lead to our implementations of the kgrid.
  - Standards, specifications, white papers, and architectural 
  - Found in the [kgrid specs](https://github.com/kgrid/specs) repo
  
## <a name="ReferenceStructure"></a>Reference Documentation Structure ##
### Top-Level Github Readme
- The first thing you see when you go to the github repo for a Kgrid component. This should be focused on getting a developer who is going to either fork the project, or contribute to it open-source up and running. It should be contained in the root of the project.
    - Check out the [Example Top-level Readme](github-readme.md)

### Public Docs
- We currently publish our docs using Vuepress. See the [Vuepress site](https://vuepress.vuejs.org/) for instructions on setting up a new Vuepress project, or if you're feeling bold, just copy an existing one and change all the component names. The following files should be contained in a folder called `docs` contained in the top level of the project.
  #### readme.md
  - Should be the quick start guide that is aimed at getting a non-technical person up and running, able to play with the compiled or packaged component. 
      - They should not be checking out source code as part of this guide.
      - Check out the [Example Quick Start](docs/docs-readme.md)
  #### api.md
  - This should be a very dry, developer centric documentation of the component's api if it exposes one.
      - Keep this file a very clean reference doc
      - Checkout the [Example API Docs](docs/api.md)
  #### configuration.md
  - This should be a very dry, developer centric documentation of the component's configuration if available.
      - Keep this file a very clean reference doc
      - Checkout the [Example Config Docs](docs/configuration.md)
  #### extra-info.md
  - Some components may need some special documentation. We are free to include one-off docs like this, but they should also try to follow the same style guide so that the reader knows what to expect and can easily find information
## Style
### Headers
- In general, these docs utilize Headers in a way that allows each main endpoint, configuration, or feature to be turned into a side-bar navigation link by vuepress.
- There should only be one level 1 header. `#`
- Only headers level 2 and 3 will be turned into sidebar links
- Header levels only go to 5

### Bullets
- Bullet points are used to organize details into lists that catch the eye and are quickly digestible for a reader
    - If there are sub-points to a detail, we just indent them
### Code Blocks
- Mark Down gives us the ability to create code blocks of various types, most commonly used are `json` and `bash` in our docs.
    - If a code block is part of a bullet point, it should be indented at the same level as the bullet point like so:
    ```text
    This way it doesn't stick out and look like its own new section. 
    ```
    - Here is a json example:
    ```json
    {
        "key": "value",
        "array": [
          "thing 1",
          "thing 2"
        ]     
    } 
    ```
    - Here is a bash example:
    ```bash
    curl --location --request GET 'http://localhost:8080/actuator/info'
    ```
  
### `Code blocks as headers`
- This is possible and encouraged. It helps the endpoint or configuration stick out to the eye, while still being turned into a sidebar link.
