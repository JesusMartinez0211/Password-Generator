document.getElementById('generate').addEventListener('click',()=>{
    const length=parseInt(document.getElementById('length').value);
    const includeLowerCase=document.getElementById('includeLowerCase').checked;
    const includeUpperCase=document.getElementById('includeUpperCase').checked;
    const includeNumbers=document.getElementById('includeNumbers').checked;
    const includeSymbols=document.getElementById('includeSymbols').checked;
    const password=generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers, includeSymbols);
    document.getElementById('password').textContent=password;
})

function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#%&/()=<>?+-;:';

    let chartPool="";

    if(includeLowerCase)chartPool+=lowerCaseChars;
    if(includeUpperCase)chartPool+=uppercaseChars;
    if(includeNumbers)chartPool+=numberChars;
    if(includeSymbols)chartPool+=symbolChars;

    if(!chartPool) return 'Selecciona al menos un tipo de carácter';

    let password='';

    for(let i=0; i<length; i++){
        const randomIndex=Math.floor(Math.random()*chartPool.length);
        password+=chartPool[randomIndex];
    }
    return password;
}