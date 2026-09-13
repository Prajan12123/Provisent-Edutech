import React, { useState } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, CreditCard, 
  Tag, ArrowRight, Lock, Sparkles, Building2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PaymentModal: React.FC = () => {
  const { checkoutCourse, closeCheckout, enrollInCourse, navigateTo } = useApp();
  const [gateway, setGateway] = useState<'razorpay' | 'stripe'>('razorpay');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<{
    enrollmentId: string;
    amountPaid: number;
    transactionDate: string;
  } | null>(null);

  if (!checkoutCourse) return null;

  const basePrice = checkoutCourse.discountedPrice;
  const couponDiscount = discountApplied ? Math.round(basePrice * 0.15) : 0;
  const taxableAmount = basePrice - couponDiscount;
  const gstAmount = Math.round(taxableAmount * 0.18); // 18% GST standard for education tech services
  const finalAmount = taxableAmount + gstAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase().trim() === 'PROVISENT15' || couponCode.toUpperCase().trim() === 'PROVISENT') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon code. Try code: PROVISENT15');
    }
  };

  const handleCompletePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const enrollmentId = 'PROV-ENR-2026-' + Math.floor(100000 + Math.random() * 900000);
      setSuccessReceipt({
        enrollmentId,
        amountPaid: finalAmount,
        transactionDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">PROVISENT Secure Checkout</h3>
              <p className="text-[10px] text-slate-400">256-Bit SSL Encrypted Payment</p>
            </div>
          </div>
          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {successReceipt ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Payment & Enrollment Confirmed
              </span>
              <h4 className="text-xl font-bold text-white mt-2">Welcome to {checkoutCourse.title}!</h4>
              <p className="text-xs text-slate-400 mt-1">
                An official receipt and classroom access link have been dispatched to your registered email.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 text-left space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Enrollment ID:</span>
                <span className="text-cyan-300 font-semibold">{successReceipt.enrollmentId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Amount Paid:</span>
                <span className="text-white font-bold">{checkoutCourse.currency}{successReceipt.amountPaid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Date:</span>
                <span className="text-slate-300">{successReceipt.transactionDate}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Payment Gateway:</span>
                <span className="text-slate-300 uppercase">{gateway}</span>
              </div>
            </div>

            <button
              onClick={() => enrollInCourse(checkoutCourse)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold text-xs text-white shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Go to My Student Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="p-5 overflow-y-auto space-y-4">
            {/* Selected Course Item */}
            <div className="flex gap-3 p-3 rounded-2xl bg-slate-950/60 border border-white/5">
              <img
                src={checkoutCourse.image}
                alt={checkoutCourse.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-cyan-400 font-semibold uppercase">{checkoutCourse.category}</span>
                <h4 className="text-xs font-bold text-white truncate">{checkoutCourse.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Instructor: {checkoutCourse.instructor.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold text-white font-mono">
                    {checkoutCourse.currency}{checkoutCourse.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 line-through font-mono">
                    {checkoutCourse.currency}{checkoutCourse.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Gateway Tabs */}
            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Select Secure Payment Method
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGateway('razorpay')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    gateway === 'razorpay'
                      ? 'bg-blue-950/40 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs font-bold">Razorpay</p>
                    <p className="text-[10px] text-slate-400">UPI, NetBanking, Cards</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setGateway('stripe')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    gateway === 'stripe'
                      ? 'bg-purple-950/40 border-purple-400 text-white shadow-md shadow-purple-500/10'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-xs font-bold">Stripe</p>
                    <p className="text-[10px] text-slate-400">International Cards</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Coupon Code Section */}
            <div>
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    placeholder="Coupon code (Try: PROVISENT15)"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white uppercase placeholder:normal-case placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10 cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {discountApplied && (
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> PROVISENT15 applied! 15% discount saved.
                </p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Course Tuition</span>
                <span className="font-mono text-slate-200">{checkoutCourse.currency}{basePrice.toLocaleString()}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-400">
                  <span>Coupon Discount (15%)</span>
                  <span className="font-mono">- {checkoutCourse.currency}{couponDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>Standard Education GST (18%)</span>
                <span className="font-mono text-slate-200">{checkoutCourse.currency}{gstAmount.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-bold text-white">
                <span>Total Amount</span>
                <span className="text-cyan-400 font-mono text-base">
                  {checkoutCourse.currency}{finalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handleCompletePayment}
              disabled={isProcessing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Authorizing with {gateway.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-cyan-200" />
                  <span>Pay {checkoutCourse.currency}{finalAmount.toLocaleString()} & Start Learning</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500">
              <button 
                type="button"
                onClick={() => { closeCheckout(); navigateTo('/refund-policy'); }} 
                className="hover:text-cyan-400 underline cursor-pointer"
              >
                Refund/Cancellation Policy
              </button>
              <span>•</span>
              <span>Instant LMS Activation</span>
              <span>•</span>
              <span>Verified Certificate</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
