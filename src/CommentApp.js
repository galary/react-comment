import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import PropTypes from 'prop-types'
class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount() {
        this._getComment()
    }
    _getComment() {

        let comments = localStorage.getItem("comments")
        comments = JSON.parse(comments)
        if (comments) {
            if (comments.length > 5) {
                comments.splice(0, comments.length - 5)
                this._saveComment(comments)
            }
            this.setState({ comments })
        }
    }
    _saveComment(comments) {
        localStorage.setItem("comments", JSON.stringify(comments))
    }
    handleSubmitComment(c) {
        if (!c) { return }
        if (!c.userName) { return alert("请输入用户名") }
        if (!c.content) { return alert("请输入评论") }
        const comments = this.state.comments
        comments.push(c)
        this.setState({
            comments
        })
        this._saveComment(comments)
        this._getComment()
    }
    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments })
        this._saveComment(comments)
    }
    render() {
        return (
            <div className="content">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}

export default CommentApp