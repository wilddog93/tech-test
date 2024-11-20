import { useState } from 'react'

export default function Tabs() {
  const tabs = ['HTML', 'React', 'Vue']
  const [activeTab, setActiveTab] = useState('HTML')

  return (
    <div className='w-full flex justify-center gap-4'>
      <div className='tabs'>
        {
          tabs.map((tab, index) => {
            return (
              <label className="tabs-label" key={index}>
                <input
                  type="radio"
                  name="radio"
                  value={tab}
                  checked={activeTab === tab}
                  onChange={() => setActiveTab(tab)}
                />
                <span className="tabs-name">{tab}</span>
              </label>
            )
          })
        }
      </div>
    </div>
  )
}
