const divs = document.getElementsByClassName("questionBox");
const divsArray = Array.from(divs);
let divIndex = 5;
divsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    let exactDiv = event.target;
    console.log(divsArray.indexOf(element));

    if (divIndex !== divsArray.indexOf(element)) {
      exactDiv.childNodes[1].style.color = "#1E1F36";
      exactDiv.childNodes[1].style.fontWeight = "700";
      exactDiv.childNodes[3].style.transform = "rotate(180deg)";
      exactDiv.childNodes[5].style.display = "block";
      exactDiv.style.height = "90px";
      if (divIndex >= 0 && divIndex <= 4) {
        divsArray[divIndex].childNodes[1].style.color = "#4b4c5f";
        divsArray[divIndex].childNodes[1].style.fontWeight = "400";
        divsArray[divIndex].childNodes[3].style.transform = "rotate(0deg)";
        divsArray[divIndex].childNodes[5].style.display = "none";
        divsArray[divIndex].style.height = "35px";
      }
      divIndex = divsArray.indexOf(element);
    } else {
      exactDiv.childNodes[1].style.color = "#4b4c5f";
      exactDiv.childNodes[1].style.fontWeight = "400";
      exactDiv.childNodes[3].style.transform = "rotate(0deg)";
      exactDiv.childNodes[5].style.display = "none";
      exactDiv.style.height = "35px";
      divIndex = 5;
    }
  });
});
