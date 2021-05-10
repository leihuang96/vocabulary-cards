import vocabularyObjectArray from './data.js';

//把html的内容抓取过来
const emojis = document.getElementById('emoji');
const words = document.getElementById('word');
const definitions = document.getElementById('definition');
const examples = document.getElementById('example');
const heartIcons = document.getElementById('heartIcon');
const heartBtns = document.getElementById('heartBtn');
const soundBtns = document.getElementById('soundbtn');
const sounds = document.getElementById('sound');
const leftBtn = document.getElementById('previous');
const rightBtn = document.getElementById('next');
const bgImg = document.getElementById('body');

//给html填上内容,加载卡片
let i = 0;
loadcards();
function loadcards() {
  const currentVocabulary = vocabularyObjectArray[i];
  emojis.innerText = currentVocabulary.emoji;
  words.innerText = currentVocabulary.word;
  definitions.innerText = currentVocabulary.definition;
  examples.innerText = currentVocabulary.example;
  sounds.src = currentVocabulary.pronounce;
  bgImg.style =
    "background-image: url('" +
    currentVocabulary.image +
    "'); background-repeat:repeat;background-attachment:fixed;background-position:left center;background-size: 50%;";
  //检查收藏状态
  checkStatus();
  function checkStatus() {
    if (currentVocabulary.star == false) {
      heartIcons.classList.remove('fas');
      heartIcons.classList.add('far');
    } else {
      heartIcons.classList.add('fas');
      heartIcons.classList.remove('far');
    }
  }
}

//卡片的左右切换
rightBtn.addEventListener('click', () => {
  i++;
  ending();
  loadcards();
});

leftBtn.addEventListener('click', () => {
  i--;
  ending();
  loadcards();
});

function ending() {
  if (i > vocabularyObjectArray.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = vocabularyObjectArray.length - 1;
  }
}

//点击声音按钮发声音
soundBtns.addEventListener('click', () => {
  sounds.play();
});

//收藏
heartBtns.addEventListener('click', () => {
  const currentVocabulary = vocabularyObjectArray[i];
  if (currentVocabulary.star == false) {
    currentVocabulary.saveIt(true);
  } else {
    currentVocabulary.saveIt(false);
  }
  loadcards();
});
