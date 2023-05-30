var listItems = document.querySelectorAll("#stationList li");
let stationName = document.querySelector('.station-name');
// Add click event listeners to each list item
listItems.forEach(function(item, index) {
  item.addEventListener("click", function() {
    if(index === 0){
        stationName.textContent = "Toutes stations n'py"
    }else {
        stationName.textContent = item.textContent
    }
    // Remove background color from all list items
    listItems.forEach(function(li) {
      li.classList.remove("active");
    })
    // Add background color to the clicked list item
    item.classList.add("active");

    // Get the selected station from the data attribute
    var station = item.getAttribute("data-station");

    // Hide all station divs
    var stationDivs = document.querySelectorAll(".station-info");
    stationDivs.forEach(function(div) {
      div.style.display = "none";
    });

    // Show the div for the selected station
    let selectedDiv = document.getElementById(station);
    selectedDiv.style.display = "flex";
  });

  // Add the active class to the first list item initially
  if (index === 0) {
    item.classList.add("active");
    var itemAtt = item.getAttribute("data-station");
    selectedDiv = document.getElementById(itemAtt);
    selectedDiv.style.display = "flex";
  }
});





let widget = document.getElementById('widget-popup')
let openWidget = document.querySelector('.open-widget')

openWidget.addEventListener('click', () => {
    widget.classList.add('active');
})

let closeWidget = document.querySelector('.close-widget');
closeWidget.addEventListener('click', () => {
    widget.classList.remove('active');
})