// Hero Section Style
const scrollDownBtn = document.querySelector('.scroll-down');
const targetSection = document.querySelector('.hollow');

scrollDownBtn.addEventListener('click', function () {
  targetSection.scrollIntoView({ behavior: 'smooth' }); //scrollIntoView({ behavior: 'smooth' }) 함수를 이용하여, scrollDownBtn을 누르면 targetSection으로 이동
  //scrollIntoView({ behavior: 'smooth' })는 JavaScript에서 특정 요소를 부드럽게 스크롤하여 화면에 보여주는 함수입니다.
});

// * * *

// Header Section Style
const menuBtn = document.querySelector('.icons .menu-icon');
const menuBtnIcon = document.querySelector('.icons .menu-icon i');
const nav = document.querySelector('.nav');
const navHeight = nav.scrollHeight;

menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  // classList.add : 클래스 추가
  // classList.remove : 클래스 제거
  // classList.toggle : 클래스 토글(추가, 제거, 추가, 제거 반복)

  if (this.classList.contains('active')) {
    menuBtnIcon.setAttribute('class', 'ri-close-line');
    nav.style.height = `${navHeight}px`;
  } else {
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
    nav.style.height = 0;
  }
  // getAttribute : 속성 값 가져오기
  // ex : <div class="a"></div> -> div.getAttribute('class') -> 'a' 출력
  // setAttribute : 속성 값 변경하기
  // ex : <div class="a"></div> -> div.getAttribute('class','b') -> <div class="b"></div> 로 변경됨.
});
