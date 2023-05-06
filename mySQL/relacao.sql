use cadastro;

alter table gafanhotos add cursopreferido int;

alter table gafanhotos
add foreign key (cursopreferido)
references cursos(idcurso);

select * from gafanhotos;
select * from cursos;
desc gafanhotos;

update gafanhotos set cursopreferido = '6' where id = '1';

delete from cursos where idcurso = '6';/*não funciona por causa da relação*/

delete from cursos where idcurso = '28';/*esse curso não tinha relação então apagará o curso*/
