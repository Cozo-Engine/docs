var dark = false;
var cookie;

function verifyPassword() {
    let pass1 = document.getElementById("password").value;
    let pass2 = "if you're seeing this, you're smort";
    let match = true;
    if (pass1 != pass2) {
      alert("Passwords Do not match");
      document.getElementById("password").style.borderColor = "#ff0000";
      match = false;
    }
    else {
        alert("Passwords match.");
        window.location.href("pages/main.html");
    }
    return match;
}

function includeHTML() {
  	var z, i, elmnt, file, xhttp;
  	/* Loop through a collection of all HTML elements: */
  	z = document.getElementsByTagName("*");
  	for (i = 0; i < z.length; i++) {
    	elmnt = z[i];
    	/*search for elements with a certain atrribute:*/
    	file = elmnt.getAttribute("include-html");
    	if (file) {
      		/* Make an HTTP request using the attribute value as the file name: */
      		xhttp = new XMLHttpRequest();
      		xhttp.onreadystatechange = function() {
        		if (this.readyState == 4) {
        			if (this.status == 200) {elmnt.innerHTML = this.responseText;}
        			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
        			/* Remove the attribute, and call this function once more: */
        			elmnt.removeAttribute("include-html");
        			includeHTML();
        		}
      		}
      		xhttp.open("GET", file, true);
      		xhttp.send();
      		/* Exit the function: */
      		return;
    	}
  	}
}

/* START --- STYLE SECTION */

/* Open the sidenav */
function openNav() {
	document.getElementById("hamburger").style.color = "#AAAAAA";
	document.getElementById("hamburger").style.left = "40px";
	document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("a").style.borderLeft = "4px solid #A0A0A0";
	document.getElementById("b").style.borderLeft = "4px solid #A0A0A0";
	document.getElementById("c").style.borderLeft = "4px solid #A0A0A0";
	document.getElementById("d").style.borderLeft = "4px solid #A0A0A0";
}

/* Close/hide the sidenav */
function closeNav() {
	document.getElementById("hamburger").style.color = "#fff";
	document.getElementById("hamburger").style.left = "0px";
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("a").style.borderLeft = "0px solid #00000000";
	document.getElementById("b").style.borderLeft = "0px solid #00000000";
	document.getElementById("c").style.borderLeft = "0px solid #00000000";
	document.getElementById("d").style.borderLeft = "0px solid #00000000";
}

/* END   --- STYLE SECTION */

/* START --- COOKIES SECTION */ //MMmMMMmMMMmm cOoKiEs
/*
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}*/

/* END  --- COOKIES SECTION */ //NOOOOO COOKIES

function themeSwitch() {
	var body = document.body;

	setCookie("ae", "eeeee", 0.0001);

	alert(getCookie("ae"));

	/*if(dark = true)
	{
		body.classList.remove("dark");
		body.classList.toggle("white");
	} else {
		body.classList.remove("white");
		body.classList.toggle("dark");
	}*/
} 
