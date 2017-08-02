# data-cards

data-cards are a way of previewing and adding metadata to table columns, in a browser friendly way. This repository contains a basic example of this design pattern,

Demo [here](http://p.smth.uk/data-cards/).

In use
- [OS Packager](http://p.smth.uk/os-mockup-packager/packager/describe-data/)

This demo is built with [Lektor](https://www.getlektor.com/).

It has a few [dependencies](package.json), so do `npm install`.

`grunt` will watch for changes to your [SCSS files](assets/scss), and also [icons](assets/icons) (see [svgstore](https://github.com/FWeinb/grunt-svgstore)).

`lektor deploy` will deploy to the gh-pages branch, putting changes live (if you have deploy permissions).
