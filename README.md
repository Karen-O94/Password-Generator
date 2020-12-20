# Password-Generator
The aim of this project was to create a web application which will generate a strong password when a user chooses the at least of the character types (Uppercase, lowercase, symbols) and a character length.

We had to ensure the application was fully functioning and applied the aforementioned criteria

## First Steps: Pseudocoding & Declaring variables
Before attempting to code the Javascript file, I took some time to pseudocode a flow chart of how I wanted the application to work based on the client's brief. 
The client's first criteria was for a series of prompts to pop up on the screen when a user clicked the 'Generate Button'. Therefore I wanted these prompts to show up as soon as the button was clicked and modified the writePassword() to generate these prompts. 

After pseudocoding, I proceeded to declaring my variables for each character type and set the value as a string. 

## Second steps: Prompts/Confirms/Alerts
After declaring my intial variables, i created an if/else statement to hold my series of confirms,prompts and alerts. I used confirms to get the user to choose a specific character type they wanted and this returned a Boolean (true or false) value. However, since I wanted the user to choose the password length, I prompted this criteria out for them to input their desired value. This length value is then held in a variable to be called into a function later on. 

## Second Steps: Functions
I identified I would need to generate a function to pick random characters from each character type variable. This is w

## Difficults
I really struggled with generating my functions 