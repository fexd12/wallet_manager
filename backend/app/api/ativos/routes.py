from . import bp
from app import cross_origin,db
from flask import jsonify,request
from app.models import Ativo,Movimentacao,TipoAtivo

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
        movimentacao_ = Movimentacao()
        result = movimentacao_.get_preco_medio()
        
        items = []

        for row in list(result):
            extrato = Movimentacao.query.filter_by(ativo_id=row[0]).all()
            items.append({
                "ativo_id":row[0],
                "carteira":row[1],
                "ticker":row[2],
                "nome":row[3],
                "tipo_ativo":row[4],
                "preco_medio":row[5],
                "extrato":[item.to_dict() for item in extrato]
            })

        return jsonify({
            'items':items
        }),200
    
    except Exception as e:
        return jsonify({
            'error' : e.args
        }),500
