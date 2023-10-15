import BandSiteAPI from './band-site-api.js';

const bandSiteAPI = new BandSiteAPI("d7c86449-e347-4825-8110-fea6f51d2b5a");
const mainTag = document.getElementById("mainContent");

// SHOWS HEADER CREATION // 
const header = document.createElement("h2");
header.textContent = "Shows";
header.classList.add("showData__header");
mainTag.appendChild(header);
// SHOWS HEADER CREATION ENDS // 


// INVISIBLE DIV CREATION // 
const newDiv = document.createElement("div");
newDiv.classList.add("invisble-div");
const paragraph1 = document.createElement("p");
paragraph1.textContent = "Date";
paragraph1.classList.add("invisble-div__date");
const paragraph2 = document.createElement("p");
paragraph2.textContent = "Venue";
paragraph2.classList.add("invisble-div__venue");
const paragraph3 = document.createElement("p");
paragraph3.textContent = "Location";
paragraph3.classList.add("invisble-div__location");
newDiv.appendChild(paragraph1);
newDiv.appendChild(paragraph2);
newDiv.appendChild(paragraph3);
mainTag.insertBefore(newDiv, header.nextSibling);
// INVISIBLE DIV CREATION ENDS // 



// FORMAT UNIX TIME TO DATESTRING // 
function formatDateWithWeekday(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}
// FORMAT UNIX TIME TO DATESTRING // 




// CREATE NEW DIV FOR EACH SHOW // 
function createShowElement(show, index) {
  const container = document.createElement("div");
  container.id = `showData-container-${index}`;

  const divElement1 = document.createElement("div");
  divElement1.classList.add("showDataOne");

  const paragraphOne = document.createElement("p");
  paragraphOne.textContent = "Date";
  paragraphOne.classList.add("showData--date");

  const paragraphTwo = document.createElement("p");
  const formattedDate = formatDateWithWeekday(show.date);
  paragraphTwo.textContent = formattedDate;
  paragraphTwo.classList.add("showData--date-exact");

  divElement1.appendChild(paragraphOne);
  divElement1.appendChild(paragraphTwo);
  container.appendChild(divElement1);

  const divElement2 = document.createElement("div");
  divElement2.classList.add("showDataTwo");

  const placeGeneral = document.createElement("p");
  placeGeneral.textContent = "Venue";
  placeGeneral.classList.add("showData--place");
  divElement2.appendChild(placeGeneral);

  const paragraphThree = document.createElement("p");
  paragraphThree.textContent = show.place;
  paragraphThree.classList.add("showData--place-exact");
  divElement2.appendChild(paragraphThree);

  const locationText = document.createElement("p");
  locationText.textContent = "Location";
  locationText.classList.add("showData--location-constant");
  divElement2.appendChild(locationText);

  const paragraphFour = document.createElement("p");
  paragraphFour.textContent = show.location;
  paragraphFour.classList.add("showData--location-exact");
  divElement2.appendChild(paragraphFour);

  container.appendChild(divElement2);

  const divElement3 = document.createElement("div");
  divElement3.classList.add("showDataThree");

  const buyTicketsParagraph = document.createElement("p");
  buyTicketsParagraph.textContent = "Buy Tickets";
  buyTicketsParagraph.classList.add("buy-tickets");
  divElement3.appendChild(buyTicketsParagraph);

  container.appendChild(divElement3);

  return container;
}
// CREATE NEW DIV FOR EACH SHOW ENDS // 


// ADD SHOWS TO END OFF ARRAY IN API // 

function appendShowElements(showData) {
  for (let i = 0; i < showData.length; i++) {
    const show = showData[i];
    const showElement = createShowElement(show, i);
    mainTag.appendChild(showElement);
  }
}
// END OF ADD SHOWS TO END OFF ARRAY IN API // 



// RECIEVE SHOW DATA // 

bandSiteAPI.getShows()
  .then(showData => {
    appendShowElements(showData);
    console.log(showData)
  })
  .catch(error => {
    console.error("Error fetching data from the API: ", error);
  });
  
  
  // END OF RECIEVE SHOW DATA // 
