/*EXERCICIO 01*/
select profissao, count(*) from cadastro.gafanhotos
group by profissao;

/*EXERCICIO 02*/
select sexo, count(*) from cadastro.gafanhotos
where nascimento > '2005-01-01'
group by sexo;

/*EXERCICIO 03*/
select nacionalidade, count(*) from cadastro.gafanhotos
where nacionalidade != 'Brasil'
group by nacionalidade
having count(*) > 3;

/*EXERCICIO 04*/
Select altura, count(*) from gafanhotos
Where peso > '100'
Group by altura
Having altura > (select avg(altura) from gafanhotos);






