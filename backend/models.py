from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid

db = SQLAlchemy()

def generate_uuid():
    return str(uuid.uuid4())

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), default='student', nullable=False) # 'student', 'instructor', 'admin'
    avatar_url = db.Column(db.String(255), nullable=True)
    phone = db.Column(db.String(30), nullable=True)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    enrollments = db.relationship('Enrollment', backref='user', lazy=True)
    certificates = db.relationship('Certificate', backref='user', lazy=True)
    bookings = db.relationship('MentorBooking', backref='user', lazy=True)

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100), nullable=False)
    slug = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=True)
    icon_name = db.Column(db.String(50), nullable=True)
    courses = db.relationship('Course', backref='category_rel', lazy=True)

class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    title = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(250), unique=True, nullable=False, index=True)
    category_id = db.Column(db.String(36), db.ForeignKey('categories.id'), nullable=True)
    instructor_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=True)
    description = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, default=4.9)
    review_count = db.Column(db.Integer, default=0)
    students_enrolled = db.Column(db.Integer, default=0)
    duration = db.Column(db.String(50), nullable=False)
    difficulty = db.Column(db.String(30), default='Intermediate')
    original_price = db.Column(db.Float, nullable=False)
    discounted_price = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(10), default='INR')
    image_url = db.Column(db.String(255), nullable=True)
    is_published = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    modules = db.relationship('CourseModule', backref='course', lazy=True, cascade='all, delete-orphan')
    enrollments = db.relationship('Enrollment', backref='course', lazy=True)

class CourseModule(db.Model):
    __tablename__ = 'course_modules'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    course_id = db.Column(db.String(36), db.ForeignKey('courses.id'), nullable=False)
    title = db.Column(db.String(180), nullable=False)
    order = db.Column(db.Integer, default=1)
    duration = db.Column(db.String(50), nullable=True)
    lessons = db.relationship('Lesson', backref='module', lazy=True, cascade='all, delete-orphan')

class Lesson(db.Model):
    __tablename__ = 'lessons'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    module_id = db.Column(db.String(36), db.ForeignKey('course_modules.id'), nullable=False)
    title = db.Column(db.String(180), nullable=False)
    duration = db.Column(db.String(30), nullable=True)
    video_url = db.Column(db.String(255), nullable=True)
    content = db.Column(db.Text, nullable=True)
    is_preview = db.Column(db.Boolean, default=False)
    order = db.Column(db.Integer, default=1)

class Enrollment(db.Model):
    __tablename__ = 'enrollments'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.String(36), db.ForeignKey('courses.id'), nullable=False)
    progress_percentage = db.Column(db.Float, default=0.0)
    is_completed = db.Column(db.Boolean, default=False)
    enrolled_at = db.Column(db.DateTime, default=datetime.utcnow)

class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.String(36), db.ForeignKey('courses.id'), nullable=False)
    gateway = db.Column(db.String(30), default='razorpay') # 'razorpay' or 'stripe'
    gateway_order_id = db.Column(db.String(120), nullable=True)
    gateway_payment_id = db.Column(db.String(120), nullable=True)
    amount = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(10), default='INR')
    status = db.Column(db.String(30), default='completed') # pending, completed, failed
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Certificate(db.Model):
    __tablename__ = 'certificates'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    certificate_number = db.Column(db.String(50), unique=True, nullable=False, index=True)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    student_name = db.Column(db.String(120), nullable=False)
    course_name = db.Column(db.String(200), nullable=False)
    grade = db.Column(db.String(50), default='Grade A+')
    skills = db.Column(db.JSON, nullable=True)
    issue_date = db.Column(db.DateTime, default=datetime.utcnow)
    verification_hash = db.Column(db.String(64), nullable=True)
    status = db.Column(db.String(20), default='Verified')

class MentorBooking(db.Model):
    __tablename__ = 'mentor_bookings'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    mentor_name = db.Column(db.String(100), nullable=False)
    slot_time = db.Column(db.String(100), nullable=False)
    topic = db.Column(db.String(200), nullable=True)
    status = db.Column(db.String(30), default='Confirmed')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Coupon(db.Model):
    __tablename__ = 'coupons'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    code = db.Column(db.String(30), unique=True, nullable=False)
    discount_percentage = db.Column(db.Float, default=15.0)
    is_active = db.Column(db.Boolean, default=True)
