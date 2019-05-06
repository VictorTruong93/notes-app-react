import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.modules.css';

export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote:'1001',
            notes: [
                {
                    id:'1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id:'1002',
                    title: 'second note',
                    text: 'this is the second note'
                },
                {
                    id:'1003',
                    title: 'third note',
                    text: 'this is the third note'
                }

            ]
        }
    }

    render() {
        const theNote = this.state.notes.find(note =>this.state.selectedNote===note.id);
        return (
            <div className={styles.app}>
                <NotesList 
                className={styles.list} 
                notes={this.state.notes}
                handleSelection={this._selectNote}
                />
                <NotesDetail 
                className={styles.detail}
                note={theNote}
                handleSave={this._updateNote}
                />
            </div>
        );
    }
    _selectNote = (id)=>{
        this.setState({
            selectedNote: id
        })
    }
    _updateNote=(idToUpdate,newText)=>{
        const updatedNotes1 = this.state.notes.map(note =>{
            if(note.id === idToUpdate){
                //return modified version
                return {
                    ...note,    //Spread out all the existing key-value pairs.
                    text:newText //overwrite JUST the text property
                }
            }else{ 
                //else return a copy of note as=is
                return {...note};
            }
        });
        this.setState({
            notes: updatedNotes1 //ALready a copy
        })
        // ============================================================================
        // Version 2a:
        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
        // this.setState({
        //     notes: [
        //         ...updatedNotes2,
        //         {
        //             ...theNoteToUpdate,
        //             text: newText
        //         }
        //     ]
        // });
        // ============================================================================
        // Alternatively, version 2b:
        // this.setState({
        //     notes: updatedNotes2.concat({
        //         ...theNoteToUpdate,
        //         text: newText
        //     })
        // });
    }
}




