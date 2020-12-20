# Password-Generator
The aim of this project was to create a web application which will generate a strong password when a user chooses the at least of the character types (Uppercase, lowercase, symbols) and a character length.

We had to ensure the application was fully functioning and applied the aforementioned criteria

## First Steps: Pseudocoding & Declaring variables
Before attempting to code the Javascript file, I took some time to pseudocode a flow chart of how I wanted the application to work based on the client's brief. 
The client's first criteria was for a series of prompts to pop up on the screen when a user clicked the 'Generate Button'. Therefore I wanted these prompts to show up as soon as the button was clicked and modified the writePassword() to generate these prompts. 

After pseudocoding, I proceeded to declaring my variables for each character type and set the value as a string. 

## Second steps: Prompts/Confirms/Alerts
After declaring my intial variables, i created an if/else statement to hold my series of confirms,prompts and alerts. I used confirms to get the user to choose a specific character type they wanted and this returned a Boolean (true or false) value. However, since I wanted the user to choose the password length, I prompted this criteria out for them to input their desired number. This length value is then held in a characterLength variable to be called into a function later on. 

## Third Steps: Functions
**Selecting Random characters**
I identified I would need to generate a function to pick random characters from each character type variable. I used both the charAt() tp return a character from a random Index. To initiate this randomisation, I included the Math.floor(Math.random()) method to ensure a random index was always selected. Then I declared new variables (eg. randomLowerCase) to hold these functions and used console.log method to check if each one was working properly. Afterwards, I stored the new random answer variables in an array. 

**Generating Password**
This is the last function I worked on was to get all my random characters to be pushed onto the text area after all the criteria had been selected. I figured it would be best to use a for loop to achieve this and include a function that prints out random characters in the password text area. The for loops takes into account the character length and while the function with the for loop looks at selecting the random characters from the options array.

## Difficulties and troubleshooting
Organizing: One of the main difficulties I find with Javascript is figuring out how to organise my code for it to flow logically. I'm hoping with time, this will come naturally to me with more practice. 

Functions and how to use them:  I really struggled with figuring out how to write my functions in a way to generate the end result I wanted. Although I knew the general concept of what to use, it was very difficult to implement and this was without a doubt the hardest part of this project.

I used console.log, debugger and helpful reviews from my fellow peers/tutors to troubleshoot what was going wrong and what direction to take to fix these issues. 

**Failures**
Unfortunately although my code was able to select random characters, it seemed to ignore the ignore the character length and always generated a password including ALL character types as opposed to the ones selected. I believe this error is due to a functioning used in my for loop but I was not able to identify how to correct it. Therefore any feedback on solving this issue will be much appreciated. 

**Built With**
- HTML
- CSS
- JavaScript 
This site was deployed with [GitHub Pages] (https://karen-o94.github.io/Password-Generator/)
![passgen](https://user-images.githubusercontent.com/74797740/102716631-0a1be680-42d5-11eb-8caf-44b00a4e4eda.png)

**Credits**
My wonderful peers who dedicated time to helping me troubleshoot issues and encouraged me to keep going:
- Zarin Salim
- Livvy Owen
- Dave Bates

Lovely Tutors
Ben Ashley, Chiggy Nnadi, Paul Iurea and AskBCS support team