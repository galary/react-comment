import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super()
        this.state = { timeString: '' }
    }
    componentWillMount() {
        this._updateTime()
        this.timer = setInterval(this._updateTime.bind(this), 5000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    _updateTime() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000;
        var timeString
        if (duration <= 30) {
            timeString = `刚刚`
            // timeString:`${Math.round(duration / 60)} 分钟前`
        } else if (duration < 60) {
            timeString = `${Math.round(Math.max(duration, 1))} 秒前`
            // `${Math.round(Math.max(duration, 1))} 秒前`
        } else if (duration < 3600) {
            timeString = `${Math.round(Math.max(duration / 60, 1))}分钟前`
        } else if (duration < 216000) {
            timeString = `${Math.round(Math.max(duration / 3600, 1))}小时前`
        } else if (duration < 5184000) {
            timeString = `${Math.round(Math.max(duration / 216000, 1))}天前`
        } else {
            timeString = `long long ago`
        }
        this.setState({
            timeString
        })
    }
    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }
    render() {
        return (
            <div className='comment-mobx'>
                <div className='comment-user'>
                    <span>{this.props.comment.userName} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime' >
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment
