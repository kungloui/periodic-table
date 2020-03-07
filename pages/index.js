import data from '../periodic-table.json'
import { useState } from 'react';


const Element = (props) => {
    const elementClassName = props.isActive? 'active' : '';
    let rowPosition = props.row;

    if(props.atomicNumber === 57){
        rowPosition = 8;
    } else if (props.atomicNumber === 89) {
        rowPosition = 9;
    }
   

    return (
        <div onClick={props.onClick} className={elementClassName}>
            <p>{props.atomicNumber}</p>
            <p className="element-symbol">{props.symbol}</p>
            <p className="element-name">{props.name}</p>
            <style jsx>{`
                div {
                    grid-column: ${props.column} / span 1;
                    grid-row: ${rowPosition} / span 1;
                    padding: 4px;
                    margin: 2px;
                    background-color: #eee;
                    cursor: pointer;
                }
                div.active {
                    background-color: #FFB6C1;
                }
                p {
                    margin: 0;
                }
                p.element-symbol {
                    font-size: 20px;
                    text-align: center;
                }
                p.element-name {
                    margin-top: 4px;
                    font-size: 14px;
                    word-wrap: break-word;
                    word-break: break-word;
                    hyphens: auto;
                }
            `}</style>
        </div>

    )

}

export default function Index() {

    const [activeBlock, setActiveBlock] = useState('');

    const onClick = (elementBlock) => () => {
        setActiveBlock(elementBlock)
    }

    return (
        <>
            <h1>The Periodic Table</h1>
            <div> 
            {data.map(element => <Element key={element.name} {...element} onClick={onClick(element.block)} isActive={activeBlock === element.block} />) }
            <style jsx>{`
                div {
                    width: 100vw;
                    display: grid;
                    grid-template-columns: repeat(18, 1fr );
                    grid-template-rows: repeat(9, 1fr );
                }
            `}</style>
            </div>
        </>
    );
  }