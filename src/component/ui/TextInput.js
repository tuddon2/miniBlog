//=>사용자가 텍스트를 입력할수있게 해주는 컴포넌트
import React from "react";
import styled from "styled-components";


// const TextArea=styled.textarea`
// width:calc(100% - 35px);
// height:500px;
// padding:20px;
// font-size:18px;
// line-height:22px;
// `;
// 유동값의 높이값 설정
// =>;상위 컴포넌트에서 지정한 props값으로 스타일을 다르게 인식시키기
const TextArea=styled.textarea`
width:calc(100% - 35px);
${
    (props)=>
        props.height && `height:${props.height}px;`
    
}
padding:20px;
font-size:18px;
line-height:22px;
`;







function TextInput(props){
    const {height,value,onChange}=props;
    // =>TextInput컴포넌트의 props로 value(입력값을 표기하고),onChange(변경된 값 상위 컴포넌트로 전달)지정
    return(
        <div>
            <TextArea height={height} value={value} onChange={onChange} ></TextArea>
        </div>
    );
}export default TextInput;