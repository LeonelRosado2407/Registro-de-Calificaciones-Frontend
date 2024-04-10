import React from 'react'

export default function TablaComponent({children,className}) {
  return (
    <>
        <table className={'mt-4 w-full min-w-max table-auto text-left' + className}>
            {children}
        </table>
    </>
  )
}
