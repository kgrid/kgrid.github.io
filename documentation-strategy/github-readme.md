# KGrid Component

[![CircleCI](https://circleci.com/gh/kgrid/kgrid-activator.svg?style=svg)](https://circleci.com/gh/kgrid/kgrid-activator)
[![GitHub release](https://img.shields.io/github/release/kgrid/kgrid-activator.svg)](https://github.com/kgrid/kgrid-activator/releases/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Overview
This should succinctly describe the component, its purpose, and how it interacts with the rest of the Kgrid.

## Build & run the Component locally

This should guide a developer planning to work on the project from cloning the code to running the project locally.

### Prerequisites
- Describe which languages and frameworks are required to start development
    - Include links to the Language and framework set up guides
    

- [Java 11 or higher](https://www.oracle.com/java/)
- [Maven 3](https://maven.apache.org)

### Clone
To get started you can simply clone this repository using git:
```
git clone https://github.com/kgrid/kgrid-component.git
cd kgrid-component
```

### Quick Start
- Detail what steps to take once all prerequisites are installed, and the source code is cloned from the repo.
    - Make sure to cover both unix and windows operating systems
```
mvn clean package
export SOME_ENVIRONMENT_VARIABLE=true 
# set SOME_ENVIRONMENT_VARIABLE=true (Windows)
java -jar target/kgrid-component*.jar
```

## Running the tests

- Briefly outline how to run tests, and possibly which framework is used.
```
mvn clean verify
```


## Deploying the Component in cloud environments

Follow your provider's documentation. If you are building the latest version from `main` you may need to add the oss.sonatype.org SNAPSHOT repository. For example, on Heroku by using:
```bash
MAVEN_SETTINGS_PATH=.circleci/settings.xml
```

## Publishing the Documentation
- Should walk the dev through changing and publishing the docs.

### Running the vuepress site locally
```
npm install
npm run docs:dev # or vuepress docs dev
```

### Build the site for publishing

```
npm run docs:build
```

To push the vuepress site to the `gh-pages` branch (if configured in the site settings on GitHub):

```bash
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://${GITHUB_TOKEN}@github.com/kgrid/guides.git master:gh-pages
```
