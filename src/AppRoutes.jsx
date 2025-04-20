// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";

// Auth Pages
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";

// Deal & Wallet Pages
import LandingPage from "@/pages/LandingPage";
import WalletPage from "@/pages/WalletPage";
import FundWalletPage from "@/pages/FundWalletPage";
import DealsPage from "@/pages/DealsPage";
import DealDetailsPage from "@/pages/DealDetailsPage";
import StartDealPage from "@/pages/StartDealPage";
import DealConfirmation from "@/pages/DealConfirmation";
import DealTrackerPage from "@/pages/DealTrackerPage";
import StartDealPairing from "@/pages/StartDealPairing";

// Trading Pages
import ShareTrading from "@/pages/ShareTrading";
import TradingChartPage from "@/pages/TradingChartPage";
import LiveTradingChart from "@/pages/LiveTradingChart";

// Admin & Investor Pages
import AdminDashboard from "@/pages/AdminDashboard";
import InvestorPanel from "@/pages/InvestorPanel";
import InvestorProfile from "@/pages/InvestorProfile";
import InvestorReports from "@/pages/InvestorReports";
import DealAnalytics from "@/pages/DealAnalytics";
import EscrowDashboard from "@/pages/EscrowDashboard";
import AdminDealActivityLog from "@/pages/AdminDealActivityLog"; // Added

// Utility Pages
import KYCUploadPage from "@/pages/KYCUploadPage";
import DisputeResolutionPage from "@/pages/DisputeResolutionPage";
import FraudDetectionLog from "@/pages/FraudDetectionLog";
import PitchDeckViewer from "@/pages/PitchDeckViewer";
import EscrowTracker from "@/pages/EscrowTracker";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";
import ReportCenter from "@/pages/ReportCenter";
import UserManagement from "@/pages/UserManagement";
import SecurityCenter from "@/pages/SecurityCenter";
import ReferralProgram from "@/pages/ReferralProgram";
import UserProfile from "@/pages/UserProfile";
import TransactionHistory from "@/pages/TransactionHistory";
import SettingsPage from "@/pages/Settings";
import AIInsightCenter from "@/pages/AIInsightCenter";
import DisputeLogViewer from "@/pages/DisputeLogViewer";
import ChatSupport from "@/pages/ChatSupport";

// Content Pages
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import RefundPolicyPage from "@/pages/RefundPolicyPage";
import DocsPage from "@/pages/DocsPage";
import FAQPage from "@/pages/FaqPage";

// Blog Pages
import BlogListPage from "@/pages/BlogListPage";
import WhyDealcrossBeats from "@/pages/WhyDealcrossBeats";
import DisputeResolutionGuide from "@/pages/DisputeResolutionGuide";
import FastPayoutsExplained from "@/pages/FastPayoutsExplained";
import IntroToDealcross from "@/pages/IntroToDealcross";
import ShareTradingTips from "@/pages/ShareTradingTips";

// Misc Pages
import WatermarkTest from "@/pages/WatermarkTest";
import NotFound from "@/pages/NotFound";
import MobileAppPromo from "@/pages/MobileAppPromo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Public Routes */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        {/* Wallet & Deals */}
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

        {/* Admin & Investor */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="investor" element={<InvestorPanel />} />
        <Route path="investor-profile" element={<InvestorProfile />} />
        <Route path="investor-reports" element={<InvestorReports />} />
        <Route path="deal-activity-log" element={<AdminDealActivityLog />} /> {/* NEW */}

        {/* Utilities */}
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
        <Route path="why-dealcross" element={<WhyDealcrossBeats />} />
        <Route path="dispute-guide" element={<DisputeResolutionGuide />} />
        <Route path="fast-payouts" element={<FastPayoutsExplained />} />
        <Route path="intro-to-dealcross" element={<IntroToDealcross />} />
        <Route path="share-trading-tips" element={<ShareTradingTips />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund" element={<RefundPolicyPage />} />
        <Route path="docs" element={<DocsPage />} />

        {/* Test + Fallback */}
        <Route path="test-watermark" element={<WatermarkTest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  }
