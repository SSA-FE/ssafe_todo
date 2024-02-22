
import { useState, Fragment, useEffect } from 'react';

import { Container } from './components/Container';

import classNames from 'classnames';


const STATUS = ["To do", "In progress", "Done"]

function App() {
  const [mode, setMode] = useState()

  useEffect(() => {
    const localDarkmode = localStorage.getItem('darkmode') 
    setMode(localDarkmode)
  }, [])

  useEffect(() => {
    mode === 'dark' ? document.documentElement.classList.remove('dark')  : document.documentElement.classList.add('dark')
    localStorage.setItem('darkmode', mode)
  }, [mode])

  const handleDarkMode = () => {
    mode === 'dark' ? setMode('light') : setMode('dark')
  }

  return (
    <Fragment>
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

        'dark:text-white',
      )}>
        <span>Roadmap</span>

        <div onClick={handleDarkMode}>
          <img src={process.env.PUBLIC_URL + `/asset/icon/${mode}.png`} alt="darkmode" className={classNames(
            'w-12',
            'h-12',

            'hover:cursor-pointer',
            'hover:opacity-70'
          )}/>
        </div>
      </div>

      <div className={classNames(
        'w-full',

        'flex',
        'justify-around',

        'max-sm:flex-col',
        'max-sm:items-center',
        'max-sm:gap-y-8'
      )}>
        {
          STATUS.map((status, index) => (
            <Container key={index} status={status} />
          ))
        }
      </div>
    </Fragment>
  );
}

export default App;
