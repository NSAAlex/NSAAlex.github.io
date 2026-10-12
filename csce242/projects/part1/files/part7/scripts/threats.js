// threats.js - JSON FILE PARSING (used on cyber-threats.html)
// Reads threats.json from GitHub, loops through the list, and builds
// one card for each threat.

// The link to my json file on GitHub
const JSON_URL = "https://nsaalex.github.io/csce242/threats.json";

// Get the list of threats from the json file
const getThreats = async () => {
  try {
    const response = await fetch(JSON_URL);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Small helper: makes an element, puts text in it, and gives it a class
const makeElement = (tag, text, className) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  if (className) {
    element.className = className;
  }
  return element;
};

// Build the card for ONE threat
const getThreatCard = (threat) => {
  const card = document.createElement("div");
  card.className = "info-card";

  // picture
  const img = document.createElement("img");
  img.src = threat.img_name;
  img.alt = threat.name + " illustration";
  img.className = "card-img";
  card.append(img);

  // name, then severity + category
  card.append(makeElement("h3", threat.name));

  const meta = makeElement("p", "", "threat-meta");
  meta.append(makeElement("span", threat.severity, "badge severity-" + threat.severity.toLowerCase()));
  meta.append(makeElement("span", threat.category));
  card.append(meta);

  // short description
  card.append(makeElement("p", threat.description));

  // extra text that shows when "Show more" is clicked
  const more = makeElement("div", "", "card-more");
  more.append(makeElement("p", "<strong>How it works:</strong> " + threat.how_it_works));
  more.append(makeElement("p", "<strong>How we defend:</strong> " + threat.how_we_defend));
  more.append(makeElement("p", "<strong>Common target:</strong> " + threat.common_target));
  card.append(more);

  // button (toggleCard is in script.js)
  const button = makeElement("button", "Show more", "card-link");
  button.type = "button";
  button.onclick = toggleCard;
  card.append(button);

  return card;
};

// Show all the threats on the page
const showThreats = async () => {
  const threatList = document.getElementById("threat-list");
  const threats = await getThreats();

  threatList.innerHTML = "";

  if (threats == null) {
    threatList.innerHTML = "<p class='load-error'>Sorry, the threat list could not be loaded right now.</p>";
    return;
  }

  threats.forEach((threat) => {
    threatList.append(getThreatCard(threat));
  });
};

showThreats();