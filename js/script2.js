//get parameters out of the queryString, querystring is a part of the url that is after the question mark


//URL has querystring if there is a question

//variable called this: 
const queryString = document.location.search; //.search because the querystrin is often used in search forms
const params = new URLSearchParams(queryString);
console.log(queryString);
console.log(params);

const name = params.get("name");

console.log(name);



//document.location == Location http://127.0.0.1:5500/

//write this in the url for it al to correspond:: http://127.0.0.1:5500/?id=1234&name=ben
//correspond:: To be in agreement, harmony, or conformity.To be similar or equivalent in character, quantity, origin, structure, or function.