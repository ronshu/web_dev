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

/* Swiper Plugin Options */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',  //슬라이더 방향. 디폴트 : 가로
  loop: true, //슬라이더 단방향 무한 반복
  slidesPerView: 4,
  spaceBetween: 20,

  // If we need pagination
  // pagination: { //슬라이더 인디케이터
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

function cutText(text, leng) {
  const sl_titles = document.querySelectorAll(text);

  sl_titles.forEach((txt) => {
    const sl_txt_str = txt.textContent;

    if (sl_txt_str.length > leng) {
      txt.textContent = sl_txt_str.slice(0, leng) + '...';
    } else {
      txt.textContent = sl_txt_str;
    }
  });
}

cutText('.text-top h3', 9); //title
cutText('.text-middle p', 50); //description

const sl_title_str = sl_title.textContent;

// 자바스크립트 글자 자르기 : https://gent.tistory.com/414

// 다른예시) 삼항연산자 : 조건식 ? true 일 때 실행 : false일 때 실행
// sl_title_str.length > 9
//   ? (sl_title.textContent = sl_title_str.slice(0, 9) + '...')
//   : (sl_title.textContent = sl_title_str);
