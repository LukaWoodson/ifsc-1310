//--------------------------CONSTANTS---------------------------------
const articleButtons = document.getElementsByClassName('articleButton');  //all Read More buttons
const fadedBackground = document.getElementById('faded');  //div at the end of html document for dimming page elements


//--------------------------FUNCTIONS---------------------------------

function handleClick(event) {
    
    //add class to div for faded solid color in front of all page elements but behind new windowElement
    fadedBackground.classList.add('fadedBackground');
    
    //disable all page buttons not on new windowElement
    disableButtons(true);
    
    let button = event.path[0];  //path is an array, place 0 is the button in this case
    let idNum = button.id.replace( /^\D+/g, ''); //takes id as a string and only grabs the number
    
    const articleElement = document.querySelector(`#post${idNum}`); //only finds the button with the correct hide# class based on the id it found in previous line
    
    //create element and add newWindow class to it
    let windowElement = document.createElement('div');
    windowElement.classList.add('newWindow');
    //create button to close and append it to the windowElement
    let xButton = document.createElement('button');
    xButton.classList.add('newWindowButton');
    xButton.innerText = '\u2716';
    
    //listen for a button click
    xButton.addEventListener('click', handleClose);
    //add button to the new windowElement
    windowElement.appendChild(xButton);
    
    //add html element from document to windowElement
    const articleElementCopy = articleElement.cloneNode(true);
    articleElementCopy.classList.add('tempArticle');    //add a tempArticle class for styling
    let tempList = articleElementCopy.querySelector(`.hide${idNum}`);   //grab proper ul from html
    tempList.classList.add('tempList');  //add tempList class for styling
    
    //add the articleElementCopy to the new windowElement
    windowElement.appendChild(articleElementCopy);
    //add windowElement to the body of document
    document.body.appendChild(windowElement);
}

//close pop up article window
function handleClose(event){
    //remove fadedBackground class when closing new windowElement
    fadedBackground.classList.remove('fadedBackground');
    //re-enable page buttons
    disableButtons(false);
    //delete the new windowElement created in the html
    let deleteElements = document.getElementsByClassName('newWindow');
    //loop through any element that has the newWindow class to close it off screen
    for(let idx = deleteElements.length -1; idx >= 0; --idx){
        deleteElements[idx].remove();
    }
}

//make page buttons unclickable when pop up article window is open
function disableButtons(bool){
    for(let articleButton of articleButtons){  
        articleButton.disabled = bool;
    }
}


//--------------------------LISTENER LOOP---------------------------------


//listen for a click on a button with the class articleButton
for(let articleButton of articleButtons){    
    articleButton.addEventListener('click', handleClick);
}
