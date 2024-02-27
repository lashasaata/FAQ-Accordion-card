const divs = document.getElementsByClassName("questionBox");
let divsArray = Array.from(divs);
const headers = document.querySelectorAll("h3");
let headersArray = Array.from(headers);
const arrows = document.getElementsByClassName("arrow");
let arrowsArray = Array.from(arrows);
const paragraps = document.querySelectorAll("p");
let paragrapsArray = Array.from(paragraps);
// index is 5 at the start-end, because we dont want index and activeIndex would be same to close div;
let index = 5;
// uses index to open and cloce divs; also has open function on img and text;
divsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    let exactElement = event.target;
    let activeIndex = headersArray.indexOf(exactElement);
    showInfo(activeIndex);
  });
});
arrowsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    let exactElement = event.target;
    let activeIndex = arrowsArray.indexOf(exactElement);
    showInfo(activeIndex);
  });
});
divsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    let exactElement = event.target;
    let activeIndex = divsArray.indexOf(exactElement);
    showInfo(activeIndex);
  });
});

function showInfo(activeIndex) {
  if (index !== activeIndex) {
    headersArray[activeIndex].style.color = "#1E1F36";
    headersArray[activeIndex].style.fontWeight = "700";
    arrowsArray[activeIndex].style.transform = "rotate(180deg)";
    paragrapsArray[activeIndex].style.display = "block";
    divsArray[activeIndex].style.height = "90px";
    if (index >= 0 && index <= 4) {
      headersArray[index].style.color = "#4b4c5f";
      headersArray[index].style.fontWeight = "400";
      arrowsArray[index].style.transform = "rotate(0deg)";
      paragrapsArray[index].style.display = "none";
      divsArray[index].style.height = "35px";
    }
    index = activeIndex;
  } else {
    headersArray[activeIndex].style.color = "#4b4c5f";
    headersArray[activeIndex].style.fontWeight = "400";
    arrowsArray[activeIndex].style.transform = "rotate(0deg)";
    paragrapsArray[activeIndex].style.display = "none";
    divsArray[activeIndex].style.height = "35px";
    index = 5;
  }
}
