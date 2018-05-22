

// variables used in script 

var groupOfPics = ['images/graham-stack.png', 'images/graham-treat.png', 'images/not-graham.png', 'images/choco.png', 'images/crust.png', 'images/house.png', 'images/round.png', 'images/toffee.png'];
var divAll = document.querySelectorAll('div');
var headDiv = divAll[0];
var thumbnailDiv = divAll[1];
var viewerDiv = divAll[2];
var popupDiv = divAll[3];

var newDiv = document.createElement('div');
var newH1 = document.createElement('h1');
var newImg = document.createElement('img');

// assigning classes to divs

thumbnailDiv.classList.add('thumbnail-viewer');
viewerDiv.classList.add('window-viewer');
// shiftDiv.classList.add('nav-row');
headDiv.classList.add('head-div');
popupDiv.classList.add('hidden');

// adds an img tag in hidden div
popupDiv.appendChild(newImg);

// makes header and text in first div
headDiv.appendChild(newH1);
document.querySelector('h1').textContent = 'INSTAGRAHAM';

// pushes picture from array onto html page

groupOfPics.forEach(function(image) {
    var newImg = document.createElement('img');
    newImg.src = image;
    thumbnailDiv.appendChild(newImg);
});


// sets default value for viewer window on loading page

newImg.src = groupOfPics[0];


//creates 4 separate containers in the viewer window

var viewerEle = document.querySelectorAll('div div');
var leftArrow = viewerEle[0];
var imgInDiv = viewerEle[1];
var commentSec = viewerEle[2];
var rightArrow = viewerEle[3];

// assign 4 divs in viewer window classes
leftArrow.classList.add('nav-left');
imgInDiv.classList.add('img-viewer');
commentSec.classList.add('comments');
rightArrow.classList.add('nav-right');

var moveLeft = document.createElement('img');
var moveRight = document.createElement('img');
moveLeft.src = 'images/left-arrow.png';
moveRight.src = 'images/right-arrow.png';


// create img tags in 3 of the 4 divs
leftArrow.appendChild(moveLeft);
imgInDiv.appendChild(newImg);
rightArrow.appendChild(moveRight);




// takes the img src from the clicked image in the thumbnail and displays it in viewer
var picClicked = document.querySelectorAll('.thumbnail-viewer img');
var picShowing = document.querySelector('.img-viewer img');
var movedLeft = document.querySelector('.nav-left img');
var movedRight = document.querySelector('.nav-right img');
picClicked.forEach(function(nav) {
    nav.addEventListener('dblclick', function(event) {
        event.preventDefault();
        picShowing.setAttribute('src', nav.getAttribute('src'));
    })
})


// shifts the image one left or right when arrows are clicked

movedLeft.addEventListener('click', function(nav){
    nav.preventDefault();
    showing = picShowing.getAttribute('src');
    showingAt = groupOfPics.indexOf(showing);
    showingAt -= 1;
    if (showingAt == -1){
        showingAt = 7;
    }
    picShowing.setAttribute('src', groupOfPics[showingAt]);
})
movedRight.addEventListener('click', function(nav){
    nav.preventDefault();
    showing = picShowing.getAttribute('src');
    showingAt = groupOfPics.indexOf(showing);
    showingAt += 1;
    // console.log(showingAt);
    if (showingAt == 8){
        showingAt = 0;
    }
    picShowing.setAttribute('src', groupOfPics[showingAt]);
})

picClicked.forEach(function(nav){
    nav.addEventListener('click', function(event){
        showing = picShowing.getAttribute('src');
        showingAt = nav.getAttribute('src');
        nav.classList.toggle('popup');
        
    })
})
picShowing.addEventListener('click', function(nav){
    nav.preventDefault();
    showing = picShowing.getAttribute('src');

})

//var piccedOut = document.querySelector('.hidden img')
//    picShowing.addEventListener('dblclick', function(event) {
//        event.preventDefault();
//        piccedOut.setAttribute('src', picShowing.getAttribute('src'));
//        popupDiv.classList.toggle('hidden');
//        popupDiv.classList.toggle('on-display');
//    })
