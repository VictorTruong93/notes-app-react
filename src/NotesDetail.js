




import React from 'react'


function NotesEditor({text, handleChange}){
    return(
        <textarea value={text} onChange={(e)=>{
            handleChange(e.target.value);
        }
    }/>
    );
};

export default class NotesDetail extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            draftText: props.text
        }
    }

    render(){
        
        //declares the className and note variables
        //assigns them to the properties from this.props
        //where the name matches 
        const{className,note}=this.props;
        const{isEditing, draftText} = this.state;
        return (
            <div className = {className}>
                {
                    isEditing ? <NotesEditor 
                        handleChange={this._changeDraftText}
                        text={draftText}
                        /> 
                    : draftText
                    }
                <button onClick={this._toggleIsEditing}>toggle</button>
            </div>
        );
    }
    _changeDraftText = (newText)=>{
        this.setState({
            draftText:newText
        })
    }
    _toggleIsEditing = ()=>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
}
