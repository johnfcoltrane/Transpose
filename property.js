/***
 * �t�H���g�T�C�Y�ۑ�
 */
var g_properties = new Properties();

/***
 * �f�[�^�ۑ��p�N���X
 */
function Properties() {
	this.fontsize = 24;
	this.text = '';
}

/***
 * �t�H���g�T�C�Y���X�V
 */
function fnUpdateFontSize(target, n){
	//alert(target);
	//alert(document.getElementById(target).style);
	g_properties.fontsize += n;
	document.getElementById(target).style.fontSize = (g_properties.fontsize)+'pt';
}

/***
 * �Z�[�u
 */
function fnSave() {

	window.localStorage.setItem('fontsize', g_properties.fontsize);
	
	g_properties.textarea = document.getElementById('txt1').value;
	window.localStorage.setItem('textarea', g_properties.textarea);
	
	alert("Saved:"+g_properties.textarea);
	//var t = window.localStorage.getItem('textarea');
	//alert('t='+t);

}
function fnTest1() {
	//alert('Test1');
	var t = window.localStorage.getItem('textarea');
	alert('Test1 t='+t);
}
/***
 * ���[�h
 */
function fnLoad() {
	g_properties.fontsize = parseInt(window.localStorage.getItem('fontsize'));
	g_properties.textarea = window.localStorage.getItem('textarea');
	//alert('text:'+g_properties.textarea);
	fnUpdateFontSize('txt1', 0);
	document.getElementById('txt1').value = g_properties.textarea;
}
