select g.nome, g.cursospreferidos, c.nome, c.ano 
from gafanhotos as g
left outer join cursos as c
on c.idcurso = g.cursospreferidos;

use cadastro;
create table gafanhoto_assiste_curso (
id int not null auto_increment,
data date,
idgafanhoto int,
idcurso int,
primary key(id),
foreign key (idgafanhoto) references gafanhotos(id),
foreign key (idcurso) references cursos(idcurso)
)default charset = utf8;


insert into gafanhoto_assiste_curso
values
(default, '2023-05-23', '1', '2');

select g.nome, a.idcurso, c.nome from gafanhotos g
join gafanhoto_assiste_curso a
on g.id = a.idgafanhoto
join cursos c
on c.idcurso = a.idcurso
order by g.nome;



select * from gafanhoto_assiste_curso;