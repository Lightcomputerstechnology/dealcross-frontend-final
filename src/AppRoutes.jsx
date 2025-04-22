// File: src/AppRoutes.jsx

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import LoadingFallback from '@/components/LoadingFallback';
import useAuthRedirect from '@/hooks/useAuthRedirect';

// Public Pages
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignupPage = lazy(() => import('@/pages/SignupPage'));
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQPage = lazy(() => import('@/pages/FaqPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('@/pages/RefundPolicyPage'));
const DocsPage = lazy(() => import('@/pages/DocsPage'));
const WatermarkTest = lazy(() => import('@/pages/WatermarkTest'));

// User Pages
const DealsPage = lazy(() => import('@/pages/DealsPage'));
const DealDetailsPage = lazy(() => import('@/pages/DealDetailsPage'));
const StartDealPage = lazy(() => import('@/pages/StartDealPage'));
const StartDealPairing = lazy(() => import('@/pages/StartDealPairing'));
const DealConfirmation = lazy(() => import('@/pages/DealConfirmation'));
const DealTrackerPage = lazy(() => import('@/pages/DealTrackerPage'));
const WalletPage = lazy(() => import('@/pages/WalletPage'));
const FundWalletPage = lazy(() => import('@/pages/FundWalletPage'));
const TransactionHistory = lazy(() => import('@/pages/TransactionHistory'));
const KYCStatusPage = lazy(() => import('@/pages/KYCStatusPage'));

// Trading Pages
const ShareTrading = lazy(() => import('@/pages/ShareTrading'));
const ShareTradingTips = lazy(() => import('@/pages/ShareTradingTips'));
const TradingChartPage = lazy(() => import('@/pages/TradingChartPage'));
const LiveTradingChart = lazy(() => import('@/pages/LiveTradingChart'));

// Admin Pages
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AdminAnalyticsPage = lazy(() => import('@/pages/AdminAnalyticsPage'));
const DealAnalytics = lazy(() => import('@/pages/DealAnalytics'));
const ReportCenter = lazy(() => import('@/pages/ReportCenter'));
const EscrowDashboard = lazy(() => import('@/pages/EscrowDashboard'));
const FraudDetectionLog = lazy(() => import('@/pages/FraudDetectionLog'));
const UserManagement = lazy(() => import('@/pages/UserManagement'));
const DisputeLogViewer = lazy(() => import('@/pages/DisputeLogViewer'));
const PitchDeckViewer = lazy(() => import('@/pages/PitchDeckViewer'));
const EscrowTracker = lazy(() => import('@/pages/EscrowTracker'));
const MobileAppPromo = lazy(() => import('@/pages/MobileAppPromo'));
const ChatSupport = lazy(() => import('@/pages/ChatSupport'));
const AIInsightCenter = lazy(() => import('@/pages/AIInsightCenter'));
const AdminDealLog = lazy(() => import('@/pages/AdminDealLog'));
const AdminCharts = lazy(() => import('@/pages/AdminCharts'));
const AuditLogViewer = lazy(() => import('@/pages/AuditLogViewer'));
const PendingDealList = lazy(() => import('@/components/admin/PendingDealList'));
const UserControlList = lazy(() => import('@/components/admin/UserControlList'));

// User & Settings
const UserProfile = lazy(() => import('@/pages/UserProfile'));
const SettingsPage = lazy(() => import('@/pages/Settings'));
const KYCUploadPage = lazy(() => import('@/pages/KYCUploadPage'));
const DisputeResolutionPage = lazy(() => import('@/pages/DisputeResolutionPage'));
const ReferralProgram = lazy(() => import('@/pages/ReferralProgram'));
const SecurityCenter = lazy(() => import('@/pages/SecurityCenter'));

// Blog Pages
const BlogListPage = lazy(() => import('@/pages/BlogListPage'));
const WhyDealcrossBeats = lazy(() => import('@/pages/WhyDealcrossBeats'));
const DisputeResolutionGuide = lazy(() => import('@/pages/DisputeResolutionGuide'));
const FastPayoutsExplained = lazy(() => import('@/pages/FastPayoutsExplained'));
const IntroToDealcross = lazy(() => import('@/pages/IntroToDealcross'));

// Other
const NotFound = lazy(() => import('@/pages/NotFound'));

const ProtectedUserRoute = ({ children }) => {
  useAuthRedirect();
  return children;
};

const ProtectedAdminRoute = ({ children }) => {
  useAuthRedirect({ adminOnly: true });
  return children;
};

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<SiteLayout />}>
          {/* Public */}
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund" element={<RefundPolicyPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="test-watermark" element={<WatermarkTest />} />

          {/* User Protected */}
          <Route path="wallet" element={<ProtectedUserRoute><WalletPage /></ProtectedUserRoute>} />
          <Route path="fund-wallet" element={<ProtectedUserRoute><FundWalletPage /></ProtectedUserRoute>} />
          <Route path="transactions" element={<ProtectedUserRoute><TransactionHistory /></ProtectedUserRoute>} />
          <Route path="deals" element={<ProtectedUserRoute><DealsPage /></ProtectedUserRoute>} />
          <Route path="deal/:dealId" element={<ProtectedUserRoute><DealDetailsPage /></ProtectedUserRoute>} />
          <Route path="start-deal" element={<ProtectedUserRoute><StartDealPage /></ProtectedUserRoute>} />
          <Route path="pair-deal" element={<ProtectedUserRoute><StartDealPairing /></ProtectedUserRoute>} />
          <Route path="deal-confirmation" element={<ProtectedUserRoute><DealConfirmation /></ProtectedUserRoute>} />
          <Route path="deal-tracker" element={<ProtectedUserRoute><DealTrackerPage /></ProtectedUserRoute>} />
          <Route path="kyc-status" element={<ProtectedUserRoute><KYCStatusPage /></ProtectedUserRoute>} />

          {/* Trading */}
          <Route path="share-trading" element={<ProtectedUserRoute><ShareTrading /></ProtectedUserRoute>} />
          <Route path="trading-chart" element={<ProtectedUserRoute><TradingChartPage /></ProtectedUserRoute>} />
          <Route path="live-chart" element={<ProtectedUserRoute><LiveTradingChart /></ProtectedUserRoute>} />
          <Route path="share-trading-tips" element={<ProtectedUserRoute><ShareTradingTips /></ProtectedUserRoute>} />

          {/* Admin Protected */}
          <Route path="admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          <Route path="analytics" element={<ProtectedAdminRoute><AdminAnalyticsPage /></ProtectedAdminRoute>} />
          <Route path="deal-analytics" element={<ProtectedAdminRoute><DealAnalytics /></ProtectedAdminRoute>} />
          <Route path="reports" element={<ProtectedAdminRoute><ReportCenter /></ProtectedAdminRoute>} />
          <Route path="escrow-dashboard" element={<ProtectedAdminRoute><EscrowDashboard /></ProtectedAdminRoute>} />
          <Route path="fraud-log" element={<ProtectedAdminRoute><FraudDetectionLog /></ProtectedAdminRoute>} />
          <Route path="admin-deal-log" element={<ProtectedAdminRoute><PendingDealList /></ProtectedAdminRoute>} />
          <Route path="charts" element={<ProtectedAdminRoute><AdminCharts /></ProtectedAdminRoute>} />
          <Route path="users" element={<ProtectedAdminRoute><UserControlList /></ProtectedAdminRoute>} />
          <Route path="dispute-log" element={<ProtectedAdminRoute><DisputeLogViewer /></ProtectedAdminRoute>} />
          <Route path="pitch-deck" element={<ProtectedAdminRoute><PitchDeckViewer /></ProtectedAdminRoute>} />
          <Route path="escrow-tracker" element={<ProtectedAdminRoute><EscrowTracker /></ProtectedAdminRoute>} />
          <Route path="mobile-app" element={<ProtectedAdminRoute><MobileAppPromo /></ProtectedAdminRoute>} />
          <Route path="chat" element={<ProtectedAdminRoute><ChatSupport /></ProtectedAdminRoute>} />
          <Route path="ai-insights" element={<ProtectedAdminRoute><AIInsightCenter /></ProtectedAdminRoute>} />
          <Route path="admin-audit-log" element={<ProtectedAdminRoute><AuditLogViewer /></ProtectedAdminRoute>} />

          {/* User & Settings */}
          <Route path="profile" element={<ProtectedUserRoute><UserProfile /></ProtectedUserRoute>} />
          <Route path="settings" element={<ProtectedUserRoute><SettingsPage /></ProtectedUserRoute>} />
          <Route path="kyc-upload" element={<ProtectedUserRoute><KYCUploadPage /></ProtectedUserRoute>} />
          <Route path="dispute-resolution" element={<ProtectedUserRoute><DisputeResolutionPage /></ProtectedUserRoute>} />
          <Route path="referral" element={<ProtectedUserRoute><ReferralProgram /></ProtectedUserRoute>} />
          <Route path="security-center" element={<ProtectedUserRoute><SecurityCenter /></ProtectedUserRoute>} />

          {/* Blog */}
          <Route path="blog" element={<BlogListPage />} />
          <Route path="why-dealcross" element={<WhyDealcrossBeats />} />
          <Route path="dispute-guide" element={<DisputeResolutionGuide />} />
          <Route path="fast-payouts" element={<FastPayoutsExplained />} />
          <Route path="intro-to-dealcross" element={<IntroToDealcross />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
  }
  
