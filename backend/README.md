# PROVISENT EDUTECH - Python Flask Backend Architecture

Enterprise-grade REST API and Database Architecture for **PROVISENT EDUTECH PRIVATE LIMITED**.

## Architecture Overview
- **Framework**: Python 3.11+ / Flask 3.0+
- **Database**: PostgreSQL / MySQL / SQLite supported via SQLAlchemy ORM
- **Authentication**: JWT (JSON Web Tokens) with Role-Based Access Control (`student`, `instructor`, `admin`)
- **Payment Gateways**: Razorpay & Stripe Webhook and Order verification pipelines
- **Certificates**: Cryptographic verification hashing & QR generation

## Quickstart
```bash
cd backend
python3 -m venv venv
source venv/bin/activate # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

## API Endpoints
- `GET /api/health` - Health check & server telemetry
- `POST /api/auth/login` - User authentication & JWT issuance
- `GET /api/courses` - Filtered course listings & full-text search
- `GET /api/certificates/verify/<cert_id>` - Cryptographic certificate verification
- `POST /api/payments/create-order` - Razorpay / Stripe payment intent initiation
- `POST /api/corporate/inquire` - B2B corporate upskilling lead intake
