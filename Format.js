/***
 * formatLine
 */
function formatLine(x) {
var buf = "";
var pos=0;
var nn = 8;
	for(var i=0; i<x.length; i++) {
		if (x.substr(i, 1)=='|') {
			//print('i='+i);
			var r = pos%nn;
			if (r>0) {
				var n = nn - r;
				for(var j=0; j<n; j++) {
					buf += ' ';
					pos+=1;
				}
			}
			buf += x.substr(i, 1);
			pos+=1;
		}
		else {
			buf += x.substr(i, 1);
			pos+=1;
		}
	}
	//print("line="+buf);
	return(buf);
}

/***
 * formatText
 */
function formatText(t) {
	var a = t.split('\n');
	var buf = '';
	//print('');
	for(var i=0; i<a.length; i++) {
		//print('a[]='+a[i]);
		buf += formatLine(a[i])+"\n";
	}
	return(buf);
}

function formatTextarea(nm) {
	document.getElementById(nm).value=formatText(document.getElementById(nm).value);
}
