<?php 

use Illuminate\Http\Recuest;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group('/user', function () {
    return $request->user();
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);