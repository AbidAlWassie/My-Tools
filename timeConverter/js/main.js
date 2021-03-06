function snowCurrentTime() {

  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  var currentDate = new Date();
  var currentHours = String(addZero(currentDate.getHours()));
  var currentMinutes = String(currentDate.getMinutes());
    
    var currentTime = currentHours+':'+addZero(currentMinutes);
    var convertedValue;
    
    if (currentHours > 0 && currentHours <= 12) {
      convertedValue= "" + currentHours;
    } else if (currentHours > 12) {
      convertedValue= "" + (currentHours - 12);
    } else if (currentHours == 0) {
      convertedValue= "12";
    }
    
    convertedValue += (currentMinutes < 10) ? ":0" + currentMinutes : ":" + currentMinutes;  // get minutes
    convertedValue += (currentHours >= 12) ? " P.M." : " A.M.";  // get AM/PM
    
    // console.log(convertedValue);

  var currentMilitaryTime = document.getElementById("mvalue");
  var currentStandardTime = document.getElementById("svalue");
    

  currentStandardTime.innerText = convertedValue;
  currentMilitaryTime.innerText = currentTime;

}

function m2s() {

  const h1 = document.getElementById("h").value; // get hour
  const m1 = document.getElementById("m").value; // get minute

  var hours = String(h1);
  var minutes = Number(m1);

  if(hours.length<=1) {
    hours = "0" + hours;
  }
  
  // calculate
  var timeValue;
  
  if ((hours<=23 && hours>=0) && (minutes>=0 && minutes<=59)) {

    if (hours > 0 && hours <= 12) {
      timeValue= "" + hours;
    } else if (hours > 12) {
      timeValue= "" + (hours - 12);
    } else if (hours == 0) {
      timeValue= "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
  
  // show
  // alert(timeValue);
  
  var militaryPlaceholder = document.getElementById("cmvalue");
  militaryPlaceholder.classList.remove("text-red");
  militaryPlaceholder.innerText = timeValue;

  } else {
    
    // alert("invalid hour");
    var militaryPlaceholder = document.getElementById("cmvalue");
    militaryPlaceholder.classList.add("text-red");
    militaryPlaceholder.innerText = "Error: Invalid value";
  }
  
  
}


function s2m() {

  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  var e = document.getElementById("ampmValue");
  const h2 = Number(document.getElementById("h2").value);
  const m2 = Number(document.getElementById("m2").value);
  
  // const time12h = "01:02 PM";
  const time12h = addZero(h2) + ':' + addZero(m2) + ' ' + e.value;
  // console.log('Standard Time: ' + time12h);
  // console.log(e.value);


const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  
  let [hours, minutes] = time.split(':');
  
  if ((hours<=12 && hours>=1) && (minutes>=0 && minutes<=59)) {
  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
  
} else {
  var standardPlaceholder = document.getElementById("csvalue");
  standardPlaceholder.classList.add("text-red");
  standardPlaceholder.innerText = "";
}
}

const standardPlaceholder = document.getElementById("csvalue");
standardPlaceholder.classList.remove("text-red");
// show standard time
standardPlaceholder.innerText = convertTime12to24(time12h);

// console.log('Military Time: ' + convertTime12to24(time12h));

}

