//=>사용자가 텍스트를 입력할수있게 해주는 컴포넌트
import React from "react";
import styled from "styled-components";

// const 삽입태그형식명(변수)=styled.태그명`
//     css 속성명:속성값;
//     color:${변수명}
//     color:${변수명=>조건?참:거짓}
//     color:${a=>dark>"black":"yellow"}

// `;
// const Title=styled.h1`
// font-size:40px;
// color:blue;
// text-align:center;
// `
// function Button(){
//     return(
//         <div>
//             <Title>내용</Title>
//         </div>
//     );
// }export default Button;


// styled.button => html에서 button 역활을한다는 뜻
// const But=styled.button`
// color:${props=>props.dark?"yellow":"dark"};
// background:${props=>props.dark?"black":"yellow"};
// border:1px solid black;
// font-size:60px;
// padding:50px 100px;
// `;
// =>button태그에 스타일 지정하기

const But=styled.button`
padding:8px 16px;
font-size:17px;
border:1px solid gray;
border-radius:8px;
cutsur:pointer;
`

 function Button(props){
    // 하위 컴포넌트
    // => 상위 컴포넌트의 props값을 할당 받아서 사용할떄의 정의 방법

    //const{props변수명 삽입,props변수명 삽입}
    const{title,onClick}=props;

    return(
        <div>
            <But onClick={onClick}>{title||"button"}</But>
            {/* =>Button 컴포넌트에서 props로 title이 버튼의 내용으로 표시되게함
            =>onClick은 But의 onClick에 넣어 이벤트를 상위 컴포넌트에서 받을 수 있도록함
            =>표기법즁(조건부랜더링)
            -조건에 따라서 보여지는 화면이 다를때 표기하는 방법 
            -회원과 비회원의 화면 차이
            function User(props){
                return <h1>회원입니다.</h1>
            }
            function Guest(props){
                return <h2>비회원입니다.</h2>
            }
            function PageV(props){
                const isLogIn=props.isLogIn;
                if(isLogIn){
                    return <User/>
                }
                return <Guest/>
            }
            
            => 조건부 랜더링을 줄여서 인라인 조건 표기법으로 가능함
            - 인라인 if
                {title 논리연산자(&&(and), ||(or)) 결과값}
                && 는 참,참=>참값
                || 은 거짓,거짓=>거짓값
                =>if가 실제로 삽입되는것은 아님
                =>결과가 정해져 있는 논리연산에서 굳이 불필요한 연산을 하지 않도록 하기 위해 사용함
                =>true && ex ->ex
                    조건문이 참이면 ex가 결과값
                =>false && ex ->false
                    조건문이 거짓이면 false
                => ||(or연산자) 항상 참일때 사용함
            - 인라인 if-else
                {조건문?참:거짓}
                삼항연산자로 표기 */}
        </div>

        // <div>
        //     <But>기본</But>
        //     <But dark>변경</But>
        // </div>
    );
 }export default Button;