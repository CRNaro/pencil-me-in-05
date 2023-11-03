// √ Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
      let timeBlocks = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
      '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM','1PM', 
      '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', 
      '10PM', '11PM'];
  
  
      timeBlocks.forEach(function(time) {
    let timeBlocks = $('<div>').addClass('time-block row').attr('id', time)
    let timeLabel = $('<div>').addClass('hour col-md-1').text(time)
    let textArea = $('<textarea>').addClass('description col-md-10')
    let saveBtn = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>')
  
    timeBlocks.append(timeLabel, textArea, saveBtn)
    $('#time-blocks').append(timeBlocks)
  })

      $('.saveBtn').on('click', function () { 
    // 'this' references the save button
    const text = $(this).siblings('.description').val()
    const time = $(this).parent().attr('id')
    localStorage.setItem(time, text);
  });
//const blockHour = localStorage.getItem('time-blocks'); thought i needed to define blockHour
function timeTracker() {

  let currentHour = dayjs().hour();
  //console.log(currentHour);
    $('.time-block').each(function() {          
    let blockHour = parseInt($(this).attr('id').split('-')[1]); 
    console.log(blockHour);
      // removes all old color classes
      //$(this).removeClass('bg-secondary bg-danger bg-success')
      // note for 11-3 - changed the if statement for color changes
      // !!!!all time is green!!!  fix this
      if (blockHour < currentHour) {
        $(this).addClass('bg-secondary'); 
      } else if  (blockHour === currentHour) { 
        $(this).removeClass('bg-secondary');
        $(this).addClass('bg-danger');
      } else {
        $(this).removeClass('bg-secondary');
        $(this).removeClass('bg-danger');
        $(this).addClass('bg-success');
          }
        });
      }
 timeTracker();
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // displaying the current date in the header of the page.
  const todaysDate = dayjs()
$('#currentDay').text(todaysDate.format('dddd, MMMM D, YYYY h:mm A'))
});
