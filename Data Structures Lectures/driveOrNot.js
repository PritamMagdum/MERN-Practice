// ^ Given a set of three inputs you should determine if you should be allowed to drive or not (inputs are boolean)
{
  let licence = true;
  let tired = false;
  let sobar = false;

  if (licence && sobar && tired) {
    console.log("You are tired and we are not allowed to drive");
  } else if (licence && sobar && !tired) {
    console.log("You can drive");
  } else if (licence && !sobar && tired) {
    console.log("You are drunk and we are not allowed to drive");
  } else if (!licence && sobar && !tired) {
    console.log("You dont have licence and we are not allowed to drive");
  } else {
    console.log("You are tired and drunk so we are not allowed to drive");
  }
}
