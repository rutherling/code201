User (or program) action
--> expected outcome
Wednesday
1. Create a loop for percentages[] and make sure you have count clicked in the numerator and count shown in the denominator. Round to 2 decimals.
--> The array should match up arithmetically.
2. Display the percentages in their own Canvas until you figure out the label index :)
--> This should ONLY show up in two scenarios: after clicking Show Results button OR after Nclicks === 24.
3. Refresh the page after the 2nd click.
-->Nshown should NOT increment. It should have the same counts as the log before the refresh.
4. Do 16 clicks and hit "8 more votes". Refresh after the 10th click.
-->Confirm your NShown totals to 30.
5. Check behavior after 24th click (16 clicks, 8 more clicks).
-->Automatically show the Canvas. Do not show buttons for "Show Results" or "8 more votes".

Tuesday
1. Start by checking that you can connect to the Chart.js library with <script> tags in the index.html.
--> You should be able to see the sample code from Chartjs.org.
2. Modify the click threshold (lab description requires 16) and confirm the 16th one prevents more clicks. Either hide the image container element or turn the event listener off.
--> when you click on it, the Nclicks shouldn't change, and the images shouldn't refresh.
3. Check user experience flow:
vote 16x
  a. vote again, show results, 8 more votes.
-->  a1. vote again: 16 votes, back to a.
-->  a2. show results: still options to vote again (a1) or 8 more votes (a3).
-->  a3. 8 more votes, STOP other options for voting, and automatically show results.
4. Compare the console.log(NClicks) to the chart.
-->chart should match the clicks done during testing.
5. User bias test: In real life, I would apply the psychology principle that says survey respondents tend to favor the right-most option. I would find a way to store the count of times the left/center/right div was clicked.
-->See if any one position is selected statistically significantly more than the other positions.

Monday
1. In the live-server rendition of the page, click elsewhere on the page to ensure the Event Listener does NOT respond.
-->no change to click count or shown count. The images should only change when the user clicks inside the <div> containing the images.

2. In the live-server rendition of the page, click through a bunch of times. Pause each time to check that each of the three displayed images is unique.

3. Use console.log() to monitor the increment on Nclicks. It should add 1 to the Nclicks property on the Image object, THEN show the next set of 3 images.

4. Use console.log() to monitor how frequently each image is shown. See if all 10 images are shown with about the same frequency.

5. Use console.log() to track how many votes have been cast in that session. On vote 16, the user should be able to see (and click) a button to show results or proceed to a new round. If the user clicks Show Results, that button should hide itself.
