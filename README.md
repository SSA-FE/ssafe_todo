# React To Do List

**언어 및 라이브러리**
<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<img src="https://img.shields.io/badge/🐻 Zustand-3578E5?style=for-the-badge">

</div>

**설계 및 환경**
<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


</div>

## 🛠 기능
**보드(Board)** : 일정을 올려둘 보드 (TO DO / IN PROGRESS / DONE)
  - 일정 추가(Create) 기능
      - 보드의 ⊕ 버튼을 누르면 Add Card 생성
<br><br>

**일정(Card)** : 일정을 입력하고 표시하는 카드 (Add Card / Card / Rewrite Card)
  - 생성(Add Card) 기능
    - Title, Text 입력창
    - Card 색상 선택
    - Create 버튼 클릭 시, Card 생성
    - x 버튼 클릭 시, Add Card 종료
  
  - 일정(Card)
    - Add Card에서 입력한 정보를 반영한 Card
    - 새로고침 이후에도 데이터 유지
    - 수정 버튼 클릭 시, Rewrite Card 생성
    - x 버튼 클릭 시, Card 삭제 (스토리지에서도 삭제)
  
  - 수정(Rewrite Card) 기능
    - Add Card와 같은 기능
    - 수정 전 Title, Text가 미리 작성돼있음.
    - Go 버튼 클릭 시, Card 수정
    - x 버튼 클릭 시, Rewrite Card 종료
      
<br><br>

## 📍 추가 구현 계획
**보드(Board)**
- 기능
  -  id 순서로 정렬 → default
  -  DnD (Drag and Drop) → 정렬 무시
  -  다크 / 라이트 모드

- UI
  - Board 위치 상단 고정
  - Board 범위를 초과한 Card요소는 스크롤
  - Add Card 실행 시, Add Card 앞에는 최대 4개의 Card만 최신순으로 표시

<br><br>

**일정(Card)** <br><br>
  다크 / 라이트 모드
- 생성(Add Card)
  - Card 색상 선택 : <br>
    1. 아무 색도 선택돼있지 않으면 default 색상으로 표시 <br>
    2. 색상을 선택한 채로 다른 곳 클릭해도 선택 CSS 효과 유지 <br>
    3. 이미 선택된 색상 클릭 시, 선택 해제 <br>

  - Text 입력 창 : <br>
    입력창에서 적용한 줄바꿈 Card에도 똑같이 보이게 적용

- 수정(Rewrite Card)
  - 수정할 Card가 Rewrite Card로 변하는 방식으로 수정
  - 수정 전 설정한 색상이 선택된 채로 Rewrite Card 실행
                     
