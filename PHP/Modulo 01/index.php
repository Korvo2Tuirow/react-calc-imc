<?php

//VARIAVEIS////////////////////////
$nome = 'Korvo';
$sobrenome = 'Tuirow';
$idade = 90;

$nomeCompleto = "$nome $sobrenome tem $idade anos";

echo $nomeCompleto.'<br>';

////////

$num1 = '3';
$num2 = 4;
$resultado = $num1+$num2;

echo $resultado.'<br>';

/////////

$string1 = 'ABC';
$string2 = 'DEF';

$strings = $string1;
$strings .= $string2;// igual a $strings = $string1.$string2 

echo $strings.'<br>';

//////////////////////////////////

//ARRAYS/////////////////////////

$ingredientes = ['açucar',
                 'fermento',
                 'ovo', 
                 'leite', 
                 'farinha'
                ];

echo $ingredientes[3].'<br>';

$bolo = [
    ...$ingredientes,
    'corante',
    'chocolate'   
];

echo '<h1>'.$bolo[6].'</h1>'.'<br>';
print_r($bolo).'<br>';

/////////////////////////////////////

