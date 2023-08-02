# Portfolio
## Overview

- 목표
	 - 특색있는포토폴리오제작하기
	 - 늦은 오후에도 눈에띄는 사이트 제작하기
## Design
- Keyword
	- 깔끔한
	- 정보전달
- Color
  
<img src="https://github.com/hyunk07/Portfolio/assets/127369525/c79d97d8-b602-428c-8166-5d85fc8812c5" width="350" >

- Typography
## Publishing
- flex를 활용한 레이아웃 정렬
-  @font-face를 적용해서 폰트제공
- JavaScript를 이용한 자동 슬라이드 배너 제작
-  animation 사용한 화려한 움직임
## Problem & Solution
- 슬라이드가 두개만 보여야 하는데 모든 슬라이드가 보이지?
	> 한페이지에 두개의 슬라이드가 보여야 하는데 내가 추가한 슬라이드 페이지들이 전부 보이는 현상 발생.  
슬라이드 class마다 width값을 다르게 줘야하는 사실을 알게 된어 제일 작은 class부터 50%, 100%,  
200%(4*50%) 값을 주어 해결했다. 
- 애니메이션을 준 글자가 왜 잘려서 보일까?
	> 메인 페이지에 애니메이션으로 움직이는 글효과를 주었는데 폰트 사이즈를 증가시니 글이 위아래도 잘려 움직임.  
코드를 보니 hight이 있어 폰트사이즈에 맞게 수정했더니 해결
 
