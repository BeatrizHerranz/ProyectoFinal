# src/api/routes.py
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Product  # Asegúrate de tener el modelo Product
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Existing hello endpoint
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

# New endpoint for categories
@api.route('/api/categorias', methods=['GET'])
def get_categorias():
    categorias = {
        "categorias": ["Chicas", "Niños", "Bebés"],
        "subcategorias": ["Accesorios", "Ropa", "Complementos"]
    }
    return jsonify(categorias), 200

# New endpoint to search products by name, category, or tags
@api.route('/api/productos', methods=['GET'])
def search_productos():
    query = request.args.get('query', '').lower()  # Captura el parámetro 'query' de la URL
    if not query:
        return jsonify({"message": "No search query provided"}), 400

    # Simulación de búsqueda - Aquí puedes reemplazar con una consulta real a tu base de datos
    # Si tienes un modelo Product, puedes consultar la base de datos aquí
    productos = Product.query.filter(
        (Product.name.ilike(f'%{query}%')) | 
        (Product.category.ilike(f'%{query}%'))
    ).all()

    # Serializa los resultados
    resultados = [producto.serialize() for producto in productos]

    if resultados:
        return jsonify({"productos": resultados}), 200
    else:
        return jsonify({"message": "No products found"}), 404
