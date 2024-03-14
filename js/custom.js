// Hero Script
const scrollDownBtn = document.querySelector('.scroll-down');
const targetSection = document.querySelector('.hollow');

scrollDownBtn.addEventListener('click', function () {
  targetSection.scrollIntoView({ behavior: 'smooth' }); //scrollIntoView({ behavior: 'smooth' }) 함수를 이용하여, scrollDownBtn을 누르면 targetSection으로 이동
  //scrollIntoView({ behavior: 'smooth' })는 JavaScript에서 특정 요소를 부드럽게 스크롤하여 화면에 보여주는 함수입니다.
});
