import React, { useState } from 'react';
import { Form, Input, Tag, Button } from 'antd';
import { useLocalStore } from '../store/local';

const TagsInput = ({ label, placeholder, name, form }) => {
  const [inputValue, setInputValue] = useState('');
  const { gates, ticketGates, addGate, removeGate, addTicketGate, removeTicketGate } = useLocalStore();

  const tags = name === 'gates' ? gates : ticketGates;
  const addTag = name === 'gates' ? addGate : addTicketGate;
  const removeTag = name === 'gates' ? removeGate : removeTicketGate;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      addTag(inputValue);
      setInputValue('');
      form.setFieldsValue({
        [name]: [...tags, inputValue]
      });
    }
  };

  const handleRemoveTag = (removedTag) => {
    removeTag(removedTag);
    form.setFieldsValue({
      [name]: tags.filter(tag => tag !== removedTag)
    });
  };

  return (
    <Form.Item label={label}>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleAddTag}
        suffix={
          <Button style={{backgroundColor: '#051D41'  }} type="primary" onClick={handleAddTag}>+</Button>
        }
      />
      <div style={{ marginTop: 8 }}>
        {tags.map(tag => (
          <Tag key={tag} closable onClose={() => handleRemoveTag(tag)}>
            {tag}
          </Tag>
        ))}
      </div>
    </Form.Item>
  );
};

export default TagsInput;
