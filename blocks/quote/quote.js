export default function decorate(block) {

//add classes to Author Image, Name and Hobbies
  const [quoteRow, explinationRow] = [
  ... block.querySelectorAll(":scope > div"),
]
quoteRow.classList.add("quote");
explinationRow.classList.add("explination");

}