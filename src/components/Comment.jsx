import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../utils/dateFormat';

const CommentCss = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};

  .info {
    padding: 5px 0;
    display: flex;
    align-items: center;
  }
  .name {
    text-transform: uppercase;
    margin-right: ${({ theme: { spacing } }) => spacing.sm};
    color: ${({ theme: { colors } }) => colors.primary};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .date {
    flex-shrink: 0;
    color: ${({ theme: { colors } }) => colors.gray};
    font-size: 12px;
    white-space: nowrap;
  }
`;

const Comment = ({id, text, date, name}) => {
  return (
    <CommentCss>
      <div className='info'>
        {name && <strong className='name'>{name}</strong>}
        <span className='date'>{dateFormat(date)}</span>
      </div>
      <p className='text'>{text}</p>
    </CommentCss>
  );
};

export default Comment;
