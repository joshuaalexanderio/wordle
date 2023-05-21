const gridContainer = document.querySelector(".grid-container");
const correctAnswer = "bagel";
function nextBox() {return document.activeElement.parentElement.nextElementSibling; } 
function nextInput() {return document.activeElement.parentElement.nextElementSibling.firstChild;}
function previousBox() {return document.activeElement.parentElement.previousElementSibling;}
function previousInput() {return document.activeElement.parentElement.previousElementSibling.firstChild;}
function currentInput() {return document.activeElement;}
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  function doAll(tagName, action) {
    document.querySelectorAll(tagName).forEach(action);
}

function main() {
    gridContainer.addEventListener("keydown", (event) => {
        
        
    })
    gridContainer.addEventListener("keydown", (event) => {
        // Handle letters
        if (isLetter(event.key)) {

            // Focus next box just after key is pressed if not end of line
            setTimeout(() => {
                if(!(nextBox() === null)) {
                    nextInput().focus();
                }
            }, 0.1);
        }
        // Handle backspace
        else if (event.key === "Backspace") {
            setTimeout(() => {
                previousInput().focus();   
            }, .1);

        }
        // Handle enter
        else if (event.key === "Enter") {
            // Build word from 1st row letters
            let tempArr = Array.prototype.slice.call(document.querySelector('.row1').children);
            let fullWord = "";
            for (i = 0; i < tempArr.length; i++) {
                fullWord += tempArr[i].firstChild.value;
                
            }
            // If full word matches correct answer, turn all boxes green
            if (fullWord === correctAnswer) {
                document.querySelectorAll(".box1").forEach(box => box.firstElementChild.style.backgroundColor = "green")
            }
            // If letter matches, turn the box green
            else {
                let letters = document.querySelectorAll(".box1");
                for (let i = 0; i < fullWord.length; i++) {
                    if (letters[i].firstElementChild.value === correctAnswer[i]) {
                        letters[i].firstElementChild.style.backgroundColor = "green";
                    }
                }
            }
        }
        // Handle not letter, backspace or enter
        else{
            event.preventDefault();
            return;
        }
    });

}
main();

