import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from '../ui/Btn';

const Form = styled.form``;

const FormItem = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};
  &:last-child {
    margin-bottom: 0;
  }
`;


const FormComment = ({addPost}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      return alert('Оставьте комментарий!');
    }
    addPost(name, text);
    setName('');
    setText('');
  }

  return (
    <Form noValidate onSubmit={submitHandler}>
      <FormItem>
        <input
          type='text'
          name='name'
          placeholder='Ваше имя'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <textarea
          type='text'
          name='comment'
          placeholder='Ваш комментарий'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Btn type={'submit'} width={'100%'} primary text={'оставить комментарий'} />
      </FormItem>
    </Form>
  );
};

export default FormComment;
