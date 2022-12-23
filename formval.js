// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var message = document.contactForm.message.value;


  // Defining error variables with a default value
  var nameErr = emailErr = mobileErr = messageErr = true;

  // Validate name
  if (name == "") {
      printError("nameErr", "Please enter your name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }

  // Validate email address
  if (email == "") {
      printError("emailErr", "Please enter your email address");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email address");
      } else {
          printError("emailErr", "");
          emailErr = false;
      }
  }

  // Validate mobile number
  if (mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
  } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid 10 digit mobile number");

      } else {
          printError("mobileErr", "");
          mobileErr = false;
      }
  }

  // Validate message

  if (message == "") {
      printError("messageErr", "Please enter the message");
  } else {
      printError("messageErr", "");
      messageErr = false;
  }

  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || mobileErr || messageErr) != true) {
      var form = document.getElementById('formid');
      var xhr = new XMLHttpRequest();
      var data = new FormData(form);
      console.log(data);
      xhr.open('POST', 'https://script.google.com/macros/s/AKfycby4vUQSTA0-JCGsORkBKA-0v_pBcI7afbiSo-6Yor_umbZqOcGTVRL57blkyzixf_bT/exec')

      xhr.send(data);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == XMLHttpRequest.DONE) {
              Swal.fire({
                  icon: 'success',
                  title: 'Submit Successful',
                  showConfirmButton: false,
                  timer: 1500
              })

              form.reset();
          }
      }
      //Dont submit the form.
      return false;
  } 
  else 
  {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',

      })
      return false;
  }
}
  
  
  
  
  
  
  
  
  
  
  // function validateform(){

  // var name=document.getElementById("nameid").value;
  // var phone=document.getElementById("phoneid").value;
  // var email=document.getElementById("emailid").value;
  // var subject=document.getElementById("subjectid").value;
  // var message=document.getElementById("messageid").value;
  
  // if(name.length<5){
  //   alert("Name cannot be less than 5 characters")
  //   return false;
  // }
 

  // if(isNaN(phone) || phone.length != 10){
  //   alert("Please Enter a valid 10 digit Mobile Number")
  //   return false;
  // }
    

  // if(email.indexOf("@") == -1 || email.length < 6){
  //   alert("Please Enter valid Email with @ symbol")
  //   return false;
  // }

  // if(subject.length <= 10){
  //   alert("Please Enter More Than 10 Characters")
  //   return false;
  // }

  // if(message.length <= 60){
  //   alert("Please Enter More Than 60 Characters")
  //   return false;
  // }

  // alert("Form Submitted Successfully!");
  // return true;

  // document.getElementById("message").innerHTML="Submitted successfully!";
  // }
  




  









  // if(name==""){
  //   alert("Name box cannot be blank")
  // }else 




  // function validateform(){
  //   var name=document.getElementById("nameid").value;
  //   if(name==""){
  //     alert("Name box cannot be blank")
  //   }
  //   return false;
  //   }



/* <div class="form-group">
<input type="text" name="name" class="form-control" id="nameid" placeholder="Your Name" required onkeyup=validateform()>
</div> */  









