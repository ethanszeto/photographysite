window.addEventListener("load", run());

function run() {
	ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(
		"p",
		null,
		"example text"
	));
}