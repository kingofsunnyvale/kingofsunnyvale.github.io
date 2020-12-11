/*Theme.js is for configuring your theme: choosing animations, and stuff like that.*/
window.addEventListener('load', function () {
	document.getElementById("deaths").innerHTML = "" + deaths;
	
	setTimeout(
    function() {
      var el = document.getElementById('locate');
	  el.classList.add("modify");
    }, 5000*(deaths/597681));
})

function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); 
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}

var request = httpGet('https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true');
var deaths = JSON.parse(request).totalDeaths;


