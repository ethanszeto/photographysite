window.addEventListener("load", run());

function run(){
	const root = ReactDOM.createRoot(document.getElementById('root'));
	const test = (
		<div>
			<img src={'./assets/IMG_0010.png'} alt="image"/>
			<h1>Sample</h1>
		</div>
	);
	root.render(test);
}