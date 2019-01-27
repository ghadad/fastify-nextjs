import React from 'react'
import dynamic from 'next/dynamic'

const DynamicCounter = dynamic(() => import('../components/Counter.jsx'), {
  loading: () => <p>...</p>,
  ssr: false,
})

export default () => {
  const [ count, setCount ] = React.useState(0)
  return (
    <div>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
      <DynamicCounter />
    </div>
  );
}