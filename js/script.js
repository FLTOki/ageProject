const calculate = function calculate(ev)
{
  ev.preventDefault();

  var period =(document.getElementById('period').value);
  console.log(period);
  var year =(document.getElementById('year').value);
  console.log(year);
  var month =(document.getElementById('month').value);
  console.log(month);
  var date =(document.getElementById('date').value);
  console.log(date);
  var gender =(document.getElementById('gender').value);
  console.log(gender);

  function akanName(period, year, month, date)
    {
      day = ((  (period/4)-(2*period-1) +
                (5*year/4) +
                (26*(month+1)/10) +
                (date)) %7);
      return day;
    }

    if(gender === 1)
        {
          if (day === 0) {
            console.log("Your Akan name is Kwasi");
            alert("Your Akan name is Kwasi");
            // result.innerHTML = 'Your Akan name is Kwasi';

          }else if (day === 1) {
            console.log("Your Akan name is Kwadwo");
            alert("Your Akan name is Kwadwo");
            // result.innerHTML = 'Your Akan name is Kwadwo';

          }else if (day === 2) {
            console.log("Your Akan name is Kwabena");
            alert("Your Akan name is Kwabena");
            // result.innerHTML = 'Your Akan name is Kwabena';

          }else if (day === 3) {
            console.log("Your Akan name is Kwaku");
            alert("Your Akan name is Kwaku");
            // result.innerHTML = 'Your Akan name is Kwaku';

          }else if (day === 4) {
            console.log("Your Akan name is Yaw");
            alert("Your Akan name is Yaw");
            // result.innerHTML = 'Your Akan name is Yaw';

          }else if (day === 5) {
            console.log("Your Akan name is Kofi");
            alert("Your Akan name is Kofi");
            // result.innerHTML = 'Your Akan name is Kofi';

          }else {
            console.log("Your Akan name is Kwame");
            alert("Your Akan name is Kwame");
            // result.innerHTML = 'Your Akan name is Kwame';

          }
        }
}

document.addEventListener('DOMContentLoaded', function load()
{
  document.getElementById('button').addEventListener('click', calculate);
});




// var form = document.getElementById('nameForm');
// form.onsubmit = function(e)
// {
//   e.preventDefault();
//   var result = document.getElementById('period');
//
//   var period = parseInt(form.period.value);
//   var year = parseInt(form.year.value);
//   var month = parseInt(form.month.value);
//   var date = parseInt(form.date.value);
//   var gender = parseInt(form.gender.value);
//   var day;
//
//   function akanName(period, year, month, date)
//   {
//     day = ((  (period/4)-(2*period-1) +
//               (5*year/4) +
//               (26*(month+1)/10) +
//               (date)) %7);
//     return day;
//   }
//   if(gender === 1)
//     {
//       if (day === 0) {
//         console.log("Your Akan name is Kwasi");
//         alert("Your Akan name is Kwasi");
//         // result.innerHTML = 'Your Akan name is Kwasi';
//
//       }else if (day === 1) {
//         console.log("Your Akan name is Kwadwo");
//         alert("Your Akan name is Kwadwo");
//         // result.innerHTML = 'Your Akan name is Kwadwo';
//
//       }else if (day === 2) {
//         console.log("Your Akan name is Kwabena");
//         alert("Your Akan name is Kwabena");
//         // result.innerHTML = 'Your Akan name is Kwabena';
//
//       }else if (day === 3) {
//         console.log("Your Akan name is Kwaku");
//         alert("Your Akan name is Kwaku");
//         // result.innerHTML = 'Your Akan name is Kwaku';
//
//       }else if (day === 4) {
//         console.log("Your Akan name is Yaw");
//         alert("Your Akan name is Yaw");
//         // result.innerHTML = 'Your Akan name is Yaw';
//
//       }else if (day === 5) {
//         console.log("Your Akan name is Kofi");
//         alert("Your Akan name is Kofi");
//         // result.innerHTML = 'Your Akan name is Kofi';
//
//       }else {
//         console.log("Your Akan name is Kwame");
//         alert("Your Akan name is Kwame");
//         // result.innerHTML = 'Your Akan name is Kwame';
//
//       }
//     }
//     else if (gender === 2) {
//       if (day === 0) {
//         console.log("Your Akan name is Akosua");
//         alert("Your Akan name is Akosua");
//       }else if (day === 1) {
//         console.log("Your Akan name is Adwoa");
//         alert("Your Akan name is Adwoa");
//       }else if (day === 2) {
//         console.log("Your Akan name is Abenaa");
//         alert("Your Akan name is Abenaa");
//       }else if (day === 3) {
//         console.log("Your Akan name is Akua");
//         alert("Your Akan name is Akua");
//       }else if (day === 4) {
//         console.log("Your Akan name is Yaa");
//         alert("Your Akan name is Yaa");
//       }else if (day === 5) {
//         console.log("Your Akan name is Afua");
//         alert("Your Akan name is Afua");
//       }else {
//         console.log("Your Akan name is Ama");
//         alert("Your Akan name is Ama");
//       }
//     }
//
//   form.reset();
// };
