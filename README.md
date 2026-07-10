# CareBridge India + Turkey

CareBridge India + Turkey is a mobile-first medical tourism prototype for African patients comparing doctors and clinics in India and Turkey, travel options, and nearby accommodation.

## Run locally

```powershell
python -m http.server 4173
```

Open `http://localhost:4173`.

You can also run:

```powershell
.\scripts\start-preview.ps1
```

## Public phone testing

Start the preview server first, then run:

```powershell
.\scripts\start-tunnel.ps1
```

Cloudflare will print a temporary `trycloudflare.com` URL. Open `index.html?v=8` on the phone to avoid old cached CSS.

## Mobile deployment path

This project is a Progressive Web App, so it can be installed from Safari on iOS and Chrome on Android. For App Store and Play Store distribution, the same UI can be wrapped with Capacitor or rebuilt in React Native/Expo while keeping the provider, flight, stay, and booking data models.

## Notes

Provider contacts are seed data gathered from public provider pages and should be verified before production use. Flight and accommodation prices are illustrative comparison bands. The app has separate Book Flights and Book Hotels tabs with in-app booking requests and local confirmation references; production booking requires airline, hotel, payment, identity, privacy, and medical-record integrations.
