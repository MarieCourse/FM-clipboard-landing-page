import BlocText from '../BlocText/BlocText';
import Download from '../Download/Download';

import './Header.sass';

function Header() {
  return (
    <header>
      <img src="src\assets\logo.svg" alt="logo-frontend-mentor-projet" />
      <BlocText
        level={1}
        title={'A history of everyting you copy'}
        paragraph={
          'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
        }
      />
      <Download />
    </header>
  );
}
export default Header;
