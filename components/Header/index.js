// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //create elements 
  let headerDiv = document.createElement("div");
  let dateHeader = document.createElement("span");
  let titleHeader = document.createElement("h1");
  let tempHeader = document.createElement("span");

  //structure 
  headerDiv.appendChild(dateHeader);
  headerDiv.appendChild(titleHeader);
  headerDiv.appendChild(tempHeader);
  
  //content 
  dateHeader.textContent = "SMARCH 28, 2019";
  titleHeader.textContent = "Lambda Times";
  tempHeader.textContent = "98 degrees"; 
  //style   
  headerDiv.classList.add("header");
  dateHeader.classList.add("date");
  tempHeader.classList.add("temp");

  return headerDiv; 
}

let headContainer = document.querySelector(".header-container");

// add to the DOM 
headContainer.appendChild(Header());

