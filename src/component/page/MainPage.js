import React from "react";

import { useNavigate } from "react-router-dom";
//라우터 덤 사용
// =>페이지간의 이동을 위해 react-router-dom을 사용함
// =>페이지간의 이동을 하는 방법 3가지 (a,link,useNavigate)
    // a
        // html에서의 기본적인 태그로 import 필요없이 사용가능하나 react에서 잘 사용하지않음
        // 전체 페이지를 로드함으로 속도 저하가 나타남
        // 리액트 외부 프로젝트와 연경을 위해 사용함 
        // a태그를 사용하면 useRef, useState 훅 이라는 개념을 사용 할 수 없음
        // useRef, useState등에서 수정을 해둔 변수,상태값을 유지 할 수 없음
        // 라우터 사용에 방해가 됨
    // link
        // react-router-dom에 포함된 기능
        // url에 영향을 주며 필요한 부분만 로드함
        // useRef, useState등을 유지하면서 속도 저하없이 화면의 전환 효과를 줄 수 있음
        // url도 필요한 부분만 건드려서 로드 할 수 있음
        // 클릭시 바로 이동하게 하기 위한 간단한 동작에 주로 사용함
    // useNavigate
        // react-router-dom에 포함된 기능
        // url에 영향을 주며 필요헌 부분만 로드함
        // useRef,usestate등을 유지하면서 속도 저하 없이 화면의 전환 요과를 줄 수 있음
        // url도 필요한 부분만 건드려서 로드 할 수 있음
        // 이동 후 추가적인 동작이 필요할때 사용함
        // 특정 이벤트가 실행되었을때 이동하거나, 추가적인 기능이 필요한 경우
        // 필요한 내용을 모두 채워야 이동을 하거나, 상세페이지 열기위해 상품의 정보를 추가로 로드할때 사용함

// 클래스 컴포넌트에서는 생명주기 함수
// render 함수
    // return되는 html형식의 코드를 화면에 그려주는 함수
    // 화면 내용이 변경되어야 할 시점에 자동 호출되는 함수
// constructor함수
    // 생명 주기 함수에서 가장 먼저 실행되는 함수
    // 초기화 영역 작업
    // 처음에 한번만 호출
// getDerrivedStateFromProps 함수
    // constructor함수에서 전달 받은 props를 state로 변경함
    // constructor다음으로 호출되는 생명주기 함수
// compoentDidMount함수
    // 작성된 함수들 중에 가장 마지막으로 실행
    // render함수ㅏ 코드를 화면에 그려 준 후 실행됨
// shouldComponentUpdate함수
    // Component의 변경과정을 남기는 함수
    // 변경,props,state의 변경시 사용


// 함수형 컴포넌트에서 생명주기 함수(훅)
// =>기존 존재하는 기능에 끼어들어서 같이 수행되는 형식
// =>훅은 모두 함수명 앞에 use로 시작함
// =>훅이 수행하는 긴으에 따라서 이름을 설정하게 되어있음
// =>대표적으로 useState는 함수형 컴포넌트(정적인변수값)에서 State(동적인 변수값)사용하고 싶을때 지정하는 훅
    // const[변수명,set함수명]=useState(초기값)
// function Counter(props){
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <p>총{count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// }
//     =>useEffect(이팩트함수,의존성배열)
//     -사이트 이팩트함수
//     -보통 사이트이팩트는 부작용을 의미함 : 개발자가 의도치 못함 코드가 실행되어 버그 발생시 나타나는 이팩트를 의미함
//     -리액트에서 useEffect는 서버에서 데이터를 받아오거나 수동으로 Dom을 변경하는것을 이팩트라고 명시함
//     -클래스 컴포넌트의 생명주기 함수들 중에서compoentDidMount함수 shouldComponentUpdate함수 compoentWillMount함수 세개의 기능을 한번에 지정한 훅 명령임
//     -의존성 배열은 생략가능함
//     -이펙트가 의존하고 있는 배열값으로 배열안에 변수중 하나라도 변경이 되면 이펙트 함수가 실행됨
//     -생략시 컴포넌트가 업데이트 될때마다 호출됨

// function Counter(props){
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`총 ${count}번 클릭함`
//     })
//     =>브라우저에서 제공한 API를 사용해서 document의 title을 업데이트함
//     =>document의 title은 브라우저에 페이지를 열었을때 창에 표시되는 문자열임(크롬 탭에있는 타이틀을 의미함)
//     return(
//         <div>
//             <p>총{count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// }



import styled from "styled-components";
import PostList from "../list/PostList";
// =>PostList글목록을 표시함
import Button from "../ui/Button";
// => Button 글작성 페이지로 이동
import data from "../../data.json"
//임의설정데이터(data.json)
// =>실제 글,댓글을 작성하기위해 데이터 베이스 구축 및 서버API개발, 서버API와 리액트 연동 작업이 필요함
// 위 내용을 할 수 없어서 가짜 데이터 작성
// =>데이터 베이스와 서버구축을 하지않아 실제로 글과 댓글 작성 할 수 없음

const Wrapper=styled.div`
padding:16px;
width:calc(100% - 35px);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const Container=styled.div`
width:100%;
max-width:720px;
:not(last-child){
    margin-bottom:16px;
}
`;

function MainPage(props){
    const navigate=useNavigate();
    
    return(
        <Wrapper>
            <Container>
                <Button title='글 작성하기' onClick={()=>{
                    navigate('/post-write');
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.id}`);
                }}/>
            </Container>
        </Wrapper>
    );
}export default MainPage;