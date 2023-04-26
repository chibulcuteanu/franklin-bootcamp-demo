export default function decorate(block) {

//add classes to Author Image, Name and Hobbies
  const [pictureRow, authorMetadataRow] = [
  ... block.querySelectorAll(":scope > div"),
]
pictureRow.classList.add("author-image");
const [nameCol, hobbiesCol] = [
  ... authorMetadataRow.querySelectorAll(":scope > div"),
]
authorMetadataRow.classList.add("author-metadata");
nameCol.classList.add("author-name");
hobbiesCol.classList.add("author-hobbies");


//add classes to the social network shareing
block.append(
  stringToHTML(
    `<div class="social-share-group">
          <a href="#fb" class="social-share" aria-label="facebook">fb</a>
          <a href="#twitter" class="social-share" aria-label="twitter">tw</a>
          <a href="#insta" class="social-share" aria-label="instagram">insta</a>
      </div>`
  )
);


block.parentElement.insertBefore(
  stringToHTML(`<hr class="separator">`),
  block
);

}

/**
 * Convert string -> html
 * @param {string} string
 * @returns Element | HTMLCollection
 */
export function stringToHTML(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  if (div.childElementCount > 1) {
    return div.children;
  }
  return div.children[0];
}