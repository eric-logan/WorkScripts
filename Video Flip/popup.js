console.log("here");

document.addEventListener("DOMContentLoaded", function() {
  // Make sure the button element exists
  var button = document.getElementById("button");
  // Attach the event listener to the button
  button.addEventListener("click", function() {
    try {
      console.log('clicked');
      console.log(button.innerText);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: button.innerText}, function(response) {
          console.log(response.message);
          if(button.innerText == "Flip Camera!"){
            button.innerText = "Unflip Camera!";
          }
          else{
            button.innerText = "Flip Camera!";
          }
        });
      });
    } catch(err) {
      console.log(err);
    }
  });
});