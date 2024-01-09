// =>리액트 문법,styled문법
import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
width:calc(100% - 35px);
padding:16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid gray;
border-radius:5px;
background:lightpink;
:hover{
    background:lightgray;
}
`;//=>div 태그에 추가 선택자 사용


const TitleText=styled.p`
font-size:20px;
font-weight:700;
`;



// 함수형 컴포넌트(글의 제목영역 제목만 표시함)
function PostListItem(props){
    // =>post,onClick을 매개변수로 전달
    const{post,onClick}=props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>
                {post.title}
                {/* =>props로 받은 props객체의 title문자열을 표시함 */}
            </TitleText>
        </Wrapper>
    );
} export default PostListItem;