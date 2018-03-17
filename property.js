/***
 * フォントサイズ保存
 */
//var g_fontsize = 24;
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
	//g_fontsize += n;
	g_properties.fontsize += n;
	//document.getElementById(target).style.fontSize = (g_fontsize)+'pt';
	document.getElementById(target).style.fontSize = (g_properties.fontsize)+'pt';
	//alert(x);
}

/***
 * セーブ
 */
function fnSave() {

	//window.localStorage.setItem('fontsize', g_fontsize);
	window.localStorage.setItem('fontsize', g_properties.fontsize);
	//alert("Saved:"+g_fontsize);
	alert("Saved:"+g_properties.fontsize);

}

/***
 * ロード
 */
function fnLoad() {
	//g_fontsize = parseInt(window.localStorage.getItem('fontsize'));
	g_properties.fontsize = parseInt(window.localStorage.getItem('fontsize'));
	//alert("Loaded:"+g_fontsize);
	fnUpdateFontSize('txt1', 0);
}
