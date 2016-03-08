# website-2016

## Setup Instructions

To build this website, you need to install Ruby and Jekyll.

You can find more detailed installation instructions on 
Jekyll's webpage: https://jekyllrb.com/docs/installation/

The webpage also mentions something about installing 
Node.js and Python -- neither of those two should be required.


## Build Instructions

To develop locally, `cd` into the `app` folder, and run:

    $ jekyll serve --incremental

To build the final site, `cd` into the `app` folder and run:

    $ jekyll build

...then copy the contents of the `app/_site` folder to the server.
