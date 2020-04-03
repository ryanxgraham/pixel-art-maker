
const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', makeGrid, true);

function makeGrid(event) {
    // Prevents refresh
    event.preventDefault();
    // Define Variables
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    const canvas = document.getElementById('pixelCanvas')
    // Clean the Canvas
    canvas.innerHTML=null;
    //Create the Canvas
    for (let i=0; i<height; i++) {
        var row = canvas.insertRow(0);
        for (let j=0; j<width; j++) {
            var cell = row.insertCell(0);
            cell.style.backgroundColor = 'white';
        }
    }
    //Adds Color
    function colorizer(event) {
        var color = document.getElementById('colorPicker').value;
            //Checks if target is valid candidate and it's current color
            //if the color is the same, change to white, else change to color
            if (event.target.nodeName === 'TD') {
                if (event.target.currentColor === color) {
                        event.target.style.backgroundColor = 'white';
                        event.target.currentColor = 'white';
                }
                else {
                    event.target.style.backgroundColor = color;
                    event.target.currentColor = color;
                }

            }
    }
    canvas.addEventListener('click', colorizer);
}
