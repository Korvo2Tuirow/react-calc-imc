SELECT 
avg(preco) AS media,
COUNT(*) AS total,
SUM(estoque) AS somaEstoque
FROM produtos
GROUP BY id_fornecedor

;
