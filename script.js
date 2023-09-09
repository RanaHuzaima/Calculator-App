let string = "";
let buttons = document.querySelectorAll('.val');
Array.from(buttons).forEach((val)=>{
    val.addEventListener('click', (button)=>{
        if(button.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('#screen').value = string;
        }
        else if(button.target.innerHTML == "AC"){
            string = ""
            document.querySelector('#screen').value = string;
        }
        else{
            string += button.target.innerHTML;
            document.querySelector('#screen').value = string;
        }
    })
})