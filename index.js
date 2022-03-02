const heading1 = $("heading1");
const heading2 = $("heading2");
const heading3 = $("heading3");
/* 

heading2.style.display = "none";
 */

const introArray = [
  "An aspiring front end developer with a passion for all things tech",
];
let introPosition = 0;
const speed = 40;

typer = () => {
  document.querySelector("#heading3").innerHTML =
    introArray[0].substring([0], introPosition) + "<span>\u25ae</span>";
  console.log(document.querySelector("#heading3").innerHTML);
  if (introPosition++ != introArray[0].length) {
    setTimeout(typer, speed);
  }
};

window.addEventListener("load", typer);
