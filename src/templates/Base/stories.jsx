import { Base } from '.';


export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
