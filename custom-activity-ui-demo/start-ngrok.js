const ngrok = require('ngrok');
const fs = require('fs');
const path = require('path');

(async function () {
    try {
        const url = await ngrok.connect({
        addr: 3000,
        subdomain: 'donkey-literate-coyote',
        headers: { "ngrok-skip-browser-warning": "true" }
        });

        console.log(`✅ Ngrok URL (estático): ${url}`);

        // Actualiza el config.json con esa URL
        const configPath = path.join(__dirname, 'config.json');
        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        config.configurationArguments.configModalUrl = `${url}/config.html`;
        config.configurationArguments.save.url = `${url}/save`;
        config.configurationArguments.publish.url = `${url}/publish`;
        config.configurationArguments.validate.url = `${url}/validate`;

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log('✅ config.json actualizado con la URL fija');

    } catch (err) {
        console.error('❌ Error al iniciar ngrok:', err.message);
    }
})();