# Millerntorgallery.org TYPO3 website



## Requirements


* composer

## Runtime deps

* Apache HTTPD 2.2
* PHP 5.5+ support 
* MySQL Database 5.1+


## Installation

### Installation steps

1. Clone the repo
2. 'php composer install'
3. Setup TYPO3 
4. Install extensions (themes, vca_millerntor)


## Deployment

```
git pull origin master
php composer.phar install
```

## Update

If you want to update either TYPO3 or any extension use the following commands on your local dev instance

```
git pull origin master
php composer.phar update
git commit -m "Update composer.lock" composer.lock
git push origin master
```

After that run the deployment on the live server.




