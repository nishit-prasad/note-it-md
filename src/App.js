import './App.css';

function App() {
    const newNotePlaceholder = "Your new note here"
    return (
        <>
            <div>
                <textarea
                    name="newNote"
                    id="newNote"
                    cols="50"
                    rows="10"
                    placeholder={newNotePlaceholder}
                >

                </textarea>
            </div>
            <div>
                <button type="submit" href="/">Add Note</button>
            </div>
        </>
  );
}

export default App;