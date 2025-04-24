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
          {/* All previous routes remain the same */}

          {/* Admin Extra Pages */}
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
  
