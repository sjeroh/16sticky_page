let _wrapper; //sticky 영역의 부모(main-content)

let _sticky; //sticky 공간
let children; //.section 
let _length; //.section의 갯수
let headerVh = 6;
let contentVh; // 영역 계산
let start = 0;
let end = 0;

function floderScroll(wrapper,sticky){
  _wrapper = wrapper; //부모공간
  _sticky = sticky; //sticky 공간
  children = document.querySelectorAll('.section') //배열
  _length = children.length; //4
  // console.log(_length)
  contentVh = 96 - headerVh*_length;

  start = _wrapper.offsetTop
  //offsetTop --> 자신의 머리에 천정에 닿는 시점의 스크롤탑값을 추출해준다. (문서에서 자신보다 위쪽의 영역의 높이)
  //offsetHeight --> 자신의 높이값
  //innerHeight --> 화면 하나의 높이값(100vh)
  // console.log(start)
  end = _wrapper.offsetTop + _wrapper.offsetHeight-innerHeight
  // end = _wrapper.offsetHeight
  // console.log(end)
  children.forEach((child,i)=>{
    // console.log(child)
    child.style.bottom = -(100 - headerVh*(_length -i))+'vh';
    //100-6X(4-{0~3})
  })
//children.forEach((각각의 아이템, 각각의 index number)=>{})
// children.forEach(function(각각의 아이템, 각각의 index number){}
//각각의 할 일을 만들 수 있다.
  
}

let mainContent=document.querySelector('.main-content')
let $sticky=document.querySelector('.sticky')

floderScroll(mainContent,$sticky)

window.addEventListener('scroll',function(){
  console.log(scrollY)
})
