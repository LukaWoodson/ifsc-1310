const articleButtons = document.getElementsByClassName('articleButton');

function handleClick(event) {
    let button = event.path[0];  //path is an array, place 0 is the button in this case
    let idNum = button.id.replace( /^\D+/g, ''); //takes id as a string and only grabs the number
    
    const listItems = document.getElementsByClassName(`hide${idNum}`); //only finds the button with the correct hide# class based on the id it found in previous line

    if (button.innerText === 'Read More >>') { //what happens if read more is pressed
        button.innerText = 'Read Less <<';
        for (let listItem of listItems) {      //runs through the items with a button class and checks to see if it should be changed to read less
            listItem.style.display = 'list-item';
        }
    }
    else {                                    //what happens if read less is pressed
        button.innerText = 'Read More >>';
        for (let listItem of listItems) {     //runs through the items with a button class and checks to see if it should be changed to read more
            console.log(listItem.style.listStyleImage);
            listItem.style.display = 'none';
        }
    }

}

for(let articleButton of articleButtons){    //tells js to listen for a click on a button with the class articleButton
    articleButton.addEventListener('click', handleClick);
}


