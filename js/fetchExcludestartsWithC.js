const url ="https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultsContainer = document.querySelector(".results");

async function fetchTeams() {
    try {

        const response = await fetch (url);

        const json = await response.json();

        console.log(json);

        const teams = json;

        //this is where we connect with our querySelector on top, the HTML JavaScript connection
        resultsContainer.innerHTML = "";

        for (let i = 0; i <teams.length; i++)
                 {

            //we only want to display a maximum of 15 teams
            //there will be less than 15 teams if any team names begin with "c"
            // use break to leave the loop
            if ( i === 15) {
                break;
            }

            const teamName = teams [i].teamName;
            const city = teams [i].location;

            // we are checking for small "c" and big "C"

            if (teamName.startsWith("c") || teamName.startsWith("C")) {
                continue;
            }
            //instead of checking for both small "c" and bic "C" we can make the teamName lowercase and just check for "c"
            // if (teamName.toLowerCase().startsWith("c")) {
            // continue;
            // }

            //if function, if (teamName.startsWith("c")) {continue;}  use break and continue

            resultsContainer.innerHTML += `<div class="card">
                                                  <h4>${teamName}<h4>
                                                  <p> ${city}</p>
                                            </div>`;
            }
        } catch (error) {
            console.log(error);
            resultsContainer.innerHTML = message ("error", error);
        }
    }

    //call the function
    //without this nothing will happen
    fetchTeams();
