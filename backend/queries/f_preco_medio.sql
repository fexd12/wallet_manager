--DROP FUNCTION f_preco_medio(integer,integer);
CREATE OR REPLACE FUNCTION public.f_preco_medio(IN id_carteira integer, IN id_ativo integer)
    RETURNS numeric AS $V_PRECO_MEDIO$
    
    DECLARE 
		V_PRECO_MEDIO numeric;

BEGIN
	CREATE TEMP TABLE IF NOT EXISTS V_DADOS AS 
		SELECT * 
			FROM movimentacao mov
		join carteira cart on
			cart.id_carteira = mov.carteira_id
		WHERE mov.ativo_id = id_ativo;
		
	CREATE TEMP TABLE IF NOT EXISTS V_COMPRAS AS 
		SELECT 	'1' AS ID,
				SUM((mov.preco * mov.quantidade) + mov.taxas) AS COMPRAS,
				0 AS VENDAS,
				SUM(mov.quantidade) AS QUANTIDADE
		FROM V_DADOS mov
		WHERE mov.tipo = 'c';
	
	CREATE TEMP TABLE IF NOT EXISTS V_VENDAS AS 
		SELECT 	'1' AS ID,
				0 AS COMPRAS,
				SUM(((mov.preco * mov.quantidade) * -1) + mov.taxas) AS VENDAS,
				SUM(mov.quantidade * -1) AS QUANTIDADE
		FROM V_DADOS mov
		WHERE mov.tipo = 'v';

	CREATE TEMP TABLE IF NOT EXISTS TOTAL AS 
		SELECT 	ID,
				COMPRAS,
				VENDAS,
				QUANTIDADE
		FROM (
			SELECT 	ID,COMPRAS,VENDAS,QUANTIDADE FROM V_COMPRAS GROUP BY ID,COMPRAS,VENDAS,QUANTIDADE
		UNION ALL
			SELECT 	ID,COMPRAS,VENDAS,QUANTIDADE FROM V_VENDAS GROUP BY ID,COMPRAS,VENDAS,QUANTIDADE
		) as TOTAL_
		GROUP BY ID,COMPRAS,VENDAS,QUANTIDADE;
	
	SELECT (SUM(COMPRAS + VENDAS)) / SUM(QUANTIDADE) INTO V_PRECO_MEDIO FROM TOTAL WHERE QUANTIDADE > 0;
	
	DROP TABLE V_DADOS;
	DROP TABLE V_COMPRAS;
	DROP TABLE V_VENDAS;
	DROP TABLE TOTAL;

	RETURN ROUND(V_PRECO_MEDIO,2);
	
END; $V_PRECO_MEDIO$
LANGUAGE plpgsql;