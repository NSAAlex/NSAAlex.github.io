// Vacation class - holds all the information for one vacation
class Vacation {
  constructor(title, type, description, thingsToDo, image, mapSrc) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.thingsToDo = thingsToDo;
    this.image = image;
    this.mapSrc = mapSrc;
  }

  // Returns a section element that gets added to the gallery
  getCard() {
    let card = document.createElement("section");
    card.classList.add("card");

    let title = document.createElement("h3");
    title.textContent = this.title;

    let type = document.createElement("p");
    type.textContent = this.type + " Vacation";

    let header = document.createElement("div");
    header.classList.add("card-header");
    header.appendChild(title);
    header.appendChild(type);

    let img = document.createElement("img");
    img.src = "images/" + this.image;
    img.alt = this.title;

    card.appendChild(header);
    card.appendChild(img);

    // when the card is clicked, show the popup for this vacation
    card.addEventListener("click", () => {
      showModal(this);
    });

    return card;
  }

  // Returns the html for the text part of the popup
  getModalHtml() {
    let html = "<h2>" + this.title + "</h2>";
    html += "<p><b>Type:</b> " + this.type + "</p>";
    html += "<p><b>Description:</b> " + this.description + "</p>";
    html += "<p><b>Things To Do:</b> " + this.thingsToDo + "</p>";
    return html;
  }
}

// Helper function - builds the google map link for a place
function getMapSrc(place) {
  return "https://maps.google.com/maps?q=" + encodeURIComponent(place) + "&t=k&z=11&output=embed";
}

// Array of vacations
let vacations = [
  new Vacation(
    "Ashville",
    "Mountain",
    "An artsy mountain city surrounded by the Blue Ridge Mountains, known for breweries and music.",
    "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore the downtown art scene.",
    "ashville.jpg",
    getMapSrc("Asheville, NC")
  ),
  new Vacation(
    "Boone",
    "Mountain",
    "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
    "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
    "boone.jpg",
    getMapSrc("Boone, NC")
  ),
  new Vacation(
    "Hot Springs",
    "Mountain",
    "A small Appalachian Trail town on the French Broad River, famous for its natural mineral springs.",
    "Soak in the mineral spa, hike part of the Appalachian Trail, go whitewater rafting.",
    "hotsprings.jpg",
    getMapSrc("Hot Springs, NC")
  ),
  new Vacation(
    "Table Rock",
    "Mountain",
    "A dramatic rock formation in Linville Gorge with sweeping views of the surrounding wilderness.",
    "Hike to the summit, go rock climbing, watch the sunrise.",
    "tablerock.jpg",
    getMapSrc("Table Rock Mountain, NC")
  ),
  new Vacation(
    "Sunset Beach",
    "Beach",
    "A quiet, family-friendly island with wide beaches and a classic fishing pier.",
    "Walk the pier at sunset, kayak the marsh, search for shells at low tide.",
    "sunsetbeach.jpg",
    getMapSrc("Sunset Beach, NC")
  ),
  new Vacation(
    "Edisto Beach",
    "Beach",
    "A laid-back South Carolina sea island with uncrowded beaches and lots of wildlife.",
    "Fish in the surf, explore Edisto Beach State Park, spot dolphins and sea turtles.",
    "edisto.jpg",
    getMapSrc("Edisto Beach, SC")
  ),
  new Vacation(
    "Oak Island",
    "Beach",
    "A relaxed coastal town with long stretches of sand and warm Atlantic water.",
    "Visit the Oak Island Lighthouse, fish from the pier, bike the beach roads.",
    "oakisland.jpg",
    getMapSrc("Oak Island, NC")
  ),
  new Vacation(
    "Pawleys Island",
    "Beach",
    "One of the oldest summer resorts on the East Coast, famous for hammocks and sand dunes.",
    "Relax in a hammock, explore Brookgreen Gardens, crab in the tidal creeks.",
    "pawleys.jpg",
    getMapSrc("Pawleys Island, SC")
  )
];

// Get the elements we need from the page
let gallery = document.getElementById("gallery");
let modal = document.getElementById("vacation-modal");
let modalMap = document.getElementById("modal-map");
let modalInfo = document.getElementById("modal-info");
let closeButton = document.getElementById("modal-close");

// Loops through the vacations and adds each card to the gallery
function loadGallery() {
  for (let i = 0; i < vacations.length; i++) {
    gallery.appendChild(vacations[i].getCard());
  }
}

// Fills in the popup with a vacation's data and shows it
function showModal(vacation) {
  modalInfo.innerHTML = vacation.getModalHtml();
  modalMap.src = vacation.mapSrc;
  modal.style.display = "block";
}

// Hides the popup
function closeModal() {
  modal.style.display = "none";
  modalMap.src = "";
}

// Close when the x is clicked
closeButton.addEventListener("click", closeModal);

// Close when clicking outside the popup box
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

loadGallery();