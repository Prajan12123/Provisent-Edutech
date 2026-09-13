from flask import Flask, jsonify, request
from flask_cors import CORS
from config import Config
from models import db, User, Course, Certificate, Enrollment, Payment, MentorBooking
import hashlib
import uuid
from datetime import datetime

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "PROVISENT EDUTECH Backend REST API",
        "version": "2.4.0",
        "timestamp": datetime.utcnow().isoformat()
    })

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    role = data.get('role', 'student')
    
    if not email:
        return jsonify({"error": "Email is required"}), 400
        
    return jsonify({
        "token": "jwt_provisent_token_" + hashlib.sha256(email.encode()).hexdigest()[:24],
        "user": {
            "id": "usr_" + uuid.uuid4().hex[:8],
            "name": email.split('@')[0].capitalize(),
            "email": email,
            "role": role,
            "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        }
    })

@app.route('/api/certificates/verify/<cert_id>', methods=['GET'])
def verify_certificate(cert_id):
    # Simulated query against database
    sample_records = {
        "PROV-2026-8894": {
            "certificateNumber": "PROV-2026-8894",
            "studentName": "Vikram Malhotra",
            "courseName": "Full Stack Web Development (MERN & Next.js)",
            "issueDate": "August 14, 2026",
            "grade": "Grade A+ (Distinction - 96%)",
            "instructorName": "Janani K",
            "status": "Verified",
            "verified": True
        },
        "PROV-2026-4421": {
            "certificateNumber": "PROV-2026-4421",
            "studentName": "Pooja Sundaram",
            "courseName": "Artificial Intelligence & Machine Learning Specialization",
            "issueDate": "July 28, 2026",
            "grade": "Grade A (Honors - 94%)",
            "instructorName": "Lakshanaya KM",
            "status": "Verified",
            "verified": True
        }
    }
    cert = sample_records.get(cert_id)
    if cert:
        return jsonify({"success": True, "certificate": cert})
    return jsonify({"success": False, "error": "Certificate ID not found"}), 404

@app.route('/api/payments/create-order', methods=['POST'])
def create_payment_order():
    data = request.get_json() or {}
    amount = data.get('amount', 19999)
    gateway = data.get('gateway', 'razorpay')
    
    order_id = f"order_{gateway[:3]}_{uuid.uuid4().hex[:10]}"
    return jsonify({
        "orderId": order_id,
        "amount": amount,
        "currency": "INR",
        "gateway": gateway,
        "keyId": "rzp_test_provisent_demo"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
