const calculate = function calculate(ev)
{
  ev.preventDefault();

  var akanName = function(period,year,month,date)
  {
    return (Math.round(
        (((period/4)-(2*period-1)) +
        (5*year/4) +
        (26*(month+1)/10) +
        (date)) %7 ));
  };

  var period =parseInt(document.getElementById('period').value);
  console.log(period);
  var year =parseInt(document.getElementById('year').value);
  console.log(year);
  var month =parseInt(document.getElementById('month').value);
  console.log(month);
  var date =parseInt(document.getElementById('date').value);
  console.log(date);
  var gender =parseInt(document.getElementById('gender').value);
  console.log(gender);

  var day;
  day = akanName(period,year,month,date);
  var weekdays = ['Sunday', 'Monday', 'Tuesday',
                  'Wednesday', 'Thursday', 'Friday',
                  'Saturday'];
  var male = ['Kwasi', 'Kwadwo', 'Kwabena',
              'Kwaku', 'Yaw', 'Kofi','Kwame'];

  var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua',
                'Yaa', 'Afua', 'Ama'];

  if(gender === 1 && day === 0)
  {
    alert('Day of birth is '+weekdays[0]);
    alert("Your Akan name is "+male[0]);
  }else if (gender === 2 && day === 0) {
    alert('Day of birth is '+weekdays[0]);
    alert("Your Akan name is "+female[0]);
  }

  if(gender === 1 && day === 1)
  {
    alert('Day of birth is '+weekdays[1]);
    alert("Your Akan name is "+male[1]);
  }else if (gender === 2 && day === 1) {
    alert('Day of birth is '+weekdays[1]);
    alert("Your Akan name is "+female[1]);
  }

  if(gender === 1 && day === 2)
  {
    alert('Day of birth is '+weekdays[2]);
    alert("Your Akan name is "+male[2]);
  }else if (gender === 2 && day === 2) {
    alert('Day of birth is '+weekdays[2]);
    alert("Your Akan name is "+female[2]);
  }

  if(gender === 1 && day === 3)
  {
    alert('Day of birth is '+weekdays[3]);
    alert("Your Akan name is "+male[3]);
  }else if (gender === 2 && day === 3) {
    alert('Day of birth is '+weekdays[3]);
    alert("Your Akan name is "+female[3]);
  }

  if(gender === 1 && day === 4)
  {
    alert('Day of birth is '+weekdays[4]);
    alert("Your Akan name is "+male[4]);
  }else if (gender === 2 && day === 4) {
    alert('Day of birth is '+weekdays[4]);
    alert("Your Akan name is "+female[4]);
  }

  if(gender === 1 && day === 5)
  {
    alert('Day of birth is '+weekdays[5]);
    alert("Your Akan name is "+male[5]);
  }else if (gender === 2 && day === 5) {
    alert('Day of birth is '+weekdays[5]);
    alert("Your Akan name is "+female[5]);
  }

  if(gender === 1 && day === 6)
  {
    alert('Day of birth is '+weekdays[6]);
    alert("Your Akan name is "+male[6]);
  }else if (gender === 2 && day === 6) {
    alert('Day of birth is '+weekdays[6]);
    alert("Your Akan name is "+female[6]);
  }
}
const clear = function clear(e)
{
  e.reset();
}

document.addEventListener('DOMContentLoaded', function load()
{
  document.getElementById('button').addEventListener('click', calculate, clear);
});
