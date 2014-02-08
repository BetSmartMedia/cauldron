# Cauldron
Cauldron is modular SASS framework and HTML boilerplate.

Cauldron strives to be assumption-free and allow you to easily pick and choose the parts you need.

Cauldron is for you if:
* **You want lightweight.** Cauldron is intended to provide a simple set of styles with the mindset that your projects will evolve. You can (and will) easily build upon and override these styles.
* **You want a simple bootstrap for your projects.** An HTML shell template, modernizr.js, normalize.css, and a solid file structure.
* **You want some common helper functions.** The mixins provided are a blend of  responsive, typography, and animations.
* **You don't want presentational javascript included.** I dislike it when a frameworks components need javascript to accomplished a desired look. It's usually uncessary and adds extra weight to your project.

Cauldron is not for you if:
* **You need a matured, stylistic framework.** There's plenty of frameworks which have great looking components. Bootstrap and Zurb and primary examples. But with that comes a lot of excess cruft which you might not use and also dictates the design of your project, unless you heavily override these styles.
* **You need more functionality.** Cauldron doesn't provide a large set of helper functions or mixins. It extends compass, but only provides a minimal set of my most used functions.

**Module examples:** see the examples.html file


## Why another Ghaddamn framework?
Cauldron was created out of burning frustration. I started this project because frankly I haven't found "the perfect framework" which is always my goto. My frustrations lie in the inability to extract pieces from other frameworks without using the WHOLE FOOK'N FRAMEWORK. There are some great frameworks out there, but the majority exceed 200kb and make your app look like their framework (without some heavy overriding).

I wanted stylish & sexy modules which were light-weight. Modules which I could reuse individually in other projects (without using the whole framework). I wanted bare-bones styles that I could morph into any design easily. I needed  libraries from around the web for every project and it was always a repeat process: to go and download these libs every time I started a new project. I didn't want a bunch of extra fluff that I rarely used. I wanted only common things that I found myself reusing across various projects.


## And Lo, Cauldron was born

At the core of Cauldron is it's modules. Each module requires 0 dependencies (other than compass) and therefore allows you to pick and choose what you need, as you need it. Each module has it's own defined set of variables at the top of the file which can be overwritten from a project _config.scss file. Structuring it this way not only keeps modules dependancy free but allows you to pop them into other projects and frameworks.


## Getting started
1. You need SASS & Compass. Git clone this repo...
2. Start building your app! You'll want to start at the **app.scss** file and **_config.scss** file. Your app scss goes in **scss/app/**. It's recommended that you never touch files in the **scss/cauldron** folder as they will be overwritten when you update Cauldron.


## Updating Cauldron
Simply run **./update-cauldron.sh** from the command line. This will download the latest copy and replace the contents of **scss/cauldron/** in your project directory.


## Good practice makes good stew.
I've coded Cauldron with a few conventions in mind that I recommend you stick with to a) retain consistency across project and framework, and b) save yourself a headache by using good practices.

1. **Follow the naming conventions guide from thesassway.com.** Code to reuse as much as possible (DRY). [Read this article](http://thesassway.com/advanced/modular-css-naming-conventions) and [this](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css).
2. **Keep it under 80**. Keeping your lines of code under 80 characters makes a huge difference in readability and maintainability.
3. **Line up the columns**. Line up dem' columns! Don't mix tabs and spaces, get an editor that shows you the difference (my own folly kicked me in the ass). Other devs will hate or love you on this principle alone.
4. **[Thoughtfully name things](http://thesassway.com/beginner/variable-naming)**


## Vendor libraries and contributors
#### SCSS
* **[retina.sass](http://www.retinajs.com)** A helper mixin for applying high-resolution background images
* **[normalize](https://github.com/kristerkari/normalize.scss)**
Normalize.scss is a port of the poular normalize.css which makes things look consistent across all the browser.

#### Javascript
* **[modernizer]**(http://modernizr.com/)
Modernizr is a javascript library that brings old browsers up to speed.
* **[fastclick]**(https://github.com/ftlabs/fastclick/)
Fastclick is a javascript library that removes that soon-to-be removed 300ms default delay in all certain mobile and tablet devices.




