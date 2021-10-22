<?php
/* Notes...

    - Outputs URL and nav name using a passed variable
    - Conditionally outputs '.php' if we're using Laravel locally. This is because we're using Laravel locally and I can't figure out this htaccess rule in Laravel:
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME}.php -f
    RewriteRule ^(.+)$ $1.php [L,QSA]

*/
?>
<li<?php if ($current_nav === $nav_name) { echo ' class="current-menu-item"'; } ?>>
    <a href="/<?php if (isset($url)){ echo $url; } else { echo strtolower(str_replace(' ', '-', $nav_name)); } if(($GLOBALS['using_laravel']) === true && ($GLOBALS['local']) === true) { echo '.php'; } ?>"><?php echo $nav_name; ?></a>
</li>