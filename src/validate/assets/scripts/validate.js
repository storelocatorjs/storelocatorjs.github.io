const searchParams = new URLSearchParams(window.location.search)

if (searchParams.has('license_key')) {
	document.querySelector('#license-key').value = searchParams.get('license_key')
}

const resultElement = document.querySelector('.result')
document.querySelector('#btn-submit').addEventListener('click', (e) => {
	e.preventDefault()

	resultElement.innerHTML = ''
	resultElement.classList.remove('alert-danger', 'alert-success')

	const licenseKey = document.querySelector('#license-key').value
	if (licenseKey !== '') {
		activate(licenseKey).then((response) => {
			if (`${response.status}`.startsWith('4')) {
				resultElement.classList.add('alert-danger')
				resultElement.innerHTML = 'The license key is not valid'
			} else if (response.activated) {
				resultElement.classList.add('alert-success')
				resultElement.innerHTML = 'The license key is activated'
			}
		})
	}
})

async function activate(licenseKey) {
	return fetch('https://api.lemonsqueezy.com/v1/licenses/activate', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			license_key: licenseKey,
			instance_name: 'storelocator-default-license'
		})
	}).then((response) => {
		if (!response.ok) {
			return { status: response.status }
		} else {
			return response.json()
		}
	})
}
