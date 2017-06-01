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
title: KGrid Activator Manual
author: KGrid Development Team
email: dlhs.knowledge.grid@umich.edu
description: > # this means to ignore newlines until "baseurl:"
  Knowledge Grid is powered by Fedora 4 and supported by University of Michigan Medical School

#github_username:  kgrid-um-team

# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"

# If you want to link only specific pages in your header, uncomment
# this and add the path to the pages in order as they should show up
header_pages:
  - getting_started.md
  - activator_checklist.md
  - test_functions.md
  - commands.md
  - how_execution_stack_works.md
  - troubleshooting.md
  - additional_resources.md


theme: minima

```
You will need to modify two parts in the file for your repository. `title` will show the text in the header nav bar; `header_pages` will contain all the pages listed in order and be used to generate the sidebar navigation and the navaigation menu for mobile display. If you only have one page, `header_pages` can be commented out. The customized layout will render it using one-page flavor, which will not have the side bar navigation.

The file of `index.md` will be the default landing page. For multiple page reposity, it will not be included in the sidebar navigation. You can edit the file and use as a cover page. You can add as many additional pages and include the filenames in the `header_pages` for nav bar rendering.

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

#### Step 2. Edit `index.md` as needed and this will be your landing page

If it is a the only page for the repositoy, a table of content can be generated by including the code in the page where the TOC is desired.

```
* TOC
{:toc}
```
An example can be found at [Post PCI risks](http://kgrid.org/cardiac-advisor).

If you will have additional pages for the repository, a brief description can be added for your repository. An example can be found at [Authoring Manual](http://kgrid.org/AuthoringManual)

#### Step 3. Create additional pages

You can create as many additional markdown pages as needed.

For each page, the section shown must be included at the beginning of the file so that the page can use the correct layout and properr text for the navigation.

```
---
layout: page
title: Get Started
level: 1
permalink: /getting-started/
---
```
`layout` should remain as "page".

`title` text will be shown in the navigation bar.

`level` indicates indentation of the navigation item. For top level item, delete this entry; for others, enter 1.

`permalink` should be the filename without extension so that the navigation item will direct to the correct folder built by Jekyll.





To use an image in the page, add the imge file to `\assets\img` and include the following code for the image link:
```
![](../assets/img/smaple.png)
```


#### Step 4. Modify `_config.yml`
Once the page is created, add the filenames for the additional pages to the list in `header_pages` in the proper order.

Your documentation will be published at `http://kgrid.org/<your_repo>/`.

<!-- ### For more information
{:.no_toc}

About Knowledge Grid:

About Minima: -->
