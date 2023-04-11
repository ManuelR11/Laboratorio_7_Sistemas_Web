export const generateHeader = (title) => {
    var header = document.createElement("header");
    var h1 = document.createElement("h1");
    var text = document.createTextNode(title);
    h1.appendChild(text);
    header.appendChild(h1);
    return header;
}


/*
export const generateHeader = (title) => {
  var header = document.createElement("header");
  var h1 = document.createElement("h1");
  var text = document.createTextNode(title);
  h1.appendChild(text);
  header.appendChild(h1);

  if (!title) {
    throw new Error("Title cannot be empty!");
  }

  return header;
};
*/







