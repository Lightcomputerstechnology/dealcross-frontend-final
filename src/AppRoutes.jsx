import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";

// Auth
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";

// Landing & Info
import LandingPage from "@/pages/LandingPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FaqPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import RefundPolicyPage from "@/pages/RefundPolicyPage";
import DocsPage from "@/pages/DocsPage";
import WatermarkTest from "@/pages/WatermarkTest";

// Deals & Wallet
import DealsPage from "@/pages/DealsPage";
import DealDetailsPage from "@/pages/DealDetailsPage";
import StartDealPage from "@/pages/StartDealPage";
import StartDealPairing from "@/pages/StartDealPairing";
import DealConfirmation from "@/pages/DealConfirmation";
import DealTrackerPage from "@/pages/DealTrackerPage";
import WalletPage from "@/pages/WalletPage";
import FundWalletPage from "@/pages/FundWalletPage";
import TransactionHistory from "@/pages/TransactionHistory";

// Trading
import ShareTrading from "@/pages/ShareTrading";
import ShareTradingTips from "@/pages/ShareTradingTips";
import TradingChartPage from "@/pages/TradingChartPage";
import LiveTradingChart from "@/pages/LiveTradingChart";

// Admin & Analytics
import AdminDashboard from "@/pages/AdminDashboard";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";
import DealAnalytics from "@/pages/DealAnalytics";
import ReportCenter from "@/pages/ReportCenter";
import EscrowDashboard from "@/pages/EscrowDashboard";
import FraudDetectionLog from "@/pages/FraudDetectionLog";

// Admin Tools
import UserManagement from "@/pages/UserManagement";
import DisputeLogViewer from "@/pages/DisputeLogViewer";
import PitchDeckViewer from "@/pages/PitchDeckViewer";
import EscrowTracker from "@/pages/EscrowTracker";
import MobileAppPromo from "@/pages/MobileAppPromo";
import ChatSupport from "@/pages/ChatSupport";
import AIInsightCenter from "@/pages/AIInsightCenter";

// Admin Extensions
import AdminDealLog from "@/pages/AdminDealLog"; // If separated from logs
import AdminCharts from "@/pages/AdminCharts";   // Chart component if separated

// User & Settings
import UserProfile from "@/pages/UserProfile";
import SettingsPage from "@/pages/Settings";
import KYCUploadPage from "@/pages/KYCUploadPage";
import DisputeResolutionPage from "@/pages/DisputeResolutionPage";
import ReferralProgram from "@/pages/ReferralProgram";
import SecurityCenter from "@/pages/SecurityCenter";

// Blog
import BlogListPage from "@/pages/BlogListPage";
import WhyDealcrossBeats from "@/pages/WhyDealcrossBeats";
import DisputeResolutionGuide from "@/pages/DisputeResolutionGuide";
import FastPayoutsExplained from "@/pages/FastPayoutsExplained";
import IntroToDealcross from "@/pages/IntroToDealcross";

// Fallback
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Public & Landing */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        {/* Wallet & Deal System */}
        <Route path="wallet" element={<WalletPage />} />
        <Route path="fund-wallet" element={<FundWalletPage />} />
        <Route path="transactions" element={<TransactionHistory />} />
        <Route path="deals" element={<DealsPage />} />
        <Route path="deal/:dealId" element={<DealDetailsPage />} />
        <Route path="start-deal" element={<StartDealPage />} />
        <Route path="pair-deal" element={<StartDealPairing />} />
        <Route path="deal-confirmation" element={<DealConfirmation />} />
        <Route path="deal-tracker" element={<DealTrackerPage />} />

        {/* Share Trading */}
        <Route path="share-trading" element={<ShareTrading />} />
        <Route path="trading-chart" element={<TradingChartPage />} />
        <Route path="live-chart" element={<LiveTradingChart />} />
        <Route path="share-trading-tips" element={<ShareTradingTips />} />

        {/* Admin Panel */}
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

        {/* User Settings */}
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

        {/* Static / Legal / Docs */}
        <Route path="faq" element={<FAQPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund" element={<RefundPolicyPage />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="test-watermark" element={<WatermarkTest />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  }
