import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import CommentsList from '../components/CommentsList';
import FormComment from '../components/FormComment';
import { addComment, getPost, removePost, selectPost } from '../store/slices/postSlice';
import CloseBtn from '../ui/CloseBtn';
import Img from '../ui/Img';
import Loader from '../ui/Loader';
import Overlay from '../ui/Overlay';
import { currentDate } from '../utils/dateFormat';
import { randomId } from '../utils/randomId';

const ModalHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  @media screen and (${({ theme: { media } }) => media.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme: { spacing } }) => spacing.sm} ${({ theme: { spacing } }) => spacing.md};
  }

  .modal-content {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    background-color: ${({ theme: { colors } }) => colors.white};

    @media screen and (${({ theme: { media } }) => media.tablet}) {
      padding: ${({ theme: { spacing } }) => spacing.md};
      height: auto;
      max-width: 920px;
    }
  }

  .group {
    @media screen and (${({ theme: { media } }) => media.tablet}) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .left {
    @media screen and (${({ theme: { media } }) => media.tablet}) {
      width: 60%;
    }
  }
  .right {
    padding: ${({ theme: { spacing } }) => spacing.md};
    padding-bottom: 0;
    margin-bottom: ${({ theme: { spacing } }) => spacing.md};
    max-height: 550px;
    overflow-y: auto;
    @media screen and (${({ theme: { media } }) => media.tablet}) {
      margin: 0;
      position: absolute;
      top: ${({ theme: { spacing } }) => spacing.md};
      right: calc(${({ theme: { spacing } }) => spacing.sm} / 2);
      bottom: ${({ theme: { spacing } }) => spacing.md};
      width: 40%;
      padding: 0 ${({ theme: { spacing } }) => spacing.sm};
      max-height: none;
    }
  }
  .img-holder {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    @media screen and (${({ theme: { media } }) => media.tablet}) {
      margin-bottom: ${({ theme: { spacing } }) => spacing.md};
    };
  }
  .form-holder {
    padding: 0 ${({ theme: { spacing } }) => spacing.md} ${({ theme: { spacing } }) => spacing.lg};
    @media screen and (${({ theme: { media } }) => media.tablet}) {
      padding: 0;
    }
  }
`;

const Modal = () => {
  const history = useHistory();
  const params = useParams();
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const modalHolderRef = useRef(null);

  useEffect(() => {
    dispatch(getPost(params.id));
    document.body.classList.add('modal-active');
    return () => {
      document.body.classList.remove('modal-active');
    }
  }, [dispatch, params]);

  useEffect(() => {
    if (post.error && !post.loading) {
      closeHandler();
    }
  }, [post]);

  const closeHandler = () => {
    history.push('/');
    dispatch(removePost());
  }

  const modalClickHandler = (e) => {
    if (e.target === modalHolderRef.current) {
      closeHandler();
    }
  }

  const addPostHandler = (name, text) => {
    const newComment = {
      name,
      text,
      id: randomId(),
      date: currentDate(),
    }
    dispatch(addComment(newComment));
  }

  return (
    <>
      <Overlay/>
      <ModalHolder onClick={modalClickHandler} ref={modalHolderRef}>
        <div className='modal-content'>
          <CloseBtn close={closeHandler} title={'close modal'}/>
          <Loader show={post.loading} />
          {post.post && (
            <>
              <div className='group'>
                <div className='left'>
                  <div className='img-holder'>
                    <Img src={post.post.url} />
                  </div>
                </div>
                <div className='right'>
                  {!post.post.comments.length && <p>No comments</p>}
                  <CommentsList comments={post.post.comments}/>
                </div>
              </div>
              <div className='group'>
                <div className='left form-holder'>
                  <FormComment addPost={addPostHandler}/>
                </div>
              </div>
            </>
          )}
        </div>
      </ModalHolder>
    </>
  );
};

export default Modal;
