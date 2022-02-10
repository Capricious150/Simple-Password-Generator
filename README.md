# Simple-Password-Generator

## View page at: https://capricious150.github.io/Simple-Password-Generator/

## To Use:
Load the page referenced above in a browser and click the "Generate Password" button.
Enter a number of characters between 8 and 128 (inclusive), and respond to the prompts asking for the types of characters you'd like to include.

The output will appear in the box above the button, ready for use!

![Preview Image](/assets/images/PagePreview.PNG)

### Design and Philosophy:
This was a fun little project. I create and combine a series of arrays and use psuedo-random number generation to pull from them to create the password. Please note that the randomness relies on Math.floor and Math.random, and shouldn't be considered cryptographically random. 

The code is pretty streamlined, but could be theoretically simplified by using a few more Array methods, which are described in the comments in script.js