// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
    // Get the name of the clicked club -- find club methods
       const clickedClubCard = element;
       if (clickedClubCard){
       const clickedClubName = clickedClubCard.querySelector('h2').textContent;
        // Find the selected club by its name   
        const selectedClub = clubData.find( club => club.name === clickedClubName) ;    
        // Display details of the selected club
        if  (selectedClub){
        displayClubDetails(selectedClub);
           }
         }     
    } 


// Display football club details
function displayClubDetails(club) { //-- find methods 
    // Write your code here for task2
        // Create a club details HTML using template strings
    const clubDetailsHTML = `
    <button onclick="window.location.reload();">Back</button>
    <h2> ${club.name} </h2>
    <img src="${club.image}">
    <p> League: ${club.league} </p>
    <p> City: ${club.city} </p>
    <p> Stadium: ${club.stadium} </p>
    <p> Description: ${club.description} </p>
    <button onclick ="viewClubPlayers('${club.name}')"> View Players </button> 
    `;
    // Set the club details HTML in the clubDetailsContainer
    clubDetailsContainer.innerHTML = clubDetailsHTML; 
} 


// Function to view club players
function viewClubPlayers(clubName) {
    // Find the selected club by its name
    const selectedClub = clubData.find(club => club.name === clubName);
    console.log(selectedClub.name)
    // Write your code here for task3
    // Generate HTML for the list of players and display it
       let clubPlayersHTML = `
       <h2> ${selectedClub.name} </h2>
        `;
    // Iterate over selectedClub object's players property
    for (var player of selectedClub.players){
        var playerDetailsElement = `
        <p><b>Name: </b>${player.name}</p>
        <p><b>Position: </b>${player.position}</p>
        <p><b>Goals: </b>${player.goals}</p>
        <p><b>Assists: </b>${player.assists}</p>
        <hr>
        `;
        console.log(playerDetailsElement)
        clubPlayersHTML += `${playerDetailsElement}`;
        console.log(clubPlayersHTML);
    }
    // Create a string joining the information of all the players of the selected Club 

    // Display the information by setting the HTML in the clubDetailsContainer
    clubDetailsContainer.innerHTML = clubPlayersHTML + `<p><button onclick="window.location.reload();">Back</button></p>`;

} 

// Handle search input and filter clubs
function handleSearchInput() { 
    // Write your code here for task4 // include methode 
    // Get the search term and convert it to lowercase for case-insensitive search
    const searchTerm = searchInput.value.toLocaleLowerCase();
    const filterClubs = clubData.filter(club =>{
    // Create a string containing club details for searching
    const clubDataString = `${club.name} ${club.city} ${club.league}`.toLocaleLowerCase();
    return clubDataString.includes(searchTerm);
     });
    // Check if the search term is found in the club data string
    // Display the filtered clubs
    // displayclub details(club)
    displayClubs(filterClubs);
}