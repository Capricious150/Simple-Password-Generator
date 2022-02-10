# Simple-Password-Generator

## View page at: https://capricious150.github.io/Simple-Password-Generator/

## To Use:
Load the page referenced above in a browser and click the "Generate Password" button.
Enter a number of characters between 8 and 128 (inclusive), and respond to the prompts asking for the types of characters you'd like to include.

The output will appear in the box above the button, ready for use!

![Preview Image](/assets/images/PagePreview.PNG)

### Design and Philosophy:
This was a fun little project. I create and combine a series of arrays and use psuedo-random number generation to pull from them to create the password. Please note that the randomness relies on Math.floor and Math.random, and shouldn't be considered cryptographically random. 

Also note that choosing a character set makes it possible but not guarunteed that it will appear in the final password. Put another way: If you create an 8 character password, and ask that it contain lowercase characters, uppercase characters, numbers, and special characters, it is statistically possible that one or more of those sets' characters aren't randomly selected by the password generator itself. To reduce the likelihood of this happening, I recommend generating a password at least 16 characters in length, however a user could also simply re-generate passwords until they receive one that fits their criterea.

The code is pretty streamlined, but could be theoretically simplified by using a few more Array methods, which are described in the comments in script.js