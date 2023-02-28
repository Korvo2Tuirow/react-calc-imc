SELECT	
 produtos.*, fornecedor.nome AS fornecedores
FROM produtos
inner JOIN fornecedor ON fornecedor.id = produtos.id_fornecedor

;
