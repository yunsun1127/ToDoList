import React, { Component } from 'react';
import './TodoItem.css';
import styled from 'styled-components';

const Remove = styled.div`
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
`;

const TodoItems = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;

    &:hover {
        background: #e3fafc;
        ${Remove} {
            opacity: 1;
          }
    }
`;

const CheckMark = styled.div`
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #ffa2a2;
    font-weight: 800; 
`;

const Checked = styled.div`
    text-decoration: line-through;
    color: #adb5bd;
`;
const TodoText = styled.div`
    flex: 1;
    word-break: break-all;
`;

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <TodoItems onClick={() => onToggle(id)}>
                <Remove onClick={(e) => {
                    e.stopPropagation(); // 이벤트 확산 방지
                    onRemove(id)}
                }>&times;</Remove>
                <div className={<TodoText /> + checked && <Checked />}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<CheckMark>✓</CheckMark>)
                }
            </TodoItems>
        );
    }
}

export default TodoItem;