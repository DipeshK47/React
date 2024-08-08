import { useState, useCallback, useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbrAllowed, setNumbrAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKHMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbrAllowed) str += "0123456789" 
    if (charAllowed) str += "!@#$%^&*()_+-./`~|;:{}<>.," 

    for(let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  }, [length, numbrAllowed, charAllowed])

  // Copy to clipboard
  const copyPasswodToClipboard = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numbrAllowed, charAllowed, passwordGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly 
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswodToClipboard}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={numbrAllowed}
              id="numberInput"
              onChange={() => setNumbrAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 py-2'>
            <input 
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App