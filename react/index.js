// const rootEle = document.getElementById("root");
// const headingEle = document.createElement('h1');
// headingEle.innerHTML = "Hello World from React!";
// rootEle.appendChild(headingEle);

const headingEle = React.createElement('h1', {}, 'Hello World from React!');
const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(headingEle);