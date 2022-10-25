import { Global } from '@emotion/react' // connection Global Styles
import { GlobalStyles } from './App.styled';
import Vidget from 'components/Vidget/Vidget';

export const App = () => {
  return (
    <Vidget>
      <Global styles={GlobalStyles} />
    </Vidget>
  );
};