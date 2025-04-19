// src/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';

// Pages
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import WalletPage from '@/pages/WalletPage';
import FundWalletPage from '@/pages/FundWalletPage';
import DealsPage from '@/pages/DealsPage';
import StartDealPage from '@/pages/StartDealPage';
import DealConfirmation from '@/pages/DealConfirmation';
import DealTrackerPage from '@/pages/DealTrackerPage';
import DealDetailsPage from '@/pages/DealDetailsPage';
import StartDealPairing from '@/pages/StartDealPairing';

import ShareTrading from '@/pages/ShareTrading';
import TradingChartPage from '@/pages/TradingChartPage';
import LiveTradingChart from '@/pages/LiveTradingChart';

import KYCUploadPage from '@/pages/KYCUploadPage';
import DisputeResolutionPage from '@/pages/DisputeResolutionPage';

import AdminDashboard from '@/pages/AdminDashboard';
import InvestorPanel from '@/pages/InvestorPanel';
import InvestorProfile from '@/pages/InvestorProfile';
import InvestorReports from '@/pages/InvestorReports';
import DealAnalytics from '@/pages/DealAnalytics';

import PitchDeckViewer from '@/pages/PitchDeckViewer';
import FraudDetectionLog from '@/pages/FraudDetectionLog';
import EscrowTracker from '@/pages/EscrowTracker';
import EscrowDashboard from '@/pages/EscrowDashboard';

import AnalyticsDashboard from '@/pages/AnalyticsDashboard';
import ReportCenter from '@/pages/ReportCenter';
import UserManagement from '@/pages/UserManagement';

import SecurityCenter from '@/pages/SecurityCenter';
import ReferralProgram from '@/pages/ReferralProgram';
import UserProfile from '@/pages/UserProfile';
import TransactionHistory from '@/pages/TransactionHistory';
import SettingsPage from '@/pages/Settings';

import AIInsightCenter from '@/pages/AIInsightCenter';
import DisputeLogViewer from '@/pages/DisputeLogViewer';
import ChatSupport from '@/pages/ChatSupport';

import ContactPage from '@/pages/ContactPage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import RefundPolicyPage from '@/pages/RefundPolicyPage';
import DocsPage from '@/pages/DocsPage';
import FAQPage from '@/pages/FaqPage';

import BlogListPage from '@/pages/BlogListPage';
import BlogDetails from '@/pages/BlogDetails';

import WatermarkTest from '@/pages/WatermarkTest';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Public Routes */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        {/* Deals & Wallet */}
        <Route path="wallet" element={<WalletPage />} />
        <Route path="fund-wallet" element={<FundWalletPage />} />
        <Route path="deals" element={<DealsPage />} />
        <Route path="deal/:dealId" element={<DealDetailsPage />} />
        <Route path="start-deal" element={<StartDealPage />} />
        <Route path="deal-confirmation" element={<DealConfirmation />} />
        <Route path="deal-tracker" element={<DealTrackerPage />} />
        <Route path="pair-deal" element={<StartDealPairing />} />

        {/* Trading */}
        <Route path="share-trading" element={<ShareTrading />} />
        <Route path="trading-chart" element={<TradingChartPage />} />
        <Route path="live-chart" element={<LiveTradingChart />} />

        {/* Investor & Admin */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="investor" element={<InvestorPanel />} />
        <Route path="investor-profile" element={<InvestorProfile />} />
        <Route path="investor-reports" element={<InvestorReports />} />

        {/* Tools & Utilities */}
        <Route path="kyc-upload" element={<KYCUploadPage />} />
        <Route path="dispute-resolution" element={<DisputeResolutionPage />} />
        <Route path="fraud-log" element={<FraudDetectionLog />} />
        <Route path="pitch-deck" element={<PitchDeckViewer />} />
        <Route path="escrow-tracker" element={<EscrowTracker />} />
        <Route path="mobile-app" element={<MobileAppPromo />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
        <Route path="reports" element={<ReportCenter />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="transactions" element={<TransactionHistory />} />
        <Route path="escrow-dashboard" element={<EscrowDashboard />} />
        <Route path="ai-insights" element={<AIInsightCenter />} />
        <Route path="deal-analytics" element={<DealAnalytics />} />
        <Route path="security-center" element={<SecurityCenter />} />
        <Route path="referral" element={<ReferralProgram />} />
        <Route path="dispute-log" element={<DisputeLogViewer />} />
        <Route path="chat" element={<ChatSupport />} />

        {/* Content Pages */}
        <Route path="faq" element={<FAQPage />} />
        <Route path="blog" element={<BlogListPage />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund" element={<RefundPolicyPage />} />
        <Route path="docs" element={<DocsPage />} />

        {/* Test */}
        <Route path="test-watermark" element={<WatermarkTest />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  }
