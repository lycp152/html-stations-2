// コンテンツとリスト要素を取得
const fruits = document.getElementById('fruits');
const listFruits = document.getElementById('listFruits');

toggleButton.displayList('click', function() {
  const paragraphs = content.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    const listItem = document.createElement('li');
    listItem.textContent = paragraph.textContent;
    listContent.appendChild(listItem);
  });
});