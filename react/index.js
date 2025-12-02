// const rootEle = document.getElementById("root");
// const headingEle = document.createElement('h1');
// headingEle.innerHTML = "Hello World from React!";
// rootEle.appendChild(headingEle);

const container = React.createElement('div', { id: 'container' }, [
    React.createElement('div', { id: 'inner-container-1', key: 'container-1' }, [
        React.createElement('h1', { id: 'heading-1-1', key: 'h1-1' }, 'I am heading h1 of first container'),
        React.createElement('h2', { id: 'heading-2-1', key: 'h2-1' }, 'I am heading h2 of first container')
    ]),
    React.createElement('div', { id: 'inner-container-2', key: 'container-2' }, [
        React.createElement('h1', { id: 'heading-1-2', key: 'h1-2' }, 'I am heading h1 of second container'),
        React.createElement('h2', { id: 'heading-2-2', key: 'h2-2' }, 'I am heading h2 of second container')
    ])
])

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(container);