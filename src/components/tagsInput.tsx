import { useState } from 'react';
import { Form, Input, Tag, Button, FormInstance } from 'antd';
import { useLocalStore } from '../store/local';
import { Gate } from '../pages/Local/types/local';

interface TagInputType {
  label: string;
  placeholder: string;
  name: string;
  form: FormInstance;
}

const TagsInput = ({ label, placeholder, name, form }: TagInputType) => {
  console.log(form, 'label');

  const [inputValue, setInputValue] = useState('');
  const {
    gates,
    ticketGates,
    addGate,
    removeGate,
    addTicketGate,
    removeTicketGate,
  } = useLocalStore();
  console.log(ticketGates, 'hh');

  const tags = name === 'gates' ? gates : ticketGates;
  const addTag = name === 'gates' ? addGate : addTicketGate;
  const removeTag = name === 'gates' ? removeGate : removeTicketGate;

  const handleInputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      addTag(inputValue);
      setInputValue('');
      form.setFieldsValue({
        [name]: [...tags, inputValue],
      });
    }
  };

  const handleRemoveTag = (removedTag: string) => {
    removeTag(removedTag);
    form.setFieldsValue({
      [name]: tags.filter((tag) => tag !== removedTag),
    });
  };

  console.log(tags);

  return (
    <Form.Item label={label}>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleAddTag}
        suffix={
          <Button
            style={{ backgroundColor: '#051D41' }}
            type="primary"
            onClick={handleAddTag}
          >
            +
          </Button>
        }
      />
      {tags?.length > 0 && (
        <div style={{ marginTop: 8 }}>
          {tags.map((tag: string | Gate) => (
            <Tag
              key={typeof tag === 'string' ? tag : tag.id}
              closable
              onClose={() =>
                handleRemoveTag(typeof tag === 'string' ? tag : tag.id)
              }
            >
              {typeof tag === 'string' ? tag : tag.id}
            </Tag>
          ))}
        </div>
      )}
    </Form.Item>
  );
};

export default TagsInput;
