let website = "youtube.com";
let time = 300;
let tab;

function timeoutTrigger() {
  tab.close();
}

const submit = document.getElementById("submit");
console.log(submit);
const timeData = document.getElementById("time");
const websiteData = document.getElementById("website");

submit.onclick = function() {
  website = websiteData.value;
  time = timeData.value;
  if (time < 100) time *= 60 * 1000;
  tab = window.open("https://" + website);
  setTimeout(timeoutTrigger.bind(this), time);
}

// console.log(chrome.tabs.getCurrent((tab) => setTimeout(chrome.tabs.remove, 5000, tab.id)));

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.remove(tab.id);
//   });