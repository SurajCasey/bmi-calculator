Frontend Mentor - Body Mass Index Calculator solution
This is a solution to the Body Mass Index Calculator challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview

The challenge

Screenshot

Links

My process

Built with

What I learned

Continued development

Useful resources

Author

Acknowledgments

Overview
The challenge
Users should be able to:

Select whether they want to use metric or imperial units.

Enter their height and weight.

See their BMI result, with their weight classification and healthy weight range.

View the optimal layout for the interface depending on their device's screen size.

See hover and focus states for all interactive elements on the page.

Screenshot


Links
Solution URL: Frontend Mentor Solution

Live Site URL: Live Demo

My process
Built with
Semantic HTML5 markup

CSS custom properties

Flexbox

CSS Grid

Mobile-first workflow

React - JS library

Vite - Build tool

Tailwind CSS - For styling

What I learned
While working on this project, I:

Learned how to calculate BMI in both metric and imperial units and display the correct weight range.

Practiced unit conversion between kg ↔ lbs and cm ↔ ft/in.

Created reusable components like LimitationsCard for better scalability.

Improved responsive design skills using CSS Grid and Tailwind’s breakpoint utilities.

Example of my BMI calculation logic in Imperial units:

js
Copy
Edit
const bmiImperial = (weightLbs, heightInches) => {
  return ((weightLbs * 703) / (heightInches * heightInches)).toFixed(1);
};
Example for converting lbs → st/lbs:

js
Copy
Edit
const lbsToStLbs = (lbs) => {
  const st = Math.floor(lbs / 14);
  const remainingLbs = Math.round(lbs % 14);
  return `${st} st ${remainingLbs} lbs`;
};
Continued development
In future iterations, I’d like to:

Add animations when BMI results appear.

Include health tips based on BMI category.

Integrate localStorage to save the user’s last inputs.

Add accessibility improvements, such as ARIA live regions for BMI updates.

Useful resources
BMI Formula & Healthy Weight Ranges - Helped confirm correct formula for metric and imperial units.

Tailwind CSS Docs - Great for quickly setting up responsive layouts.

MDN - Grid Layout - Helped with complex positioning in the "Limitations" section.

Author
Website - www.khatrisuraj.com

Frontend Mentor - @SurajCasey


Acknowledgments
Special thanks to Frontend Mentor for providing a structured challenge and to the Tailwind CSS community for their excellent documentation.

If you want, I can also generate a clean screenshot of your BMI Calculator with both metric and imperial examples so you can drop it straight into the screenshot.jpg section. That’ll make your README look much more complete.