const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstEl = document.getElementById('first-el')
const secondEl =  document.getElementById('second-el')

const generateBtn = document.getElementById('generate-btn')
const lengthPicker = document.getElementById('length')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    btn.value = lengthPicker.value
})


generateBtn.addEventListener('click', () => {
    firstEl.textContent = ''
    secondEl.textContent = ''
    randomPasswords()
})

// Creating the function that handles the logic of generating the random characters.
function randomPasswords(){
    if(lengthPicker.value){
            for (let i = 0; i < btn.value; i++){
            let generatedOne = Math.floor(Math.random() * characters.length)
            let generatedTwo =  Math.floor(Math.random() * characters.length)

            firstEl.textContent += `${characters[generatedOne]}`
            secondEl.textContent += `${characters[generatedTwo]}`
        }
    }else{
        for (let i = 0; i < 15; i++){
        let generatedOne = Math.floor(Math.random() * characters.length)
        let generatedTwo =  Math.floor(Math.random() * characters.length)

        firstEl.textContent += `${characters[generatedOne]}`
        secondEl.textContent += `${characters[generatedTwo]}`
    }
    }
    
}

function passwordLength(){

}