// import './App.css';
// import Button from './component/ui/Button';
// import TextInput from './component/ui/TextInput';


// function App() {
//   return (
//     <div className="App">
//       <Button></Button>
//       <TextInput></TextInput>
//     </div>
//   );
// }

// export default App;
import React from "react";
import styled from "styled-components";
import MainPage from './component/page/MainPage';
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

import { BrowserRouter,Route, Routes } from "react-router-dom";
// =리액트를 위한 라우팅 라이브러리 react-route-dom
// =각 경로에 따라 다른 컴포넌트를 보여주도록 만들어져 있음
// =웹사이트에서 라우팅은 사용자가 원하는 경로로 보내는 과정
// =라우팅은 쉽게 구현 할 수 있도록 리액트 컴포넌트 형태로 작성이 되도록 하는 라이브러리
// =react-route-dom을 이용해서 라우팅을 할 수 있게 하는 컴포넌트 총 3가지
// 1.BrowserRouter 컴포넌트
// =웹 브라우저에서 react-route-dom를 사용해서 라우팅을 할 수 있도록 함
// =웹브라우저에서의 history를 이용 경로를 탐색할 수있게 해주는 컴포넌트
// =부모 영역으로 사용함(Routes의 부모)

// 2.Routes 컴포넌트
// =실제로 라우팅결로를 구성 할 수 있게 하는 컴포넌트
// =Route의 상위 컴포넌트
// =Routes는 여러개의 Route를 Children 으로 가짐

// 3.Route 컴포넌트
// =실제로 라우팅경로를 구성 할 수 있게 하는 컴포넌트
// =Routes의 하위 컴포넌트 Path(경로),Element라는 props를 가짐
// =element : 경로가 일치 할 경우 랜더링을 할 리액트 요소
// 사용자가 주소창에 새로운 경로를 입력하거나 웹사이트 내에서 경로 이동이 일어나게 되면 
// Routes 컴포넌트는 하위 Route 컴포넌트 중에서 현재 경로가 가장 일치하는 경로를 찾아
// 해당하는 element를 보여줌

const MainTitleText=styled.p`
font_size:24px;
font-weight:bold;
text-align:center;

`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>블로그 제목</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        {/* =path 없이 index라는 props를 가진 Route로 라우팅 됨
        =메인 첫번째 페이지로 설정 */}
        <Route path='post-write' element={<PostWritePage/>}/>
        {/* =하위 컴포넌트에서 path로 설정한 경로를 Route의 path로 설정해서
        해당 element 컴포넌트로 이동시킴 */}
        <Route path='post/:postId' element={<PostViewPage/>}/>
        {/* =:postId는 동적으로 변하는 파라미터를 위한 값
        =경로에 :을 사용하고 Id를 입력하면 실제 컴포넌트에서 
        useParams()훅을 사용해 아이디를 해당 값으로 가지고 옴 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;