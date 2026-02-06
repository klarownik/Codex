# Choinkowy Zakątek (Laravel 12 + React)

Prosta wizytówka sprzedawcy choinek zbudowana w Laravel 12 i React (Vite). Projekt nie korzysta z bazy danych.

## Wymagania

- PHP >= 8.2
- Composer
- Node.js >= 18
- npm lub pnpm

## Instalacja

```bash
composer install
npm install
```

## Uruchomienie

W jednym terminalu uruchom Vite:

```bash
npm run dev
```

W drugim terminalu uruchom serwer Laravel:

```bash
php artisan serve
```

Po uruchomieniu otwórz:

```
http://localhost:8000
```

## Build produkcyjny

```bash
npm run build
```

## Struktura

- `routes/web.php` – routing strony głównej
- `resources/views/home.blade.php` – widok Blade montujący React
- `resources/js/components/TreeSellerApp.jsx` – główny komponent strony
- `resources/css/app.css` – style

## Uwagi

Jeśli instalacja zależności przez Composer nie działa w środowisku z ograniczonym dostępem do internetu, uruchom ją lokalnie.
