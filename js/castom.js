"use Strict";


let timeShow = document.getElementById('time');
let timeMsShow = document.getElementById('timeMS');

let btnOn = document.getElementById("btnOn");
let btnOff = document.getElementById("btnOff");

let resetBtn = document.getElementById("resetBtn");

let miliSecend = 0;
let secend = 0;
let minite = 0;

let stopTime = false;

function clickOn() {
	stopTime = true;
	msFunction();
	allFunction();
	btnOn.style.display = "none";
	btnOff.style.display = "block";
}


function msFunction() {
	if (stopTime == true) {
		miliSecend = parseInt(miliSecend);

		miliSecend += 1;
		if (miliSecend == 100) {
			miliSecend = 0;
		}
		if (miliSecend < 10) {
			miliSecend = "0" + miliSecend;
		}

		timeMsShow.innerText = miliSecend;
		setTimeout("msFunction()", 10);
	}
}

function allFunction() {
	if (stopTime == true) {
		secend = parseInt(secend);
		minite = parseInt(minite);

		secend = secend + 1;
		if (secend == 60) {
			secend = 0;
			minite = minite + 1;
		}
		if (secend < 10) {
			secend = "0" + secend;
		}
		if (minite < 10) {
			minite = "0" + minite;
		}

		timeShow.innerText = minite + ":" + secend;
		setTimeout("allFunction()", 1000);
	}
}


function clickOff() {
	stopTime = false;
	btnOff.style.display = "none";
	btnOn.style.display = "block";
}

resetBtn.addEventListener("click", function() {
	stopTime = false;
	timeShow.innerText = "00:00";
	timeMsShow.innerText = "00";
	btnOn.style.display = "block";
	btnOff.style.display = "none";
	secend = 0;
	minite = 0;
	miliSecend = 0;
})