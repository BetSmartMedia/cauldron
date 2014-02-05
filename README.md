# Cauldron
Cauldron is modular SASS framework and HTML boilerplate.

Cauldron strives to be assumption-free and allow you to easily pick and choose the parts you need. Think of Cauldron as the pot which holds a tasty blend of many pieces.

[view examples](https://github.com/jonathancochran/)

## Why another Goddamn framework?
Cauldron was created out of burning frustration. I started this project because frankly I haven't found "the perfect framework" which is always my goto. My "frustration" was the inability to extract pieces from other frameworks that I wanted without using the WHOLE FUCKING FRAMEWORK. There are some great frameworks out there, but the majority exceed 200kb and make your app look like their framework.

I wanted stylish & sexy modules which were light-weight and purely css. I wanted bare-bones styles that I could morph into any design easily. I wanted some libraries from around the web, but it was always a repeat process to go and download these libs every time I started a new project. I didn't want a bunch of extra functionality that I rarely or never used. I wanted only common things that I found myself reusing across various projects.

## Lo, Cauldron was born

At the core of Cauldron is it's modules. Each module requires no dependencies (other than sass/compass) and therefore allows you to pick and choose what you need, as you need it. Each module has it's own defined set of variables at the top of the file which can be overwritten from a project _config.scss file. Structuring it this way not only keeps modules dependancy free but allows you to pop them into any other project or framework, regardless of using Cauldron or not.

Cauldron is lightweight and flexible. It doesn't dictate a file structure or certain way to code your app. Although, it provides a base file structure which has worked well for me.

More than a SASS framework, it's also a bootstrap framework. It provides an empty shell HTML template, an examples file which demonstrates the css modules, and a few other libraries from developers which I often use in my projects (normalize, modernizr, retina mix-ins, etc).


## Getting started
* You need SASS + Compass. Git clone this repo and start coding...
* Never touch the files in the **scss/cauldron** folder

## Updating Cauldron
Simply run ./update-cauldron.sh from the command line. This will download the latest copy and replace the contents of **scss/cauldron/** in your project directory. It is recommended that you never edit files in the sass/cauldron dir as running the update script will overwrite your files.

## Good practice makes good stew.
I've coded Cauldron with a few conventions in mind that I recommend you stick with to retain your sanity as you project grows:

1. **Try not code like an asshole.** Code to reuse as much as possible (DRY) [read this](http://thesassway.com/advanced/modular-css-naming-conventions) and [this](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)
2. **Keep it under 80**. Yea it makes a huge difference if you keep your lines under 80 characters.
3. **Line up the columns**. Line up dem columns!
4. **Name things good** http://thesassway.com/beginner/variable-naming

## File structure
* **scss/mixins/_responsive.scss** is a responsive mixin for building RWD (responsive web design) apps. It is based off the the [sass-responsive.scss](https://github.com/taupecat/sass-responsive) library by taupecat.

## Vendor libraries and contributors
#### SCSS
* **[retina.sass](http://www.retinajs.com)** A helper mixin for applying high-resolution background images
* **[normalize](https://github.com/kristerkari/normalize.scss)**
Normalize.scss is a port of the poular normalize.css which makes things look consistent across all the browser.

#### Javascript
* **[modernizer]**(http://modernizr.com/)
Modernizr is a javascript library that brings old browsers up to speed.
* **[fastclick]**(http://modernizr.com/)
Modernizr is a javascript library that brings old browsers up to speed.


