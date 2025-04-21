import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import LoadingFallback from '@/components/LoadingFallback'; // Optional fallback spinner

// Lazy Imports
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

const DealsPage = lazy(() => import('@/pages/DealsPage'));
const DealDetailsPage = lazy(() => import('@/pages/DealDetailsPage'));
const StartDealPage = lazy(() => import('@/pages/StartDealPage'));
const StartDealPairing = lazy(() => import('@/pages/StartDealPairing'));
const DealConfirmation = lazy(() => import('@/pages/DealConfirmation'));
const DealTrackerPage = lazy(() => import('@/pages/DealTrackerPage'));
const WalletPage = lazy(() => import('@/pages/WalletPage'));
const FundWalletPage = lazy(() => import('@/pages/FundWalletPage'));
const TransactionHistory = lazy(() => import('@/pages/TransactionHistory'));

const ShareTrading = lazy(() => import('@/pages/ShareTrading'));
const ShareTradingTips = lazy(() => import('@/pages/ShareTradingTips'));
const TradingChartPage = lazy(() => import('@/pages/TradingChartPage'));
const LiveTradingChart = lazy(() => import('@/pages/LiveTradingChart'));

const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AnalyticsDashboard = lazy(() => import('@/pages/AnalyticsDashboard'));
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

const UserProfile = lazy(() => import('@/pages/UserProfile'));
const SettingsPage = lazy(() => import('@/pages/Settings'));
const KYCUploadPage = lazy(() => import('@/pages/KYCUploadPage'));
const DisputeResolutionPage = lazy(() => import('@/pages/DisputeResolutionPage'));
const ReferralProgram = lazy(() => import('@/pages/ReferralProgram'));
const SecurityCenter = lazy(() => import('@/pages/SecurityCenter'));

const BlogListPage = lazy(() => import('@/pages/BlogListPage'));
const WhyDealcrossBeats = lazy(() => import('@/pages/WhyDealcrossBeats'));
const DisputeResolutionGuide = lazy(() => import('@/pages/DisputeResolutionGuide'));
const FastPayoutsExplained = lazy(() => import('@/pages/FastPayoutsExplained'));
const IntroToDealcross = lazy(() => import('@/pages/IntroToDealcross'));

const NotFound = lazy(() => import('@/pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />

          {/* Deals & Wallet */}
          <Route path="wallet" element={<WalletPage />} />
          <Route path="fund-wallet" element={<FundWalletPage />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="deal/:dealId" element={<DealDetailsPage />} />
          <Route path="start-deal" element={<StartDealPage />} />
          <Route path="pair-deal" element={<StartDealPairing />} />
          <Route path="deal-confirmation" element={<DealConfirmation />} />
          <Route path="deal-tracker" element={<DealTrackerPage />} />

          {/* Trading */}
          <Route path="share-trading" element={<ShareTrading />} />
          <Route path="trading-chart" element={<TradingChartPage />} />
          <Route path="live-chart" element={<LiveTradingChart />} />
          <Route path="share-trading-tips" element={<ShareTradingTips />} />

          {/* Admin */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="deal-analytics" element={<DealAnalytics />} />
          <Route path="reports" element={<ReportCenter />} />
          <Route path="escrow-dashboard" element={<EscrowDashboard />} />
          <Route path="fraud-log" element={<FraudDetectionLog />} />
          <Route path="admin-deal-log" element={<AdminDealLog />} />
          <Route path="charts" element={<AdminCharts />} />

          {/* Admin Tools */}
          <Route path="users" element={<UserManagement />} />
          <Route path="dispute-log" element={<DisputeLogViewer />} />
          <Route path="pitch-deck" element={<PitchDeckViewer />} />
          <Route path="escrow-tracker" element={<EscrowTracker />} />
          <Route path="mobile-app" element={<MobileAppPromo />} />
          <Route path="chat" element={<ChatSupport />} />
          <Route path="ai-insights" element={<AIInsightCenter />} />

          {/* User & Settings */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="kyc-upload" element={<KYCUploadPage />} />
          <Route path="dispute-resolution" element={<DisputeResolutionPage />} />
          <Route path="referral" element={<ReferralProgram />} />
          <Route path="security-center" element={<SecurityCenter />} />

          {/* Blog */}
          <Route path="blog" element={<BlogListPage />} />
          <Route path="why-dealcross" element={<WhyDealcrossBeats />} />
          <Route path="dispute-guide" element={<DisputeResolutionGuide />} />
          <Route path="fast-payouts" element={<FastPayoutsExplained />} />
          <Route path="intro-to-dealcross" element={<IntroToDealcross />} />

          {/* Info Pages */}
          <Route path="faq" element={<FAQPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund" element={<RefundPolicyPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="test-watermark" element={<WatermarkTest />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
