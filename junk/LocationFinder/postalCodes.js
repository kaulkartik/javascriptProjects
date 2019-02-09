document.querySelector('#zipForm').addEventListener('submit',getLocationInfo);

function getLocationInfo(e){
   // get the Zipode
   const zip = document.querySelector('.zip').value;

   fetch(`http://api.zippopotam.us/us/${zip}`)
   .then(response => {
     if(response.status != 200){
       showIcon('remove');

       document.querySelector('#output').style.display= "block";
       document.querySelector('#outputSucess').style.display= "none";
       document.querySelector('#output').innerHTML =`<article class="messsage hero is-danger message-body">
         Invalid Zip please enter a correct zip to continue.
       </article>`;
       document.querySelector('#stateInput').value=" ";
       document.querySelector('#lattiude').value=" ";
       document.querySelector('#longitude').value=" ";

       throw Error(response.statusText);
     } else {
       document.querySelector('#outputSucess').style.display= "block";
       document.querySelector('#output').style.display= "none";
       showIcon('check');
       return response.json();
     }
   })
   .then( data => {
     console.log(data);
     for(index = 0 ;index < data.places.length ; index ++){
       document.querySelector('#outputSucess').innerHTML =`<p class="messsage hero is-primary message-body">
         ${data.places[index].state} - ${data.places[index].longitude}  -  ${data.places[index].latitude}
       </p>`;
       document.querySelector('#stateInput').value=`${data.places[index].state} `;
       document.querySelector('#lattiude').value=`${data.places[index].latitude} `;
       document.querySelector('#longitude').value=`${data.places[index].longitude} `;
     }
     return data.places;
   })
   .catch(err => console.log(err));
   e.preventDefault();
}

function showIcon(icon){
  document.querySelector('.icon-remove').style.display = 'none';

  document.querySelector('.icon-check').style.display = 'none';

  document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
}
