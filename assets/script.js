
$(document).ready(function () {
  
      let timeBlocks = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
      '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM','1PM', 
      '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', 
      '10PM', '11PM'];
  
   
  timeBlocks.forEach(function(time) {
    let timeBlock = $('<div>').addClass('time-block row').attr('id', time)
    let timeLabel = $('<div>').addClass('hour col-md-1').text(time)
    let textArea = $('<textarea>').addClass('description col-md-10')
    let saveBtn = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>')
  
    timeBlock.append(timeLabel, textArea, saveBtn)
    $('#time-blocks').append(timeBlock)
  })
      // Save button event handler
      $('.saveBtn').on('click', function () { 
    const text = $(this).siblings('.description').val()
    const time = $(this).closest('.time-block').attr('id')

    // Save text in local storage
    localStorage.setItem(time, text);
  });
//const blockHour = localStorage.getItem('time-blocks'); thought i needed to define blockHour
$('.time-block').each(function() {
  let time = $(this).attr('id');
  let text = localStorage.getItem(time);
  $(this).find('.description').val(text);
});

function timeTracker() {
  let currentHour = dayjs().hour();

    $('.time-block').each(function() {          
    let blockHour = convertTo24HourFormat($(this).find('.hour').text());
      if (blockHour < currentHour) {
        $(this).addClass('past').removeClass('future present'); 
      } else if  (blockHour === currentHour) { 
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
          }
        });
      }
      
      // Convert 12 hour to 24 hour format
      function convertTo24HourFormat(time) {
        let [hour, period] = time.split(/(?<=\d)(?=[a-zA-Z])/); // need to change this to a regex?
        hour = parseInt(hour);
        if (isNaN(hour)) {
          return NaN;
        }
        if (period === 'PM' && hour !== 12) {
          hour += 12;
        } else if (period === 'AM' && hour === 12) {
          hour = 0;
        }
        return hour;
      }
      timeTracker();
      setInterval(timeTracker, 60000);

      // displaying the current date in the header of the page.
  const todaysDate = dayjs()
$('#currentDay').text(todaysDate.format('dddd, MMMM D, YYYY h:mm A'))
});


// √ Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

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