/***
 * �t�H���g�T�C�Y�ۑ�
 */
var g_fontsize = 24;

/***
 * �t�H���g�T�C�Y���X�V
 */
function fnUpdateFontSize(target, n){
	//alert(target);
	//alert(document.getElementById(target).style);
	g_fontsize += n;
	document.getElementById(target).style.fontSize = (g_fontsize)+'pt';
	//alert(x);
}

/***
 * �Z�[�u
 */
function fnSave() {

	window.localStorage.setItem('fontsize', g_fontsize);
	alert("Saved:"+g_fontsize);

}

/***
 * ���[�h
 */
function fnLoad() {
	g_fontsize = parseInt(window.localStorage.getItem('fontsize'));
	//alert("Loaded:"+g_fontsize);
	fnUpdateFontSize('txt1', 0);
}
