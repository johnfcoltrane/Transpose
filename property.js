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
	alert("Saved:"+g_properties.fontsize);

}

/***
 * ���[�h
 */
function fnLoad() {
	g_properties.fontsize = parseInt(window.localStorage.getItem('fontsize'));
	fnUpdateFontSize('txt1', 0);
}
