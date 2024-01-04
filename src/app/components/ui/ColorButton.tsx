import React from 'react';

type Props = {
  text   : string;
  onClick: () => void;
}

export default function ColorButton(props: Props) {
  return (
    <div className='rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
      <button 
        onClick={props.onClick}
        className='bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity'
      >
        {props.text}
      </button>
    </div>
  );
}