const form1 = document.querySelector("form");

const scrambledWord = document.getElementById("word");

let text;

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  text = data.get("text");
  let scramble = data.get("scramble");
  let scrambleWith = data.get("scramble with");
  if (!scrambleWith) {
    scrambleWith = "*****";
  }
  if (scramble && scrambleWith) {
    scramble = scramble.split(" ");
    for (let word of scramble) {
      text = text.replace(word, scrambleWith);
    }
  }

  scrambledWord.innerText = text;
});
