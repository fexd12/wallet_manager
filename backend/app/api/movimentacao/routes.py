from . import bp
from app import cross_origin,db
from app.models import Movimentacao,Ativo
from flask import jsonify,request
import datetime

@bp.route('/',methods=['POST'])
@cross_origin()
def movimentacao():
    try:
        data = request.get_json()
        print(data)
        mov = Movimentacao()
        mov.from_dict(data)
        
        atv = Ativo.query.filter_by(ticker=data['ticker'].upper()).first()
        if not atv:
            ativo_inserir = Ativo()
            ativo_inserir.from_dict(data)
            db.session.add(ativo_inserir)
            db.session.commit()
        mov.carteira_id = 1
        mov.ativo_id = atv.id_ativo if atv.id_ativo else ativo_inserir.id_ativo
        date_mili = datetime.datetime.strptime(data['data'],'%Y-%m-%d').timestamp() if data['data'] else 0

        mov.data = int(date_mili * 1000) 
        db.session.add(mov)
        db.session.commit()

        return jsonify({
            'message':'movimentacao inserida com sucesso'
        }),201

    except Exception as e:
        print(e)
        return jsonify({
            'error' : e.args
        }),500

# @bp.route('/import',methods=['POST'])
# @cross_origin()
# def import_movimentacao():
#     try:
#         data = request.get_json()
        
#         for ativos in data:
#             data_ativos = ativos
#             data_ativos['preco'] = abs(float(data_ativos['valor']) / float(data_ativos['unidades']))
#             data_ativos['ticker'] = data_ativos['chaveAgrupamento']
#             data_ativos['quantidade'] = data_ativos['unidades']
#             data_ativos['tipo'] = 'c' if data_ativos['operacao'] == 'Compra' else 'v'
            
#             mov = Movimentacao()

#             mov.from_dict(data_ativos)
            
#             atv = Ativo.query.filter_by(ticker=data_ativos['ticker'].upper()).first()
#             # if not atv:
#             #     ativo_inserir = Ativo()
#             #     ativo_inserir.from_dict(data_ativos)
#             #     db.session.add(ativo_inserir)
#             #     db.session.commit()
#             mov.carteira_id = 1
#             mov.ativo_id = atv.id_ativo
#             # date_mili = datetime.datetime.strptime(data['data'],'%Y-%m-%d').timestamp() if data['data'] else 0
#             mov.data = data_ativos['dataMs']
#             db.session.add(mov)
#             db.session.commit()

#         return jsonify({
#             'message':'movimentacao inserida com sucesso'
#         }),201

#     except Exception as e:
#         print(e)
#         return jsonify({
#             'error' : e.args
#         }),500