import Flag from "./Flag";
import flags from './country_dial_info.json';

export default {
  title: "Components/Flag",
  component: Flag,
  argTypes: {
    code: {
      options: [...flags.map(({ code }) => code)],
      control: { type: "select" },
    },
  },
  args: { code: "CL" },
};

export const FlagsRendering = (args) => {
return(
  <>
    { flags.map((item, i)=> (
      <>
      <div key={i} ><Flag code={item.code} {...args} /><span>{item.code}</span></div>
      </>
      ))}

</>
  )
}

export const FlagRendering = ({ code, ...args }) => {
  return (
    <>
      <Flag code={code} {...args} />
    </>
  );
};
