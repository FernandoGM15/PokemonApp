<?php

/** @var \Laravel\Lumen\Routing\Router $router */


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(["prefix"=>"api"], function () use ($router){
    //POKEMONS ROUTES
    $router->group(["prefix"=>"pokemons"], function () use ($router){
        $router->get("/", ['as'=>'pokemon.index', 'uses'=>'PokemonController@index']);
        $router->get("/{id}", ['as'=>'pokemon.show', 'uses'=>'PokemonController@show']);
        $router->post("/", ['as'=>'pokemon.store', 'uses'=>'PokemonController@store']);
        $router->put("/{id}", ['as'=>'pokemon.update', 'uses'=>'PokemonController@update']);
        $router->delete("/{id}", ['as'=>'pokemon.destroy', 'uses'=>'PokemonController@destroy']);
    });
});

