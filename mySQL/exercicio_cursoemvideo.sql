/*Exercício 01*/
SELECT nome FROM cadastro.gafanhotos
where sexo  = 'f';

/*Exercício 02*/
SELECT * FROM cadastro.gafanhotos
where nascimento between '2000-01-01' and  '2015-12-31'
order by nascimento;

/*Exercício 03*/
SELECT nome FROM cadastro.gafanhotos
where profissao = 'programador' and sexo = 'm';

/*Exercício 04*/
SELECT * FROM cadastro.gafanhotos
where nome like 'J%' and nacionalidade = 'Brasil' and sexo = 'F';

/*Exercício 05*/
SELECT nome, nacionalidade FROM cadastro.gafanhotos
where nome like '%Silva%' and nacionalidade != 'Brasil' and peso < 100;

/*Exercício 06*/
SELECT max(altura) FROM cadastro.gafanhotos
where nacionalidade = 'Brasil' and sexo = 'M';

/*Exercício 07*/
SELECT avg(peso) FROM cadastro.gafanhotos;

/*Exercício 08*/
SELECT min(peso) FROM cadastro.gafanhotos
where sexo = 'F' and nacionalidade != 'Brasil' and nascimento between '1990-01-01' and '2000-12-31';

/*Exercício 09*/
SELECT count(*) FROM cadastro.gafanhotos
where altura > 1.90 and sexo = 'F';




























