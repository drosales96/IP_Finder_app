const OPTIONS = {
  method: 'GET',
  headers: {
    // No es necesario agregar headers para ip.guide
  }
}

// Función para verificar si la IP es IPv4
const isIPv4 = ip => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);

// Función para verificar si la IP es IPv6
const isIPv6 = ip => /^[0-9a-fA-F:]+$/.test(ip);

const fetchIpInfo = async ip => {
  try {
    // Comprueba el tipo de IP y ajusta la URL si es necesario
    const url = `https://ip.guide/${ip}`;
    const response = await fetch(url, OPTIONS);
    
    console.log(`Response Status: ${response.status}`);
    console.log(`Response URL: ${response.url}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data); // Verifica el formato de los datos
    return data;
  } catch (err) {
    console.error('Fetch Error:', err.message);
    return null;
  }
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  // Detectar tipo de IP y procesar
  if (!isIPv4(value) && !isIPv6(value)) {
    $results.innerHTML = 'Invalid IP address format.';
    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');
    return;
  }

  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    const formattedInfo = {
      IP: ipInfo.ip,
      City: ipInfo.location?.city || 'N/A',
      Country: ipInfo.location?.country || 'N/A',
      Latitude: ipInfo.location?.latitude || 'N/A',
      Longitude: ipInfo.location?.longitude || 'N/A',
      ASN: ipInfo.network?.autonomous_system?.asn || 'N/A',
      'Autonomous System Name': ipInfo.network?.autonomous_system?.name || 'N/A'
    }

    $results.innerHTML = `<pre>${JSON.stringify(formattedInfo, null, 2)}</pre>`
  } else {
    $results.innerHTML = 'No data available for this IP address.'
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})
