<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'a@a.com',
            'password' => bcrypt('a'),
        ]);

        $users = factory(User::class, 5)->create();
    }
}
