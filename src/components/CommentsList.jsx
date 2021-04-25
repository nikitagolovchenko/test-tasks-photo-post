import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id}/>
      ))}
    </>
  )
}

export default CommentsList
