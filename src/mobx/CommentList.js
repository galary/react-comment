import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

@observer
class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    componentDidUpdate() {}
    componentWillMount() {}
    render() {
    	let {deleteComment}=this.props.store;
        return (
            <div className="mobx-list">
                {this.props.store.comments?
                    this.props.store.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i} onDeleteComment={()=>deleteComment(i)} />
                ):''
                }
            </div>
        )
    }
}

export default CommentList
