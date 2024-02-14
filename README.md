# Todoit
> React로 To Do List 만들기
개발 기간: 24.02.13 - 

<br/>
<br/>
<br/>


## 🐇 기술스택
**언어 및 라이브러리**
<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">

<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">

<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

</div>

**설계 및 환경**
<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/VS CODE-007ACC?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


</div>


<br/>
<br/>
<br/>

#### 기능 ⚡

- 할 일 CRUD
  - 컨테이너 하단 `+`버튼 클릭 시 일정 추가
  - 각 티켓 별 우상단 버튼을 통해 업데이트/삭제 가능
  - 티켓에 마우스를 올릴 시 타 컨테이너로 이동 처리
    - 티켓 opacity 낮춘 후 컨테이너의 좌우측에 이동 버튼 표현
- 데이터 저장
  - Redux를 이용하여 상태관리
    - action.js에서 CRUD 처리
  - localstorage를 활용하여 상태 유지
  - tailwindCSS 동적 할당을 활용하여 다크/라이트모드 설정
- 추가 선택사항
  - 일정 추가 시 색상 지정
    - 티켓 레이아웃 컴포넌트에 디자인 동적할당
  - 할 일 검색
    - Roadmap과 컨테이너 사이 collapse를 두어 검색 창 만들기
  - 중요한 내용 먼저 렌더링 
    - RouterProvider 등으로 눈속임(?) Lazy하게 렌더링
  - 정렬 기능
    - 기본 id 순 정렬
    - 정렬 기준 설정 시 id가 아닌 해당 기능에 따라 정렬되게 함수 미리 만들기
  - ~~DnD~~
  - ~~일정 이동 애니메이션~~
