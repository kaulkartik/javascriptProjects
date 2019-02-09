
$(document).ready(() => {

 $('#searchForm').on('submit', (e) => {
   let searchText = $ ('#searchText').val();
   getMovies(searchText)
   e.preventDefault();
 })
});

function getMovies(searchText){

  axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=5738f440&s='+searchText)
  .then(( response ) => {

    let movies = response.data.Search;
    let output = '';
    $.each(movies, (index , movie) => {
      output += `
      <div class="col-md-3" >
        <div class="well text-center">
          <h5>${movie.title}</h5>
        </div>

      </div>`;
    });

  })
  .catch((err) =>{
    console.log(err);
  })
}
