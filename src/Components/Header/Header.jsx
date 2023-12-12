import BlocText from '../BlocText/BlocText';
import Button from '../Button/Button';
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
      <div className="main__buttons">
        <Button text="Download for iOS" colorClassName={'green'} link="#" />
        <Button text="Download for MAC" colorClassName={'violet'} link="#" />
      </div>
    </header>
  );
}
export default Header;
