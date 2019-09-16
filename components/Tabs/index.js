// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
async function TopicsRequest() {
  try {
  let tabTopics = await axios.get('https://lambda-times-backend.herokuapp.com/topics');
  //console.log(typeof(results));
  //console.log(link);
  } catch (err) {
    console.error(err);
  }

  tabTopics =  topics.data.topics;
  
  tabTopics.forEach(topic => topicsDivArea.appendChild(makeTabs(link)));

}
//console.log(TopicsRequest());
let topicsDivArea = document.querySelector(".topics");

TopicsRequest();


function makeTabs (topicSubject) {
  let subjectTab = document.createElement("div");

  subjectTab.classList.add('tab');

  subjectTab.textContent = topicSubject;

  return subjectTab; 
}

