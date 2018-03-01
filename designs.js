// Select color input
const color = $("#colorPicker");
// Select size input
const inputWidth = $("#input_width");
const inputHeight = $("#input_height");
// Input form
const inputForm = $("#sizePicker");
// Canvas
const canvas = $("#pixel_canvas");

// function returns the HTML of a grid
function makeGrid(width, height) {
  // function to draw a single line of a grid
  function drawLine(numCells) {
    let line="";
    for (let i=1; i<=numCells; i++) {
      line += "<td></td>";
    };
    return `<tr>${line}</tr>`;
  };
  // loop to draw all lines of a grid
  let grid = "";
  let line = drawLine(width); // to call it just once
  for (let i=1; i<=height; i++) {
    grid += line;
  };
  return grid;
};

// event listener declaration for makeGrid
inputForm.submit(function( event ) {
  // empty the table before setting a new table
  canvas.children().remove();
  // draw table using makeGrid function
  canvas.append(
    makeGrid(inputWidth.val(), inputHeight.val())
  );
  event.preventDefault(); // formally useless in this case
});

// event listener declaration for change the cell color
canvas.on( "click", "td", function(){
  $(this).css("background-color", color.val());
});

// event listener declaration for removing style after double click - not required functionality
canvas.on( "dblclick", "td", function(){
  $(this).removeAttr("style");
});
