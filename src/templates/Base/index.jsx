import P from 'prop-types';
import * as Styled from './styles';


export const Base = ({ children }) => {
  return (
    <>
      <Styled.Container>
        {children}
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,

};
