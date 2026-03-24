---
title: Making a basic static site using Eleventy
date: 2021-12-17
slug: This is how I made a site using the static website framework, Eleventy.
tags:
  - Web Development
coverImage: /images/pixels.jpg
author: Hadrian Cawthorne
authorImage: /images/hadrian.jpg
---
This site was originally a WordPress site, but I had a few issues with WordPress:

- faffy
- security issues
- need to login/remember login details
- spam
- plugins that don't deliver
- bloated backend, endless settings pages etc
- Gutenberg editor is not nice
- can be slow

## Static website builders

I enjoy coding with HTML and CSS and prefer simple ways of managing content. 

**Static website generators** are good for this! 

I had played with [Ruby-based Jekyll](https://jekyllrb.com/) and then got interested in [Eleventy](https://www.11ty.dev/).

With a static website generator, you are able to turn even the most basic HTML into a template and manage content with [simple markdown files](https://www.markdownguide.org/) and simple [json data](https://www.w3schools.com/js/js_json_intro.asp). 

## Eleventy: A vague tutorial for a super simple site

Let's have a go at Eleventy with this tutorial. 

There is also [an advanced Eleventy tutorial here](/posts/building-a-website-using-eleventy/). 

### Tools you will need

- Make sure node is installed. You can [find installers on the node.js website](https://nodejs.org/en/download/).
- a general code editor
- a Terminal app 

I'm using Windows 10, and I am using [Visual Studio Code](https://code.visualstudio.com/) which has a built-in Terminal. 

### Make a project folder

Create a folder somehwere and use this to work in. Then in Terminal, go to that folder e.g. 

```shell
 C:\Users\edutel\Desktop\static-site 
 ```

### Make some starter folders and files

Inside your directory, create a folder called **_src**. This will be where the websites building blocks are kept.

In your main folder, make a file called **eleventy.config.js** then open in the editor and add the following to it:

```js 
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "_src",
      output: "_dist"
    }
  }
};

```
This is your configuration file. 


### Create a package.json file

Every Eleventy project needs a package.json, which provides an easy way to manage the project's metadata and dependencies. 

I don't really know that much about Node.js, other that we need to **initialise** a project and the package.json handles/lists all the packages etc. 

In your project folder, in Terminal:

```shell 
  npm init -y 
```

This creates the package.json file that should have the following in it:

```json
{
  "name": "static-site",
  "version": "1.0.0",
  "description": "",
  "main": "eleventy.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### Install Eleventy

We now need to install Eleventy using **npm** (Node Package Manager).

```shell
 npm install @11ty/eleventy --save-dev 
 ```

 Now in the package.json file you will also see:

 ```json
 "devDependencies": {
    "@11ty/eleventy": "^2.0.1"
  }
  ```
Telling you that Eleventy is needed for this project.

### Run Eleventy

Node.js is a **runtime environment** which means you can run and execute code with it. To run Eleventy, use **npx** (node package execute):

```shell
npx @11ty/eleventy 
```

This should give you something like this:

```shell
[11ty] Wrote 0 files in 0.02 seconds (v2.0.1) 
```

Eleventy has been executed and tried to build the site based on the code that I have written, but hasn't actually done anything as the site is currently empty! 

### Create a page

Create a file called `index.md` in your **_src** directory and put something in it, like: 

```md
 # hello 
 ```

Then run Eleventy like this to build and serve up your website:

```shell
npx eleventy --serve 
```

Terminal should return something like this to you... 

```shell
[11ty] Wrote 1 file in 0.08 seconds (v2.0.1)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

... telling you that it has written a file, that it's watching for any changes to files or new pages and you can view your site at `http://localhost:8080/`

Now go to `http://localhost:8080/` in your browser and:

Wohoo! 

![a very basic site](/images/hello-site.png)

### The output site

If you look inside yoru main project folder you will now see a folder called **_dist**, with an `index.html` file inside. This has been created by Eleventy and this is the output directory, or your **static site**!