import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-64 bg-gray-300 items-center border-r-2 border-gray-800">
        <div className="flex flex-col space-y-3 items-center text-gray-700">
          <div className="w-full h-24 flex justify-around items-center border-b-2 border-gray-400">
            <h1 className="text-center font-semibold text-2xl">Your Notes</h1>
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="w-56 p-2 flex flex-col space-y-6">
            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>
            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>

            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>

            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>
            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>
            <div className="w-full h-12 cursor-pointer border border-gray-600 rounded-lg active:text-white active:bg-gray-600 hover:text-white hover:bg-gray-600">
              <span>What is Lorem Ipsum?</span>
            </div>

          </div>
        </div>
      </div>
      <div className="flex flex-auto flex-col bg-gray-100 rounded-tl-xl shadow text-gray-700">
        <div className="p-5 flex items-center justify-between w-full h-24 shadow font-bold text-4xl">
          <h1>What is Lorem Ipsum</h1>
          <div className="flex space-x-2 mr-5">
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          </div>
        </div>
        <div className="p-10 flex-auto text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>
    </div>
  );
}

export default App;