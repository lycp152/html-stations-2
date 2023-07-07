function displayList() {
  // <div id="fruits">要素を取得
  const fruitsDiv = document.getElementById('fruits');
  // <p>要素のリストを取得
  const paragraphs = fruitsDiv.getElementsByTagName('p');
  // 新しい<ul>要素を作成
  const list = document.createElement('ul');
  // <p>要素を順番に処理
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    // 新しい<li>要素を作成
    const listItem = document.createElement('li');
    // <p>要素のテキストコンテンツを<li>要素にコピー
    listItem.textContent = paragraph.textContent;
    // <li>要素を<ul>要素に追加
    list.appendChild(listItem);
  }

  // fruitsDiv要素内の内容を一度クリアし、新たに作成したリストを追加
  fruitsDiv.innerHTML = '';
  fruitsDiv.appendChild(list);
}
