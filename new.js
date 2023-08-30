const prompt = require("prompt-sync")();
let firstName = prompt("What is your first name? ");
let lastName = prompt("What is your last name? ");
let pin = prompt("What is your four digit pin? ");
console.log("Hello", firstName, "thank you for signing in.");
let service = prompt(
  "Please choose from the following: Bill payment, Service Issue, Device Malfunction, Exit "
);
if (service === "bill payment") {
  console.log("Got it bill payment");
  let cardInfo = prompt("Please enter your card information ");
  console.log("Is", cardInfo, "correct?");
  let verifyCard1 = prompt("Yes, No ");
  if (verifyCard1 === "yes") {
    console.log(
      "Thank you for your payment, please allow two hours for payment to post."
    );
  } else {
    let newCard2 = prompt("Please re-enter your card information now: ");
    console.log("Is", newCard2, "correct?");
    let verifyCard2 = prompt("Yes, No ");
    if (verifyCard2 === "yes") {
      console.log(
        "Thank you for your payment, please allow two hours for payment to post."
      );
    } else {
      console.log("Please hold while I connect you to a live agent for help.");
    }
  }
}
if (service === "service issue") {
  console.log("Got it service issue");
  let newInfo = prompt(
    "Please describe your problem while I pull your account information up. "
  );
  console.log(
    "I got:",
    newInfo,
    ":",
    "I see you have an outstandind balance of $341.56 unpaid on your account, would you like to pay that now?"
  );
  let results = prompt("Yes, No ");
  if (results === "yes") {
    console.log("Okay great!");
    let newCard3 = prompt("Enter your card information now: ");
    console.log("Is", newCard3, "correct?");
    let verifyNewCard3 = prompt("Yes, No ");
    if (verifyNewCard3 === "yes") {
      console.log(
        "Thank you for your payment, please allow two hours for payment to post."
      );
    } else {
      let reEnterCard3 = prompt("Please re-enter your card information now: ");
      console.log("Is", reEnterCard3, "correct?");
      let verifyReEnterCard3 = prompt("Yes, No ");
      if (verifyReEnterCard3 === "yes") {
        console.log(
          "Thank you for your payment, please allow two hours for payment to post."
        );
      } else {
        console.log(
          "Please hold while I connect you to a live agent for help."
        );
      }
    }
  } else {
    console.log("Ok your service will be suspened until payment is made.");
  }
}
if (service === "device malfunction") {
  console.log("Got it Device Malfunction");
  let discovery = prompt(
    "While i pull your account up please describe your issue in detail "
  );
  console.log(
    "I got",
    discovery,
    ",",
    "I have your account pulled up, I see your eligible for a replacement device, would you like that to be mailed or store pick up?"
  );
  let device = prompt("Mail or Store pick up? ");
  if (device === "mail") {
    console.log("Got it Mail.");
    let street = prompt("Please enter your street address ");
    let city = prompt("Please enter your city ");
    let state = prompt("Please enter your state ");
    let zip = prompt("Please enter your zipcode ");
    console.log("Is", street, city, state, zip, "correct?");
    let verifyAddress = prompt("Yes, No ");
    if (verifyAddress === "yes") {
      console.log(
        "Ok great please expect to receive an email with tracking information within the next 24 hours."
      );
    } else {
      let newStreet = prompt("Please enter your street address ");
      let newCity = prompt("Please enter your city ");
      let newState = prompt("Please enter your state ");
      let newZip = prompt("Please enter your zipcode ");
      console.log("Is", newStreet, newCity, newState, newZip, "correct?");
      let verifyNewAddress = prompt("Yes, No ");
      if (verifyNewAddress === "yes") {
        console.log(
          "Ok great please expect to receive an email with tracking information within the next 24 hours."
        );
      } else {
        console.log(
          "Please hold while i connect you to a live agent for further help."
        );
      }
    }
  }
  if (device === "store pick up") {
    console.log(
      "Got it, store pick up. Ok I have put an order in at your nearest store from your address on your account, if you would like to change stores please go to your dashboard and select change address."
    );
  }
}
if (service === "exit") {
  console.log("Exit got it.");
}
let survey = prompt("Would you like to take part in a 3 question survey? ");
if (survey === "yes") {
  console.log("Ok great!");
  let question1 = prompt(
    "On a scale of 1-10 how likley are you to refer a friend to our virtual help desk? "
  );
  console.log(question1, "Thank you!");
  let question2 = prompt(
    "On a scale of 1-5 how satisfied are you with the help you recieved today? "
  );
  console.log(question2, "Thank you!");
  let question3 = prompt(
    "Do you feel your problem was solved today? (Yes, No) "
  );
  console.log(question3, "Thank you!");
} else {
  console.log("Ok thank you.");
}
console.log("Thank you for using the virtual help desk, have a great day!");
