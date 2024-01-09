// import React from "react";
// //라우터 덤 사용
// import { useNavigate,useParams } from "react-router-dom";
// import styled from "styled-components";
// import CommentList from "../list/CommentList";
// import Button from "../ui/Button";
// import TextInput from "../ui/TextInput";
// // =>텍스트 작성이 가능하게하는 컴포넌트

// //임의설정데이터(data.json)
// import data from "../../data.json"

// const Wrapper=styled.div`
//     padding:16px;
//     width:calc(100% - 35px);
//     display:flex;
//     flex-direction:column;
//     align-item:center;
// `;
// const Container=styled.div`
//     width:100%;
//     max-width:720px;
//     :not(last-child){
//         margin-bottom:16px;
//     }
// `;
// const PostContainer=styled.div`
//     padding:8px 16px;
//     border:1px solid gray;
//     border-radius:5px;
// `;

// const TitleText=styled.p`
//     font-size:28px;
//     font-weight:500;

// `;
// const ContentText=styled.p`
//     font-size:20px;
//     line-height:35px;
//     white-space:pre-wrap;
// `;
// const CommentLable=styled.p`
//     font-size:16px;
//     font-weight:500;
// `;


// function PostViewPage(props){
//     // 1.useNavigate사용
//     const navigate=useNavigate();
//     // 2.url형식의 매개변수를 전달 받은 글의 아이디를 이용함 명시
//     const {postId}=useParams();
//     // 3.전체 데이터에서 해당 되는 글 찾기
//        // =>find함수 활용
//     const post=data.find((item)=>{
//         return item.id==postId;
//     })
//     // 4. 함수형 컴포넌트에서 state사용
//     const [comment,setComment]=useState('');
//         return(
//             <Wrapper>
//                 <Container>
//                     <Button title='뒤로 가기' onClick={()=>{
//                         navigate('/');
//                     }}/>
//                 </Container>
//                 <PostContainer>
//                     <TitleText>
//                         {post.title}
//                     </TitleText>
//                     <ContentText>
//                         {post.content}
//                     </ContentText>
//                 </PostContainer>
//                 <CommentLable>댓글</CommentLable>
//                 <CommentList comment={post.comment}></CommentList>
//                 <TextInput height={40} value={comment} onChange={(event)=>{
//                     setComment(event.target.value);
//                 }}></TextInput>
//                 <Button title='댓글남기기' onClick={()=>{
//                     navigate('/')
//                 }}/>
//             </Wrapper>
//         );
// }export default PostViewPage;
// =>리액트문법
import React, { useState } from "react";
// =>리액트 라우터 DOM사용
import {useNavigate,useParams} from "react-router-dom";
// =>styled 컴포넌트 사용
import styled from "styled-components";
// => CommentList 컴포넌트, Button 컴포넌트, TextInput 컴포넌트 연결
import CommentList from "../list/CommentList";
// -> 글을 볼수 있게 해주는 컴포넌트
import Button from "../ui/Button";
// -> 버튼 컴포넌트
import TextInput from "../ui/TextInput";
// -> 텍스트 작성이 가능하게 하는 컴포넌트
// -> 실제 삽입은 현재는 안됨

// =>임의설정 데이터(data.json) 가져오기
import data from "../../data.json";


//스타일컴포넌트
const Wrapper = styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Container = styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`;
const PostContainer = styled.div`
    padding:8px 16px;
    border : 1px solid gray;
    border-radius : 5px;
`;
const TitleText = styled.p`
    font-size : 20px;
    font-weight : 500;
`;
const ContentText = styled.p`
    font-size : 20px;
    line-height:32px;
    white-space : pre-wrap;
`;
const CommentLable = styled.p`
    font-size : 16px;
    font-weight : 500;
`;




// =>함수형 컴포넌트
function PostViewPage(props){
    // 1. useNavigate 사용명시
    const navigate = useNavigate();

    // 2. url형식의 매개변수를 전달받은 글의 아이디를 이용함 명시
    const {postId} = useParams();

    // 3. 전체 데이터에서 해당 되는 글을 찾기
    // => find함수 사용
    const post = data.find((item)=>{
        return item.id==postId;
    })

    // 4.함수형 컴포넌트에서 state사용
    const [comment,setComment] = useState("");
    // =>초기값 없는 state

    return(
        // =>전체부모 스타일 태그 : Wrapper
        // =>박스형 부모 스타일 태그 : Container
        // =>버튼 컴포넌트(title,onClick props전달) 
        // =>작성된 글의 제목과 내용 영역의 부모 스타일 태그 : PostContainer
        // =>글 제목 스타일 컴포넌트 : TitleText
        // - 내용 post의 title 화면 출력
        // =>찾은 글의 내용 스타일 컴포넌트 : ContentText
        // - 내용 post의 content 화면 출력
        // =>CommentLable : 스타일 컴포넌트
        // =>CommentList 컴포넌트
        // - comments의 props로 post의 comments를 넘겨줌

        // =>댓글 작성을 위한 UI
        // - TextInput 컴포넌트 value값, onchange이벤트 넘겨줌
        // - Button 컴포넌트 title , onClick 이벤트 넘겨줌

        <Wrapper>
            <Container>
                <Button title="뒤로가기" onClick={()=>{
                    navigate('/');
                    // 메인으로 가기는 걍 / .href의 #과 같음
                }} />
                <PostContainer>
                    <TitleText>
                        {post.title}
                    </TitleText>
                    <ContentText>
                        {post.content}
                    </ContentText>
                </PostContainer>
                <CommentLable>댓글</CommentLable>
                <CommentList comments={post.comments}></CommentList>
                <TextInput height={40} value={comment} onChange={(event)=>{
                    setComment(event.target.value);
                    //값을 받고 해당되는 값이 바뀔때마다 받아온다
                }}></TextInput>
                <Button title="댓글 남기기" onClick={()=>{
                    navigate('/');
                }} />
            </Container>
        </Wrapper>


    );
}


export default PostViewPage;

// 하위컴포넌트들에서 작업한거 여기로 넘겨주는 작업을 한다