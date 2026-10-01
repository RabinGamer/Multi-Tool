import type { Tool } from '@/lib/types';

export const tools: Tool[] = [
  {
    slug: 'word-counter',
    name: 'Word Counter',
    category: 'text',
    icon: 'AlignLeft',
    shortDescription:
      'Count words, characters, sentences, paragraphs and reading time in real time - free, instant and private.',
    longDescription: [
      'ToolMint Word Counter analyzes your text as you type and shows a complete live breakdown: words, characters with and without spaces, sentences, paragraphs, and estimated reading time. Writers, students, journalists and marketers use it to hit strict limits for essays, blog posts, ad copy, assignments and social captions without guesswork.',
      'Everything runs locally in your browser. Your text is never uploaded, never stored and never seen by anyone but you, which makes the tool safe for confidential drafts and unpublished work.',
    ],
    howToSteps: [
      'Paste or type your text into the box.',
      'Watch every statistic update live as you write.',
      'Copy any figure you need or clear the box to start over.',
    ],
    faqs: [
      {
        question: 'Is there a limit on how much text I can count?',
        answer:
          'No hard limit is imposed by the tool. The counter processes text entirely in your browser, so very large documents stay fast, though extremely long novels may take a moment to update.',
      },
      {
        question: 'Does the word counter save or upload my text?',
        answer:
          'No. All analysis happens on your device. Nothing is sent to a server, logged, or stored, and closing the tab erases everything.',
      },
      {
        question: 'How is reading time calculated?',
        answer:
          'Reading time is estimated from an average adult reading speed of about 225 words per minute. Writing and speaking time use separate standard speeds.',
      },
    ],
    related: ['character-counter', 'case-converter', 'remove-line-breaks', 'lorem-ipsum-generator', 'text-to-slug'],
    keywords: ['word counter', 'word count', 'count words online', 'free word counter', 'reading time calculator'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'character-counter',
    name: 'Character Counter',
    category: 'text',
    icon: 'CaseSensitive',
    shortDescription:
      'Count characters with and without spaces instantly, with live limit meters for X posts, SMS and meta tags.',
    longDescription: [
      'Character Counter gives you a live count of characters with and without spaces, plus words, sentences and line counts. Built-in limit meters show how close you are to the most common platform limits - 280 characters for X posts, 160 for a single SMS, 60 for a meta title and 155 for a meta description - so your content never gets silently truncated.',
      'Whether you are tightening an ad headline, fitting a product description into a marketplace field or checking an essay requirement, the counters update on every keystroke and never send your text anywhere.',
    ],
    howToSteps: [
      'Type or paste your text into the input.',
      'Check the live character counts and platform limit meters.',
      'Edit your text until every limit meter turns green.',
    ],
    faqs: [
      {
        question: 'How many characters can an X (Twitter) post have?',
        answer:
          '280 characters for standard accounts. The limit meter shows exactly how much room you have left as you type.',
      },
      {
        question: 'What are the meta title and meta description limits for SEO?',
        answer:
          'Google typically displays about 60 characters of a title and 155 characters of a description. The meters let you verify both at a glance.',
      },
      {
        question: 'Do spaces count as characters?',
        answer:
          'Both counts are shown side by side: with spaces and without spaces, so you can match whichever convention your platform requires.',
      },
    ],
    related: ['word-counter', 'case-converter', 'text-to-slug', 'remove-line-breaks'],
    keywords: ['character counter', 'character count', 'letter counter', 'tweet character counter'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    category: 'text',
    icon: 'CaseSensitive',
    shortDescription:
      'Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case and more.',
    longDescription: [
      'Case Converter switches your text between nine conventions in one click: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case and aLtErNaTiNg case. Developers use it to normalize variable names and file names; writers and editors use it to fix headings, subtitles and paragraphs that arrived typed in the wrong case.',
      'The conversion runs instantly on any amount of text, respects unicode characters and accents, and works line by line, so lists and multi-line snippets keep their structure.',
    ],
    howToSteps: [
      'Paste the text you want to convert.',
      'Pick the target case from the options.',
      'Copy the converted output or download it as a text file.',
    ],
    faqs: [
      {
        question: 'What is the difference between Title Case and Sentence case?',
        answer:
          'Title Case Capitalizes The First Letter Of Every Word, while Sentence case only capitalizes the first letter of each sentence.',
      },
      {
        question: 'When should I use kebab-case or snake_case?',
        answer:
          'kebab-case is the convention for URLs and CSS classes, while snake_case is common in Python, SQL and environment variables. Both are one click away.',
      },
      {
        question: 'Does the converter change anything else in my text?',
        answer:
          'No. Only letter casing changes - punctuation, line breaks and unicode characters are preserved exactly as they were.',
      },
    ],
    related: ['word-counter', 'text-to-slug', 'remove-line-breaks', 'character-counter'],
    keywords: ['case converter', 'uppercase to lowercase', 'title case', 'camelcase converter', 'snake case'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    category: 'text',
    icon: 'AlignLeft',
    shortDescription:
      'Generate Lorem Ipsum placeholder text by paragraphs, sentences or words for designs, mockups and wireframes.',
    longDescription: [
      'Lorem Ipsum has been the printing industry standard dummy text since the 1500s, and it is still the designer go-to: neutral, naturally paced Latin-like words that let viewers judge layout and typography without stopping to read actual content. This generator produces clean filler text in the exact quantity you need.',
      'Choose whether you want a number of paragraphs, sentences or single words, hit generate, and copy the result straight into your design, CMS mockup, or template.',
    ],
    howToSteps: [
      'Choose whether to generate by paragraphs, sentences or words.',
      'Set the quantity you need.',
      'Generate and copy the placeholder text into your design.',
    ],
    faqs: [
      {
        question: 'What is Lorem Ipsum and where did it come from?',
        answer:
          'It is scrambled Latin from a classical text by Cicero, de Finibus Bonorum et Malorum, used by typesetters since the 16th century as neutral placeholder copy.',
      },
      {
        question: 'Why not just use text like "content here"?',
        answer:
          'Repetitive filler words are distracting and do not mimic natural reading rhythm. Lorem Ipsum has a realistic distribution of word lengths, so layouts look believable.',
      },
      {
        question: 'Can I generate a specific length of text?',
        answer:
          'Yes. Generate by paragraphs for long layouts, by sentences for components and cards, or by exact word count when a spec demands it.',
      },
    ],
    related: ['word-counter', 'character-counter', 'case-converter'],
    keywords: ['lorem ipsum generator', 'dummy text', 'placeholder text', 'filler text generator'],
    priority: 'P0',
    popular: false,
    status: 'live',
  },
  {
    slug: 'remove-line-breaks',
    name: 'Remove Line Breaks',
    category: 'text',
    icon: 'WrapText',
    shortDescription:
      'Strip unwanted line breaks from text copied out of PDFs and emails while keeping paragraph structure intact.',
    longDescription: [
      'Text copied from PDFs, emails, terminals and code editors often arrives with hard line breaks in the middle of every sentence, which makes it unusable in documents and CMS editors. Remove Line Breaks joins those fragments back into flowing paragraphs in a single click.',
      'With the paragraph option enabled, blank lines between paragraphs are preserved as real boundaries, while single stray breaks are merged away. The result is clean, continuously readable text ready to publish.',
    ],
    howToSteps: [
      'Paste the broken text copied from your PDF or email.',
      'Keep or disable the preserve-paragraphs option as needed.',
      'Copy the clean, merged text.',
    ],
    faqs: [
      {
        question: 'Will this remove my paragraph breaks too?',
        answer:
          'No. When the preserve-paragraphs option is on, only single line breaks are merged; blank lines that separate real paragraphs are kept.',
      },
      {
        question: 'Does it work with bulleted lists?',
        answer:
          'Yes, but bullets on their own lines are treated as new lines. For lists, disable paragraph preservation so every item stays on its own line.',
      },
      {
        question: 'Is my text safe?',
        answer:
          'Completely. The text is processed in your browser only and is never uploaded or stored.',
      },
    ],
    related: ['case-converter', 'word-counter', 'text-to-slug', 'character-counter'],
    keywords: ['remove line breaks', 'strip line breaks', 'join lines', 'pdf text to paragraph'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
  {
    slug: 'text-to-slug',
    name: 'Text to Slug Converter',
    category: 'text',
    icon: 'Link',
    shortDescription:
      'Turn any title into a clean, SEO-friendly URL slug - accents, symbols and spaces handled automatically.',
    longDescription: [
      'Good URLs are lowercase, hyphenated and free of accents and special characters. Text to Slug converts any headline into exactly that: it strips diacritics so cafe stays cafe, drops symbols, replaces separators with single hyphens and trims the edges - producing a slug that is safe, readable and friendly to both users and search engines.',
      'Multi-line input is supported, so you can paste an entire list of titles and get a matching list of slugs in one pass - handy for CMS migrations and bulk page creation.',
    ],
    howToSteps: [
      'Paste your title or a list of titles, one per line.',
      'Each line is instantly converted to a clean slug.',
      'Copy the slugs for your pages or routes.',
    ],
    faqs: [
      {
        question: 'Why hyphens instead of underscores in URLs?',
        answer:
          'Search engines treat a hyphen as a word separator, while an underscore glues words together, which is why hyphenated slugs rank and read better.',
      },
      {
        question: 'How long should a URL slug be?',
        answer:
          'Shorter is better: keep the meaningful keywords, usually 3 to 6 words. The converter never truncates, so you can trim the result yourself.',
      },
      {
        question: 'Are accented characters supported?',
        answer:
          'Yes. Characters like accents and umlauts are converted to their closest ASCII letters before the slug is built, so nothing is lost.',
      },
    ],
    related: ['case-converter', 'word-counter', 'url-encode-decode', 'json-formatter'],
    keywords: ['slug generator', 'url slug', 'text to slug', 'seo friendly url'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'calculators',
    icon: 'Percent',
    shortDescription:
      'Three percentage calculations in one tool: what is X% of Y, what percent X is of Y, and percentage change between two values.',
    longDescription: [
      'The Percentage Calculator answers the three percentage questions everyone actually asks, all at once and all live: what is X percent of a number, what percent one number is of another, and the percentage increase or decrease between two values. Type two numbers and every result updates instantly.',
      'It is the quick math behind discounts, marks and grades, GST tips, growth rates and salary hikes - no formulas to memorize, no spreadsheet to open.',
    ],
    howToSteps: [
      'Enter your two values in the form.',
      'Read all three percentage results at once.',
      'Adjust either number to compare scenarios instantly.',
    ],
    faqs: [
      {
        question: 'How do I calculate percentage change?',
        answer:
          'Percentage change is the difference between the two values divided by the original value, multiplied by 100. The tool shows whether it is an increase or a decrease.',
      },
      {
        question: 'Why does the tool show an error for zero?',
        answer:
          'Dividing by zero is undefined, so results that require the second value as a divisor are hidden until you enter a non-zero number.',
      },
      {
        question: 'Can I use decimals?',
        answer:
          'Yes, both inputs accept decimal values and the results update with two-decimal precision.',
      },
    ],
    related: ['discount-calculator', 'gst-calculator', 'bmi-calculator', 'age-calculator', 'emi-calculator'],
    keywords: ['percentage calculator', 'percent change', 'what percent of', 'percentage increase'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'calculators',
    icon: 'Calendar',
    shortDescription:
      'Calculate exact age in years, months and days from any date of birth, plus total days lived and a next-birthday countdown.',
    longDescription: [
      'Age Calculator computes your exact age the way official forms ask for it: years, months and days between your date of birth and any reference date - not just a rough subtraction. You also get totals in days, weeks and months, and a countdown to your next birthday.',
      'It is calendar-aware, so leap years and months of different lengths are handled correctly, and you can set any as-of date for exams, visa applications, retirement calculations or historical research.',
    ],
    howToSteps: [
      'Pick your date of birth.',
      'Set the as-of date if it is not today.',
      'Read your exact age and the extra totals.',
    ],
    faqs: [
      {
        question: 'How are months and days calculated?',
        answer:
          'The difference is computed on the calendar, borrowing from months when needed - exactly like counting on your fingers, so Feb 28 to Mar 1 is one month plus one day.',
      },
      {
        question: 'Does it handle leap years?',
        answer:
          'Yes, February 29 birthdays and leap-year spans are computed correctly against the real calendar.',
      },
      {
        question: 'Can I calculate age on a past or future date?',
        answer:
          'Yes, change the as-of date to any date you like - useful for forms that ask for age as of a specific exam or joining date.',
      },
    ],
    related: ['percentage-calculator', 'countdown-timer', 'bmi-calculator', 'random-number-generator'],
    keywords: ['age calculator', 'date of birth calculator', 'how old am i', 'age as on date'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'calculators',
    icon: 'HeartPulse',
    shortDescription:
      'Check your Body Mass Index in seconds with the WHO weight classification and your personal healthy weight range.',
    longDescription: [
      'BMI Calculator uses the standard formula - weight in kilograms divided by height in meters squared - and instantly shows your value with the WHO classification: underweight below 18.5, normal up to 24.9, overweight up to 29.9, and obese from 30.',
      'Alongside your score you get the healthy weight range for your exact height, so you know the number to aim for rather than just a label. BMI is a screening indicator, not a diagnosis: very muscular people often read high - pair the result with professional advice.',
    ],
    howToSteps: [
      'Enter your height in centimeters.',
      'Enter your weight in kilograms.',
      'Read your BMI, category and healthy weight range.',
    ],
    faqs: [
      {
        question: 'What is the BMI formula?',
        answer:
          'BMI equals weight in kilograms divided by the square of height in meters. Enter centimeters and kilograms and the tool does the conversion for you.',
      },
      {
        question: 'Is BMI accurate for everyone?',
        answer:
          'It is a population screening metric. Athletes with high muscle mass may read overweight despite low fat, and it does not distinguish fat from muscle.',
      },
      {
        question: 'What units does the calculator support?',
        answer:
          'This version uses metric units, centimeters and kilograms, which is the standard used by WHO and most health systems worldwide.',
      },
    ],
    related: ['percentage-calculator', 'age-calculator', 'emi-calculator'],
    keywords: ['bmi calculator', 'body mass index', 'healthy weight range', 'bmi chart'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'emi-calculator',
    name: 'EMI Calculator',
    category: 'calculators',
    icon: 'Landmark',
    shortDescription:
      'Calculate loan EMI, total interest and total repayment instantly with the standard reducing-balance formula.',
    longDescription: [
      'EMI Calculator applies the exact formula banks use - equated monthly installment on a reducing balance - so you can see the real monthly payment for a home, car or personal loan before you talk to any lender.',
      'Enter the loan amount, annual interest rate and tenure in years. You instantly get the monthly EMI, the total interest you will pay over the full tenure, and the total amount repaid. Change any input to compare tenures side by side - the difference between a 15-year and 20-year home loan becomes obvious in seconds.',
    ],
    howToSteps: [
      'Enter the loan amount.',
      'Enter the annual interest rate and tenure.',
      'Compare the EMI, total interest and total repayment.',
    ],
    faqs: [
      {
        question: 'What does EMI stand for?',
        answer:
          'Equated Monthly Installment - the fixed payment made every month, split between interest and principal, until the loan is fully repaid.',
      },
      {
        question: 'Does the calculation include processing fees?',
        answer:
          'No, it covers principal and interest only, which is how lenders quote headline EMIs. Add fees separately when comparing offers.',
      },
      {
        question: 'How does prepayment affect my loan?',
        answer:
          'Prepayment reduces outstanding principal, which either shortens the tenure or lowers the EMI. Recalculate with a smaller amount to model the effect.',
      },
    ],
    related: ['gst-calculator', 'percentage-calculator', 'discount-calculator', 'bmi-calculator'],
    keywords: ['emi calculator', 'loan calculator', 'home loan emi', 'monthly installment'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'gst-calculator',
    name: 'GST Calculator',
    category: 'calculators',
    icon: 'Receipt',
    shortDescription:
      'Add or remove GST from any amount with an automatic CGST/SGST split, supporting 5, 12, 18, 28 and custom rates.',
    longDescription: [
      'GST Calculator works in both directions: add GST to a base price to get the tax-inclusive total, or reverse it out of an MRP to find the original base and the tax component. Common Indian slabs - 5, 12, 18 and 28 percent - are one click away, and any custom rate can be entered.',
      'For intra-state transactions the tax splits equally into CGST and SGST, and the tool shows that split automatically. It is the everyday math behind invoicing, pricing, and filing returns.',
    ],
    howToSteps: [
      'Enter the amount.',
      'Pick the GST slab or enter a custom rate.',
      'Choose add GST or remove GST and read the split.',
    ],
    faqs: [
      {
        question: 'What is the difference between CGST, SGST and IGST?',
        answer:
          'For sales within a state, GST splits into CGST and SGST, half each. For sales between states, the full tax is charged as IGST. The tool shows the CGST/SGST split.',
      },
      {
        question: 'How do I remove GST from a total?',
        answer:
          'Divide the tax-inclusive amount by one plus the rate - for example 118 rupees at 18 percent gives a base of 100. The tool does this instantly in remove mode.',
      },
      {
        question: 'Which GST slab applies to my product?',
        answer:
          'Slabs depend on the goods or service category and change with council decisions. Always verify the current rate on the official GST portal.',
      },
    ],
    related: ['emi-calculator', 'percentage-calculator', 'discount-calculator'],
    keywords: ['gst calculator', 'cgst sgst calculator', 'remove gst', 'inclusive gst calculation'],
    priority: 'P0',
    popular: false,
    status: 'live',
  },
  {
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    category: 'calculators',
    icon: 'BadgePercent',
    shortDescription:
      'Find the final price after any discount, exactly how much you save, and the effective price you actually pay.',
    longDescription: [
      'Discount Calculator answers the checkout question instantly: enter the price and the discount percent, and see the final price, the amount saved and what percent of the original you are actually paying. Perfect for judging whether that 40-percent-off banner is really a bargain.',
      'Stacked offers can be evaluated by chaining: take the result price and run it through again with the second discount, since combined discounts apply sequentially rather than by adding.',
    ],
    howToSteps: [
      'Enter the original price.',
      'Enter the discount percentage.',
      'Read the final price and your total savings.',
    ],
    faqs: [
      {
        question: 'How do I calculate two stacked discounts?',
        answer:
          'Apply them one after the other, not added together. A 30 percent discount followed by 20 percent equals a total of 44 percent off, not 50.',
      },
      {
        question: 'Is sales tax included?',
        answer:
          'No, the calculator works on the pre-tax price. Apply your local tax rate to the discounted price afterwards.',
      },
      {
        question: 'Does it work with decimal discounts like 12.5 percent?',
        answer:
          'Yes, the discount field accepts any decimal percentage.',
      },
    ],
    related: ['percentage-calculator', 'gst-calculator', 'emi-calculator'],
    keywords: ['discount calculator', 'off calculator', 'sale price calculator', 'savings calculator'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    category: 'developer',
    icon: 'Braces',
    shortDescription:
      'Beautify, minify and validate JSON with precise error messages that point to the exact position of syntax problems.',
    longDescription: [
      'JSON Formatter parses your JSON and pretty-prints it with your choice of 2 or 4 space indentation, or minifies it for production use. If the input is invalid, you get a precise error message with line and column position, so broken commas and stray brackets take seconds to find instead of minutes.',
      'It is the everyday companion for API responses, config files, exports and log payloads - and shows byte sizes before and after minification so you know exactly what you save.',
    ],
    howToSteps: [
      'Paste your JSON into the editor.',
      'Choose beautify with 2 or 4 spaces, or minify.',
      'Copy the formatted output or read the error location.',
    ],
    faqs: [
      {
        question: 'Is my JSON uploaded anywhere?',
        answer:
          'No. Parsing and formatting happen entirely in your browser, so API payloads with sensitive data stay on your machine.',
      },
      {
        question: 'Why should I minify JSON?',
        answer:
          'Minification strips whitespace, reducing transfer size for API responses and embedded config, which speeds up requests and saves bandwidth.',
      },
      {
        question: 'Why is a trailing comma invalid?',
        answer:
          'The JSON specification forbids trailing commas in arrays and objects. The validator flags them with their exact position so you can fix them quickly.',
      },
    ],
    related: ['url-encode-decode', 'base64-encode-decode', 'password-generator', 'text-to-slug'],
    keywords: ['json formatter', 'json validator', 'json beautifier', 'json minify', 'json pretty print'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'base64-encode-decode',
    name: 'Base64 Encode / Decode',
    category: 'developer',
    icon: 'Binary',
    shortDescription:
      'Encode or decode Base64 safely with full Unicode support, so emojis and non-Latin text never corrupt.',
    longDescription: [
      'Base64 Encode / Decode converts text in both directions with a UTF-8 aware implementation. Many naive converters break on emojis, Hindi text, Chinese characters and other non-ASCII content - this one encodes and decodes them perfectly, because it treats input as bytes, not as single characters.',
      'Base64 shows up everywhere in development: data URIs for images, JWT payload inspection, HTTP basic auth headers and email attachments. Paste, pick a direction, copy the result.',
    ],
    howToSteps: [
      'Choose encode or decode.',
      'Paste your text into the input.',
      'Copy the converted result from the output.',
    ],
    faqs: [
      {
        question: 'Is Base64 encryption?',
        answer:
          'No. Base64 is an encoding, reversible by anyone. Never use it to hide secrets or passwords - it provides zero security.',
      },
      {
        question: 'Why do emojis break other Base64 tools?',
        answer:
          'Emojis need four UTF-8 bytes, while naive tools encode each character as one byte. This tool encodes the full UTF-8 bytes, so output is spec-correct.',
      },
      {
        question: 'How much larger is Base64 than the original?',
        answer:
          'Roughly 33 percent - every three bytes become four characters. The tool shows input and output sizes side by side.',
      },
    ],
    related: ['json-formatter', 'url-encode-decode', 'password-generator'],
    keywords: ['base64 encode', 'base64 decode', 'base64 converter', 'unicode base64'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
  {
    slug: 'url-encode-decode',
    name: 'URL Encode / Decode',
    category: 'developer',
    icon: 'Link2',
    shortDescription:
      'Percent-encode or decode URLs and query parameters, with component mode and full-URI mode.',
    longDescription: [
      'URL Encode / Decode covers both percent-encoding directions with two levels of strictness. Component mode uses the strict form meant for query parameter values - it escapes ampersands, equals signs, slashes and spaces, so nothing you paste can break the URL structure. URI mode keeps reserved URL characters intact and only escapes what is truly illegal.',
      'Use it to build links with special characters in them, debug broken query strings, or decode a percent-encoded URL someone sent you.',
    ],
    howToSteps: [
      'Choose encode or decode.',
      'Pick component mode for parameter values or URI mode for whole links.',
      'Paste your text and copy the converted result.',
    ],
    faqs: [
      {
        question: 'What is the difference between component and URI mode?',
        answer:
          'Component mode escapes every reserved character, which is what you want for parameter values. URI mode keeps structural characters like slashes and question marks, which is what you want for complete URLs.',
      },
      {
        question: 'Why does a space become a plus sign sometimes?',
        answer:
          'The plus sign represents a space in form encoding, while percent encoding represents it as percent 20. Both are handled here.',
      },
      {
        question: 'Is encoding reversible?',
        answer:
          'Yes, percent encoding is fully reversible - decode mode restores the original text exactly.',
      },
    ],
    related: ['base64-encode-decode', 'json-formatter', 'text-to-slug'],
    keywords: ['url encoder', 'url decoder', 'percent encoding', 'encode url online'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'web-privacy',
    icon: 'KeyRound',
    shortDescription:
      'Generate strong, cryptographically random passwords with adjustable length, character sets and a live strength meter.',
    longDescription: [
      'Password Generator uses the browser Web Crypto API - the same cryptographic primitives behind HTTPS - to draw truly random passwords, unlike tools that use predictable math. Choose the length and toggle uppercase, lowercase, digits and symbols; the strength meter estimates entropy in bits as you adjust.',
      'Passwords are generated on your device and never transmitted, logged or stored. For most accounts, security guidance today suggests 16 characters or more with all sets enabled.',
    ],
    howToSteps: [
      'Set your desired length with the slider.',
      'Toggle the character sets you want.',
      'Copy the generated password and store it in a password manager.',
    ],
    faqs: [
      {
        question: 'Are the generated passwords sent anywhere?',
        answer:
          'No. Generation happens locally with the Web Crypto API and the password exists only in your browser until you copy it.',
      },
      {
        question: 'How long should my password be?',
        answer:
          'Sixteen characters or more with all character sets enabled is the current practical recommendation for important accounts.',
      },
      {
        question: 'What does the entropy estimate mean?',
        answer:
          'Entropy measures unpredictability in bits. Above 80 bits is considered very strong against offline guessing attacks.',
      },
    ],
    related: ['random-number-generator', 'json-formatter', 'base64-encode-decode'],
    keywords: ['password generator', 'strong password', 'random password', 'secure password generator'],
    priority: 'P0',
    popular: true,
    status: 'live',
  },
  {
    slug: 'random-number-generator',
    name: 'Random Number Generator',
    category: 'math',
    icon: 'Dices',
    shortDescription:
      'Draw random numbers in any range, with options for count, uniqueness and sorting - powered by crypto randomness.',
    longDescription: [
      'Random Number Generator draws from any range you set, producing a single number or a whole list in one click. Enable the unique option to draw without repeats - perfect for lucky draws, raffles, bingo and classroom picks - and sort the results for tidy presentation.',
      'Numbers are drawn with the browser cryptographic random source rather than plain math random, giving noticeably fairer, less predictable results for contests and games.',
    ],
    howToSteps: [
      'Set your minimum and maximum values.',
      'Choose how many numbers to draw and whether repeats are allowed.',
      'Generate, then copy the list if you need it elsewhere.',
    ],
    faqs: [
      {
        question: 'Are the numbers truly random?',
        answer:
          'They come from the browser cryptographic random source, which is designed for unpredictability and is far stronger than typical math random.',
      },
      {
        question: 'Can I use it for a lucky draw?',
        answer:
          'Yes. Enable the unique option so every ticket can win only once, and copy the results as a transparent record.',
      },
      {
        question: 'What is the largest range I can use?',
        answer:
          'The tool supports ranges up to 9007199 trillion, the safe integer limit of JavaScript, which comfortably covers every practical use.',
      },
    ],
    related: ['password-generator', 'percentage-calculator', 'countdown-timer'],
    keywords: ['random number generator', 'rng', 'random picker', 'lucky draw numbers'],
    priority: 'P2',
    popular: false,
    status: 'live',
  },
  {
    slug: 'countdown-timer',
    name: 'Countdown Timer',
    category: 'time',
    icon: 'Timer',
    shortDescription:
      'Set a precise countdown with hours, minutes and seconds - a big readable display with pause and reset, right in your browser.',
    longDescription: [
      'Countdown Timer gives you a clean, high-visibility countdown for workouts, exam practice, pomodoro sessions, cooking and presentations. Set hours, minutes and seconds, start it, and the large monospace display stays readable from across the room.',
      'Pause and resume without losing accuracy, reset to start over, and the timer keeps ticking while the tab is open - no installation, no ads shouting at you, no account.',
    ],
    howToSteps: [
      'Set hours, minutes and seconds for your countdown.',
      'Press start - the display counts down live.',
      'Pause or reset at any time.',
    ],
    faqs: [
      {
        question: 'Does the timer work if I switch tabs?',
        answer:
          'Yes, the countdown is computed from the clock, not by counting ticks, so switching tabs does not lose time while the page stays open.',
      },
      {
        question: 'What is the maximum duration?',
        answer:
          'You can set up to 99 hours in the hours field, which covers even the longest challenges and fasts.',
      },
      {
        question: 'Does it make a sound when it ends?',
        answer:
          'The first version finishes with a visual flash. An optional sound alert is on the roadmap.',
      },
    ],
    related: ['age-calculator', 'random-number-generator'],
    keywords: ['countdown timer', 'online timer', 'pomodoro timer', 'timer with pause'],
    priority: 'P1',
    popular: false,
    status: 'live',
  },
];

export function getLiveTools(): Tool[] {
  return tools.filter((t) => t.status === 'live');
}

export function getLiveToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug && t.status === 'live');
}

export function getToolsByCategory(category: Tool['category']): Tool[] {
  return tools.filter((t) => t.category === category && t.status === 'live');
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.status === 'live' && t.popular);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.related
    .map((slug) => getLiveToolBySlug(slug))
    .filter((t): t is Tool => Boolean(t));
}

export function liveToolSlugs(): string[] {
  return getLiveTools().map((t) => t.slug);
}
