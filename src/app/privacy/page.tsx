export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-[900px] mx-auto px-6 py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-300 mb-2">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
            <p className="text-neutral-300">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-12">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="text-neutral-300 leading-relaxed">
                  First Coast Home Remodeling & Repair, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                    <p className="text-neutral-300 leading-relaxed mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                      <li>Request a quote or consultation</li>
                      <li>Contact us via phone, email, or website forms</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Engage our services through a contract</li>
                      <li>Provide feedback or reviews</li>
                    </ul>
                    <p className="text-neutral-300 leading-relaxed mt-3">
                      This information may include: name, email address, phone number, physical address, project details, property information, and payment information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                    <p className="text-neutral-300 leading-relaxed mb-3">
                      When you visit our website, we may automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                      <li>IP address and geolocation data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages viewed and time spent on our website</li>
                      <li>Referring websites and search terms</li>
                      <li>Device information and screen resolution</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to enhance your experience on our website. You can control cookie preferences through your browser settings.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We use the information we collect for various legitimate business purposes, including:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Providing and managing our remodeling services</li>
                  <li>Responding to inquiries and customer support requests</li>
                  <li>Processing payments and managing contracts</li>
                  <li>Scheduling appointments and project coordination</li>
                  <li>Sending project updates and communications</li>
                  <li>Marketing our services (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Service Providers and Business Partners</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      We may share your information with trusted third parties who assist us in operating our business, including subcontractors, suppliers, payment processors, and technology service providers. These parties are contractually obligated to protect your information and use it only for specified purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court order or government investigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Business Transfers</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      In the event of a merger, acquisition, or sale of our business, your personal information may be transferred to the acquiring entity, subject to the same privacy protections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">We Do Not Sell Personal Information</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      We do not sell, rent, or lease your personal information to third parties for their own marketing purposes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure servers and network infrastructure</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure payment processing systems</li>
                </ul>
                <p className="text-neutral-300 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related information may be retained for warranty and legal purposes for up to 7 years after project completion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Your Privacy Rights</h2>
                
                <div className="space-y-4">
                  <p className="text-neutral-300 leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Access and Portability</h4>
                      <p className="text-neutral-300">Request a copy of the personal information we hold about you.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white">Correction</h4>
                      <p className="text-neutral-300">Request correction of inaccurate or incomplete information.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white">Deletion</h4>
                      <p className="text-neutral-300">Request deletion of your personal information, subject to legal obligations.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white">Restriction</h4>
                      <p className="text-neutral-300">Request restriction of processing in certain circumstances.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white">Objection</h4>
                      <p className="text-neutral-300">Object to processing for direct marketing purposes.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white">Withdraw Consent</h4>
                      <p className="text-neutral-300">Withdraw consent for processing where consent is the legal basis.</p>
                    </div>
                  </div>

                  <p className="text-neutral-300 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Marketing Communications</h2>
                <p className="text-neutral-300 leading-relaxed">
                  With your consent, we may send you marketing communications about our services, promotions, and industry insights. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Opting out will not affect transactional communications related to our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Websites</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. State-Specific Privacy Rights</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">California Residents (CCPA)</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, to delete personal information, and to opt-out of the sale of personal information (which we do not engage in).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Other States</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Residents of other states may have additional privacy rights under applicable state laws. Please contact us for information about exercising these rights.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. International Data Transfers</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Your information may be processed and stored in the United States or other countries where our service providers operate. By using our services, you consent to the transfer of your information to these locations, which may have different data protection laws than your country of residence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to This Privacy Policy</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on our website and indicate the effective date. For material changes, we may provide additional notice through email or prominent website notices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
                <div className="space-y-4">
                  <p className="text-neutral-300 leading-relaxed">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-neutral-300">
                    <p><strong className="text-white">Company:</strong> First Coast Home Remodeling & Repair, LLC</p>
                    <p><strong className="text-white">Privacy Officer:</strong> privacy@firstcoastremod.com</p>
                    <p><strong className="text-white">General Contact:</strong> hello@firstcoastremod.com</p>
                    <p><strong className="text-white">Phone:</strong> (848) 236-9896</p>
                    <p><strong className="text-white">Website:</strong> www.firstcoastremod.com</p>
                  </div>

                  <div className="mt-6 p-4 bg-[var(--brand-support)]/20 rounded-lg border border-[var(--brand-primary)]/20">
                    <h4 className="text-lg font-semibold text-white mb-2">Data Protection Officer</h4>
                    <p className="text-neutral-300 text-sm">
                      For privacy-related inquiries and to exercise your data protection rights, you may contact our Data Protection Officer at privacy@firstcoastremod.com. We commit to responding to all privacy requests within 30 days.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t border-[var(--brand-primary)]/20 pt-8">
                <p className="text-sm text-neutral-400">
                  <strong>Legal Disclaimer:</strong> This Privacy Policy is provided as a template and should be reviewed by qualified legal counsel before implementation. Privacy laws vary by jurisdiction and specific business circumstances may require additional or different privacy protections. Regular review and updates may be necessary to maintain compliance with evolving privacy regulations.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


