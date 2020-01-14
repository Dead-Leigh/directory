/*
-Design Interface (CHECK)
-Make cards smaller (CHECK)
-Make a global array (CHECK)
-Function for when a user hits submit, we collect variables
  -Make an object
  -Fill with user inputs
  -Push to globabl array (i think I did think.. )
render screen Function-loop through global array and append the dom
    create new fun. - all new fun. - does not take in parami
    empty container that is holding all the cards
    for loop
      .append


Function for when they hit delete on each card
  splice out of the global array
  call render to screen function

  use conole.log with each person.
*/
var myGobalArray = [];

$('.submit-btn').click(function(e) {
  e.preventDefault();

  let first = $('#firstname').val();
  let last = $('#lastname').val();
  let email = $('#email').val();
  let phonenumber = $('#phonenumber').val();

  var obj = {};
  obj.first = first;
  obj.last = last;
  obj.email = email;
  obj.phonenumber = phonenumber;
  console.log(obj);

  // let newarray = ["first", "last", "email", "phonenumber"];

  myGobalArray.push(obj);
  console.log(myGobalArray);
  addTo();

});

function addTo() {
  $('.box').empty();


  for(var x = 0; x < myGobalArray.length; x++){
    $(".box").append(`
    <div class="col-box">
        <img src="img/contact.png" height="75" width="30">
        <p>Name: ` + myGobalArray[x].first + " " + myGobalArray[x].last + ` </p>
        <p>Email: `+ myGobalArray[x].email +` </p>
        <p>Phone number: `+ myGobalArray[x].phonenumber +`</p>
        <button class= "delbnt" id="` + x + `">Delete</button>
    </div>

    `);

    $('.delbnt').click(function(e){
      let pos = $('#' + this.id);

      // splice that position out of myGobalArray
      

      // call addto function
    });
  }

}


/*
e.preventDefault(); --- keep the browers from rerendering each time we hit submit
essintal - refreshing each time we submit.
*/
