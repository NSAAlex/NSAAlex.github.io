// Associative arrays (objects): key = destination name, value = google maps embed URL
const Mountains = {
  "Asheville": "https://www.google.com/maps?q=Asheville,+North+Carolina&output=embed",
  "Boone": "https://www.google.com/maps?q=Boone,+North+Carolina&output=embed",
  "Hot Springs": "https://www.google.com/maps?q=Hot+Springs,+North+Carolina&output=embed",
  "Table Rock": "https://www.google.com/maps?q=Table+Rock,+South+Carolina&output=embed"
};

const Beaches = {
  "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach,+South+Carolina&output=embed",
  "Hilton Head": "https://www.google.com/maps?q=Hilton+Head+Island,+South+Carolina&output=embed",
  "Folly Beach": "https://www.google.com/maps?q=Folly+Beach,+South+Carolina&output=embed",
  "Tybee Island": "https://www.google.com/maps?q=Tybee+Island,+Georgia&output=embed"
};

const destinationTypeSelect = document.getElementById("destinationType");
const destinationList = document.getElementById("destinationList");
const mapContainer = document.getElementById("mapContainer");
const mapFrame = document.getElementById("mapFrame");

const getArrayForType = (type) => {
  if (type === "Mountains") return Mountains;
  if (type === "Beaches") return Beaches;
  return null;
};

const renderDestinations = () => {
  const type = destinationTypeSelect.value;
  destinationList.innerHTML = "";
  mapContainer.style.display = "none";
  mapFrame.src = "";

  const destinations = getArrayForType(type);
  if (!destinations) return;

  Object.keys(destinations).forEach((name) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = name;
    link.addEventListener("click", () => showMap(destinations[name]));
    li.appendChild(link);
    destinationList.appendChild(li);
  });
};

const showMap = (mapUrl) => {
  mapFrame.src = mapUrl;
  mapContainer.style.display = "block";
};

destinationTypeSelect.addEventListener("change", renderDestinations);