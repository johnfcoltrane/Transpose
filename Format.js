/***
 * formatLine
 */
function formatLine(x) {
var buf = "";
var pos=0;
	for(var i=0; i<x.length; i++) {
		if (x.substr(i, 1)=='|') {
			//print('i='+i);
			var r;
			if (r=pos%8>0) {
				var n = 8 - r;
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

