from . import bp
from app import cross_origin,db
from flask import jsonify,request
from app.models import Ativo

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
        
        ativos  = Ativo.query.all()

        return jsonify({
            'data':[item.to_dict() for item in ativos]
        }),200
    
    except Exception as e:
        return jsonify({
            'error' : e.args
        }),500
