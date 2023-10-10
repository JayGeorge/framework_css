# README

- To set up the project copy `copy_me_to-config.environment.php` to `config.environment.php`
  - To get production CSS and JS, comment out `$use_developer_assets = true;` so that you're left with `$use_developer_assets = false;`
    - You'll need htaccess or an nginx config with the equivalent cachebusting rules for this to work. Ask Jay for his Cachebusting section his Valet.md document for more information.
