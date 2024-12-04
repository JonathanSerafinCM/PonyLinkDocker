<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ env('APP_NAME', 'PonyLink') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    {{--@auth--}}
        <header>
            @yield('navbar')
        </header>
        <main>
            @yield('content')
        </main>
        @yield('scripts')
    {{--@else--}}
</body>
</html>