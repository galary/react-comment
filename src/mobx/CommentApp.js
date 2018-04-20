import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { observer} from 'mobx-react'
import mobxStore from './mobxStore';
import { Tag  } from 'element-react';
const store = new mobxStore();

@observer
class CommentApp extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="content-mobx">
                <Tag type="danger">mobx+element-react</Tag>
                <CommentInput store={store}/>
                <CommentList store={store}/>
            </div>
        )
    }
}

export default CommentApp