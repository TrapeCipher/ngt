document.addEventListener("DOMContentLoaded", function () {
  const line1Text = "let your profits speak";
  const line2Text = "louder than your words.";

  const line1Element = document.querySelector(".line1");
  const line2Element = document.querySelector(".line2");

  let line1Index = 0;
  let line2Index = 0;

  function typeLine1() {
      if (line1Index < line1Text.length) {
          line1Element.textContent += line1Text[line1Index];
          line1Index++;
          setTimeout(typeLine1, 80);
      } else {
          setTimeout(typeLine2, 1000); 
      }
  }

  function typeLine2() {
      if (line2Index < line2Text.length) {
          line2Element.textContent += line2Text[line2Index];
          line2Index++;
          setTimeout(typeLine2, 80); 
      }
  }


  typeLine1();

  const exploreButton = document.querySelector(".button-explore");
  exploreButton.addEventListener("click", function () {
      const secondSection = document.getElementById("second-section");
      smoothScrollTo(secondSection, 2000);
  });

  function smoothScrollTo(target, duration) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOut(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function easeInOut(t, b, c, d) {
          let ts = (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
          return ts;
      }

      requestAnimationFrame(animation);
  }
});