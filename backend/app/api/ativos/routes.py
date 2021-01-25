from . import bp
from app import cross_origin,db
from flask import jsonify,request
from app.models import Ativo,Movimentacao,TipoAtivo
from sqlalchemy import text

@bp.route('/',methods=['GET','POST'])
@cross_origin()
def ativos():
    
    if request.method == 'POST':
        data = request.get_json()
        
        try:
            if request.content_length == 0: raise Exception("Favor inserir nome do ativo")

            ativoInsert = Ativo()
            ativoInsert.from_dict(data)

            db.session.add(ativoInsert)
            db.session.commit()

            return jsonify({
                'message':'ativo inserido com sucesso'
            }),201

        except Exception as e:
            return jsonify({
                'error' : e.args
            }),500

    try:

        with db.engine.connect() as conn:
            query = text("""
                SELECT  DISTINCT(mov.ativo_id),
                        mov.id_movimentacao, 
                        mov.carteira_id,
                        atv.ticker,
                        nome,
                        atv.tipo_ativo_id,
                        f_preco_medio(mov.ativo_id) as preco_medio
                FROM movimentacao mov
                join ativo atv on
                    mov.ativo_id = atv.id_ativo
                where mov.tipo ='C';
            """)
            result = conn.execute(query).fetchall()
        
        items = []

        for row in list(result):
            items.append({
                "ativo_id":row[0],
                "id_movimentacao":row[1],
                "carteira_id":row[2],
                "ticker":row[3],
                "nome":row[4],
                "tipo_ativo":row[5],
                "preco_medio":float(row[6])
            })

        return jsonify({
            'items':items
        }),200
    
    except Exception as e:
        return jsonify({
            'error' : e.args
        }),500
