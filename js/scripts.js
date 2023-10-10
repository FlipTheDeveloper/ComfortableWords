const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');

class FingerJurisdiction
{
    constructor(hand, finger, keys){
        this.hand = hand;
        this.finger = finger;
        this.keys = keys;
    }
}

class UncomfortableKeystrokeResult
{
    constructor(easeToType, numberOfDifficultKeystrokes, difficultKeystrokes){
        this.easeToType = easeToType,
        this.numberOfDifficultKeystrokes = numberOfDifficultKeystrokes;
        this.difficultKeystrokes = difficultKeystrokes;
    }
}

let char = 's';

let jurisdictions = [
    // Left Hand
    // Left Pinky Finger.
    new FingerJurisdiction("left", "pinky", ["q","a","z"]),
    // Left Ring Finger.
    new FingerJurisdiction("left", "ring", ["Q", "A", "Z", "w", "s", "x"]),
    // Left Middle Finger.
    new FingerJurisdiction("left", "middle", ["e", "d", "W", "S", "X", "E"]),
    // Left Pointer Finger.
    new FingerJurisdiction("left", "pointer", ["r", "f", "v", "t", "g", "c", "R", "F", "V", "T", "G", "C", "D"]),
    // Left Thumb Finger.
    new FingerJurisdiction("left", "Thumb", [" "]),

    // Right Hand
    // Right Pinky Finger.
    new FingerJurisdiction("right", "pinky", []),
    // Right Ring Finger.
    new FingerJurisdiction("right", "ring", ["l", "o", "p", "L", "O", "P"]),
    // Right Middle Finger.
    new FingerJurisdiction("right", "middle", ["u", "k", "i", "U", "K", "I"]),
    // Right Pointer Finger.
    new FingerJurisdiction("right", "pointer", ["u", "j", "n", "h", "y", "b", "U", "J", "N", "H", "Y", "B", "m", "M"]),
    // Right Thumb Finger.
    new FingerJurisdiction("right", "thumb", [" "]),
];

function onChangeHandler() {
  // Text input
  let textInput = document.getElementById("floatingInput").value;

  console.log("value is :" + textInput);
  var uncomfortableKeystrokeResult = calculateUncomfortable(textInput);

  displayResults(uncomfortableKeystrokeResult);
}

function displayResults(uncomfortableKeystrokeResult) {

  // Fields
  let easeToType = document.getElementById("easeToType");
  let numberOfDifficultKeystrokes = document.getElementById("numberOfDifficultKeystrokes");
  let difficultKeystrokes = document.getElementById("difficultKeystrokes");
  
  console.log(uncomfortableKeystrokeResult);

  easeToType.innerHTML = uncomfortableKeystrokeResult.easeToType == 1 ? "100%" : (uncomfortableKeystrokeResult.easeToType + "").slice(2, 4) + "%";
  numberOfDifficultKeystrokes.innerHTML = uncomfortableKeystrokeResult.numberOfDifficultKeystrokes + "";
  difficultKeystrokes.innerHTML = uncomfortableKeystrokeResult.difficultKeystrokes + "";
}

function calculateUncomfortable(textInput) {
  // Variables.
  let previousJurisdiction = new FingerJurisdiction("", "", []);
  let numberOfUncomfortableKeystrokes = 0;
  let previousLetter = "";
  let uncomfortableKeystrokes = "";

  // For every letter in testString.
  for (let letterIndex = 0; letterIndex < textInput.length; letterIndex++) {
    const letter = textInput[letterIndex];

    // Boolean for whether we found the letter in any jurisdiction.
    let foundJurisdiction = false;

    // In every jurisdiction.
    for (
      let jurisdictionIndex = 0;
      jurisdictionIndex < jurisdictions.length;
      jurisdictionIndex++
    ) {
      const jurisdiction = jurisdictions[jurisdictionIndex];

      // If the jurisdiction we are on contains the letter we are looking for.
      if (jurisdiction.keys.includes(letter)) {
        foundJurisdiction = true;

        // If the this is the same as the previous jurisdiction then this is an uncomfortable keystroke.
        if (previousLetter == letter) {
          numberOfUncomfortableKeystrokes += 0.5;
          uncomfortableKeystrokes += previousLetter + " => " + letter + "\n";
        } else if (
          previousJurisdiction.hand == jurisdiction.hand &&
          previousJurisdiction.finger == jurisdiction.finger
        ) {
          numberOfUncomfortableKeystrokes++;
          uncomfortableKeystrokes += previousLetter + " => " + letter + "\n";
        }

        previousJurisdiction = jurisdiction;
        previousLetter = letter;
        break;
      }
    }

    if (!foundJurisdiction) {
      console.log("COULD NOT FIND LETTER " + letter);
    }
  }

  easeToType = 1 - (numberOfUncomfortableKeystrokes / (textInput.length - 1));
  console.log(
    "Number of Uncomfortable Keystrokes: " + numberOfUncomfortableKeystrokes
  );
  console.log("UncomfortableKeystrokes: \n" + uncomfortableKeystrokes);

  var uncomfortableKeystrokeResult = (new UncomfortableKeystrokeResult(
    easeToType,
    numberOfUncomfortableKeystrokes,
    uncomfortableKeystrokes
  ));

  return uncomfortableKeystrokeResult;
}

