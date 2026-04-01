'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/ui/FadeIn';
import { trackSignupStart, trackSignupSubmit, trackSignupSuccess, trackSignupError } from '@/lib/analytics';

interface SignupFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  industry: string;
  teamSize: string;
  phone?: string;
}

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();

  useEffect(() => { trackSignupStart(); }, []);

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setErrorMsg('');
    trackSignupSubmit(data.industry);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        trackSignupSuccess(data.industry, data.teamSize);
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please try again.');
        trackSignupError(result.error || 'unknown');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMsg('Network error. Please try again.');
      trackSignupError('network_error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section bg="navy" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Badge variant="blue">Start Free — No Credit Card Required</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 font-heading">
              Start your 14-day free trial
            </h1>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              Get instant access to LeadHunterIQ. See real buying signals in your industry within minutes.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section bg="white" className="py-16">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <FadeIn>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-emerald-900 mb-3">Welcome to LeadHunterIQ!</h2>
                <p className="text-emerald-700 mb-4">
                  Check your email for account activation and setup instructions.
                </p>
                <p className="text-sm text-emerald-600">
                  Your 14-day free trial starts now. No credit card required.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              {errorMsg && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                  {errorMsg}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" {...register('fullName', { required: 'Full name is required' })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body" />
                  {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Work Email</label>
                  <input type="email" placeholder="john@company.com" {...register('workEmail', { required: 'Work email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body" />
                  {errors.workEmail && <p className="text-red-600 text-sm mt-1">{errors.workEmail.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                  <input type="text" placeholder="Your Company Ltd." {...register('companyName', { required: 'Company name is required' })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body" />
                  {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Industry</label>
                  <select {...register('industry', { required: 'Please select an industry' })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-gray-900">
                    <option value="">Select your industry...</option>
                    <option value="IT Staffing">IT Staffing</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Consulting">Consulting</option>
                    <option value="IT Services">IT Services</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Team Size</label>
                  <select {...register('teamSize', { required: 'Please select a team size' })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-gray-900">
                    <option value="">Select team size...</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-20">6-20 people</option>
                    <option value="21-50">21-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                  {errors.teamSize && <p className="text-red-600 text-sm mt-1">{errors.teamSize.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone (Optional)</label>
                  <input type="tel" placeholder="+91 98765 43210" {...register('phone')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body" />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Starting...' : 'Start Free Trial \u2192'}
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 font-body text-sm">
                  No credit card required • 14-day free trial • Cancel anytime • Setup in under 5 minutes
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </Section>

      <Section bg="light-gray" className="py-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHead badge="Included in Your Trial" title="What You'll Get" description="Everything you need to start finding high-intent buyers on day one" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <Card className="bg-white p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Instant Signal Feed</h3>
                <p className="text-gray-600 font-body leading-relaxed">See live buying signals in your industry from day one. Real-time updates across 51 data sources.</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="bg-white p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">AI-Scored Leads</h3>
                <p className="text-gray-600 font-body leading-relaxed">Every lead scored with our TALPRO-IQ engine (0-100). Know exactly which prospects are most likely to buy.</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="bg-white p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Ready-to-Send Outreach</h3>
                <p className="text-gray-600 font-body leading-relaxed">AI-generated outreach sequences personalized for each lead. Copy, paste, send in seconds.</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section bg="white" className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-8">
              <div className="flex flex-col items-center">
                <svg className="h-8 w-8 text-emerald-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="font-semibold text-gray-900 font-heading">DPDPA Compliant</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="font-semibold text-gray-900 font-heading">AES-256 Encrypted</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold text-gray-900 font-heading">SOC 2 In Progress</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 font-body">Join 500+ teams already using LeadHunterIQ</p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
