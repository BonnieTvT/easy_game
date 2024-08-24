// if,else -> nuhtsul shalgah
// tentsuu bnu? ih bnu? baga bnu?
var age=18;
// >, <, >=, <=, ==, !=
if(age>=18){
	console.log("Ta nasand hureegui baina");
}else{
	console.log("Ta nasand hursen baina");
}
// 1. 2 toonii ih bagiig oloh code bichne uu
var too1=10, too2=2;
if(too1>too2){
	console.log(too1+" ih baina. "+too2+" baga baina.");
}else if(too1=too2){
	console.log("2 too tentsuu baina");
}else{
	console.log(too2+" ih baina. "+too1+" baga baina.");
}
// 2. Toog tegsh esvel sondgoi esehiiig oloh code bichne uu
var too=10; // 5%2=1, 4%2=0
if(too%2==1){
	console.log("Sondgoi too");
}else{
	console.log("Tegsh too");
}
// 3. Toog eyreg esvel sorog esehiig oloh code bichne uu
var too3=-1;
if(too3>0){
	console.log("Eyreg too");
}else{
	console.log("Sorog too");
}
// && -> and/bas,  || -> or/esvel
var nas=25;
var huis="emegtei";
if(nas>17 && huis=="emegtei"){
	console.log("Nasand hursen emegtei");
}else if(nas<18 && huis=="emegtei"){
	console.log("Nasand hureegui emegtei");
}else{
	console.log("Nasand hureegui bas emegtei bish");
}
// 4. 3 toonii ihiig oloh code bichne uu
var num1=25, num2=8, num3=20;
if(num1>num2 && num1>num3){
	console.log("too1 ih");
}else if(num2>num1 && num2>num3){
	console.log("too2 ih");
}else if(num3>num1 && num3>num2){
	console.log("too3 ih");
}else{
	console.log("Buh too tentsuu baina");
}
// 25 5 esvel 2t huvaagdahu?
var number=25;
if(number%5==0 || number%2==0){
	console.log("Ene too 5 esvel 2t huvaagdana");
}else{
	console.log(number+" too 5 esvel 2iin alind ni ch havaagdahgui");
}
// Garaas dun/0-100/ oruulahad hargalzah unelgeeg gargaj ireh code bichne uu. 0-59 F, 60-69 D, 70-79 C, 80-89 B, 90-100 A
// 0ees baga 100aas ih dun oruulval tiim dun baihgui gej garch irne
// var dun=+prompt("Dun oruulna uu");
// if(dun>=0 && dun<=59){
	// console.log("F");
// }else if(dun>=60 && dun<=69){
	// console.log("D");
// }else if(dun>=70 && dun<=79){
	// console.log("C");
// }else if(dun>=80 && dun<=89){
	// console.log("B");
// }else if(dun>=90 && dun<=100){
	// console.log("A");
// }else{
	// console.log("Tiim dun baihgui");
// }
// alert,prompt,if,else
// alert("Ta oid sersen. Gertee harih zamaa olvol ta hojno");
// alert("Tanii zamd 2 salaa zam taarlaa. zuun/baruun");
// var choice=prompt("zuun/baruun?");
// if(choice=="zuun" || choice=="Zuun"){
	// alert("Baavgai taarlaa. Ta zugtah uu esvel dairahuu?");
	// var choice2=prompt("zugtah/dairah?");
	// if(choice2=="zugtah" || choice2=="Zugtah"){
		// alert("Ta zugtaaj gertee harilaa. Hojloo");
	// }else if(choice2=="dairah" || choice2=="Dairah"){
		// alert("Ta baavgaid tsohiulj uhlee");
	// }
// }else if(choice=="baruun"){
	// alert("Ta chonotoi taaraad uhlee");
// }else{
	// console.log("Ta buruu zam oruulsan baina. Dahij ehelne uu");
// }

alert("The princess is trapped in a castle. Answer the following three questions right to save the princess!");	
alert("Q1) How many colours are there in a rainbow?");
var ice=prompt("Seven or Eight?");
if(ice=="Seven" || ice=="seven" || ice=="7"){
	alert("Q2) How many sides does a triangle have?");
	var ice2=prompt("Two or Three");
	if(ice2=="Three" || ice2=="three" || ice2=="3"){
		alert("Q3) Which continent is the largest?");
		var ice3=prompt("Europe or Asia?");
		if(ice3=="Asia" || ice3=="asia"){
			alert("Congratulations! You saved the princess! :)");
		}else if(ice3=="Europe" || ice3=="europe"){
			alert("Wrong answer. Try again :(");
		}
	}else if(ice2=="Two" || ice2=="two" || ice2=="2"){
		alert("Wrong answer. Try again :(");
	}
}else if(ice=="Eight" || ice=="eight" || ice=="8"){
	alert("Wrong answer. Try again :(");
}else{
	alert("Different answer. Try again :(");
}