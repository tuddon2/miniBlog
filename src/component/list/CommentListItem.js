import React from "react";
import styled from "styled-components";


const Wrapper=styled.div`
width:calc(100% - 35px);
padding:8px 16px;
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


const ContentText=styled.p`
font-size:16px;
white-space:per-wrap;

`;

// white-space:per-wrap;
// =>원본텍스트를 그대로 표현하고 줄바꿈을 인식함



// 글의 내용영역
function CommentListItem(props){
    const{comment}=props;
    // =>사용자가 작성한 댓글내용이 보이는 영역
    // =>글을 클릭할 필요가 없어서 클릭이벤트 삭제
    

    return(
        <Wrapper>
            <ContentText>
                {comment.content}
                {/* =>props로 받은 props객체의comment 표시함 */}
            </ContentText>
        </Wrapper>
    );
}export default CommentListItem;