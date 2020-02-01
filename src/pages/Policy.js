import React, { Component } from 'react'

export default class Policy extends Component {
    render() {
        return (
            <div className="content">
                <div className="legal">
                    <h2 className="legal__title">Protection and processing of personal data</h2>
                    <h3 className="legal__subtitle">Compliance with applicable laws</h3>
                    <p className="legal__paragraph">
                        The site <a href="https://getomega.web.app/">https://getomega.web.app/</a> respects the privacy of the user and strictly complies with the laws in force on
                        the protection of privacy and individual freedoms. No personal information is collected without your knowledge. No personal information is disclosed to third parties.
                    </p>
                    <h3 class="legal__subtitle">Cookies</h3>
                    <p className="legal__paragraph">
                        When consulting <a href="https://getomega.web.app/">https://getomega.web.app/</a>, cookies are placed on your computer,
                        mobile or tablet. Only cookies intended for audience measurement
                        are used. These cookies do not collect personal data. Audience measurement tools are deployed to obtain information on visitor navigation.
                        They allow in particular to understand how users arrive on a site and to reconstruct their journey.
                    </p>
                    <p className="legal__paragraph">
                        The data generated by cookies is transmitted and stored by audience measurement providers (Google Analytics). Audience measurement providers may communicate this data to third parties
                        in the event of a legal obligation or when these third parties process this data on their behalf.
                        {/* <a href="javascript:void(0)" id="deny-cookie">Click here to refuse cookies.</a> */}
                    </p>
                    <p className="legal__paragraph">
                        Learn more about cookies at <a href="https://www.cookiesandyou.com">https://www.cookiesandyou.com</a>
                    </p>
                </div>
            </div>
        )
    }
}
