import React from 'react';
const Header = ({ title, items }) => {

    const handleCount =(items)=>{
        const count= items.filter((item)=>{
            return (item.checked===false);
        })
        return count.length;
    }

    return (
        <header>
            <h1>{title}</h1>
            <div className='count'>
                <span>
                    {handleCount(items)}
                </span>
            </div>
        </header>
    )
}
Header.defaultProps = {
    title: 'To do app'
}
export default Header
