# Portfolio

## 포트폴리오 폴더 구성

<img src="https://github.com/hyunk07/Portfolio/assets/127369525/544bc4bf-7ca3-41fc-be4d-ebfdfeb3af1d" width="800" >

## Overview
- 목표
	 - 특색있는포토폴리오제작하기
	 - 늦은 오후에도 눈에띄는 사이트 제작하기
  
<br>
<br>

 ## 진행과정
- 6/8 index 파일 생성 및 포트폴리오 폴더 구성
- 6/11 ~ 6/20 그랑핸드 작업
 	- 프로젝트1 레퍼런스 사이트 찾기& 리디자인 하기
	- 스타일 가이드 제작
	- 모바일 우선순위로 사이트 제작하기
	- 태블릿 버전, pc 버전 CSS 제작하기
	- splash를 활용하여 SNS 이미지를 설정하는데 마우스 hover 시 내가 의도한 대로 안 움직이고 자기 멋대로 움직여 수정하는 데 오랜 시간이 걸렸다.
- 6/21 index 레퍼런스 사이트 찾기& 리디자인 하기
- 6/23 사이트 제작하기
- 6/30 ~ 7/10 팀 프로젝트 기간
- 7/14 전날 다른 사람이 내 자리에 앉아 작업을 하고 사용자 설정을 안 바꾸고 자리를 떠나 git 올리는 데 문제 발생.
	- 작업 파일을 삭제해 보거나 해결 방법을 찾아 보았지만 이미 꼬여버려 해결이 안 되어 새로운 repository를 생성해서 다시 작업을 시작했다.
- 7/18 ~ 서브 페이지 작업
 
<br>
<br>

## Design
- Keyword
	- 깔끔한
	- 정보전달
 <br>
 
- Color

	<img src="https://github.com/hyunk07/Portfolio/assets/127369525/c79d97d8-b602-428c-8166-5d85fc8812c5" width="350" >
<br>

- Typography

	<img src="https://github.com/hyunk07/Portfolio/assets/127369525/3fb25741-294f-4167-b4ef-a848c6147c51" width="500" >


<br>
<br>

## Publishing
- flex를 활용한 레이아웃 정렬
- @font-face를 적용해서 폰트 제공
- JavaScript를 이용한 자동 슬라이드 배너 제작
- animation 사용한 화려한 움직임

<br>
<br>

## Problem & Solution
- 슬라이드가 두 개만 보여야 하는데 모든 슬라이드가 보이지?

	> 한 페이지에 두 개의 슬라이드가 보여야 하는데 내가 추가한 슬라이드 페이지들이 전부 보이는 현상 발생. <br>
	슬라이드 class마다 width 값을 다르게 줘야 하는 사실을 알게 되어 제일 작은 class부터 50%, 100%, ...값을 주어 해결했다.
- 애니메이션을 준 글자가 왜 잘려서 보일까?
	> 메인 페이지에 애니메이션으로 움직이는 글 효과를 주었는데 폰트 크기를 증가할 때 글이 위아래도 잘려 움직임.  <br>
	코드를 보니 hight에 값이 있어 폰트 크기에 맞게 수정했더니 해결
 
