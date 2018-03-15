/***
 * フォントサイズ保存
 */
var g_fontsize = 24;

/***
 * フォントサイズを更新
 */
function fnUpdateFontSize(target, n){
	//alert(target);
	//alert(document.getElementById(target).style);
	g_fontsize += n;
	document.getElementById(target).style.fontSize = (g_fontsize)+'pt';
	//alert(x);
}

/***
 * セーブ
 */
function fnSave() {

	window.localStorage.setItem('fontsize', g_fontsize);
	alert("Saved:"+g_fontsize);

}

/***
 * ロード
 */
function fnLoad() {
	g_fontsize = parseInt(window.localStorage.getItem('fontsize'));
	//alert("Loaded:"+g_fontsize);
	fnUpdateFontSize('txt1', 0);
}
