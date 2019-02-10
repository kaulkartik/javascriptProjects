$(document).ready(
  () => {

    $('#submit-button').click((e) =>{
      // prevent the default behaviour
      e.preventDefault();
      getAllUsers();
    }
  )
  // cle the search container on the clear button press.
  $('#clear-button').click((e) =>{
    // prevent the default behaviour
    e.preventDefault();
    clearOutputContainer();
  })
  }
)

function addPosts(e){
  // prevent the default behavour
  e.preventDefault();

  // title and body go as part of the post request
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  // fetch API with post
  fetch (`https://jsonplaceholder.typicode.com/posts`,{
    method : 'POST',
    header :  {
      'Accept' : 'application/json , text/plain , application/xml',
      'Content-type' : 'application/json'
    },
    body : JSON.stringify({title : title,body :  body})
  })
  .then( (res) => {
    console.log(res);
    res.json();
  })
  .then(data => console.log(data))
}


// get users
function getAllUsers(){
  // get the out put container
  let output = '<h2 class=" text-warning text-left "> USERS </h2>';
  // fetch API with GET request
  fetch('users.json')
  .then(res => res.json())
  .then ((data) => {
    data.forEach(function (user){
      console.log(user);
      output += `

        <ul class="list-group col-md-2 mb-3 border border-danger rounded">
          <li class="list=group-item text-left text-primary">ID: ${user.id}</li>
          <li class="list=group-item text-left text-primary">NAME: ${user.name}</li>
          <li class="list=group-item text-left text-primary">EMAIL: ${user.email}</li>
      </ul>

      `
    })
    document.getElementById('outputContainer').innerHTML = output;
  })
  .catch(err => console.log(err))
}

function clearOutputContainer (){

  document.getElementById('outputContainer').innerHTML = ' ';
}
