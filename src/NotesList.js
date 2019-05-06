import React from 'react';
import styles from './NotesList.modules.css';

function NotesListItem({id,text,handleClick}){
    return(
        <li>
            <a 
        href="#" 
        onClick={(e)=>{
            e.preventDefault();
            console.log('you have clicked')
            handleClick(id)}}
        >{text}
        </a>
        </li>
    )
}

export default function NotesList({notes, className, handleSelection}) {
    const items = notes.map(note => <NotesListItem id={note.id} text={note.title} handleClick={handleSelection}/>);
    
            // Note: allowing styling from the parent
            // may have unintended consequences.
            // Parent styles may take precedence, which
            // goes against per-component styling.
    return (
    <ul className={`${styles.list} ${className}`}>
        {items}
    </ul>
    )
}
