
import "../Components/footer.css"

import flagIcon from "../images/icons/16.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="containerfooter">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the{" "}
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              {" "}
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              {" "}
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <a href="/mac/">Mac</a>
              </li>
              <li>
                <a href="/ipad/">iPad</a>
              </li>
              <li>
                <a href="/iphone/">iPhone</a>
              </li>
              <li>
                <a href="/watch/">Watch</a>
              </li>
              <li>
                <a href="/tv/">TV</a>
              </li>
              <li>
                <a href="/music/">Music</a>
              </li>
              <li>
                <a href="/airpods/">AirPods</a>
              </li>
              <li>
                <a href="/homepod/">HomePod</a>
              </li>
              <li>
                <a href="/ipodtouch/">iPod touch</a>
              </li>
              <li>
                <a href="/accessories/">Accessories</a>
              </li>
              <li>
                <a href="/giftcards/">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/applemusic/">Apple Music</a>
              </li>
              <li>
                <a href="/applenews/">Apple News+</a>
              </li>
              <li>
                <a href="/appletv/">Apple TV+</a>
              </li>
              <li>
                <a href="/applearcade/">Apple Arcade</a>
              </li>
              <li>
                <a href="/applecard/">Apple Card</a>
              </li>
              <li>
                <a href="/icloud/">iCloud</a>
              </li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li>
                <a href="/manage/">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="/applestore/">Apple Store Account</a>
              </li>
              <li>
                <a href="/icloud/">iCloud.com</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <a href="/find/">Find a Store</a>
              </li>
              <li>
                <a href="/genius/">Genius Bar</a>
              </li>
              <li>
                <a href="/today/">Today at Apple</a>
              </li>
              <li>
                <a href="/applecamp/">Apple Camp</a>
              </li>
              <li>
                <a href="/fieldtrip/">Field Trip</a>
              </li>
              <li>
                <a href="/applestoreapp/">Apple Store App</a>
              </li>
              <li>
                <a href="/refubrished/">Refurbished and Clearance</a>
              </li>
              <li>
                <a href="/financing/">Financing</a>
              </li>
              <li>
                <a href="/appletrade/">Apple Trade In</a>
              </li>
              <li>
                <a href="/order/">Order Status</a>
              </li>
              <li>
                <a href="/shopping/">Shopping Help</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li>
                <a href="/appleandbusiness/">Apple and Business</a>
              </li>
              <li>
                <a href="/shop/">Shop for Business</a>
              </li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li>
                <a href="/appleandeducation/">Apple and Education</a>
              </li>
              <li>
                <a href="/shopforcollege/">Shop for College</a>
              </li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li>
                <a href="/manageyour/">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="/appleaccount/">Apple Store Account</a>
              </li>
              <li>
                <a href="/site/">iCloud.com</a>
              </li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li>
                <a href="/education/">Apple and Education</a>
              </li>
              <li>
                <a href="/shopcolleges/">Shop for College</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="/fastore/">Find a Store</a>
              </li>
              <li>
                <a href="/geniusbar/">Genius Bar</a>
              </li>
              <li>
                <a href="/todayat/">Today at Apple</a>
              </li>
              <li>
                <a href="/applecamping/">Apple Camp</a>
              </li>
              <li>
                <a href="/fields/">Field Trip</a>
              </li>
              <li>
                <a href="/applestorein/">Apple Store App</a>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="/finding/">Find a Store</a>
              </li>
              <li>
                <a href="/ginies/">Genius Bar</a>
              </li>
              <li>
                <a href="/days/">Today at Apple</a>
              </li>
              <li>
                <a href="/campingg/">Apple Camp</a>
              </li>
              <li>
                <a href="/fielding/">Field Trip</a>
              </li>
              <li>
                <a href="/storing/">Apple Store App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="/fin/">Find an Apple Store</a> or{" "}
          <a href="/other/">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright © 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <a href="/priv/">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms/">Terms of Use</a>
              </li>
              <li>
                <a href="/sales/">Sales and Refunds</a>
              </li>
              <li>
                <a href="/legal/">Legal</a>
              </li>
              <li>
                <a href="siting/">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src={flagIcon} />
            </div>{" "}
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
