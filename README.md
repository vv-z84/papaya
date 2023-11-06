# Papaya

A small project I wrote to generate my resume based on a markdown file.

It uses showdown to transform a markdown file into HTML file, injects the generated HTML into an HTML template and uses puppeter to print the HTML file as PDF.

I'm using puppeter to print the HTML file as PDF because this way I have more control of the styling with CSS. At the time I wrote this project I was having trouble to make the PDF look as I wanted with other HTML-to-PDF libraries. This way I can use all CSS features.

There is room for improvement, but for the use-case I created this project, it's working fine!

Soon I will update this README with how to install and use it.
