User (or program) action
--> expected outcome

1. In the live-server rendition of the page, click elsewhere on the page to ensure the Event Listener does NOT respond.
-->no change to click count or shown count. The images should only change when the user clicks inside the <div> containing the images.

2. In the live-server rendition of the page, click through a bunch of times. Pause each time to check that each of the three displayed images is unique.

3. Use console.log() to monitor the increment on Nclicks. It should add 1 to the Nclicks property on the Image object, THEN show the next set of 3 images.

4. Use console.log() to monitor how frequently each image is shown. See if all 10 images are shown with about the same frequency.

5. Use console.log() to track how many votes have been cast in that session. On vote 16, the user should be able to see (and click) a button to show results or proceed to a new round. If the user clicks Show Results, that button should hide itself.
