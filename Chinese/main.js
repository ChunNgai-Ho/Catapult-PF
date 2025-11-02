let aboutMeButton = document.querySelector(".about-me-button");
let aboutMeSection = document.querySelector(".about-me");

// // // Swipe to change my picture



// changing background

const backgrounds = [  // Store my Image //
  "https://images.unsplash.com/photo-1533029030467-904d7bbd602b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  "https://images.squarespace-cdn.com/content/v1/56e057cda3360c23799f9ec5/a60163ae-22e3-4f77-8ebf-10222a4189f1/skyscrapers-gfc00eba57_1920.jpg"
];
let bgIndex = 0;  // Keep track of which background you're on //

document.body.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;

const bgBtn = document.getElementById("change-background-btn");  // Find the background-change button in the HTML//
if(bgBtn){
  bgBtn.addEventListener("click", () => {  // Click event //
    bgIndex = (bgIndex + 1) % backgrounds.length;  // Update the background//
    document.body.style.backgroundImage = `url('${backgrounds[bgIndex]}')`; // sets the new background //
    
    bgBtn.textContent = bgIndex === 0 ? "變成黑夜 🌃" : "變成白天 🏙️";
  });
}





