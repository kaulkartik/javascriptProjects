
$(document).ready(() => {

  $('#cityTable').dataTable();

  $('.dataTables_length').addClass('bs-select');
  //var postOffice = getPostOffices();
  $('#cityToPostOfficeSearchForm').on('submit' , e =>{
    // city input for post office search
    var city= $('#cityToPostOfficeInput').val();
    getPostOfficesByCity(city);
    // show spinner for 3 secs
    setTimeout(showSpinner(), 3000);
    // delete the spinner
    setTimeout(function() {
      $('#spinnerDiv').remove();
    }, 500);
    // prevent the default action of form submission
    e.preventDefault();
    // resetiing the search form to clear the input
    setTimeout(function() {
      $('#cityToPostOfficeSearchForm')[0].reset();
    },2000)
  })
});

function getPostOffices (){
  var output = $('#outputContainer');
  fetch( `http://postalpincode.in/api/pincode/160036`)
  .then(response => response.json())
  .then (data => {
     postOffices = data.PostOffice;
    $.each(postOffices ,(index, postOffice) =>{
      console.log(postOffice);
      output =`
      <div class="form-group-row ">
        <label for="postOffices">${postOffice.Name}</label>
      </div>`
      $('#outputCardBody').append(output);

    })
  })
  .catch(err => console.log(err))
}

function getPostOfficesByCity(city){
  // out put container
  var output = $('#outputContainer');

  // fetch the post-codes by city names

  fetch (`http://postalpincode.in/api/postoffice/${city}`)
  .then(response => response.json())
  .then(data => {
    postOffices = data.PostOffice;
    $.each(postOffices ,(index, postOffice) =>{
      console.log(postOffice);
      // output =`
      // <div class="form-group-row mb-2 bg-warning ">
      //   <label for="postOffices">${postOffice.Name}</label>
      // </div>`
      output =` <tr><td>${postOffice.Name}</td></tr>`

      $('#cityTableBody').append(output);

    })

  })
  .catch(err => console.log(err))
}


function showErrorMessage(error,message, className){

}

function showSpinner(){


  spinerHTML = `
<div id ="spinnerDiv">
  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
  `
  var output = $('#outputContainer').prepend(spinerHTML);
}
