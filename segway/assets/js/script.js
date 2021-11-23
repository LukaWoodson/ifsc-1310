const articleButtons = document.getElementsByClassName('articleButton');

function handleClick(event) {
    let button = event.path[0];
    let idNum = button.id.replace( /^\D+/g, '');
    
    const listItems = document.getElementsByClassName(`hide${idNum}`);

    if (button.innerText === 'Read More >>') {
        button.innerText = 'Read Less <<';
        for (let listItem of listItems) {
            listItem.style.display = 'list-item';
        }
    }
    else {
        button.innerText = 'Read More >>';
        for (let listItem of listItems) {
            console.log(listItem.style.listStyleImage);
            listItem.style.display = 'none';
        }
    }

}

for(let articleButton of articleButtons){
    articleButton.addEventListener('click', handleClick);
}


