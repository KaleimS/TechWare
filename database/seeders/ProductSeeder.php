<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'title' => 'Nostrud excepteur cupidatat et eiusmod.',
            'price' => 19.03,
            'quantity' => 3,
            'category_id' => 1,
            'brand_id' => 1,
            'description' => 'Excepteur officia incididunt sint eiusmod in nulla consequat ipsum commodo do. Sint qui et veniam reprehenderit eiusmod tempor dolore anim tempor culpa velit ipsum dolore. Amet nisi voluptate velit ea aliquip proident nostrud ullamco excepteur tempor. Minim minim veniam commodo pariatur incididunt culpa fugiat labore fugiat adipisicing labore. Ad mollit consequat laboris ut proident Lorem cupidatat quis laborum pariatur laboris Lorem occaecat minim.'
        ]);
    }
}
