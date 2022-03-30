import React from 'react';
import './style/snake.css';

interface ISnakeProps{
    id: number,
    className: string,
}

export const Snake:React.FunctionComponent<ISnakeProps> = (props) => {
    return <div className={props.className} >{props.id}</div>;
};

// export default React.memo(Box);