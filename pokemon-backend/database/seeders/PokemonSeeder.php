<?php

namespace Database\Seeders;

use App\Models\Pokemon;
use Illuminate\Database\Seeder;

class PokemonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Pokemon::insert([
            [
                "name" => "Bulbasaur",
                "height" => 0.7,
                "weight" => 6.9,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ],
            [
                "name" => "Ivysaur",
                "height" => 1,
                "weight" => 13,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ],
            [
                "name" => "Venusaur",
                "height" => 2,
                "weight" => 100,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ],
            [
                "name" => "Charmander",
                "height" => 0.6,
                "weight" => 8.5,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ],
            [
                "name" => "Charmeleon",
                "height" => 1.1,
                "weight" => 19,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ],
            [
                "name" => "Charizard",
                "height" => 1.7,
                "weight" => 90.5,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")

            ],
            [
                "name" => "Squirtle",
                "height" => 0.5,
                "weight" => 9,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")

            ],
            [
                "name" => "Wartortle",
                "height" => 1,
                "weight" => 22.5,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")

            ],
            [
                "name" => "Blastoise",
                "height" => 1.6,
                "weight" => 85.5,
                "image" => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")

            ]
        ]);
    }
}
