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
const WalletHistoryPage = lazy(() => import('@/pages/WalletHistoryPage'));  // Added

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
const FraudAlertsPage = lazy(() => import('@/pages/FraudAlertsPage'));
const AdminNotifications = lazy(() => import('@/pages/AdminNotificationsPage'));
const AdminRoleManagement = lazy(() => import('@/pages/AdminRoleManagementPage'));
const AdminSettingsCenter = lazy(() => import('@/pages/AdminSettingsPage'));
const FinancialReports = lazy(() => import('@/pages/FinancialReportsPage'));
const AdminKYCReviews = lazy(() => import('@/pages/AdminKYCReviewsPage'));
const RealTimeMetrics = lazy(() => import('@/pages/RealTimeMetricsPage'));
const ReferralLogs = lazy(() => import('@/pages/ReferralLogsPage'));
const AdminSearch = lazy(() => import('@/pages/AdminSearchPage'));
const FraudAnalysis = lazy(() => import('@/pages/FraudAnalysisPage'));
const DataExportPage = lazy(() => import('@/pages/DataExportPage'));
const ServerHealth = lazy(() => import('@/pages/ServerHealthPage'));
const APIUsageStats = lazy(() => import('@/pages/APIUsageStatsPage'));
const SystemLogsViewer = lazy(() => import('@/pages/SystemLogsViewerPage'));
const ExchangeRatesViewer = lazy(() => import('@/pages/ExchangeRatesViewerPage'));
const SubscriptionPlansManager = lazy(() => import('@/pages/SubscriptionPlansManagerPage'));

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
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund" element={<RefundPolicyPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="watermark" element={<WatermarkTest />} />

          {/* User Routes */}
          <Route path="deals" element={<ProtectedUserRoute><DealsPage /></ProtectedUserRoute>} />
          <Route path="deal/:id" element={<ProtectedUserRoute><DealDetailsPage /></ProtectedUserRoute>} />
          <Route path="start-deal" element={<ProtectedUserRoute><StartDealPage /></ProtectedUserRoute>} />
          <Route path="pair-deal" element={<ProtectedUserRoute><StartDealPairing /></ProtectedUserRoute>} />
          <Route path="confirm-deal" element={<ProtectedUserRoute><DealConfirmation /></ProtectedUserRoute>} />
          <Route path="deal-tracker" element={<ProtectedUserRoute><DealTrackerPage /></ProtectedUserRoute>} />
          <Route path="wallet" element={<ProtectedUserRoute><WalletPage /></ProtectedUserRoute>} />
          <Route path="fund-wallet" element={<ProtectedUserRoute><FundWalletPage /></ProtectedUserRoute>} />
          <Route path="transaction-history" element={<ProtectedUserRoute><TransactionHistory /></ProtectedUserRoute>} />
          <Route path="kyc-status" element={<ProtectedUserRoute><KYCStatusPage /></ProtectedUserRoute>} />
          <Route path="wallet-history" element={<ProtectedUserRoute><WalletHistoryPage /></ProtectedUserRoute>} /> {/* New Route */}

          {/* Trading Routes */}
          <Route path="share-trading" element={<ProtectedUserRoute><ShareTrading /></ProtectedUserRoute>} />
          <Route path="share-tips" element={<ProtectedUserRoute><ShareTradingTips /></ProtectedUserRoute>} />
          <Route path="trading-chart" element={<ProtectedUserRoute><TradingChartPage /></ProtectedUserRoute>} />
          <Route path="live-chart" element={<ProtectedUserRoute><LiveTradingChart /></ProtectedUserRoute>} />

          {/* User Profile & Settings */}
          <Route path="profile" element={<ProtectedUserRoute><UserProfile /></ProtectedUserRoute>} />
          <Route path="settings" element={<ProtectedUserRoute><SettingsPage /></ProtectedUserRoute>} />
          <Route path="kyc-upload" element={<ProtectedUserRoute><KYCUploadPage /></ProtectedUserRoute>} />
          <Route path="disputes" element={<ProtectedUserRoute><DisputeResolutionPage /></ProtectedUserRoute>} />
          <Route path="referral" element={<ProtectedUserRoute><ReferralProgram /></ProtectedUserRoute>} />
          <Route path="security" element={<ProtectedUserRoute><SecurityCenter /></ProtectedUserRoute>} />

          {/* Blog Routes */}
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/why-dealcross" element={<WhyDealcrossBeats />} />
          <Route path="blog/dispute-guide" element={<DisputeResolutionGuide />} />
          <Route path="blog/fast-payouts" element={<FastPayoutsExplained />} />
          <Route path="blog/intro" element={<IntroToDealcross />} />

          {/* Admin Routes */}
          <Route path="admin-dashboard" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          <Route path="admin-analytics" element={<ProtectedAdminRoute><AdminAnalyticsPage /></ProtectedAdminRoute>} />
          <Route path="deal-analytics" element={<ProtectedAdminRoute><DealAnalytics /></ProtectedAdminRoute>} />
          <Route path="report-center" element={<ProtectedAdminRoute><ReportCenter /></ProtectedAdminRoute>} />
          <Route path="escrow-dashboard" element={<ProtectedAdminRoute><EscrowDashboard /></ProtectedAdminRoute>} />
          <Route path="fraud-log" element={<ProtectedAdminRoute><FraudDetectionLog /></ProtectedAdminRoute>} />
          <Route path="user-management" element={<ProtectedAdminRoute><UserManagement /></ProtectedAdminRoute>} />
          <Route path="dispute-log" element={<ProtectedAdminRoute><DisputeLogViewer /></ProtectedAdminRoute>} />
          <Route path="pitch-deck" element={<ProtectedAdminRoute><PitchDeckViewer /></ProtectedAdminRoute>} />
          <Route path="escrow-tracker" element={<ProtectedAdminRoute><EscrowTracker /></ProtectedAdminRoute>} />
          <Route path="mobile-promo" element={<ProtectedAdminRoute><MobileAppPromo /></ProtectedAdminRoute>} />
          <Route path="chat-support" element={<ProtectedAdminRoute><ChatSupport /></ProtectedAdminRoute>} />
          <Route path="ai-insight" element={<ProtectedAdminRoute><AIInsightCenter /></ProtectedAdminRoute>} />
          <Route path="admin-deals" element={<ProtectedAdminRoute><AdminDealLog /></ProtectedAdminRoute>} />
          <Route path="admin-charts" element={<ProtectedAdminRoute><AdminCharts /></ProtectedAdminRoute>} />
          <Route path="audit-log" element={<ProtectedAdminRoute><AuditLogViewer /></ProtectedAdminRoute>} />
          <Route path="pending-deals" element={<ProtectedAdminRoute><PendingDealList /></ProtectedAdminRoute>} />
          <Route path="user-controls" element={<ProtectedAdminRoute><UserControlList /></ProtectedAdminRoute>} />
          <Route path="fraud-alerts" element={<ProtectedAdminRoute><FraudAlertsPage /></ProtectedAdminRoute>} />
          <Route path="admin-notifications" element={<ProtectedAdminRoute><AdminNotifications /></ProtectedAdminRoute>} />
          <Route path="admin-roles" element={<ProtectedAdminRoute><AdminRoleManagement /></ProtectedAdminRoute>} />
          <Route path="admin-settings" element={<ProtectedAdminRoute><AdminSettingsCenter /></ProtectedAdminRoute>} />
          <Route path="financial-reports" element={<ProtectedAdminRoute><FinancialReports /></ProtectedAdminRoute>} />
          <Route path="admin-kyc-reviews" element={<ProtectedAdminRoute><AdminKYCReviews /></ProtectedAdminRoute>} />
          <Route path="real-time-metrics" element={<ProtectedAdminRoute><RealTimeMetrics /></ProtectedAdminRoute>} />
          <Route path="referral-logs" element={<ProtectedAdminRoute><ReferralLogs /></ProtectedAdminRoute>} />
          <Route path="admin-search" element={<ProtectedAdminRoute><AdminSearch /></ProtectedAdminRoute>} />
          <Route path="fraud-analysis" element={<ProtectedAdminRoute><FraudAnalysis /></ProtectedAdminRoute>} />
          <Route path="data-export" element={<ProtectedAdminRoute><DataExportPage /></ProtectedAdminRoute>} />
          <Route path="server-health" element={<ProtectedAdminRoute><ServerHealth /></ProtectedAdminRoute>} />
          <Route path="api-usage" element={<ProtectedAdminRoute><APIUsageStats /></ProtectedAdminRoute>} />
          <Route path="system-logs" element={<ProtectedAdminRoute><SystemLogsViewer /></ProtectedAdminRoute>} />
          <Route path="exchange-rates" element={<ProtectedAdminRoute><ExchangeRatesViewer /></ProtectedAdminRoute>} />
          <Route path="subscription-plans" element={<ProtectedAdminRoute><SubscriptionPlansManager /></ProtectedAdminRoute>} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}