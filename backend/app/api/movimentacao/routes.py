from sqlalchemy.sql.schema import PrimaryKeyConstraint
from . import bp
from app import cross_origin,db
from app.models import Movimentacao,Ativo
from flask import jsonify,request
import time
@bp.route('/',methods=['POST'])
@cross_origin()
def movimentacao():
    try:
        data = request.get_json()

        mov = Movimentacao()
        mov.from_dict(data)
        
        atv = Ativo.query.filter_by(ticker=data['ticker']).first()

        mov.carteira_id = 1
        mov.ativo_id = atv.id_ativo
        mov.data = int(round(time.time() * 1000))

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