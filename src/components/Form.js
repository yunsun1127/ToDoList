import React from 'react';
import styled from 'styled-components';

/*
value : 인풋 내용, onCreate : 버튼이 클릭될 때 실행되는 함수,
onChange : input 내용이 변경될 때 실행되는 함수,
onKeyPress : input에서 키를 입력될 때 실행되는 함수
*/

const Forms = styled.div`
    display: flex;
`;

const Input = styled.input`
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #f78181;
`;

const CreateButton = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: #f78181;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
        background: #FF7878;
    }
`;

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <Forms>
            <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <CreateButton onClick={onCreate}>
                추가
            </CreateButton>    
        </Forms>
    );
};

export default Form;