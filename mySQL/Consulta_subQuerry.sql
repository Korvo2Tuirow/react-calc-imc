SELECT	*,
(SELECT fornecedor.nome FROM fornecedor WHERE fornecedor.id = produtos.id_fornecedor) AS nomeFornecedor 
 
FROM produtos
ORDER BY id_fornecedor ASC
;
