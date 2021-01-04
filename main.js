//1.  I am creating a constant variable with characters that will be used to create the codes later
const chars = 'ABCDEFGHIJK123456789';

//2.  I download the button and section
const btn = document.querySelector('button');
const section = document.querySelector('section');
//3. I create constant variables containing the number of codes that will be generated and how many characters each code will consist of.
const codesNumber = 1000;
const charsNumber = 10;

//5. I'm building a declared function
const codesGenerator = () =>{
//6. I use loops for this
for(let i =0; i<codesNumber; i++ ){
//10. I'm creating a code variable
let code = ""; 

//11 It then uses another for loop inside the previous loop to randomly generate 10 characters to make up the code.
for (let i =0; i<charsNumber; i++){
// 12. I create a constant variable Index and assigns it to the method Math and multiplied by 20, because that's how many elements the variable chars has to hold a pool of characters.
   const index = Math.floor(Math.random()*20);
// 13. I assign variable chars to the constant variable code using incrementation at the same time
    code += chars[index]
}
//7. I am creating a constant variable div
const div = document.createElement('div');
//8. I assign to constant variable div the value of constant variable code
div.textContent = code;
//9. Then I nest the div inside the section
section.appendChild(div);

}
}


//4. I set the listening on on the button and assign a declared function to it
btn.addEventListener('click', codesGenerator);