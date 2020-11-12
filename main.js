// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// On Load
document.addEventListener("DOMContentLoaded", function()  {
  toggleError()
  findHeartButtons()
})

// Like Button Event Listener
function findHeartButtons() {
  const heartButtons = document.querySelectorAll('.like-glyph')
  heartButtons.forEach((heartButton) => {
    heartButton.addEventListener('click', function(e) {
      mimicServerCall()
      .then(function(response) {
        console.log(response)
        toggleHeart(heartButton)
      })
      .catch(error => {
        toggleError(error)
      })
    })
  })
}

// Functions

function toggleHeart(heartButton) {
  if (heartButton.innerText === EMPTY_HEART) {
    heartButton.innerText = FULL_HEART
    heartButton.className = 'activated-heart'
  } else {
    heartButton.innerText = EMPTY_HEART
  }
}
// needed to pass test, otherwise would be in toggleError function
const errorDiv = document.querySelector('#modal')
errorDiv.className = 'hidden'

function toggleError(error) {
  if (error) {
    errorDiv.textContent = error
    errorDiv.className = 'visible'
    setTimeout(() => { errorDiv.className = 'hidden'; }, 5000);
  }
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
