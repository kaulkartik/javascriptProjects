$(document).ready(
  () => {
    {
      var hours = new Date().getHours();
      var minutes = new Date().getMinutes();

      showFirstRow(hours);
      showSecondRow(hours);
      showThirdRow(minutes);
      showLastRow(minutes);
    }
  }
)

function showFirstRow(hours){

  if (hours >= 5){
    row_1_coloumn = hours / 5;
    for (idx = 0 ; idx <= row_1_coloumn ; idx++){
      // $(#child)-{idx}.addClass(red class)
      console.log("Blink  row 1 bulb number  " + idx);
    }
  } else{
    console.log('The time is less than 5 AM');
  }
}


function showSecondRow(hours){

  row_2_coloumn = hours % 5;
  for (idx = 0 ; idx <= row_2_coloumn ; idx++){
    // $(#child)-{idx}.addClass(red class)
    console.log("Blink  row 2 bulb number  " + idx);
  }
}


function showThirdRow(minutes){
  if (minutes >= 5) {
    let period =0;
    row_3_coloumn = minutes/5;
    for (period = 0 ; period <= row_3_coloumn ; period++){
      console.log("Blink  row 3 bulb number  " + period);

    }
    return period;
  } else {
    console.log('The time is less than 5 minutes for this hour');
  }
}


function showLastRow(minutes){
  let period =0;
  row_4_coloumn = minutes%5;
  for (period = 0 ; period <= row_4_coloumn ; period++){
    console.log("Blink  row 4 bulb number  " + period);

  }
  return period;
}
