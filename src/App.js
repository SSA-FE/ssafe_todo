import TodoTemplate from "./components/TodoTemplate";
import WorkContainer from "./components/WorkContainer";

function App() {
  return (
    <TodoTemplate>
      컨테이너 3개를 담고, 그 안에 item들을 나열하는식으로 처리
      <WorkContainer></WorkContainer>
    </TodoTemplate>
  );
}

export default App;
