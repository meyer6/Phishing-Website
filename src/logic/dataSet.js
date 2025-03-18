export const dataSet = [
  {
    "category": "Email Phishing",
    "content": {
      "sender": "PayPal Security <security-alert@paypal-notice.uk.com>",
      "subject": "Urgent Security Alert: Verify Your PayPal Account Immediately",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>PayPal Security Alert</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }\n        .container { max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; }\n        .logo { text-align: center; margin-bottom: 20px; }\n        .logo img { width: 150px; height: auto; }\n        .header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }\n        .content-section { margin-bottom: 20px; }\n        .button-container { text-align: center; margin-top: 20px; }\n        .button { display: inline-block; padding: 10px 20px; background-color: #0070ba; color: white; text-decoration: none; border-radius: 5px; }\n        .footer { margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee; font-size: 0.8em; color: #777; }\n        .highlight { color: red; font-weight: bold; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"logo\">\n            <img src=\"https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png\" alt=\"PayPal Logo\">\n        </div>\n        <div class=\"header\">\n            <h2>Security Alert</h2>\n        </div>\n        <div class=\"content-section\">\n            <p>Dear Customer,</p>\n            <p>We have detected unusual activity on your PayPal account. For your security, we have temporarily limited access to some of your account features. </p>\n            <p><highlight>To restore full access, you must verify your account immediately.</highlight> This is a precautionary measure to protect you from unauthorised transactions.</p>\n            <p>Failure to verify your account within 24 hours may result in permanent account suspension.</p>\n            <p>Please click on the button below to begin the verification process:</p>\n        </div>\n        <div class=\"button-container\">\n            <p><a href=\"https://www.pay-pal.com/paypal/login\" class=\"button\">Verify My Account Now</a><p>\n        </div>\n        <div class=\"footer\">\n            <p>This is an automated message. Please do not reply to this email.</p>\n            <p>\u00a9 1999-2024 PayPal. All rights reserved.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "Urgent Security Alert: Verify Your PayPal Account Immediately",
          "explanation": "Phishing emails often use urgent language in the subject line to create a sense of panic and prompt immediate action without thinking."
        },
        {
          "text": "To restore full access, you must verify your account immediately.",
          "explanation": "This is a tactic to pressure you into clicking the link and providing information quickly. Legitimate services rarely demand 'immediate' action in such a threatening way."
        },
        {
          "explanation": "The link looks suspicious and does not direct to the official PayPal website. Always hover over links and check the domain before clicking."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Suspicious link",
      "Threatening language"
    ],
    "malicious": true,
    "tipsForImprovement": "Always check the sender's email address carefully. Verify the URL of any links before clicking, ensuring it is the official PayPal website (paypal.com). Access your PayPal account directly through the official website or app instead of clicking links in emails. Be wary of emails that create a sense of urgency or threaten account suspension.",
    "explanationSummary": "This is a phishing email designed to scare users into clicking a malicious link and potentially entering their PayPal login credentials on a fake website. The attacker uses urgent language and threats to pressure the recipient into immediate action."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "LinkedIn Notifications <linkedin-updates@connect-mail.net>",
      "subject": "William has sent you an invitation to connect on LinkedIn",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>LinkedIn Connection Request</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            color: #333333;\n        }\n        .email-container {\n            width: 100%;\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n            border: 1px solid #dddddd;\n        }\n        .header {\n            text-align: center;\n            padding-bottom: 20px;\n            border-bottom: 1px solid #eeeeee;\n        }\n        .content-section {\n            padding: 20px 0;\n        }\n        .button {\n            display: inline-block;\n            padding: 10px 20px;\n            background-color: #007bff;\n            color: white;\n            text-decoration: none;\n            border-radius: 5px;\n        }\n        .footer {\n            margin-top: 20px;\n            padding-top: 20px;\n            border-top: 1px solid #eeeeee;\n            text-align: center;\n            font-size: 0.8em;\n            color: #777777;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"email-container\">\n        <div class=\"header\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png\" alt=\"LinkedIn Logo\" style=\"width: 120px; height: auto;\">\n        </div>\n        <div class=\"content-section\">\n            <p>Hello,</p>\n            <p>William Smith has invited you to connect on LinkedIn.</p>\n            <p>William is a Recruitment Manager at Tech Solutions Ltd.</p>\n            <p>Would you like to accept William's invitation?</p>\n            <p style=\"text-align: center;\">\n                <a href=\"http://Iinkedin.com/linkedin-connect/verify?id=174481924\" class=\"button\">View invitation</a><br><br>\n                If the button above doesn't work, copy and paste the following link into your browser:<br>\n                <a href=\"http://Iinkedin.com/linkedin-connect/verify?id=174481924\">http://Iinkedin.com/linkedin-connect/verify?id=174481924</a>\n            </p>\n        </div>\n        <div class=\"footer\">\n            <p>This email was sent by LinkedIn Notifications. LinkedIn, Willow Road, Menlo Park, CA 94025.</p>\n            <p><a href=\"#\">Unsubscribe</a> | <a href=\"#\">Privacy Policy</a></p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "explanation": "Legitimate emails from LinkedIn usually come from domains like 'linkedin.com'. The domain 'connect-mail.net' is unusual and suspicious."
        },
        {
            "explanation": "The link provided does not direct to the official LinkedIn website. The \"L\" in \"Linkedin\" is a capital \"i\"! Always check the domain of links in emails, especially when they ask for personal information or logins."
        }
      ]
    },
    "redFlags": [
      "Unusual sender domain",
      "Suspicious link",
      "Generic greeting"
    ],
    "malicious": true,
    "tipsForImprovement": "Always check the sender's email address and the domain. Hover over links without clicking to preview the URL and ensure it directs to the legitimate website. Be wary of generic greetings and unsolicited connection requests from unknown senders containing links.",
    "explanationSummary": "This is a phishing email disguised as a LinkedIn connection request. The goal is to trick you into clicking on a malicious link that could lead to a fake login page to steal your credentials or install malware. The sender domain and link URL are the key red flags here."
  },
  {
    "category": "Legitimate Email",
    "content": {
      "sender": "donations@wateraid.org",
      "subject": "Thank you for your donation to WaterAid",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WaterAid Donation Receipt</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 20px;\n            line-height: 1.6;\n            color: #333;\n        }\n        .container {\n            max-width: 600px;\n            margin: 20px auto;\n            padding: 30px;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n        }\n        .header {\n            text-align: center;\n            margin-bottom: 30px;\n        }\n        .header img {\n            width: 120px;\n            height: auto;\n        }\n        .receipt-details {\n            margin-bottom: 20px;\n            border-bottom: 1px solid #eee;\n            padding-bottom: 20px;\n        }\n        .detail-row {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 8px;\n        }\n        .detail-label {\n            font-weight: bold;\n        }\n        .donation-message {\n            margin-top: 30px;\n            font-style: italic;\n            color: #555;\n        }\n        .footer {\n            margin-top: 40px;\n            text-align: center;\n            color: #777;\n            font-size: 12px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <img src=\"https://www.hydrosolutions.co.uk/app/uploads/2021/12/WaterAid-Tertiary-LRG-Logo_RGB.png\" alt=\"WaterAid Logo\">\n            <h2>Donation Receipt</h2>\n        </div>\n\n        <div class=\"receipt-details\">\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Receipt Number:</span>\n                <span>WA-2023-DON-78945</span>\n            </div>\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Donation Date:</span>\n                <span>24 October 2023</span>\n            </div>\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Donation Amount:</span>\n                <span>\u00a325.00</span>\n            </div>\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Payment Method:</span>\n                <span>Visa **** **** **** 1234</span>\n            </div>\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Donor Name:</span>\n                <span>Bobby Moore</span>\n            </div>\n            <div class=\"detail-row\">\n                <span class=\"detail-label\">Donor Email:</span>\n                <span>bobby.moore@emailprovider.co.uk</span>\n            </div>\n        </div>\n\n        <p class=\"donation-message\">Thank you, Bobby, for your generous donation to WaterAid. Your support helps us bring clean water, decent toilets and good hygiene to everyone, everywhere.</p>\n\n        <div class=\"footer\">\n            <p>WaterAid UK, Registered Charity No. 288701 (England and Wales) and SC039479 (Scotland).</p>\n            <p>For any queries, please contact us at <a href=\"mailto:supportercare@wateraid.org\" style=\"color: #007bff; text-decoration: none;\">supportercare@wateraid.org</a> or call us on 020 7793 4594.</p>\n            <p><a href=\"https://www.wateraid.org/uk/privacy-policy\" style=\"color: #007bff; text-decoration: none;\">Privacy Policy</a> | <a href=\"https://www.wateraid.org/uk\" style=\"color: #007bff; text-decoration: none;\">Visit our website</a></p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": []
    },
    "redFlags": [],
    "malicious": false,
    "tipsForImprovement": "Legitimate donation receipts are important for your records and for tax purposes if applicable. Verify that the sender email address and the organisation details match the charity you donated to. Check for contact information and privacy policies in the email footer.",
    "explanationSummary": "This is a legitimate donation receipt from WaterAid, confirming a donation. It includes typical receipt details such as donation amount, date, payment method, and charity information, along with contact details and links to their website."
  },
  {
    "category": "Legitimate Email",
    "content": {
      "sender": "reservations@grandlondonhotel.co.uk",
      "subject": "Your Reservation Confirmation for Grand London Hotel - Booking Ref: GLH47829",
      "body": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Reservation Confirmation</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            color: #333;\n        }\n        .container {\n            max-width: 600px;\n            margin: 20px auto;\n            padding: 20px;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n        }\n        .header {\n            text-align: center;\n            padding-bottom: 20px;\n            border-bottom: 1px solid #eee;\n        }\n        .logo {\n            margin-bottom: 10px;\n        }\n        .details-table {\n            width: 100%;\n            border-collapse: collapse;\n            margin-top: 20px;\n        }\n        .details-table th, .details-table td {\n            padding: 8px;\n            border-bottom: 1px solid #eee;\n            text-align: left;\n        }\n        .footer {\n            margin-top: 30px;\n            padding-top: 20px;\n            border-top: 1px solid #eee;\n            text-align: center;\n            color: #777;\n            font-size: 0.9em;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <div class=\"logo\">\n                <img src=\"https://londonhotel.bg/wp-content/uploads/2017/04/Untitled-1-1.png\" alt=\"Grand London Hotel Logo\" style=\"width: 150px; height: auto;\">\n            </div>\n            <h2>Reservation Confirmation</h2>\n        </div>\n        <p>Dear Mr. Greg Brenton,</p>\n        <p>Thank you for choosing Grand London Hotel. This email confirms your reservation details as follows:</p>\n\n        <table class=\"details-table\">\n            <tr>\n                <th>Booking Reference:</th>\n                <td>GLH47829</td>\n            </tr>\n            <tr>\n                <th>Guest Name:</th>\n                <td>Greg Brenton</td>\n            </tr>\n            <tr>\n                <th>Check-in Date:</th>\n                <td>14th November 2024</td>\n            </tr>\n            <tr>\n                <th>Check-out Date:</th>\n                <td>17th November 2024</td>\n            </tr>\n            <tr>\n                <th>Room Type:</th>\n                <td>Deluxe Double Room</td>\n            </tr>\n            <tr>\n                <th>Number of Guests:</th>\n                <td>2</td>\n            </tr>\n            <tr>\n                <th>Total Price:</th>\n                <td>\u00a3450.00</td>\n            </tr>\n        </table>\n\n        <p>We look forward to welcoming you to Grand London Hotel. Should you have any questions or require any amendments to your booking, please do not hesitate to contact us by replying to this email or calling us on 020 7946 0000.</p>\n\n        <div class=\"footer\">\n            <p>Grand London Hotel, 15 Great Russell Street, London, WC1B 3NN, United Kingdom</p>\n            <p>Phone: 020 7946 0000 | Email: reservations@grandlondonhotel.co.uk | Website: www.grandlondonhotel.co.uk</p>\n            <p>&copy; 2024 Grand London Hotel. All rights reserved.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": []
    },
    "redFlags": [],
    "malicious": false,
    "tipsForImprovement": "This is a legitimate email. Legitimate confirmation emails will contain clear booking details, contact information for the hotel, and secure links (if any links are present). Always verify the sender's email address and look for professional formatting and branding.",
    "explanationSummary": "This is a standard hotel reservation confirmation email providing booking details and hotel contact information. It does not exhibit any characteristics of a phishing email."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "Amazon Delivery Team <notification@amazon-delivery-updates.net>",
      "subject": "Amazon: Action Required - Your Package Delivery Attempt Failed",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Amazon Delivery Notification</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }\n        .container { max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; }\n        .logo { text-align: center; margin-bottom: 20px; }\n        .logo img { width: 120px; height: auto; }\n        .content-section { margin-bottom: 20px; }\n        .button-container { text-align: center; margin-top: 20px; }\n        .button { display: inline-block; padding: 10px 20px; background-color: #ff9900; color: black; text-decoration: none; border-radius: 5px; font-weight: bold; }\n        .footer { margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee; font-size: 0.8em; color: #777; }\n        .highlight { color: red; font-weight: bold; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"logo\">\n            <img src=\"https://ci3.googleusercontent.com/meips/ADKq_NZ5d8D9cIvfDhErLJoBegNPPGq4ZT6leloFzNzpghkd8ey3272mD4nI_cUxbluPirbLn24e1DHXM7dRZMHgcD2IFyL3ARGFGQXTai-iT7JF8OtibiFkxBcJpN0AY23_SKkWN1INXIOSiaf0V8aKKPvOop7Egjtfx_fJfRyPr95D=s0-d-e1-ft#https://m.media-amazon.com/images/G/01/outbound/OutboundTemplates/Amazon_logo_UK_Light._BG255,255,255_.png\" alt=\"Amazon Logo\">\n        </div>\n        <div class=\"content-section\">\n            <p>Dear Customer,</p>\n            <p>We attempted to deliver your Amazon package today, but unfortunately, the delivery failed because <highlight>an incorrect address was provided.</highlight></p>\n            <p>To reschedule your delivery, please confirm your address details and pay a small redelivery fee of \u00a31.50. This fee covers the additional delivery attempt.</p>\n            <p>Please click the button below to update your address and pay the redelivery fee:</p>\n        </div>\n        <div class=\"button-container\">\n            <a href=\"http://amazone.com/amazon/redelivery\" class=\"button\">Reschedule Delivery</a>\n        </div>\n        <div class=\"content-section\">\n            <p>Thank you for your understanding.</p>\n            <p>Sincerely,</p>\n            <p>The Amazon Delivery Team</p>\n        </div>\n        <div class=\"footer\">\n            <p>Please note: This is an automated notification. Replies to this email will not be monitored.</p>\n            <p>\u00a9 1996-2024, Amazon.com, Inc. or its affiliates.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "an incorrect address was provided.",
          "explanation": "This vague reason for delivery failure, especially when coupled with a request for a fee, is often a tactic used in phishing emails. Legitimate delivery services usually provide more specific details."
        },
        {
          "explanation": "The link domain 'amazone.com' is not the official Amazon domain. Always verify the link before clicking and ensure it starts with 'amazon.co.uk' or 'amazon.com'."
        },
        {
          "text": "pay a small redelivery fee of \u00a31.50",
          "explanation": "Legitimate delivery services rarely ask for small redelivery fees via email, especially for address issues. This is a common trick in phishing scams to extract small amounts of money and potentially card details."
        }
      ]
    },
    "redFlags": [
      "Suspicious link",
      "Unusual sender domain",
      "Request for personal information"
    ],
    "malicious": true,
    "tipsForImprovement": "Check the sender's email address and domain. Do not click on links in emails regarding deliveries. Instead, go directly to the Amazon website or app to check your order status. Be suspicious of requests for small fees to reschedule deliveries, especially via email links.",
    "explanationSummary": "This is a phishing email attempting to trick users into clicking a malicious link and potentially providing payment information by claiming a failed package delivery and requesting a redelivery fee. The attacker uses a fake sender address and a non-official domain for the link to deceive the recipient."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "Apple Security <apple-security-alert@mailservice.net>",
      "subject": "<highlight>Urgent Security Alert:</highlight> Your iCloud Account Has Been Suspended",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Apple iCloud Security Alert</title>\n    <style>\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n            line-height: 1.5;\n            color: #222;\n        }\n        .container {\n            max-width: 600px;\n            margin: 20px auto;\n            padding: 20px;\n            border: 1px solid #e0e0e0;\n            border-radius: 8px;\n        }\n        .header {\n            text-align: center;\n            padding-bottom: 20px;\n            border-bottom: 1px solid #e0e0e0;\n        }\n        .logo {\n            margin-bottom: 15px;\n        }\n        .content-body {\n            padding-top: 20px;\n        }\n        .button-container {\n            text-align: center;\n            margin-top: 25px;\n        }\n        .button {\n            display: inline-block;\n            padding: 12px 24px;\n            background-color: #007bff;\n            color: white;\n            text-decoration: none;\n            border-radius: 8px;\n            font-weight: 600;\n        }\n        .footer {\n            margin-top: 30px;\n            padding-top: 20px;\n            border-top: 1px solid #e0e0e0;\n            font-size: 0.85em;\n            color: #555;\n            text-align: center;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <div class=\"logo\">\n                <img src=\"data:image/png;base64,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\" alt=\"Apple Logo\" style=\"height: 50px;\">\n            </div>\n            <h2>iCloud Security Alert</h2>\n        </div>\n        <div class=\"content-body\">\n            <p>Dear Valued Customer,</p>\n            <p>We have detected <highlight>unusual login activity</highlight> on your iCloud account from an unrecognised device in London. For your security, your iCloud account has been temporarily suspended.</p>\n            <p>To restore your account access and ensure uninterrupted service, please <highlight>verify your identity immediately</highlight>.</p>\n            <div class=\"button-container\">\n                <a href=\"https://www.icioud.com/apple-icloud-login\" class=\"button\">Verify Your Account Now</a>\n            </div>\n            <p style=\"margin-top: 20px;\">If you do not verify your account within 24 hours, your account may be permanently closed to protect your data.</p>\n        </div>\n        <div class=\"footer\">\n            <p>\u00a9 2023 Apple Inc. All rights reserved.</p>\n            <p>For support, please visit <a href=\"https://www.apple.com/uk/support/\">Apple Support</a>.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "Urgent Security Alert:",
          "explanation": "The subject line uses overly urgent language ('Urgent Security Alert:') to create a sense of panic and encourage immediate action without careful consideration."
        },
        {
          "text": "unusual login activity",
          "explanation": "Vague and generic phrasing like 'unusual login activity' is often used in phishing emails. Legitimate security alerts are usually more specific about the nature of the unusual activity."
        },
        {
          "text": "verify your identity immediately",
          "explanation": "The email demands immediate verification of identity and threatens account closure within 24 hours, creating pressure and fear, which are common tactics in phishing attempts."
        },
        {
          "explanation": "The sender email address, while including 'apple-security-alert', uses a generic domain '@mailservice.net' instead of the official Apple domain '@apple.com'. This discrepancy is a strong indicator of a phishing attempt."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Unusual sender domain",
      "Threatening language"
    ],
    "malicious": true,
    "tipsForImprovement": "Be suspicious of emails with urgent requests, especially those threatening account suspension or closure. Always check the sender's email address domain and be wary of generic greetings. Never click on links in suspicious emails; instead, navigate directly to the official Apple website to check your account status.",
    "explanationSummary": "This is a phishing email designed to scare users into clicking a malicious link by claiming their iCloud account has been suspended due to suspicious activity. The attacker's goal is to steal Apple ID credentials by directing users to a fake login page that looks like the real Apple login."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "drive-notification.security@googledrive.net",
      "subject": "Document Shared with You: Important Security Update",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document Shared</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 20px;\n            color: #333;\n        }\n        .container {\n            max-width: 600px;\n            margin: auto;\n            border: 1px solid #ddd;\n            padding: 20px;\n        }\n        .header {\n            text-align: center;\n            padding-bottom: 20px;\n            border-bottom: 1px solid #eee;\n        }\n        .content-body {\n            padding-top: 20px;\n        }\n        .button {\n            display: inline-block;\n            padding: 10px 20px;\n            background-color: #4CAF50;\n            color: white;\n            text-decoration: none;\n            border-radius: 5px;\n        }\n        .footer {\n            margin-top: 20px;\n            padding-top: 10px;\n            border-top: 1px solid #eee;\n            font-size: 0.8em;\n            color: #777;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <img src=\"https://logos-world.net/wp-content/uploads/2020/11/Google-Drive-Emblem.png\" alt=\"Google Drive Logo\" style=\"width: 120px; height: auto;\">\n            <h2>Document Shared with You</h2>\n        </div>\n        <div class=\"content-body\">\n            <p>Dear User,</p>\n            <p>A document has been shared with you via Google Drive for your review and immediate action. Due to recent security protocols, we require you to verify your access to ensure the safety of our shared documents. </p>\n            <p>Document Name: <strong>Security_Protocol_Update_2024.docx</strong></p>\n            <p>Shared by: security.admin@organisation-updates.com</p>\n            <p>To access the document and verify your account, please click the link below:</p>\n            <p><a href=\"http://suspicious-link.verify-drive-access.uk/document/view\" class=\"button\">Review Document</a></p>\n            <p><highlight>Please complete this verification within 24 hours to avoid any disruption to your document access.</highlight></p>\n        </div>\n        <div class=\"footer\">\n            <p>This is an automated notification from Google Drive Security Services. Please do not reply to this email.</p>\n            <p>&copy; 2024 Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "Please complete this verification within 24 hours to avoid any disruption to your document access.",
          "explanation": "The urgent language, especially the 24-hour deadline, is a tactic to pressure you into clicking without thinking. Legitimate security notifications are rarely this urgent."
        },
        {
          "explanation": "The link looks suspicious. Real Google Drive links start with 'drive.google.com'. The domain 'verify-drive-access.uk' is not a legitimate Google domain and suggests a phishing attempt."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Suspicious link",
      "Unusual sender domain"
    ],
    "malicious": true,
    "tipsForImprovement": "Always check the sender's email address and the URL of links carefully. Verify the legitimacy of urgent requests through official channels, not just by clicking on email links. Go directly to Google Drive website instead of clicking email links to check shared documents.",
    "explanationSummary": "This is a phishing email attempting to trick you into clicking a malicious link under the guise of a Google Drive document sharing notification. The goal is likely to download malware onto your computer when you click the link."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "microsoft-account-security@office365-reset.net",
      "subject": "Action Required: Microsoft Account Password Reset Requested",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Microsoft Account Security Alert</title>\n    <style>\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            margin: 0;\n            padding: 20px;\n            color: #252525;\n            background-color: #f4f4f4;\n        }\n        .container {\n            max-width: 650px;\n            margin: 20px auto;\n            background-color: #fff;\n            padding: 30px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.05);\n        }\n        .header {\n            text-align: center;\n            margin-bottom: 30px;\n        }\n        .header img {\n            width: 180px;\n            height: auto;\n        }\n        .content-body p {\n            line-height: 1.6;\n            margin-bottom: 15px;\n        }\n        .button-container {\n            text-align: center;\n            margin-top: 25px;\n        }\n        .button {\n            display: inline-block;\n            padding: 12px 25px;\n            background-color: #0078d4;\n            color: white;\n            text-decoration: none;\n            border-radius: 5px;\n            font-weight: bold;\n        }\n        .footer {\n            margin-top: 40px;\n            padding-top: 20px;\n            border-top: 1px solid #e0e0e0;\n            font-size: 0.9em;\n            color: #777;\n        }\n        .alert {\n            background-color: #fff3cd;\n            color: #85640a;\n            padding: 15px;\n            border: 1px solid #ffeeba;\n            border-radius: 5px;\n            margin-bottom: 20px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <img src=\"https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png\" alt=\"Microsoft Logo\">\n        </div>\n        <div class=\"content-body\">\n            <div class=\"alert\">\n                <p><strong>Security Alert: Password Reset Request</strong></p>\n            </div>\n            <p>Dear Microsoft Account User,</p>\n            <p>We have received a request to reset the password for your Microsoft account. If you did not initiate this password reset, <highlight>please click the link below immediately to cancel this request and secure your account.</highlight></p>\n            <p>To proceed with the password reset, or to cancel if you did not request it, please click here:</p>\n            <div class=\"button-container\">\n                <a href=\"http://microsoft.office-security-update.com/reset/confirm\" class=\"button\">Reset Password / Secure Account</a>\n            </div>\n            <p>This request will expire in 2 hours for security reasons. <highlight>Failure to act within this timeframe may result in temporary account suspension.</highlight></p>\n        </div>\n        <div class=\"footer\">\n            <p>Thank you for helping us keep your Microsoft account secure.</p>\n            <p>Microsoft Account Security Team</p>\n            <p>&copy; 2024 Microsoft. All rights reserved.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "please click the link below immediately to cancel this request and secure your account.",
          "explanation": "The phrase 'click the link below immediately' is a classic phishing tactic to create a sense of urgency and panic, pushing you to act without thinking critically."
        },
        {
          "text": "Failure to act within this timeframe may result in temporary account suspension.",
          "explanation": "Threatening language, such as account suspension, is used to scare you into complying with the email's instructions and clicking the link without verifying its legitimacy."
        },
        {
          "explanation": "The domain 'office-security-update.com' is not a legitimate Microsoft domain. Real Microsoft links for account management usually start with 'microsoft.com' or 'account.microsoft.com'. This suspicious domain indicates a phishing site."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Threatening language",
      "Suspicious link",
      "Generic greeting"
    ],
    "malicious": true,
    "tipsForImprovement": "Never click on password reset links in emails, especially if they create a sense of urgency or threat. Always go directly to the official website of the service (e.g., Microsoft.com) and initiate a password reset from there if you need to. Check the sender's email address and link URLs for inconsistencies and unusual domains.",
    "explanationSummary": "This is a password reset phishing email designed to steal your Microsoft account credentials. It uses urgent and threatening language to pressure you into clicking a malicious link that leads to a fake login page where your username and password can be stolen."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "Netflix <billing-dept@update-netflix-info.com>",
      "subject": "Action Required: Your Netflix Membership is On Hold Due to Billing Issues",
      "body": "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Netflix - Membership On Hold</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            color: #333;\n        }\n        .container {\n            max-width: 600px;\n            margin: 20px auto;\n            padding: 20px;\n            border: 1px solid #ddd;\n        }\n        .logo {\n            text-align: center;\n            margin-bottom: 20px;\n        }\n        .logo img {\n            width: 120px;\n            height: auto;\n        }\n        .button {\n            display: inline-block;\n            padding: 10px 20px;\n            background-color: #e50914;\n            color: white;\n            text-decoration: none;\n            border-radius: 5px;\n        }\n        .footer {\n            margin-top: 20px;\n            padding-top: 10px;\n            border-top: 1px solid #eee;\n            font-size: 0.8em;\n            color: #777;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"logo\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png\" alt=\"Netflix Logo\">\n        </div>\n        <h2><highlight>Your Netflix Membership is On Hold</highlight></h2>\n        <p>Dear Rachel,</p>\n        <p>We are writing to inform you that your Netflix membership is currently on hold because we were unable to validate your billing information for your next payment.</p>\n        <p>To continue enjoying uninterrupted access to Netflix, please <highlight>update your payment details</highlight> immediately. If we do not receive updated information within 48 hours, your membership will be cancelled.</p>\n        <p>Please click on the button below to update your payment information:</p>\n        <p><a href=\"http://netflix-update.com/billing\" class=\"button\">Update Payment Information</a></p>\n        <p>Thank you for your cooperation.</p>\n        <div class=\"footer\">\n            <p>Sincerely,</p>\n            <p>The Netflix Customer Support Team</p>\n            <p>This is an automated email, please do not reply.</p>\n        </div>\n    </div>\n</body>\n</html>",
      "highlightTags": [
        {
          "text": "Your Netflix Membership is On Hold",
          "explanation": "This subject line uses alarming language to make you worried about losing access to your service, prompting quick action."
        },
        {
          "text": "update your payment details",
          "explanation": "Requests to update payment details via a link in an email are often a sign of phishing, especially when coupled with urgent language."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Suspicious link",
      "Request for personal information"
    ],
    "malicious": true,
    "tipsForImprovement": "If you receive an email about billing issues from Netflix, do not click on any links. Instead, go directly to the official Netflix website by typing it into your browser and log in to your account to check your billing information. Legitimate companies will usually direct you to their official website, not through email links.",
    "explanationSummary": "This is a phishing email attempting to trick you into clicking a link and providing your payment information on a fake Netflix page. The attacker uses the threat of service interruption to pressure you into acting without verifying the email's legitimacy."
  },
  {
    "category": "Email Phishing",
    "content": {
      "sender": "IRS Refund Department <refunds@irs-notice.net>",
      "subject": "Your Tax Refund is Ready for Processing - Action Required",
      "body": "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; padding: 20px;\">\n  <div style=\"text-align: center; margin-bottom: 20px;\">\n    <img src=\"https://logos-world.net/wp-content/uploads/2021/02/IRS-Logo.png\" alt=\"IRS Logo\" style=\"width: 100px; height: auto;\">\n  </div>\n  <p style=\"font-size: 16px;\">Dear Taxpayer,</p>\n  <p style=\"font-size: 16px;\">We are writing to inform you that after the recent annual calculation, you are eligible to receive a tax refund of \u00a3785.42 from the Internal Revenue Service (IRS).</p>\n  <p style=\"font-size: 16px;\">To process your refund, we require you to verify your banking details. Please <highlight>click on the link below to securely update your information</highlight> and ensure prompt processing of your refund.</p>\n  <p style=\"font-size: 16px; text-align: center; margin-top: 20px;\"><a href=\"http://irs-refund-portal.verify-now.uk/\" style=\"display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;\">Verify Your Details & Claim Refund Now</a></p>\n  <p style=\"font-size: 16px; margin-top: 20px;\">Please complete this verification within 48 hours to avoid any delays in receiving your refund. <highlight>Failure to verify within this timeframe may result in your refund being put on hold</highlight>.</p>\n  <p style=\"font-size: 16px; margin-top: 20px;\">Thank you for your prompt attention to this matter.</p>\n  <div style=\"margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px; font-size: 12px; color: #777;\">\n    <p>Sincerely,</p>\n    <p>The Internal Revenue Service (IRS) Refund Department</p>\n    <p>This is an automated message. Please do not reply.</p>\n  </div>\n</div>",
      "highlightTags": [
        {
          "text": "click on the link below to securely update your information",
          "explanation": "Phishing emails often use generic phrases like 'click here' to direct you to malicious websites. Legitimate organisations usually provide more specific instructions or direct you to their official website."
        },
        {
          "text": "Failure to verify within this timeframe may result in your refund being put on hold",
          "explanation": "Urgent language and threats of negative consequences are common tactics in phishing emails to pressure you into acting quickly without thinking."
        }
      ]
    },
    "redFlags": [
      "Urgent language",
      "Suspicious link"
    ],
    "malicious": true,
    "tipsForImprovement": "Always be suspicious of unsolicited emails promising refunds, especially from tax authorities. Never click on links in such emails. Instead, go directly to the official IRS website (or your country's tax authority) by typing the address into your browser to check for any legitimate notifications or refunds. Verify the sender's email address \u2013 official IRS emails will come from domains ending in '.gov', not generic domains like '.net' or '.uk'.",
    "explanationSummary": "This is a phishing email designed to trick you into clicking a malicious link and providing personal or financial information under the guise of claiming a tax refund. The attacker uses urgency and impersonates the IRS to pressure you into acting without verifying the email's authenticity."
  }
]
