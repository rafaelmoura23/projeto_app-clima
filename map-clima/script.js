
document.getElementById('forms-pesquisa').addEventListener('submit', async function (event) {
    event.preventDefault();
    const cityName = document.getElementById('cidade').value;
    const apiKey = '2ee41cb542b1d1a20e963bef0971cf51'; 

    if (cityName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`);
            const data = await response.json();

            if (data.cod === 200) {
                const resultDiv = document.getElementById('informacoes-tempo');
                resultDiv.innerHTML = `
                            <h2>${data.name}, ${data.sys.country}</h2>
                            <p><strong>Coordenadas:</strong> </p>
                            <p>Latitude ${data.coord.lat}</p>
                            <p>Longitude ${data.coord.lon}</p>
                            <p><strong>Clima:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
                            <p><strong>Ícone:</strong> <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}"></p>
                            <p><strong>Temperatura Atual:</strong> ${data.main.temp} °C</p>
                            <p><strong>Sensação Térmica:</strong> ${data.main.feels_like} °C</p>
                            <p><strong>Temperatura Máxima:</strong> ${data.main.temp_max} °C</p>
                            <p><strong>Temperatura Mínima:</strong> ${data.main.temp_min} °C</p>
                            <p><strong>Pressão Atmosférica:</strong> ${data.main.pressure} hPa</p>
                            <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
                            <p><strong>Pressão a Nível do Mar:</strong> ${data.main.sea_level} hPa</p>
                            <p><strong>Pressão a Nível do Solo:</strong> ${data.main.grnd_level} hPa</p>
                            <p><strong>Visibilidade:</strong> ${data.visibility / 1000} km</p>
                            <p><strong>Vento:</strong> ${data.wind.speed} m/s (Rajada: ${data.wind.gust} m/s, Direção: ${data.wind.deg}°)</p>
                            <p><strong>Cobertura de Nuvens:</strong> ${data.clouds.all}%</p>
                            <p><strong>Data e Hora do Registro:</strong> ${new Date(data.dt * 1000).toLocaleString()}</p>
                            <p><strong>Nascer do Sol:</strong> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p><strong>Pôr do Sol:</strong> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                            <p><strong>Timezone:</strong> ${data.timezone} segundos desde GMT</p>
                            <p><strong>ID da Cidade:</strong> ${data.id}</p>
                            <p><strong>Código de Resposta:</strong> ${data.cod}</p>
                        `;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>Não foi possível encontrar informações para a cidade "${cityName}".</p>`;
            }
        } catch (error) {
            document.getElementById('informacoes-tempo').innerHTML = `<p>Ocorreu um erro ao buscar as informações.</p>`;
        }
    }
});