console.log("rotating image");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "Flip Camera!"){
      const rotated = document.getElementsByClassName("p2hjYe TPpRNe")[0];
      rotated.style.transform = 'scaleX(-1) rotate(180deg)';
      sendResponse({message: "content received message"});
    }
    else{
      const rotated = document.getElementsByClassName("p2hjYe TPpRNe")[0];
      rotated.style.transform = 'scaleX(1) rotate(360deg)';
      sendResponse({message: "content received message"});
    }
  }
);