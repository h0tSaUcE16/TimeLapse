
const gif = document.getElementById("gif");

const images = ['./chiken.gif', './coffee.gif', './himym.gif', './jimC.gif', './really.gif', './parksAndRec.gif'];

let index = Math.floor(Math.random() * images.length);

gif.src = images[index];


document.addEventListener('DOMContentLoaded', function() {
  const checkPageButton = document.getElementById('closePage');
  const timeData = document.getElementById('timeData');
  checkPageButton.addEventListener('click', function() {

    // const test = function () {
    //   console.log('hi');
    // }

    // let id;
   
   chrome.tabs.getSelected(null, function(tab) {
      
      setTimeout(chrome.tabs.remove, timeData.value, tab.id);
      // chrome.tabs.executeScript(tab.id, console.log("hello"));
      // chrome.tabs.executeScript(tabs.id, {code:`setTimeout(window.close.bind(this),${timeData.value})`}, function(func) { func();});
      // console.log(tab.id);
      // id = tab.id;

    });

    // console.log(id);

    // chrome.tabs.executeScript({code:`setTimeout(window.close,${timeData.value})`});

    // chrome.tabs.executeScript(id, test);
    // window.onabort = function () {
    //   chrome.tabs.getSelected(null, function(tab) {
      
    //     setTimeout(chrome.tabs.remove, timeData.value, tab.id);
        
    //   });
    // }
    // console.log(window);
  }, false);
}, false);
