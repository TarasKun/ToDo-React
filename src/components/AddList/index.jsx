import React, { useState }from "react";
import List from '../List'
import './AddList.scss';
import Badge from "../Badge";


const AddList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(null);


    return (
        <div className={'add-list'}>
    <List
        onClick = {()=>{setVisiblePopup(true)}}
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
                <input className='field' type="text" placeholder='Назва списку'/>
                <div className="add-list__popup-colors">
                    {
                        colors.map(color =>
                            <Badge
                                onClick={()=> selectColor()}
                                key = {color.id}
                                color={color.name}
                                className={selectedColor === color.id && 'active '}
                            />)
                    }
                </div>
                <button className='button'>Додати</button>
            </div>
            )}
        </div>
    )
};
export default AddList;