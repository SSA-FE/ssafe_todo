# Todo_SSAFE 과제 리팩토링 목록
## 1. 불필요한 파일 제거
불필요한 CRA 파일 제거
## 2. 파일 네이밍 컨벤션 수정
기존 파일 첫글자 대문자로 수정
## 3. TodoItem Container UI 수정
height 설정 및 overflow 를 활용한 스크롤 설정 , add 버튼 스크롤 시 움직이는 오류 수정
## 4. Delete 시 생기는 오류 수정
uuid 를 활용한 id 를 부여해서 제대로 삭제되도록 수정
## 5. 전체적인 UI 수정
Night Mode 시 border 값을 통해 영역 분리가 확실히 보이도록 수정
hover 시 버튼을 absolute 형태로 고정해서 Item div 의 크기가 바뀌지 않도록 수정
전체 글꼴 폰트 값 변경 및 색상 변경
편집 모드시 X 버튼 추가 및 Place holder 적용
## 6. 추가 기능 구현
추가 및 편집 시 ItemList 색상을 원하는 색상을 설정 할 수 있도록 수정

#Todo 해아할 일
context api 를 활용한 형제 컴포넌트 리렌더링
   
