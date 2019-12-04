var text = ["write code...    ", "makes moblie apps...     ","write automation scripts...    ", "makes web apps...     ","solve puzzles...    "];
var container = document.getElementById("hello-text-sub");
var i = 0;
var j = 0;
setInterval(function () {
	var chars = text[j].split('');
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
		i = 0;
		j = (j + 1) % 5;
        container.innerHTML = "<br>I love to ";
    }
}, 90); 
