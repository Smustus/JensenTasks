# React + TypeScript + Vite

Pendlaren
Vad
<hr>

Du är en skicklig webbutvecklare som arbetar på ett innovativt techföretag vid namn "TravelEase Solutions". Företaget har fått i uppdrag att utveckla en ny webbapp för en stor transportfirma, "CityTransit", som vill förbättra sina tjänster för resenärer i staden. CityTransit har märkt att många av deras kunder har svårt att hitta närmaste busshållplats och önskar en lösning som gör det enklare att navigera i stadens kollektivtrafik.

Din uppgift är att skapa en webbapp, kallad "Pendlaren", som hjälper användarna att snabbt och enkelt hitta närmaste busshållplats baserat på deras aktuella position. Genom att använda GPS-teknologi kan appen exakt lokalisera användarens longitud och latitud. Efter att ha fått användarens position, ska appen hämta data om närliggande hållplatser och visa dem på en karta.

När användaren väljer en specifik hållplats, ska appen visa de närmaste avgångarna för att hjälpa resenären att planera sin resa effektivt. Med "Pendlaren" vill CityTransit göra det enkelt och smidigt för resenärer att navigera i staden och förbättra deras reseupplevelse.
Hur
<hr>
Ni behöver skapa ett konto på Trafiklab här och efter det skapa ett projekt för att få en API-nyckel.
Steg
<hr>
    Hämta geolocation med geolocation API
    Gör ett API-anrop mot ReseRobot - reseplanerare med longitud och latitud.
    Låt användaren välja en hållplats och spara valet.
    Gör ett API-anrop mot ReseRobot - stolptidstabeller med id:et på hållplatsen (property extId i JSON-svaret).
    Visa avgångarna för användaren.

Level up
<hr>
Gör det möjligt att planera en resa mellan två stationer, använd reseplanerar - API:et nedan för detta.

API:er som behövs:
<hr>
Geolocation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

ResRobot - Hållplatser nära dig: https://www.trafiklab.se/api/trafiklab-apis/resrobot-v21/nearby-stops/

ResRobot - stolptidstabeller: https://www.trafiklab.se/api/trafiklab-apis/resrobot-v21/timetables/

Level up

ResRobot - Reseplanerare: https://www.trafiklab.se/api/trafiklab-apis/resrobot-v21/route-planner/

<hr>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```