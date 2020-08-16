//Mate' Tanczos
function simpleCalendar() {
    $(document).ready(function () {
      let workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."] //set up work houre array
      $(".dayWord").text(moment().format('dddd')); //show word day on page
      $(".monthWord").text(moment().format('MMMM')); //show month
      $(".dayNum").text(moment().format('D')); // day of month
  
      //setup timeblocks for standard business hours
      for (i = 0; i < workHours.length; i++) { //loop according to hours from array
        let row = $("<div>").addClass("row"); //set row container for each block
        let timeBlockLbl = $("<text-area>").text(workHours[i]).addClass("hour"); //show time label
        let inputBlockElem = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block").attr("id", "input-field-" + (i + 1)); //show input block
        saveBtn = $("<button>").attr("type", "submit").addClass("btn btn-primary saveBtn").text("save").attr("id", "saveBtn-Id-" + (i + 1)); //show save btns
        clearBtn = $("<button>").attr("type", "submit").addClass("btn btn-danger clearBtn").text("clear").attr("id", "clearBtn-Id-" + (i + 1)); //show clear btns
        $(row).append(timeBlockLbl).append(inputBlockElem).append(saveBtn).append(clearBtn); //append lable, input, save, clear to row div
        $("#calendar").append(row); //appen row div to calendar ID 
      }
  
      //listen to what btn was clicked
      $('[type="submit"]').on('click', function () {
        event.preventDefault();
        let saveBtnIdObj = ($(this).attr('id'));
        let saveOrClear = saveBtnIdObj.substring(0, 4); //get left 4 most chars from ID of btn
        let btnIdNum = saveBtnIdObj.substr(saveBtnIdObj.length - 1); //get clicked button id
        let toDoInputId = $("#input-field-" + btnIdNum).val().trim();
  
        if (saveOrClear == "save") { //save to local storage
          localStorage.setItem("toDo" + btnIdNum, (toDoInputId));
          alert(`Saved task: "${toDoInputId}" successfully!`);
        } else { //clear local storage by ID
          localStorage.removeItem("toDo" + btnIdNum);
          location.reload();
        }
      });
  
      //loop throuhg all field to get stored items
      for (i = 1; i < workHours.length + 1; i++) {
        let toDoInput = $("#input-field-" + i);
        let savedInput = (localStorage.getItem("toDo" + i));
        toDoInput.val(savedInput);
      }
  
      // start if else statements to show past, present, future events
      //need to make code more dry
      let getTime = new Date().getHours();
      if (getTime > 9) {
        $("#input-field-1").addClass("past");
      } else if (getTime >= 9 && getTime < 10) {
        $("#input-field-1").addClass("present");
      } else if (getTime < 9) {
        $("#input-field-1").addClass("future");
      }
  
      if (getTime > 10) {
        $("#input-field-2").addClass("past");
      } else if (getTime >= 10 && getTime < 11) {
        $("#input-field-2").addClass("present");
      } else if (getTime < 10) {
        $("#input-field-2").addClass("future");
      }
  
      if (getTime > 11) {
        $("#input-field-3").addClass("past");
      } else if (getTime >= 11 && getTime < 12) {
        $("#input-field-3").addClass("present");
      } else if (getTime < 11) {
        $("#input-field-3").addClass("future");
      }
  
      if (getTime > 12) {
        $("#input-field-4").addClass("past");
      } else if (getTime >= 12 && getTime < 13) {
        $("#input-field-4").addClass("present");
      } else if (getTime < 12) {
        $("#input-field-4").addClass("future");
      }
  
      if (getTime > 13) {
        $("#input-field-5").addClass("past");
      } else if (getTime >= 13 && getTime < 14) {
        $("#input-field-5").addClass("present");
      } else if (getTime < 13) {
        $("#input-field-5").addClass("future");
      }
  
      if (getTime > 14) {
        $("#input-field-6").addClass("past");
      } else if (getTime >= 14 && getTime < 15) {
        $("#input-field-6").addClass("present");
      } else if (getTime < 14) {
        $("#input-field-6").addClass("future");
      }
  
      if (getTime > 15) {
        $("#input-field-7").addClass("past");
      } else if (getTime >= 15 && getTime < 16) {
        $("#input-field-7").addClass("present");
      } else if (getTime < 15) {
        $("#input-field-7").addClass("future");
      }
  
      if (getTime > 16) {
        $("#input-field-8").addClass("past");
      } else if (getTime >= 16 && getTime < 17) {
        $("#input-field-8").addClass("present");
      } else if (getTime < 16) {
        $("#input-field-8").addClass("future");
      }
  
      if (getTime > 17) {
        $("#input-field-9").addClass("past");
      } else if (getTime >= 17 && getTime < 18) {
        $("#input-field-9").addClass("present");
      } else if (getTime < 17) {
        $("#input-field-9").addClass("future");
      }
      setInterval('updateClock()', 1000);
    });
  
  }
  simpleCalendar();
  updateClock();
  
  //https://www.sitepoint.com/create-jquery-digital-clock-jquery4u/
  function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
  
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
  
    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  
    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;
  
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  
    $(".showTime").html(currentTimeString);
  
  }