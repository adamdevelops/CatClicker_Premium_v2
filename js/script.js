/* ========== Model ============== */
var model = {
  currentCat: null,
  kittycats: [
    {
      id: 0,
      name: "Xuxa",
      picture: "img/xuxa.jpg",
      click_count: 0
    },
    {
      id: 1,
      name: "Chewie",
      picture: "img/chewie.jpg",
      click_count: 0
    },
    {
      id: 2,
      name: "Gato",
      picture: "img/gato.jpg",
      click_count: 0
    },
    {
      id: 3,
      name: "Mittens",
      picture: "img/mittens.jpg",
      click_count: 0
    },
    {
      id: 4,
      name: "Fluffy",
      picture: "img/fluffy.jpg",
      click_count: 0
    }
  ]
};


//
//
// //Cat 2
// var addUp2 = function() {
//   count2 += 1;
//   document.getElementById("counter2").innerHTML = "This has been clicked " + count2 + " times.";
//
// };
//
//
// // Attach as a listener
// document.getElementById("cat2").addEventListener("click", addUp2, false);

// // clear the screen for testing
// document.body.innerHTML = '';



// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {
//
//     // This is the number we're on...
//     var num = nums[i];
//
//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;
//
//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));
//
//     document.body.appendChild(elem);
// };



// Event Listner for cat menu
for (var i = 0; i < model.kittycats.length; i++) {

    // This is the number we're on...
    var cat = model.kittycats[i];
    console.log(cat) //see what objects are stored in cat variable

    // We're creating a DOM element for the cat object
    var elem = document.createElement('li');
    elem.textContent = cat.name;
    var hr_elem = document.createElement('hr');


    // ... and when we click, alert the value of the cat's name
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            alert(catCopy.name);

            currentCat = catCopy;
            console.log(currentCat);
            var catgreeting_elem = document.getElementById("cat-greeting").innerHTML = '<p>Say hi to '+ catCopy.name + '!</p>';
            var pic_elem = document.getElementById("cat-pic").innerHTML = '<img id ="cat1" src="'+ catCopy.picture + '"></img>';
        };
    })(cat));

    //Append the list elements to the 'cat_menu' div
    document.getElementById("cat_menu").appendChild(elem);
    document.getElementById("cat_menu").appendChild(hr_elem);

};

var count = 0;

document.getElementById("cat-pic").addEventListener('click', (function(count) {
  document.getElementById("counter").innerHTML = '';

    return function() {
      ++count;
      console.log(count);
      document.getElementById("counter").innerHTML = "Total number of clicks on all cats are " + count + " times.";
    };
})(count));


//Add cat's picture to Cat-pic div     --------------TESTING------------------------   style="position = absolute; TOP:35px; LEFT:170px; WIDTH:50px; HEIGHT:50px"
//document.getElementById("cat-pic").appendChild(elem2);
