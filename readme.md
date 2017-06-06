---
#
# You don't need to edit this file, it's empty on purpose.
# Edit minima's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: page
---


## Documentation Guideline for Knowledge Grid
{:.no_toc}

* TOC
{:toc}

## Introduction
Knowledge Grid uses GitHub repositories to store source codes, publish the documentations and provide sample clients for various projects under developemnt. Jekyll is default site builder adopted by Github pages. This guide provides the instructions for using the theme of minima to quickly adding and publishing the documentation for Knowledge Grid repositories. The minima theme has been customized for Knowledge Grid.

## Get Started
Github pages uses Jekyll as default site builder. It has several jekyll themes available to choose from, which has all necessary files. For Knowledge Grid repos, only the customization files need to be copied into the publishing folder.

## File structure
A typical publishing folder with the repository will look like this:

```
 ├── _includes
 │   ├── footer.html
 │   ├── head.html
 │   └── header.html
 ├── _layouts
 │   ├── default.html
 │   ├── home.html
 │   └── page.html
 ├── assets
 │   ├── img
 │   │   ├── MedicalSchoolLogo.png
 │   │   ├── Screenshot.png
 │   │   └── KG_Logo_DarkBlue.png
 │   └── kgrid.css
 ├── _config.yml
 └── index.md
```

## Content At-A-Glance
The folders of `_includes` and  `_layouts`  will overwrite the default minima files to provide customized layout and content for Knowledge Grid. You don't need to make changes in these files.

The folder of `assets` will provide additional CSS style and image files. Please don't delete any existing files. You can add image files to `\img` directory and inlcuded in your markdown file.

The file of `_config.yml` contains the configuration data for the site. A smaple file is shown below.

```
title: KGRID REPO DOCUMENTATION
author: KGrid Development Team
email: dlhs.knowledge.grid@umich.edu
description: > # this means to ignore newlines until "baseurl:"
  Knowledge Grid Documents Cover Page

# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"

# Build settings
markdown: kramdown
theme: minima
exclude:
  - Gemfile
  - Gemfile.lock


```
You will need to modify two parts in the file for your repository. `title` will show the text in the header nav bar; `description` will contain the text briefly describing the project. Both title and description will be used as front page if applicable. For the repos with only one markdown file, the customized layout will not have the side bar navigation.

The file of `index.md` will be the default landing page when needed and should remain as is.


## Step-by-Step

#### Step 1. Copy the files to the publishing directory in your repository

The following files are needed:

```
 ├── _includes
 ├── _layouts
 ├── assets
 ├── _config.yml
 └── index.md
```
You can download the files here [KGRID Customization of Minima Theme](https://github.com/kgrid/smart-test/archive/kg-minima.zip).

#### Step 2. Edit markdown files as needed

If it is the only page for the repositoy, a table of content can be generated by including the code in the page where the TOC is desired.

```
* TOC
{:toc}
```
An example can be found at [Post PCI risks](http://kgrid.org/cardiac-advisor).

If you will have multiple pages for the repository, a brief description can be added for your repository. An example can be found at [Authoring Manual](http://kgrid.org/AuthoringManual)

#### Step 3. Create additional pages

## Markdown files

You can add as many additional markdown files and organize them in subfolders as needed.

At the beginning of the md file, make sure include the following segment for Jekyll build instruction

```
---
layout: page
title: Get Started
level: 1
permalink: /getting_started/
---
```

`layout` should stay with `page`;

`title` will supply the text used in the navigation menu for this page;

`level` indicates the indent level. 0 for no indent while higher number for more indent (currently 2 is the highest possible);

`permalink` will allow Jekyll to build the proper URL link for the page.


In order to list the files in the navigation sidebar in the correct order, the files should be  named starting with the chapter number, section number, page number followed by regular text. An example is shown below:

```
01-02-01-getting_started.md
```

To use an image in the page, add the imge file to `\assets\img` and include the following code for the image link:
```
![](../assets/img/smaple.png)
```

Your documentation will be published at `http://kgrid.org/<your_repo>/`.
