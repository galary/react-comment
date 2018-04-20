import React, { Component } from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    static defaultProps = {
        onSubmit: ''
    }
    constructor() {
        super()
        this.state = {
            userName: '',
            content: ''
        }
    }
    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    submitComment() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                userName: this.state.userName,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }
    componentDidMount() {
        this.refs.content.focus()
    }
    _saveName(userName) {
        localStorage.setItem("userName", userName)
    }
    handleUsernameBlur(el) {
        this._saveName(el.target.value)
    }
    componentWillMount() {
        this._getName()
    }
    _getName() {
        const userName = localStorage.getItem("userName")
        if (userName) {
            this.setState({ userName })
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.userName} onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref="content" />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.submitComment.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput