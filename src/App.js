import React from 'react';
import StatelessComponent from './components/stateless-component';

export default function App() {
  return (
    <StatelessComponent
      items={[
        "Apple", "Orange", "Banana"
      ]}
    />
  )
}