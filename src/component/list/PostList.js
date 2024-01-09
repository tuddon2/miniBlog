import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
:not(:last-child){
    margin-bottom:16px;
}
`;
// not(선택자)=>선택자가 아니면이라는 뜻 해당되는 태그의 선택자 부분이 추가됨

function PostList(props){
    const{posts,onClickItem}=props;
// =>PostList컴포넌트에 props로 받은 post 안에는 posts객체를 넘겨받음
// =>posts의 배열값으로 인식(여러개 값으로 자동 배열인식됨) map함수를 활용해서 post객체에 포함되는 PostListItem컴포넌트를 읽어옴
    return(
        <Wrapper>
            {posts && posts.map((post,index)=>{
                // =>map함수를 사용 글의 개수 만큼 PostListItem 컴포넌트를 만들기 위해 사용함
                return (
                    <PostListItem key={post.id} post={post} onClick={()=>{
                        onClickItem(post);
                    }}/>
                )
            })}
        </Wrapper>
    );
}export default PostList;