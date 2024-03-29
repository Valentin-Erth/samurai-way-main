import React, {ChangeEvent, FC} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus:(status:string)=>void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        // debugger
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        // debugger
        console.log(e.currentTarget.value)
        this.setState({status:e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        // console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status|| "------"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.props.status}/>
                    </div>}
            </div>


        );
    }
}

