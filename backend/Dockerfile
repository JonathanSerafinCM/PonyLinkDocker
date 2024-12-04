FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libpq-dev

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure Apache
COPY backend/apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy Laravel files
COPY backend/ .

# Set directory permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 775 /var/www/html/storage \
    && chmod -R 775 /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/public

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

# Install NPM dependencies and build assets
RUN npm install && \
    npm install -D vite laravel-vite-plugin @vitejs/plugin-vue && \
    npm run build

# Create and set permissions for build directory
RUN mkdir -p public/build && \
    chown -R www-data:www-data public/build && \
    chmod -R 775 public/build

# Generate Laravel keys and optimize
RUN php artisan key:generate \
    && php artisan config:cache \
    && php artisan view:cache
