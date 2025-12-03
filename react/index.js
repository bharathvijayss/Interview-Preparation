import ReactDOM from 'react-dom/client';

const container = (
    <div id='container'>
        <div id='inner-container-1'>
            <h1 id='heading-1-1' className='heading'>I am heading h1 of first container</h1>
            <h2 id='heading-2-1'>I am heading h2 of first container</h2>
        </div>
        <div id='inner-container-2'>
            <h1 id='heading-1-2' className='heading'>I am heading h1 of second container</h1>
            <h2 id='heading-2-2'>I am heading h2 of second container</h2>
        </div>
    </div>
);

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(container);