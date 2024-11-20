import './App.css'
import { maxAge, minAge, sortByMaxAge, sortByMinAge } from './utils/helper'
import Counter from './components/counter'
import data from  './utils/data.json'
import { useState } from 'react'
import Modal from './components/modals'
import Tables from './components/tables'
import Tabs from './components/tabs'


function App() {
  const [isModalOpen, setModalOpen] = useState(false);


  console.log("minAge", minAge(data))
  console.log("maxAge", maxAge(data))
  console.log("sortByMinAge", sortByMinAge(data))
  console.log("sortByMaxAge", sortByMaxAge(data))

  return (
    <>
      <div className="w-full flex flex-col gap-4 h-screen">
      <Counter />

      <Tabs />

      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setModalOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isModalOpen}
          title="Modal Title"
          closeModal={() => setModalOpen(false)}
        >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nemo necessitatibus quo non voluptatibus consequatur aliquid eos dicta, amet quisquam vitae fugiat debitis ab culpa corrupti. Cumque quis vitae sequi dolore dignissimos nisi culpa sapiente, laboriosam ut voluptate quisquam rerum quos repellat maxime suscipit magni asperiores eius error laborum repellendus id. Ullam, eveniet, quo dolores corporis repellendus fuga similique modi repellat, soluta autem quidem nobis. Voluptatum excepturi in rerum placeat debitis rem est esse consectetur eum quidem consequatur omnis veniam consequuntur exercitationem quae reprehenderit alias ipsa explicabo fugit aspernatur repudiandae, doloribus nobis possimus. Fugit velit, laudantium incidunt quasi accusamus totam?</p>
        </Modal>
      </div>

      <Tables users={data} />
    </div>
    </>
  )
}

export default App
