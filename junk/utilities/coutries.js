$(document).ready(function() {
    // document is loaded and DOM is ready
    getAllContries();

    getJapanZipCodes();
});


function getAllContries(){
  console.log('run');
  let dropdown = $('#countryDropdown');
  fetch ('https://restcountries.eu/rest/v2/all')
  .then (response => response.json())
  .then(data => {
    console.log(data);
    $.each(data , (index, country) => {
      dropdown.append($('<option></option>').attr('value', country.alpha2Code).text(country.name));
    })
    }
  )
  .catch(err => console.log(err))
}

function getJapanZipCodes(){
  fetch(`http://postalpincode.in/api/pincode/160036`)
  .then (response => response.json())
  .then (data => console.log(data))
  .catch (err => console.log(err));
}


// brewrey db key : 6560fa736b708bc2f9efa704dd31cf1e
