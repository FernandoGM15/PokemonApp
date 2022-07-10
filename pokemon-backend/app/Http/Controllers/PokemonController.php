<?php

namespace App\Http\Controllers;

use App\Http\Resources\PokemonCollection;
use App\Models\Pokemon;
use Illuminate\Http\Request;

class PokemonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $pokemons = Pokemon::all();
        return new PokemonCollection($pokemons);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request,[
            "name"=>"required|string",
            "height"=>"required|numeric",
            "weight"=>"required|numeric",
            "image"=>"required|url",
        ]);
        $pokemon = Pokemon::create($validated);
        return response()->json($pokemon);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        //
        $pokemon = Pokemon::find($id);
        return response()->json($pokemon);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $this->validate($request,[
            "name"=>"required|string",
            "height"=>"required|numeric",
            "weight"=>"required|numeric",
            "image"=>"required|url",
        ]);
        $pokemon = Pokemon::find($id);
        $pokemon->update($validated);
        return response()->json($pokemon);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pokemon = Pokemon::find($id);
        $pokemon->delete();
        return  response()->json($pokemon);
    }
}
