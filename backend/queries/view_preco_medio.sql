-- DROP VIEW if EXISTS VIEW_MOVIMENTACAO;

CREATE or REPLACE VIEW VIEW_MOVIMENTACAO AS 
    SELECT DISTINCT mov.ativo_id AS ativo_id,
            mov.carteira_id AS carteira_id,
            atv.ticker AS ticker,
            atv.nome AS nome,
            atv.tipo_ativo_id,
            f_preco_medio(mov.carteira_id,mov.ativo_id) AS preco_medio
    FROM movimentacao mov
    JOIN ativo atv ON
        mov.ativo_id = atv.id_ativo;