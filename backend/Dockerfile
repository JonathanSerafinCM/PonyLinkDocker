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
    libpq-dev \
    nodejs \
    npm

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure Apache
COPY backend/apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY backend/ .

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache \
    && chmod -R 755 /var/www/html/public

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Build frontend assets
WORKDIR /tmp
RUN mkdir frontend
COPY frontend/package.json ./frontend
COPY frontend/package-lock.json ./frontend
WORKDIR /tmp/frontend
# Add npm config settings before install
RUN npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm config set registry https://registry.npmjs.org/ \
    && npm install --verbose
COPY frontend/ ./
RUN npm run build
WORKDIR /var/www/html # Vuelve al directorio de trabajo
RUN mv /tmp/frontend/dist ./public # Mueve la carpeta dist al directorio public
RUN rm -rf /tmp/frontend # Elimina el directorio temporal

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 775 /var/www/html/storage \
    && chmod -R 775 /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/public

# Generate application key and optimize
WORKDIR /var/www/html
RUN php artisan key:generate \
    && php artisan config:cache \
    && php artisan view:cache
    # Temporarily remove route caching until the route conflict is fixed
    # && php artisan route:cache

# Remove node_modules to reduce image size (optional)
#RUN rm -rf ./frontend/node_modules
