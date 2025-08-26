export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-[900px] mx-auto px-6 py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Terms of Service
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
                <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-neutral-300 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement made between you (&quot;Customer&quot; or &quot;you&quot;) and First Coast Home Remodeling & Repair, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of our website and remodeling services. By accessing our website or engaging our services, you agree that you have read, understood, and agree to be bound by all of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  First Coast Home Remodeling provides the following services:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Cosmetic remodeling and renovation services</li>
                  <li>Project planning and design consultation</li>
                  <li>Material sourcing and procurement</li>
                  <li>Trade and barter facilitation</li>
                  <li>Logistics and project management</li>
                </ul>
                <p className="text-neutral-300 leading-relaxed mt-4">
                  All services are subject to local building codes, permit requirements, and applicable regulations. We operate as a contractor coordinating qualified professionals where required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Service Contracts</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  All services are subject to a written contract that will specify:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Detailed scope of work and specifications</li>
                  <li>Project timeline and milestones</li>
                  <li>Payment schedule and terms</li>
                  <li>Materials and labor costs</li>
                  <li>Change order procedures</li>
                  <li>Warranty terms and limitations</li>
                </ul>
                <p className="text-neutral-300 leading-relaxed mt-4">
                  The written contract supersedes any verbal agreements and constitutes the complete agreement between parties for the specified project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
                <div className="space-y-4 text-neutral-300">
                  <p><strong className="text-white">Deposits:</strong> Projects may require deposits as specified in individual contracts, typically 25-50% of project cost.</p>
                  <p><strong className="text-white">Progress Payments:</strong> Payments are due according to project milestones as outlined in the contract.</p>
                  <p><strong className="text-white">Final Payment:</strong> Final payment is due upon project completion and customer acceptance.</p>
                  <p><strong className="text-white">Late Payments:</strong> Late payments may incur a service charge of 1.5% per month on outstanding balances.</p>
                  <p><strong className="text-white">Accepted Methods:</strong> We accept cash, check, credit cards, and ACH transfers.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Permits and Compliance</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Customer is responsible for obtaining necessary permits unless otherwise specified in the contract. We will assist in permit applications and ensure all work complies with local building codes. Any work requiring specialized credentials (electrical, plumbing, structural) will be performed by appropriately qualified subcontractors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibant text-white mb-4">6. Warranties and Guarantees</h2>
                <div className="space-y-4 text-neutral-300">
                  <p><strong className="text-white">Workmanship Warranty:</strong> We warrant our workmanship for one (1) year from project completion against defects in materials and workmanship under normal use.</p>
                  <p><strong className="text-white">Material Warranties:</strong> Material warranties are provided by manufacturers and assigned to the customer.</p>
                  <p><strong className="text-white">Exclusions:</strong> Warranties do not cover damage due to normal wear, misuse, accidents, acts of nature, or modifications by others.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Liability and Insurance</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We maintain general liability insurance and workers&apos; compensation insurance as required by law. Our liability is limited to the contract amount for the specific project. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Consequential, indirect, or punitive damages</li>
                  <li>Pre-existing conditions discovered during work</li>
                  <li>Damage to customer property due to hidden defects</li>
                  <li>Delays due to weather, permit issues, or force majeure events</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Cancellation and Changes</h2>
                <div className="space-y-4 text-neutral-300">
                  <p><strong className="text-white">Customer Cancellation:</strong> Customers may cancel contracts within 3 business days of signing without penalty. After this period, cancellation fees may apply as specified in the contract.</p>
                  <p><strong className="text-white">Change Orders:</strong> Any changes to the original scope must be documented in writing and signed by both parties, with pricing adjustments agreed upon before work proceeds.</p>
                  <p><strong className="text-white">Company Cancellation:</strong> We reserve the right to cancel contracts due to non-payment, safety concerns, or breach of contract terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Property Access and Safety</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Customer agrees to provide reasonable access to work areas and maintain a safe working environment. Customer is responsible for:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Removing personal belongings from work areas</li>
                  <li>Ensuring utilities are available and functional</li>
                  <li>Providing secure access during work hours</li>
                  <li>Disclosing known hazards (asbestos, lead, structural issues)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Dispute Resolution</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the Construction Industry Arbitration Rules of the American Arbitration Association. The arbitration shall take place in Florida, and Florida law shall govern these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Privacy and Data Protection</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Modifications to Terms</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
                <div className="space-y-2 text-neutral-300">
                  <p><strong className="text-white">Company:</strong> First Coast Home Remodeling & Repair, LLC</p>
                  <p><strong className="text-white">Email:</strong> legal@firstcoastremod.com</p>
                  <p><strong className="text-white">Phone:</strong> (848) 236-9896</p>
                  <p><strong className="text-white">Website:</strong> www.firstcoastremod.com</p>
                </div>
              </section>

              <section className="border-t border-[var(--brand-primary)]/20 pt-8">
                <p className="text-sm text-neutral-400">
                  <strong>Legal Disclaimer:</strong> These Terms of Service are provided as a template and should be reviewed by qualified legal counsel before implementation. Laws vary by jurisdiction and specific business circumstances may require additional or different terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


