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
  let phoneNumber = $('#phonenumber').val();
  phoneNumber = toNumber(phoneNumber);
  // Call the function, pass in the phone number, store in tempVar
  if (phoneNumber.length == '10') {
    var obj = {};
    obj.first = first;
    obj.last = last;
    obj.email = email;
    obj.phoneNumber = phoneNumber;
    // console.log(obj);


    // let newarray = ["first", "last", "email", "phonenumber"];

    myGobalArray.push(obj);
    console.log(myGobalArray);
    addTo();
  } else {
    alert('phone number wrong format');
  }
  // If tempVar does not equal 10, alert("please enter a valid phone")

  // Everything below


});

function addTo() {
  $('.box').empty();


  for(var x = 0; x < myGobalArray.length; x++){
    $(".box").append(`
    <div class="col-box">
        <img src="img/contact.png" height="75" width="30">
        <p>Name: ` + myGobalArray[x].first + " " + myGobalArray[x].last + ` </p>
        <p>Email: `+ myGobalArray[x].email +` </p>
        <p>Phone number: `+ myGobalArray[x].phoneNumber +`</p>
        <button class= "delbnt" id="` + x + `">Delete</button>
    </div>

    `);



      // splice that position out of myGobalArray


      // call addto function

  }
}

//the delete button is being added dynamically so it can not be a
// .onclick like i tried to do.
$('.box').on('click', '.delbnt', function(e){
 // splice that position out of myGobalArray
 myGobalArray.splice(this.id,1);
 // call addto function
 addTo();
});



/*
TO DO:
create an empty str variahle
for loop
  if its a number (there is a method)
    pushto empy()
return new string


we went to https://repl.it/ to work through the following funtions
*/

function toNumber (str) {
  let newStr = "";
  for(var x = 0; x < str.length; x++){
    let tempVar = parseInt(str[x]);
    if(Number.isInteger(tempVar)){
      newStr+= tempVar;
    }
  }
  return newStr;
}



//sort by last name..
// 1. toLowerCase
//
// - first letter of last name to Cap
fucntion toSort(sortnames){
  let lastName = last.toLowrCase();
  sort(lastName);

}

// After you implement the above code.
// There are still some final touches you can work on.
// Add some if else logic to make sure they are filling in all fields,
//  the phone number is only ten digits and a number
      //HTML - maxlength="10"
      //HTML - pattern="\d{10}" - should have limited the phone number to just
      //numbers but it did not work
//  and sort the myGlobalArray by last name before rendering it to the page.
//  This project is looking great, you are doing terrific!!


/*
e.preventDefault(); --- keep the browers from rerendering each time we hit submit
essintal - refreshing each time we submit.
*/
