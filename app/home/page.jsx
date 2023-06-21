'use client'
import { Tabs } from 'antd';
import React from 'react';
import Subcri from '../Subcrip'
import Revenue from '../Revenue'
export default function Page() {
  const onChange = (key) => {
    console.log(key);
  };

  const tabItems = [
    {
      label: 'Subcription',
      key: '1',
      content: <Subcri />,
      //componet
    },
    {
      label: 'Revenue',
      key: '2',
      content: <Revenue />,
    },
  ];

  return (
    <div>
      <h1 className="font-serif text-xl font-black">Dashboard</h1>
      <Tabs onChange={onChange} className="my-4" type="card" >
        {tabItems.map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}>
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}
