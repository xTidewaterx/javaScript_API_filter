+

I have made a for lopp that gives me the same, from the top each click,
there is something about the querystring

I reaached the array with this:: 

    const details = result.rates[i].asset_id_quote;

    now in the function createHtml I just wrote details and I got back the ticker, like this::
    function createHtml (details) {

    detailContainer.innerHTML = `
                                 <h1> ${details}</h1> 
                             `;
}

tha page has to update to reach the different indexes, now it is the same index, the id stays the same i, we need soemthing to interfere and make the same changes our logs do, we found a loop that gives us 10 asset_id_quote



we need to find a denotation that represents something that is
in all of the containers, like name, different name in each, then add that into the querystring of the URL, id, we can add that, and we can add name, use something that is different per, each array

span class html, generic inline container for phteasing content,
no inhernet prepresentation, it can be used to group elements for srtyling ppurtposes, span is inline element,
but div is block-level element, span is an inline element

trash
+
adding plus id will interfere with the fetch as they key will be different,
the id must be mentioned somwehre where it resonnates with the api you are fetching
the api must have something in the jSOn called id, the  + id communicates with the json, and the url, find the connections, the initial
const constName = await fetch(url);
const constName = await response.json();
id is linked to all of this somehow, we're jsut adding it onto our url like a querystring, something from the json goes into 
the url as a querystring when we clikc the link to the details-page found on the index.html-page, index.html-page has some javascript, the innerhtml is the details-page-link, like this::

for ( let i = 1; i<= amount; i++) {
        listContainer.innerHTML += '<a class="item" href="filterATagsDetails.html?id=${i}">${i}</a>'; //since the id has to come from here this is the problem, the code needs a fetch
    }
}

in our index.html we use a connection through our hjavascript, when we clikc the boxers in index.html we experience a connection through javascript, with our details-page, the question mark indicates the querystring, the querystring is id that equals the dollarsign to indicate active javascript json elements, that is com,batted by the i variable, enclosed in curly brackets to signal it's active above others inclusion, then all is wrapped in an anchor tag, with button we have anchor tag onclick. the link goes through the javascript, all the fetches are through the details-page javascript, the index.html gets all of it by using the link with the included id-add ons in the innerhtml call, the index.html is gets all of it conquerings from the details-page fetch that has response await fetch(url nad const result await response.json) and id is in json
JSON API is a text-based data exchange format, Jsons is javaScript object notation, an encoding shceme that is deisgned to eliminate the need for ad-hoc code for each application to communicate with xservers that communicate in a defined wat. JSON API module exposes implementation fopr data stores and data structures, syuch as entity types, bundlesm, and fields ... link:: https://www.valuebound.com/resources/blog/overview-of-json-api

JSON (Javascript object notation) is the most widely used data format ofr data interchange on the web, 

. This data interchange can happen between two computer applications at different geographical locations or running within the same machine.

The good thing is that JSON is a human-readable as well as a machine-readable format. So while applications/libraries can parse the JSON documents – humans can also look at the data and derive the meaning from it.

All modern programming languages (e.g., Java, JavaScript, Ruby, C#, PHP, Python, and Groovy) and application platforms provide excellent support for producing (serializing) and consuming (deserializing) JSON data.

link:: https://restfulapi.net/introduction-to-json/¨

we have a data intercahnge, from their we can create qquerystrings that we add onto the link found on antoher, page, our link, on another page, that leads to our page with the specified information found by the index number that specifies which part of the data interchange the machine wants
we have many indexes that loop, they are all boxes, choose a specific box, we have the object from one of the properties of the box, then we add tha information into the ulr as a querystring, this happens because of how the link is tructured in the javascript, connected to variables connected to the excact html-page and we have this link going to our inerhtml, link itself inside of anchor tagsss

we've called the api, using const url
with const response await fetch
and const result await reponse.json();
console.log(result);
what is ID, here between index and details we have a link that when pressed on the index-page leads us to
the details page with an added ID depending on the index number the link you click is associated with

this id represents the information given from the fetched json in the javascript url call, the json gives us an id
we can pass other things in the url, like name
trash STOP












//get parameters out of the queryString, querystring is a part of the url that is after the question mark

what is a querystring:: 


What Does Query String Mean?

A query string is the portion of a URL where data is passed to a web application and/or back-end database. The reason we need query strings is that the HTTP protocol is stateless by design. For a website to be anything more than a brochure, you need to maintain state (store data). There are a number of ways to do this: On most web servers, you can use something like session state server-side. On the client, you can store via cookies. Or in the URL, you can store data via a query string.

queryString STOP

how can we retrieve parameter values (essentially variables) from the query string using code like this:: 

// get the query string
const queryString = document.location.search;

// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the query string
const id = params.get("id");


arrow functions 

function logMessage (message) {
    console.log(message);
}

like this:
const logMessage = (message) => console.log(message);

difference being we avoid using the function keyword and use the => charcters instead, hence their name


trash::

this takes you to a certain place on the page:: in this case the top::     <a href="#top">Top of Page</a>
javascript form validation

manuy input names, all have different id's

inpout name email

input name firstName

another example of error with same name different id


div class = "form-error" id =" emailError"
div class = "form-error" id = "lastNameError"
div class = "form-error" id = "firstNameError"



trash::

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// what does these to do together?? queryString after a question mark in the url. new URLSearchParams, we are creating 
//something new for the url new URLSearchParams(queryString) --- const id = params.get("id"); ----here it is , all three connected

//get the id fgrom the queryString
const id = params.get("id");

//if the id is null (doesn't exist) redirect to the home page

if ( id === null) {
    location.href = "/";
}

// create the url by adding the id to the end

const url = "https://breakingbadapi.com/api/characters/" + id;

const idContainer = document.querySelector(".id"); // refers to this from the HTML:: <span class="id">
const detailContainer = document.querySelector(".details"); // refers to this from the HTML::  <div class="details">

// display the id in a different element ot the rest of the properties

idContainer.innerHTML = id;

async function fetchCharacter() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const details = result[0];
        //pass the json to a function that will create the html
        createHtml(details);
     } catch (error) {
        console.log(error);
        detailContainer.innnerHTML = error;
    }
}

fetchCharacter();

function createHtml (details) {
    detailContainer.innerHTML = `
                                 <h1> ${details.name}</h1> 
                                 <div>Occupation: <b>${details.occupation[0]}</b></div>`;
}
