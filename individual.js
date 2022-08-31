window.addEventListener("load", run());

function run() {
	var root = ReactDOM.createRoot(document.getElementById('root'));
	var test = React.createElement(
		'div',
		null,
		React.createElement('img', { src: './assets/IMG_0010.png', alt: 'image' }),
		React.createElement(
			'h1',
			null,
			'Sample'
		)
	);
	root.render(test);
}