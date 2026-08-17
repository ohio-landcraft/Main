# Ohio Landcraft Website V10

## Survey123 dynamic-height embed
- Replaced the fixed-height Survey123 iframe on `evaluation.html` with Esri's Survey123 Web App JavaScript API.
- Uses ArcGIS App ID/client ID `RccaW3zf9edQstPZ`.
- Uses Survey123 item ID `8bb3bd9a7507485bb9e58927b860ef8a`.
- The evaluation form container now follows Survey123 `contentHeight` when the form loads and when its content resizes.
- Removes the nested fixed-height scrolling experience; the normal Ohio Landcraft page handles vertical scrolling.
- Keeps Survey123 navbar, header, description and footer hidden.
- Includes a direct-form fallback if JavaScript is unavailable or the API fails to load.

## Analytics
- Google Analytics measurement ID `G-S2YVW61KLN` remains installed immediately after `</head>` on every HTML page.
