# SSAFE 2차 MISSION

2차 주니어 미션은 SPA(Single Page Application)로 **TODO LIST**만들기 입니다.

많은 부트캠프나, 프론트엔드 커리큘럼에서 처음으로 진행하는 TODO List만들기는

컴포넌트 분리, 상태관리와 같은 기술적인 내용을 직관적으로 학습할 수 있고

코드의 재사용성, 모듈화, 유지보수성 등을 고려하여 질 좋은 코드 작성을 연습할 수 있습니다.

이번 프로젝트부터는 **리액트(React)** 개발환경에서 개발을 진행해주시면 됩니다. 

아래 **필수 요구 사항**은 모두 구현하여야 하고, **선택 요구 사항**은 적어도 3개 이상 구현하는 것을 목표로 해주세요.

아래 **피그마** 링크를 바탕으로 개발을 진행해주세요. 피그마에 구현된 디자인은 margin, padding과 같은 상세한 값을 확인할 수 있기 때문에 UI를 구성할 때 도움이 됩니다. 

### 기간

1차: 2월 8일(목) ~ 2월 14일(수) 오후 6시
1차: 2월 15일(목) ~ 2월 21일(수) 오후 6시

### 제출 방법

[https://github.com/SSA-FE/ssafe_todo](https://github.com/SSA-FE/ssafe_todo)

1. 위 레포를 자신의 레포지토리로 fork해 갑니다.
2. 이슈단위로 브랜치를 나누어 작업합니다.
3. 기능내 세부 기능이 완료될 때마다 커밋을 진행합니다.
4. 작업이 모두 완료된 후 메인 레포지토리에 pull request를 전송합니다.

### 필수 요구 사항

- TO DO / IN PROGRESS / DONE 3개의 보드가 존재 합니다.
- 각각의 보드에는 새로운 일정을 추가(Create)할 수 있는 기능이 있습니다.
- 모든 일정은 수정(Edit)하거나 삭제(Delete)할 수 있습니다.
- 생성된 일정에 마우스를 올리면 다른 상태로 이동(Move)시킬 수 있는 버튼 2개가 생깁니다.
- 이동 버튼을 누르면 페이지 새로고침 없이 현재 보드에서 다른 보드로 일정이 옮겨집니다.

### 선택 요구 사항

- 사이트를 껐다 켜도 일정이 유지됩니다.
- 일정에 중요도를 부여할 수 있습니다.
- 라이트 모드일 때 달 아이콘을 누르면 다크모드로 변하며 아이콘도 태양 아이콘으로 변합니다.
- 일정을 추가할 때 색상을 정할 수 있습니다.
    - 색상을 지정하지 않으면 기본 색상을 부여합니다.
- 일정은 검색 기능을 통해 검색 가능합니다.
    - 제목이나 상세내용 검색 시, 해당 컨텐츠만 필터링 됩니다.
- 스켈레톤 UI를 부여할 수 있습니다.
- 정렬 기능을 제공합니다.
    - 시간순, 색상별 등등 기준은 자유롭게 정합니다.
- 일정을 DRAG AND DROP(DnD)으로 다른 보드에 옮길 수 있습니다.
- 일정이 옮겨 질 때 애니메이션으로 자연스럽게 이동합니다.

[https://meeting.ssafy.com/api/v4/users/wcskmbhjiigabcosmx8tecm7zc/image?_=1704359145448](https://meeting.ssafy.com/api/v4/users/wcskmbhjiigabcosmx8tecm7zc/image?_=1704359145448)

### 참고용 피그마 링크

[https://www.figma.com/file/2muZAOAkErDyUA2Xad8x22/SSAFE_MISSION?type=design&node-id=156-796&mode=design](https://www.figma.com/file/2muZAOAkErDyUA2Xad8x22/SSAFE_MISSION?type=design&node-id=156-796&mode=design)
