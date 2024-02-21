
import { useState, Fragment } from 'react';

import { Container } from './components/Container';
import classNames from 'classnames';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Fragment>
      {/* Roadmap */}
      <div className={classNames(
        'w-full',
        'py-12',
        'px-8',

        'text-[50px]',
        'font-bold',
        'text-theme-font',

        'flex',
        'justify-between',
        'items-center',

        'max-sm:flex-col',
        'max-sm:justify-center',
      )}>
        <span>Roadmap</span>

        {/* 다크모드 <-> 라이트모드 */}
        <div onClick={handleDarkMode}>
          <img src={isDarkMode ? "asset/icon/dark.png" : "asset/icon/light.png"} alt="darkmode" className={classNames(
            'w-12',
            'h-12',

            'hover:cursor-pointer',
            'hover:opacity-70'
          )}/>
        </div>
      </div>

      {/* Main Container */}
      <div className={classNames(
        'w-full',
        'flex',
        'justify-around',

        'max-sm:flex-col',
        'max-sm:items-center',
        'max-sm:gap-y-8'
      )}>
        {
          ["To do", "In progress", "Done"].map((status, index) => (
            <Container key={index} status={status} />
          ))
        }
      </div>
    </Fragment>
  );
}

export default App;
