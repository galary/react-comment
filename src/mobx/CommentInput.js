import React, { Component } from 'react'
import { MessageBox  } from 'element-react';
// import PropTypes from 'prop-types'
import { observer} from 'mobx-react'

// @inject('store')
@observer
class CommentInput extends Component {
    handleContentChange(event){
        const val=event.target.value;
        this.props.store.changeContent(val)
    }
    handleUserNameChange(event){
        const val=event.target.value;
        this.props.store.changeUserName(val)
    }
    componentDidUpdate(){
        // console.log(this.props.store.userName) 
    }
    componentWillMount() {
        console.log(this.props)
    }
    submitComment(){
        if(this.props.store.userName&&this.props.store.content){
            this.props.store.submitComment()
        }else{
            MessageBox.msgbox({
                title: '提示',
                message: '请填写完整再提交',
                type:'warning'
          })
        }
        
    }
    render() {
        let {userName,content}=this.props.store;
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={userName}  onChange={(event)=>this.handleUserNameChange(event)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={content} onChange={this.handleContentChange.bind(this)}  />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={()=>this.submitComment()}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput