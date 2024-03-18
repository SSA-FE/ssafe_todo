배포 링크: https://ssafe-todo-puce.vercel.app/

# 1. 기능 구현  
  - CRUD 기능 구현
  - Card에 있는  🐥/ 🦅/ 🐣 클릭시 다른 Board로 이동 가능
  - 사이트를 껐다 켜도 Card 유지
  - 다크모드 구현 (배경과 'Roadmap' 글자색만 변경)
  - 일정 추가시 색상 지정 가능

# 2. 컴포넌트
<img width="1307" alt="스크린샷 2024-02-21 오후 7 40 20" src="https://github.com/SSA-FE/ssafe_todo/assets/121214068/30f2f6d7-2165-424a-bda4-3af808e57bdc">


Component|Description|
------------|--------------|
Template| RoadMap, 다크모드 버튼 Board를 담고 있는 컴포넌트
Board| 일정 예정/진행/완료를 구분하는 컴포넌트
Card| 일정을 담는 컴포넌트
NewCardForm| 일정 생성시 제목, 내용을 입력할 컴포넌트
EditCardForm| 일정 수정시 수정 내용을 입력할 컴포넌트

# 3.Move 기능 구현 방식
![MacBook Air - 1 (1)](https://github.com/SSA-FE/ssafe_todo/assets/121214068/30c605aa-b2e4-4b39-b057-a47d44166a28)

1️⃣ Template에서 `boards` 상태 관리
  - boards: todo, inProgress, done에 들어있는 모든 Card를 관리 

2️⃣ `boards` 와 `setBoards` 를 Template -> Board 로 넘김 

3️⃣ `boards` 와 `setBoards` 를 Board -> Card 로 넘김

4️⃣ Card에서 handleMoveBtnClick가 `setBoards` 를 사용
  - 도착지가 되는 Board의 Card들을 endBoard에 저장 (이 과정을 위해 Template에서 `boards` 상태를 선언)
=>`setBoards` 로 상태변화

5️⃣ Board에서 useEffect를 이용
  - Board는 Card UI를 만들어주는 역할
=> useEffect를 사용하여 `boards` 상태가 바뀔때마다 Card UI를 만들도록 함.

# 4. 버그사항

### **1. 일정 생성시 색상 선택후 다시 내용 입력하면 선택ui가 사라짐**
(&focus 해제했을 때도 유지하는 코드가 필요한 것 같음)

https://github.com/SSA-FE/ssafe_todo/assets/121214068/1344044e-64a0-484e-ad28-525f51e0d9a7 

| 코드 영역 (ColorOption.scss 파일) |
|----|
| ![ColorOption](https://github.com/SSA-FE/ssafe_todo/assets/121214068/3e592329-bab9-42bc-b635-736bdc91f6bd) |

### **2. 일정 수정시 색상 선택 UI가 깨짐**
(newCardForm과 같은 코드를 썼는데 왜일까....)

https://github.com/SSA-FE/ssafe_todo/assets/121214068/2a2f16eb-1b62-4d12-916d-af8a51be268c

| 코드 영역 (EditCardForm.jsx 파일) |
|----|
| ![캡처](https://github.com/SSA-FE/ssafe_todo/assets/121214068/faec35fc-2801-4772-b7a2-5e5ae6938a75) |
