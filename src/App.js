import './App.css';

function App() {
  return (
    <>
    <main>
      <div class='right'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div class='left'>
        <button class='try'>Try it free 7 days <span>then $20/mo. thereafter</span></button>
        <form>
          <input placeholder='First Name'></input>
          <input placeholder='Last Name'></input>
          <input placeholder='Email Address' type='email'></input>
          <input placeholder='Password' type='password'></input>
          <button class='trial'>CLAIM YOUR FREE TRIAL</button>
          <p>By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a></p>
        </form>  
      </div>
    </main>
    </>
  );
}

export default App;
