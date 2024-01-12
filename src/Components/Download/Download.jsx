import Button from '../Button/Button.jsx';
import './Download.sass';

function Download() {
  return (
    <div className="main__buttons">
      <Button text="Download for iOS" colorClassName={'green'} link="#" />
      <Button text="Download for Mac" colorClassName={'violet'} link="#" />
    </div>
  );
}

export default Download;
