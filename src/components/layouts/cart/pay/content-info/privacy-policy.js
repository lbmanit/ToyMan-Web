import React from 'react';

function PrivacyPolicy(props) {
  return (
    <section className='content-info text-base'>
      <div className='container m-auto'>
        <div>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Privacy policy</h1>
            <i className='fas fa-times' onClick={props.displayPrivacy}></i>
          </div>
          <p>
            This Privacy Policy describes how theme203.myshopify.com (the “Site”
            or “we”) collects, uses, and discloses your Personal Information
            when you visit or make a purchase from the Site.
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            After reviewing this policy, if you have additional questions, want
            more information about our privacy practices, or would like to make
            a complaint, please contact us by e-mail at nirobkhan00745@gmail.com
            or by mail using the details provided below:
          </p>
          <p>
            Drou - Lingerie Store Shopify Theme, dhaka, dhaka 1216, Bangladesh
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>
            Collecting Personal Information
          </h1>
          <p>
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information about an identifiable individual (including
            the information below) as “Personal Information”. See the list below
            for more information about what Personal Information we collect and
            why.
          </p>
          <ul>
            <li>
              <h1>Device information</h1>
              <ul>
                <li>
                  Purpose of collection: to load the Site accurately for you,
                  and to perform analytics on Site usage to optimize our Site.
                </li>
                <li>
                  Source of collection: Collected automatically when you access
                  our Site using cookies, log files, web beacons, tags, or
                  pixels{' '}
                  <span className='italic'>
                    {' '}
                    [ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED].
                  </span>
                </li>
                <li>
                  Disclosure for a business purpose: shared with our processor
                  Shopify{' '}
                  <span className='italic'>
                    [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS
                    INFORMATION].
                  </span>
                </li>
                <li>
                  Personal Information collected: version of web browser, IP
                  address, time zone, cookie information, what sites or products
                  you view, search terms, and how you interact with the Site{' '}
                  <span className='italic'>
                    [ADD OR SUBTRACT ANY OTHER PERSONAL INFORMATION COLLECTED].
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h1 className='text-2xl font-bold'>Order information</h1>
              <ul>
                <li>
                  Purpose of collection: to provide products or services to you
                  to fulfill our contract, to process your payment information,
                  arrange for shipping, and provide you with invoices and/or
                  order confirmations, communicate with you, screen our orders
                  for potential risk or fraud, and when in line with the
                  preferences you have shared with us, provide you with
                  information or advertising relating to our products or
                  services.
                </li>
                <li>Source of collection: collected from you.</li>
                <li>
                  Disclosure for a business purpose: shared with our processor
                  Shopify
                  <span className='italic'>
                    {' '}
                    [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION.
                    FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND
                    FULFILLMENT APPS].
                  </span>
                </li>
                <li>
                  Personal Information collected: name, billing address,
                  shipping address, payment information{' '}
                  <span className='italic'>
                    (including credit card numbers [INSERT ANY OTHER PAYMENT
                    TYPES ACCEPTED]),
                  </span>{' '}
                  email address, and phone number.
                </li>
              </ul>
            </li>
            <li>
              <h1>Customer support information</h1>
              <ul>
                <li>Purpose of collection:</li>
                <li>Source of collection:</li>
                <li>Disclosure for a business purpose:</li>
                <li>
                  Personal Information collected:{' '}
                  <span className='italic'>
                    [INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA,
                    PURCHASED MARKETING DATA/LISTS]
                  </span>
                </li>
                <li>Purpose of collection: to provide customer support.</li>
                <li>Source of collection: collected from you</li>
                <li>
                  Disclosure for a business purpose:{' '}
                  <span className='italic'>
                    [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]
                  </span>
                </li>
                <li>
                  Personal Information collected:{' '}
                  <span className='italic'>
                    [ADD ANY MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR
                    ADDITIONAL INFORMATION AS NEED.]
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <p className='italic'>
            [INSERT FOLLOWING SECTION IF AGE RESTRICTION IS REQUIRED]
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Minors</h1>
          <p>
            The Site is not intended for individuals under the age of{' '}
            <span className='italic'> [INSERT AGE].</span> We do not
            intentionally collect Personal Information from children. If you are
            the parent or guardian and believe your child has provided us with
            Personal Information, please contact us at the address above to
            request deletion.
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Sharing Personal Information</h1>
          <p>
            We share your Personal Information with service providers to help us
            provide our services and fulfill our contracts with you, as
            described above. For example:
          </p>
          <ul>
            <li>
              We use Shopify to power our online store. You can read more about
              how Shopify uses your Personal Information here:
              <a href='https://www.shopify.com/legal/privacy' target='_blank'>
                https://www.shopify.com/legal/privacy.
              </a>
            </li>
            <li>
              We may share your Personal Information to comply with applicable
              laws and regulations, to respond to a subpoena, search warrant or
              other lawful request for information we receive, or to otherwise
              protect our rights.
            </li>
            <li className='italic'>
              [INSERT INFORMATION ABOUT OTHER SERVICE PROVIDERS]
            </li>
          </ul>
          <p className='italic'>
            [INCLUDE FOLLOWING SECTION IF USING REMARKETING OR TARGETED
            ADVERTISING]
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Behavioural Advertising</h1>
          <p>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For example:
          </p>
          <ul>
            <li>
              <span className='italic'>[INSERT IF APPLICABLE]</span> We use
              Google Analytics to help us understand how our customers use the
              Site. You can read more about how Google uses your Personal
              Information here: <br />
              <a
                href='https://policies.google.com/privacy?hl=a'
                target='_blank'
              >
                https://www.google.com/intl/en/policies/privacy/.
              </a>{' '}
              You can also opt-out of Google Analytics here: <br />
              <a
                href='https://tools.google.com/dlpage/gaoptout'
                target='_blank'
              >
                https://tools.google.com/dlpage/gaoptout.
              </a>
            </li>
            <li>
              <span className='italic'>
                [INSERT IF YOU USE A THIRD PARTY MARKETING APP THAT COLLECTS
                INFORMATION ABOUT BUYER ACTIVITY ON YOUR SITE]
              </span>{' '}
              We share information about your use of the Site, your purchases,
              and your interaction with our ads on other websites with our
              advertising partners. We collect and share some of this
              information directly with our advertising partners, and in some
              cases through the use of cookies or other similar technologies
              (which you may consent to, depending on your location).
            </li>
            <li>
              <span className='italic'>
                [INSERT IF USING SHOPIFY AUDIENCES]
              </span>{' '}
              We use Shopify Audiences to help us show ads on other websites
              with our advertising partners to buyers who made purchases with
              other Shopify merchants and who may also be interested in what we
              have to offer. We also share information about your use of the
              Site, your purchases, and the email address associated with your
              purchases with Shopify Audiences, through which other Shopify
              merchants may make offers you may be interested in.
            </li>
            <li className='italic'>[INSERT OTHER ADVERTISING SERVICES USED]</li>
          </ul>
          <p>
            For more information about how targeted advertising works, you can
            visit the Network Advertising Initiative’s (“NAI”) educational page
            at
            <a
              href='https://thenai.org/about-online-advertising/faq/?tab=2'
              target='_blank'
            >
              https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </a>
          </p>
          <p>You can opt out of targeted advertising by:</p>
          <div>
            <p className='italic'>
              [INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED. COMMON
              LINKS INCLUDE
            </p>
            <ul>
              <li>
                FACEBOOK -{' '}
                <a
                  href='https://www.facebook.com/settings/?tab=your_facebook_information'
                  target='_blank'
                >
                  https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                <li>
                  GOOGLE -{' '}
                  <a
                    href='https://www.google.com/settings/ads/anonymous'
                    target='_blank'
                  >
                    https://www.google.com/settings/ads/anonymous
                  </a>
                </li>
              </li>
              <li>
                BING -
                <a
                  href='https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads'
                  target='_blank'
                >
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
                ]
              </li>
            </ul>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              <a href='https://optout.aboutads.info/' target='_blank'>
                https://optout.aboutads.info/.
              </a>
            </p>
          </div>
        </div>
        <div>
          <h1>Using Personal Information</h1>
          <p>
            We use your personal Information to provide our services to you,
            which includes: offering products for sale, processing payments,
            shipping and fulfillment of your order, and keeping you up to date
            on new products, services, and offers.
          </p>
          <p className='italic'>
            [INCLUDE THE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU
            HAVE CUSTOMERS IN EUROPE]
          </p>
        </div>
        <div>
          <h1>Lawful basis</h1>
          <p>
            Pursuant to the General Data Protection Regulation (“GDPR”), if you
            are a resident of the European Economic Area (“EEA”), we process
            your personal information under the following lawful bases:
          </p>
          <ul>
            <li>Your consent;</li>
            <li>The performance of the contract between you and the Site;</li>
            <li>Compliance with our legal obligations;</li>
            <li>To protect your vital interests;</li>
            <li>To perform a task carried out in the public interest;</li>
            <li>
              For our legitimate interests, which do not override your
              fundamental rights and freedoms.
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Retention</h1>
          <p>
            When you place an order through the Site, we will retain your
            Personal Information for our records unless and until you ask us to
            erase this information. For more information on your right of
            erasure, please see the ‘Your rights’ section below.
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Automatic decision-making</h1>
          <p>
            If you are a resident of the EEA, you have the right to object to
            processing based solely on automated decision-making (which includes
            profiling), when that decision-making has a legal effect on you or
            otherwise significantly affects you
          </p>
          <p>
            We <span className='italic'>[DO/DO NOT]</span> engage in fully
            automated decision-making that has a legal or otherwise significant
            effect using customer data.
          </p>
          <p>
            Our processor Shopify uses limited automated decision-making to
            prevent fraud that does not have a legal or otherwise significant
            effect on you.
          </p>
          <p>
            Services that include elements of automated decision-making include:
          </p>
          <ul>
            <li>
              Temporary blacklist of IP addresses associated with repeated
              failed transactions. This blacklist persists for a small number of
              hours.
            </li>
            <li>
              Temporary blacklist of credit cards associated with blacklisted IP
              addresses. This blacklist persists for a small number of days.
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Selling Personal Information</h1>
          <p className='italic'>
            [INCLUDE THIS SECTION IF YOUR BUSINESS IS SUBJECT TO THE CALIFORNIA
            CONSUMER PRIVACY ACT AND SELLS PERSONAL INFORMATION AS DEFINED BY
            THE CALIFORNIA CONSUMER PRIVACY ACT]
          </p>
          <p>
            Our Site sells Personal Information, as defined by the California
            Consumer Privacy Act of 2018 (“CCPA”).{' '}
            <span className='italic'>[Insert:</span>
          </p>
          <ul className='italic'>
            <li>categories of information sold;</li>
            <li>
              IF USING SHOPIFY AUDIENCES: information about your use of the
              Site, your purchases, and the email address associated with your
              purchase
            </li>
            <li>instructions on how to opt-out of sale;</li>
            <li>
              whether your business sells information of minors (under 16) and
              whether you obtain affirmative authorization;
            </li>
            <li>
              if you provide a financial incentive to sell information, provide
              information about what that incentive is.]
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Your rights</h1>
          <p className='italic'>
            [INCLUDE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU
            HAVE CUSTOMERS IN EUROPE]
          </p>
        </div>
        <div>
          <h1>GDPR</h1>
          <p>
            If you are a resident of the EEA, you have the right to access the
            Personal Information we hold about you, to port it to a new service,
            and to ask that your Personal Information be corrected, updated, or
            erased. If you would like to exercise these rights, please contact
            us through the contact information above.{' '}
            <span className='italic'>
              [OR INSERT ALTERNATIVE INSTRUCTIONS FOR SENDING ACCESS, ERASURE,
              CORRECTION, AND PORTABILITY REQUESTS]
            </span>
          </p>
          <p>
            Your Personal Information will be initially processed in Ireland and
            then will be transferred outside of Europe for storage and further
            processing, including to Canada and the United States. For more
            information on how data transfers comply with the GDPR, see
            Shopify’s GDPR Whitepaper:
            <a
              href='https://help.shopify.com/en/manual/your-account/privacy'
              target='_blank'
            >
              https://help.shopify.com/en/manual/your-account/privacy/GDPR.
            </a>
          </p>
          <p className='italic'>
            [INCLUDE FOLLOWING SECTION IF YOUR BUSINESS IS SUBJECT TO THE
            CALIFORNIA CONSUMER PRIVACY ACT]
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>CCPA</h1>
          <p>
            If you are a resident of California, you have the right to access
            the Personal Information we hold about you (also known as the ‘Right
            to Know’), to port it to a new service, and to ask that your
            Personal Information be corrected, updated, or erased. If you would
            like to exercise these rights, please contact us through the contact
            information above.{' '}
            <span className='italic'>
              [OR INSERT ALTERNATIVE INSTRUCTIONS FOR SENDING ACCESS, ERASURE,
              CORRECTION, AND PORTABILITY REQUESTS]
            </span>
          </p>
          <p>
            If you would like to designate an authorized agent to submit these
            requests on your behalf, please contact us at the address above.
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Cookies</h1>
          <p>
            A cookie is a small amount of information that’s downloaded to your
            computer or device when you visit our Site. We use a number of
            different cookies, including functional, performance, advertising,
            and social media or content cookies. Cookies make your browsing
            experience better by allowing the website to remember your actions
            and preferences (such as login and region selection). This means you
            don’t have to re-enter this information each time you return to the
            site or browse from one page to another. Cookies also provide
            information on how people use the website, for instance whether it’s
            their first time visiting or if they are a frequent visitor.
          </p>
          <p>
            We use the following cookies to optimize your experience on our Site
            and to provide our services.
          </p>
          <p>
            [Be sure to check this list against Shopify’s current list of
            cookies on the merchant storefront:{' '}
            <a href='https://www.shopify.com/legal/cookies' target='_blank'>
              https://www.shopify.com/legal/cookies
            </a>{' '}
            ]
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Do Not Track</h1>
          <p>
            Please note that because there is no consistent industry
            understanding of how to respond to “Do Not Track” signals, we do not
            alter our data collection and usage practices when we detect such a
            signal from your browser.
          </p>
        </div>
        <div>
          <h1>Changes</h1>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons.
          </p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Complaints</h1>
          <p>
            As noted above, if you would like to make a complaint, please
            contact us by e-mail or by mail using the details provided under
            “Contact” above. If you are not satisfied with our response to your
            complaint, you have the right to lodge your complaint with the
            relevant data protection authority. You can contact your local data
            protection authority, or our supervisory authority here: [Add
            contact information or website for the data protection authority in
            your jurisdiction. For example:{' '}
            <a href='https://ico.org.uk/make-a-complaint/' target='_blank'>
              {' '}
              https://ico.org.uk/make-a-complaint/
            </a>
            ]
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
