import React from 'react';
import styles from './NotesList.modules.css';

function NotesListItem({text}){
    return(
        <li><a 
        href="#" 
        onClick={()=>console.log('you have clicked')}
        >{text}
        </a>
        </li>
    )
}

export default function NotesList({notes, className}) {
    const items = notes.map(note => <NotesListItem text={note.title}/>);
    
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
