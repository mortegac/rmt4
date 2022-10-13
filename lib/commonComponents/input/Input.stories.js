import { useState, useRef } from 'react';
import  Input  from "./Input";

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  return(
    <div style={{width:'300px'}}>
      <Input 
        handlerOnChange={(e) => setValue(e.target.value)}
        value={value}
      {...args} />
    </div>
  )
}

const TemplateFocus = (args) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  
  return(
    <div style={{width:'300px'}}>
      <Input 
        handlerOnChange={(e) => setValue(e.target.value)}
        value={value}
        ref={()=>inputRef.current?.focus()}
      {...args} />
    </div>
  )
}

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  textLabel: 'work email',
};

export const FocusLayout = TemplateFocus.bind({});
FocusLayout.args = {
  textLabel: 'work email',
  value: 'test@test.com',
};

export const ErrorLayout = Template.bind({});
ErrorLayout.args = {
  textLabel: 'work email',
  isRequired:"isRequired",
  validationsMessage:"invalid work email",
};