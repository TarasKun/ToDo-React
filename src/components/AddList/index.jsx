import React, { useState }from "react";
import List from '../List'
import './AddList.scss';
import Badge from "../Badge";

import closeSvg from '../../assets/img/close.svg'


const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    };

    const addList = ()=> {
        if (!inputValue) {
            return;
        }
        const color = colors.filter(color => color.id === selectedColor)[0].name;
        onAdd({ id: Math.random(), name: inputValue, color})
        onClose();
    };



    return (
        <div className={'add-list'}>
            <List
                onClick = {()=>setVisiblePopup(true)}
                items={[
                    {
                        className: "list__add-button",
                        icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
                '<path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
                '</svg>,
                        name: 'Додати список'
                    }
                    ]
                }
            />
            {visiblePopup && (
                <div className='add-list__popup'>
                    <img
                        onClick={onClose}
                        src={closeSvg}
                        alt="close button"
                        className={'add-list__popup-close-btn'}/>
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className='field'
                        type="text"
                        placeholder='Назва списку'
                    />
                    <div className="add-list__popup-colors">
                        {
                            colors.map(color =>
                                <Badge
                                    onClick={()=> selectColor(color.id)}
                                    key = {color.id}
                                    color={color.name}
                                    className={selectedColor === color.id && 'active '}
                                />)
                        }
                    </div>
                    <button onClick={addList} className='button'>Додати</button>
                </div>
            )}
        </div>
    )
};
export default AddList;