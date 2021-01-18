from . import bp
from app import cross_origin
from flask import jsonify
from app.models import TipoAtivo


@bp.route('/',methods=['GET'])
@cross_origin()
def ativos_tipo():
    try:
    
        ativos  = TipoAtivo.query.all()

        return jsonify({
            'items':[item.to_dict() for item in ativos]
        }),200

    except Exception as e:
        return jsonify({
            'error' : 'Não foi trazer o resultado'
        }),500