<?php
use Illuminate\Http\Request;

$app->group(['prefix' => 'api'], function($app) {
});

$app->get('{path:.*}', function($path) {
    return file_get_contents('assets/index.html');
});
