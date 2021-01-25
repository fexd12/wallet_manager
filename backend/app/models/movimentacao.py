from app import db
from ..auxiliar import AutoAttributes

class Movimentacao(db.Model,AutoAttributes):
    __tablename__ = 'movimentacao'
    
    id_movimentacao = db.Column(db.Integer, primary_key=True)
    preco = db.Column(db.Float)
    quantidade = db.Column(db.Integer)
    data = db.Column(db.Text)
    taxas = db.Column(db.Float)
    tipo = db.Column(db.Text)
    
    ativo_id = db.Column(db.Integer, db.ForeignKey('ativo.id_ativo'),nullable=False)
    carteira_id = db.Column(db.Integer, db.ForeignKey('carteira.id_carteira'),nullable=False)

    attrs = ['id_movimentacao','preco','quantidade','data','taxas']
