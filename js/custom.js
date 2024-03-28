// 스크롤 다운 버튼 클릭 시 두 번째 섹션으로 이동
const scrollDownBtn = document.querySelector('.scroll-down'); // scroll-down 요소 저장
const targetSection = document.querySelector('.hollow'); // hollow 요소 저장

scrollDownBtn.addEventListener('click', function () {
  targetSection.scrollIntoView({ behavior: 'smooth' }); // scrollIntoView 메소드를 사용하여 해당 요소로 스크롤 이동
});

// 메뉴 버튼 기능 구현
const menuBtn = document.querySelector('.icons .menu-icon');
const menuBtnIcon = document.querySelector('.icons .menu-icon i');
const nav = document.querySelector('nav');
const navHeight = nav.scrollHeight;

menuBtn.addEventListener('click', function (e) {
  e.preventDefault(); // a 태그의 기본 동작 방지
  this.classList.toggle('active'); // 클릭 시 active 클래스 토글

  if (this.classList.contains('active')) {
    menuBtnIcon.setAttribute('class', 'ri-close-line');
    nav.style.height = `${navHeight}px`;
  } else {
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
    nav.style.height = 0;
  }
});

function createSwiper(selector, s, m, l) {
  const swiper = new Swiper(selector + ' .swiper', {
    loop: true, // 슬라이더 단방향 무한 반복
    spaceBetween: 20,

    breakpoints: {
      480: {
        slidesPerView: s, //브라우저가 480보다 클 때
        spaceBetween: 10,
      },
      768: {
        slidesPerView: m, //브라우저가 768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: l, //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },

    navigation: {
      nextEl: selector + ' .swiper-button-next',
      prevEl: selector + ' .swiper-button-prev',
    },
  });
}

createSwiper('.intro', 2, 3, 4);
createSwiper('.rental', 1, 2, 3);
createSwiper('.online', 1, 2, 3);

function cutText(text, leng) {
  const sl_titles = document.querySelectorAll(text);

  sl_titles.forEach((txt) => {
    const sl_txt_str = txt.textContent;

    sl_txt_str.length > leng
      ? (txt.textContent = sl_txt_str.slice(0, leng) + '...')
      : (txt.textContent = sl_txt_str);
  });
}

cutText('.text-top h3', 9); // title
cutText('.text-middle p', 20); // description

// if (sl_title_str.length > 9) {
//   sl_title.textContent = sl_title_str.slice(0, 9) + '...';
// } else {
//   sl_title.textContent = sl_title_str;
// }

// 삼항연산자 : 조건식 ? true일 때 실행 : false일 때 실행

// Swiper Plugin Options

// classList.add : 클래스 추가
// classList.remove : 클래스 제거
// classList.toggle : 클래스 토글(추가, 제거, 추가, 제거... 반복)

// getAttribute : 속성 값 가져오기
// ex : <div class="a"></div> -> div.getAttribute('class') -> 'a'

// setAttribute : 속성 값 변경하기
// ex : <div class="a"></div> -> div.setAttribute('class', 'b') -> <div class="b"></div>
