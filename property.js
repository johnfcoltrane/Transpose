/***
 * フォントサイズ保存
 */
var g_properties = new Properties();

/***
 * データ保存用クラス
 */
function Properties() {
	this.fontsize = 24;
	this.text = '';
}

/***
 * フォントサイズを更新
 */
function fnUpdateFontSize(target, n){
	//alert(target);
	//alert(document.getElementById(target).style);
	g_properties.fontsize += n;
	document.getElementById(target).style.fontSize = (g_properties.fontsize)+'pt';
}

/***
 * セーブ
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
 * ロード
 */
function fnLoad() {
	g_properties.fontsize = parseInt(window.localStorage.getItem('fontsize'));
	g_properties.textarea = window.localStorage.getItem('textarea');
	//alert('text:'+g_properties.textarea);
	fnUpdateFontSize('txt1', 0);
	document.getElementById('txt1').value = g_properties.textarea;
}
