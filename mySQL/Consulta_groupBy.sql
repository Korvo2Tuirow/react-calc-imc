SELECT SUM(estoque) AS totalEstoque, id
FROM produtos
GROUP BY id_fornecedor
;
