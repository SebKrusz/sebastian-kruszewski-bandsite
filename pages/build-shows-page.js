const showData = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

const mainTag = document.getElementById("mainContent");
const header = document.createElement("h2");
header.textContent = "Shows";
header.classList.add("showData__header");
mainTag.appendChild(header);

const numberOfRepeats = 6;
for (let i = 0; i < numberOfRepeats; i++) {
    const container = document.createElement("div");
    container.id = "showData-container";

    const divElement1 = document.createElement("div");
    divElement1.classList.add("showDataOne");

    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");
    paragraphOne.textContent = "Date";
    paragraphTwo.textContent = showData[i].date;
    paragraphOne.classList.add("showData--date");
    paragraphTwo.classList.add("showData--date-exact");
    divElement1.appendChild(paragraphOne);
    divElement1.appendChild(paragraphTwo);

    container.appendChild(divElement1);

    const divElement2 = document.createElement("div");
    divElement2.classList.add("showDataTwo");

    const venueGeneral = document.createElement("p");
    venueGeneral.textContent = "Venue";
    venueGeneral.classList.add("showData--venue");
    divElement2.appendChild(venueGeneral);

    const paragraphThree = document.createElement("p");
    const paragraphFour = document.createElement("p");
    paragraphThree.textContent = showData[i].venue;
    paragraphThree.classList.add("showData--venue-exact");
    divElement2.appendChild(paragraphThree);

    const LocationText = document.createElement("p");
    LocationText.textContent = "Location";
    LocationText.classList.add("showData--location-constant");
    divElement2.appendChild(LocationText);
    paragraphFour.textContent = showData[i].location;
    paragraphFour.classList.add("showData--location-general");
    divElement2.appendChild(paragraphFour);

    container.appendChild(divElement2);

    const divElement3 = document.createElement("div");
    divElement3.classList.add("showDataThree");

    const buyTicketsParagraph = document.createElement("p");
    buyTicketsParagraph.textContent = "Buy Tickets";
    buyTicketsParagraph.classList.add("buy-tickets");
    divElement3.appendChild(buyTicketsParagraph);
    container.appendChild(divElement3);

    mainTag.appendChild(container);
}