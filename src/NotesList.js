import React from 'react';
import styles from './NotesList.modules.css';

export default function NotesList(props) {
return (

    // Note: allowing styling from the parent
    // may have unintended consequences.
    // Parent styles may take precedence, which
    // goes against per-component styling.

    // how do we combine styles?
    // console.log(props.className);
    // console.log(styles.list);
<ul className={`${styles.list} ${props.className}`}>
    <li>This</li>
    <li>is</li>
    <li>the</li>
    <li>notes List</li>
</ul>
)
}
