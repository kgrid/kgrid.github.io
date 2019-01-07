---
layout: page
---
## KGrid Getting Started Guide

These guides will give you a quick start into the KGrid environment.  The guides are arranged based on KGrid persona.

### Knowledge Object Developer

If you are interesting in understanding the anatomy of Knowledge Objects and how to develop new
Knowledge Objects start with the [Developing Knowledge Objects](./developing-kos).

### Knowledge Grid Application Integrator

If you are for integrating, maintaining and/or administrating the activator or library use the following guides to 
getting KGrid Activator and KGrid Library running.

* [KGrid Activator](http://kgrid.org/kgrid-activator).  Information about developing and 
building the activator component can be found at KGrid Activator in [GitHub](https://github.com/kgrid/kgrid-activator)

* [KGrid Library](http://kgrid.org/kgrid-library).  Information about developing and 
building the activator component can be found at KGrid Library in [GitHub](https://github.com/kgrid/kgrid-library)

### Knowledge Core Platform Developer

If you would like to contribute to the core KGrid components the following will be useful

#### Source Repositories

* [KGrid Libary](http://kgrid.org/kgrid-library/)
* [KGrid Activator](http://kgrid.org/kgrid-activator/)
* [KGrid Adapter](http://kgrid.org/kgrid-adapter/)
* [KGrid Self](http://kgrid.org/kgrid-shelf/)

#### Delivery Pipeline

##### Integration (Heroku)
The goal of the Integration environment is to combine and validate the work of the entire project team so it can be tested before being promoted to the Testing Environment. The Integration environment is hosted on Heroku. CircleCI deploys to the heroku environment with each commit.

* [Library](https://kgrid-library.herokuapp.com/)
* [Activator](https://kgrid-activator.herokuapp.com)

##### Test (Hippo)
The goal of the Test test environment is to allow human testers to exercise new and changed code via either automated checks or non-automated techniques. The KGrid team will use this environment for acceptance testing purposes. Hippo Test environment is hosted on UMich ITS server uses docker container architecture.

* [Library](https://hippo-library.kgrid.org/)
* [Activator](https://hippo-activator.kgrid.org/)

##### Demo (Monkey)
*COMING SOON* 
The goal of the Demo environment is to allow the KGrid team a place to demo software to your stakeholders and they can use for acceptance testing purposes.


##### Reference
The goal of the Reference environment is to showcase KGrid application framework and Knowledge Objects.

* [Library](https://library.kgrid.org/)
* [Activator](https://activator.kgrid.org/)
