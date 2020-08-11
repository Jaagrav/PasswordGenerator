let lowerCase = [], upperCase = [], specialChars = [], numericChars = [], passwordLength = 9;

for(let i = 0 ; i <= 255 ; i++){
	if(i>=65 && i <= 90)
		upperCase.push(String.fromCharCode(i));
	else if(i >= 97 && i <= 122)
		lowerCase.push(String.fromCharCode(i));
	else if(i >= 48 && i <= 57)
		numericChars.push(String.fromCharCode(i));
}

specialChars = "s ~ ` ! @ # $ % ^ & * + = - [ ] ' ; , / \\ { } | \" : < > ? ( ) . _".split(" ");

document.getElementById("length").addEventListener("input",()=>{
	passwordLength = document.getElementById("length").value;
	document.getElementById("lengthDisplay").innerHTML = "Length of Password: "+ document.getElementById("length").value;
})

document.querySelector(".generate").addEventListener('click',()=>{
	let characterArray = [], generatedPassword = "";
	
	if(document.querySelector(".LC").checked) characterArray = characterArray.concat(lowerCase);
	if(document.querySelector(".UC").checked) characterArray = characterArray.concat(upperCase);
	if(document.querySelector(".SC").checked) characterArray = characterArray.concat(specialChars);
	if(document.querySelector(".NC").checked) characterArray = characterArray.concat(numericChars);
	
	for(let i = 0 ; i < passwordLength ; i++)
		generatedPassword += characterArray[parseInt(Math.random()*characterArray.length)];
	
	if(characterArray.length != 0)
	document.querySelector(".output").textContent = generatedPassword;
	console.log(generatedPassword, generatedPassword.length);
})