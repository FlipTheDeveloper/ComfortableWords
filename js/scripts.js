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
    constructor(numberOfUncomfortableKeystrokes, uncomfortableKeystrokes){
        this.numberOfUncomfortableKeystrokes = numberOfUncomfortableKeystrokes;
        this.uncomfortableKeystrokes = uncomfortableKeystrokes;
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

(() => {
    calculateUncomfortable();
})();

function calculateUncomfortable(textInput = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
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
        for (let jurisdictionIndex = 0; jurisdictionIndex < jurisdictions.length; jurisdictionIndex++) {
            const jurisdiction = jurisdictions[jurisdictionIndex];
            
            // If the jurisdiction we are on contains the letter we are looking for.
            if (jurisdiction.keys.includes(letter)) 
            {
                foundJurisdiction = true;

                // If the this is the same as the previous jurisdiction then this is an uncomfortable keystroke.
                if (previousLetter == letter) {
                    numberOfUncomfortableKeystrokes += 0.5;
                }
                else if (previousJurisdiction.hand == jurisdiction.hand && previousJurisdiction.finger == jurisdiction.finger) 
                {
                    numberOfUncomfortableKeystrokes++;
                    uncomfortableKeystrokes += (previousLetter + " => " + letter + "\n");
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

    console.log("Number of Uncomfortable Keystrokes: " + numberOfUncomfortableKeystrokes);
    console.log("UncomfortableKeystrokes: \n" + uncomfortableKeystrokes);

    return new UncomfortableKeystrokeResult(numberOfUncomfortableKeystrokes, uncomfortableKeystrokes);
}

