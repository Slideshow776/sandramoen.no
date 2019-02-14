export default {
	trackInteraction (label) {
		console.log('Mixin is working!')
		window.dataLayer.push({'event': String(label)})
		console.log(window.dataLayer)
	}
}
