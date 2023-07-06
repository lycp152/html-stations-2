function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(check.checked) {
    defaultBackgroundColor = document.getElementById('text').style.backgroundColor;
    document.getElementById('text').style.backgroundColor = 'red';
  } else {
    document.getElementById('text').style.backgroundColor = defaultBackgroundColor;
  }
}
