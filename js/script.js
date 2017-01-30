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

/* ============== Octopus ================== */

var octopus = {

    init: function(){
      // Set current cat on intialization to the first cat in the cat list
      model.currentCat = model.kittycats[0];

      // tell our views to initialize
       catListView.init();
       catView.init();
    },

    getCats: function(){
      return model.kittycats;
    },

    getCurrentCat: function(){
      return model.currentCat;
    },

    setCurrentCat: function(cat){
      model.currentCat = cat;
    },

    incrementCounter: function(){
      model.currentCat.click_count++;
      console.log(model.currentCat.click_count);
      catView.render();
    }

};



// Click counter
var count = 0;


/* ============== View ================== */
var catView = {

  init: function() {
    // We're creating a DOM element for the cat object
    this.catgreetingElem = document.getElementById("cat-greeting");
    this.picElem = document.getElementById("cat-pic");
    this.counterElem = document.getElementById("counter");

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function(){
    console.log("In render function of cat area view");

    var elem, i;

    var cat = octopus.getCurrentCat();

    console.log(cat) //see what objects are stored in cat variable

    this.picElem.addEventListener('click', (function(count) {
      //this.counterElem.innerHTML = '';

        return function() {
          octopus.incrementCounter(cat);
          this.counterElem.innerHTML = "Total number of clicks on all cats are " + count + " times.";
        };
    })(count));


    this.catgreetingElem.innerHTML = '<p>Say hi to '+ cat.name + '!</p>';
    this.picElem.innerHTML = '<img id ="cat1" src="'+ cat.picture + '"></img>';

  }

};

var catListView = {

  init: function() {
    // We're creating a DOM element for the cat object
    this.catMenuElem = document.getElementById("cat_menu");

    this.render();
  },

  render: function(){
    var cat, elem, i;

    var cats = octopus.getCats();

    for (i = 0; i < cats.length; i++) {
        console.log("In render function of cat list view");
        // This is the number we're on...
        cat = cats[i];
        console.log(cat) //see what objects are stored in cat variable

        // We're creating a DOM element for the cat object
        var li_elem = document.createElement('li');
        li_elem.textContent = cat.name;
        var hr_elem = document.createElement('hr');

        // ... and when we click, alert the value of the cat's name
        li_elem.addEventListener('click', (function(catCopy) {
            return function() {
                alert(catCopy.name);

                octopus.setCurrentCat(catCopy);
                catView.render();

            };
        })(cat));

        //Append the list and hr elements to the 'cat_menu' div
        this.catMenuElem.appendChild(li_elem);
        this.catMenuElem.appendChild(hr_elem);

    }
  }

};

// make it go!
octopus.init();

//Add cat's picture to Cat-pic div     --------------TESTING------------------------   style="position = absolute; TOP:35px; LEFT:170px; WIDTH:50px; HEIGHT:50px"
//document.getElementById("cat-pic").appendChild(elem2);
