// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);






function validateForm() {
  // Create the person object
  const person = {
      name: document.getElementById("rsvp-name").value,
      hometown: document.getElementById("rsvp-home-state").value,
      email: document.getElementById("rsvp-email").value,
  };

  // Validate using the object properties
  if (!person.name || !person.hometown || !person.email) {
      alert("Please fill out all fields before submitting!");
      return null; // Return null if validation fails
  }

  return person; // Return the person object if validation succeeds
}



function addParticipant(person) {
  // Create a new element to display the RSVP details
  const participantElement = document.createElement("p");
  participantElement.textContent = `🎟️ ${person.name} from ${person.hometown} has RSVP'd`;

  // Append the new participant element to the RSVP participants div
  const participantsDiv = document.querySelector(".rsvp-participants");
  participantsDiv.appendChild(participantElement);

  // Clear input fields
  document.getElementById("rsvp-name").value = "";
  document.getElementById("rsvp-home-state").value = "";
  document.getElementById("rsvp-email").value = "";
}


let rotateFactor = 0;
let modalImage = null;

const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  if (modalImage) {
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  }
};

const submitButton = document.getElementById("submit-rsvp");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const person = validateForm();
    if (person) {
        addParticipant(person);
        toggleModal(person);
    }
});


const toggleModal = (person) => {
  // Select the modal elements
  const modal = document.getElementById("success-modal");
  const modalContent = modal.querySelector(".modal-container");

  // Update modal display to flex
  modal.style.display = "flex";


  modalContent.innerHTML = `
        <div class ="modal-item">
            <h3>Fire up your terminal, tighten those endpoints, and get ready to deploy good vibes with the best in backend!</h3>
            <p>Thanks for RSVPing, ${person.name}! We can't wait to see you at the Backend Builders Summit!</p>
        </div>
        <div class ="modal-item">
            <img alt="Image description" class="imagetwo" src="img/rsvpcopy.png"/>
        </div>
    `;
  
    modalImage = modalContent.querySelector(".imagetwo");

    // Start animation
    let intervalId = setInterval(animateImage, 500);
  

  // Set modal timeout to 5 seconds (hide modal automatically)
  setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
  }, 5000); // Modal disappears after 5 seconds
};


