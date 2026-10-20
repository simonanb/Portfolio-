export const projects = {
  ux: [
    {
      slug: 'daruvaj',
      name: 'Daruvaj.mk',
      desc: 'Free donation & item-sharing platform for Macedonia',
      tags: ['UI Design', 'UX Research', 'Next.js', 'Supabase'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: '/Portfolio-/daruvaj-1.png',
      images: [
        '/Portfolio-/daruvaj-1.png',
        '/Portfolio-/daruvaj-2.png',
        '/Portfolio-/daruvaj-3.png',
        '/Portfolio-/daruvaj-4.png',
        '/Portfolio-/daruvaj-5.png',
        '/Portfolio-/daruvaj-6.png',
        '/Portfolio-/daruvaj-7.png',
        '/Portfolio-/daruvaj-8.png',
        '/Portfolio-/daruvaj-9.png',
        '/Portfolio-/daruvaj-10.png',
        '/Portfolio-/daruvaj-11.png',
        '/Portfolio-/daruvaj-12.png',
        '/Portfolio-/daruvaj-13.png',
        '/Portfolio-/daruvaj-14.png',
        '/Portfolio-/daruvaj-15.png',
      ],
      fullDesc:
        'A community-driven platform enabling Macedonians to donate items, share resources, and connect with those in need, completely free of charge.',
      sections: [
        {
          title: 'Overview',
          paragraphs: [
            'Daruvaj.mk (from the Macedonian word "дарувај", meaning "give" or "donate") is a free donation and item-sharing platform built for people in Macedonia, with the interface in Macedonian. It gives anyone a simple way to pass on things they no longer need (clothes, furniture, books, toys, household items) to someone who can use them, without money changing hands.',
            'I worked on the project end to end: from research and information architecture to the interface design and the final build with Next.js and Supabase. The goal was to create a platform that feels trustworthy, local, and effortless, so that giving becomes as easy as posting a photo.',
          ],
        },
        {
          title: 'The Problem',
          paragraphs: [
            'Many people in Macedonia want to give away items they no longer use, but the options available are scattered and inconvenient. Donations usually happen through Facebook groups, word of mouth, or classifieds sites that were built for selling rather than giving.',
            'These channels make it hard to find what is available nearby, posts quickly get buried, and there is no clear way to know whether an item is still available. Donors end up answering the same questions over and over, while people in need have to search through endless feeds to find something useful. The result is that many good items end up in storage or in the trash instead of with someone who needs them.',
          ],
        },
        {
          title: 'Research & Discovery',
          paragraphs: [
            'I started by looking at how people currently donate and ask for items by observing local Facebook groups, reviewing classifieds platforms, and talking with people who had both given and received items. I also analysed similar donation and sharing platforms from other countries to understand which patterns work and where they fall short.',
            'A few clear insights came out of this phase. Donors want the process to be fast and to feel safe, and they do not want to share more personal information than necessary. Recipients care most about location and availability, and want to know quickly whether an item is still up for grabs. Both sides value trust, and a platform built specifically for giving (not selling) immediately feels more genuine.',
          ],
        },
        {
          title: 'Users & Goals',
          paragraphs: [
            'The platform serves two main groups. Donors are people who want to declutter responsibly and help others, but only if it takes a few minutes of their time. Recipients are individuals, families, and organisations looking for specific items, often with limited budgets and a need to find things close to where they live.',
            'From this, I defined the core goals for the product: make posting a donation quick and simple, make browsing and filtering by category and city intuitive, keep communication between donors and recipients clear, and build trust through transparency and a friendly, local tone of voice.',
          ],
        },
        {
          title: 'Design Process',
          paragraphs: [
            'I mapped the key user flows first (posting an item, browsing and searching, requesting an item, and managing active listings) and used them to define a lean information architecture. Low-fidelity wireframes helped me explore different layouts for the listing feed and the posting form before moving into visual design.',
            'The posting flow was designed to feel as light as possible: add photos, describe the item and pick a category, then set the location and condition and publish. Browsing focuses on large, image-led cards with clear category and municipality filters, so users can scan quickly and spot what is relevant to them.',
            'The landing page explains the whole idea in three simple steps (sign up, post or find, connect) and presents the seven item categories (electronics, toys, books, clothes, kitchen appliances, furniture, and other) as large illustrated objects, so visitors understand what they can give away at a glance.',
            'Throughout the process I tested the prototypes with real users, refining labels, simplifying steps, and adjusting the hierarchy based on where people hesitated or got confused.',
          ],
          galleryAfter: [1],
        },
        {
          title: 'Visual Design',
          paragraphs: [
            'The visual language is bold, playful, and warm. A confident palette of deep blue, coral orange, sunny yellow, and soft lilac on a cream background gives the platform an energetic, optimistic personality, far from the cold feel of a typical classifieds site.',
            'Hand-drawn illustrations of everyday objects (a teddy bear, a t-shirt, a phone, a chair) sit right inside the headline and double as category icons, making the idea of giving things a second life instantly visual. Rough, sketch-like frames around cards and icons add a handmade, community feel.',
            'A tall, hand-lettered display typeface gives headlines character, while a clean geometric sans-serif keeps body text readable. Both work in Macedonian Cyrillic, so the platform feels native rather than translated. Strong full-width colour bands and clear orange calls to action guide visitors through the page.',
          ],
          galleryAfter: [2, 3],
        },
        {
          title: 'Browsing Donations',
          paragraphs: [
            'Inside the platform, a persistent sidebar lists the seven categories with their illustrated icons, and a "My profile" group gives quick access to messages, interests, and the user\'s own donations, each with a live count. The feed itself is a grid of photo-first cards showing the donor, title, condition, date, and municipality, with search and filters for municipality and date at the top.',
            'Opening a card shows the full listing in a modal: a photo gallery with thumbnails, the description, and a clear summary of donor, location, how many people are interested, and when it was posted. Recipients can mark their interest with one tap or contact the donor directly.',
          ],
          galleryAfter: [5, 6],
        },
        {
          title: 'Posting a Donation',
          paragraphs: [
            'Adding a donation is split into three short steps with a progress bar, so it never feels like filling out a long form. First the donor adds up to five photos, then gives the item a title and short description and picks a category from large illustrated tiles, and finally chooses their municipality and the item\'s condition (Excellent, Good, or Solid) before publishing.',
          ],
          galleryAfter: [7, 8, 9],
        },
        {
          title: 'Managing Donations & Messages',
          paragraphs: [
            'Donors see their own listings in the same familiar modal, but with Edit and Delete actions instead of Contact and Interest, so managing a donation needs no separate interface. Conversations are grouped by item in a simple inbox, making it easy to see who wrote about what.',
            'The profile page lets users change their display name and password, and keeps account deletion in a clearly separated danger zone that explains exactly what will be removed.',
          ],
          galleryAfter: [10, 11, 12, 13],
        },
        {
          title: 'Moderation',
          paragraphs: [
            'To keep the platform safe and trustworthy, every new donation goes to an admin review queue before it is published. Admins switch between donations awaiting approval and published ones, and a clear empty state confirms when everything has been reviewed.',
          ],
          galleryAfter: [14],
        },
        {
          title: 'Development',
          paragraphs: [
            'I built the platform with Next.js for a fast, responsive front end and Supabase for authentication, the database, and image storage. Designing and developing the product myself allowed me to keep the final build closely aligned with the design intent and to iterate quickly as new needs came up.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The result is a focused, easy-to-use platform dedicated entirely to giving. Daruvaj.mk replaces scattered posts and endless feeds with a clear, searchable space where donors can list items in minutes and recipients can find what they need nearby.',
            'The project strengthened my skills across the full product process, from research and UX strategy to interface design and development, and showed me how thoughtful design can make generosity easier and help a community support itself.',
          ],
          galleryAfter: [4],
        },
      ],
    },
    {
      slug: 'clearforward',
      name: 'ClearForward',
      desc: 'Dental case management platform for orthodontic workflows',
      tags: ['UI Design', 'UX Research', 'Product Design', 'Figma'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: '/Portfolio-/clearforward-1.png',
      images: [
        '/Portfolio-/clearforward-1.png',
        '/Portfolio-/clearforward-2.png',
        '/Portfolio-/clearforward-3.png',
        '/Portfolio-/clearforward-4.png',
        '/Portfolio-/clearforward-5.png',
        '/Portfolio-/clearforward-6.png',
        '/Portfolio-/clearforward-7.png',
        '/Portfolio-/clearforward-8.png',
        '/Portfolio-/clearforward-9.png',
        '/Portfolio-/clearforward-10.png',
        '/Portfolio-/clearforward-11.png',
        '/Portfolio-/clearforward-12.png',
        '/Portfolio-/clearforward-13.png',
        '/Portfolio-/clearforward-14.png',
        '/Portfolio-/clearforward-15.png',
        '/Portfolio-/clearforward-16.png',
        '/Portfolio-/clearforward-17.png',
        '/Portfolio-/clearforward-18.png',
        '/Portfolio-/clearforward-19.png',
      ],
      fullDesc:
        'A SaaS platform streamlining orthodontic case management with intuitive patient tracking, treatment planning, and clinical workflow tools.',
      sections: [
        {
          title: 'Overview',
          paragraphs: [
            'The ClearForward Portal is a web platform for managing clear aligner and orthodontic cases from submission to production. Doctors, clinicians, dental groups, and administrators use it to create cases, track patients through treatment, handle clinical details, and manage the organisations, users, and products behind the service.',
            'I redesigned the portal and built a new design system for it in Figma, covering UX research, information architecture, and UI design. The aim was to turn a complex, multi-role clinical workflow into an experience that feels clear, efficient, and reliable.',
          ],
        },
        {
          title: 'The Problem',
          paragraphs: [
            'Orthodontic case management involves many moving parts: patient records, clinical photos, 3D scans, prescriptions, treatment plans, revisions, production, and ongoing communication between doctors and the clinical team.',
            'As the product grew, screens became dense and inconsistent, important information was hard to find, and it was difficult to see at a glance which cases needed attention. For a professional audience with very little time between patients, every extra click and every unclear screen has a real cost.',
            'The problems were not only about usability. The interface itself looked outdated: dated fonts and cramped layouts made screens feel heavy and hard to read, components varied from screen to screen, and there was no shared design system behind them. For a platform that clinicians rely on every day and that represents the ClearForward brand to dental practices, an old-fashioned interface made the product feel less modern and less trustworthy than the service behind it. The redesign had to fix both how the portal works and how it looks.',
          ],
        },
        {
          title: 'Research & Discovery',
          paragraphs: [
            'I began by mapping the workflow from case creation to production, identifying each step, the roles involved, and the information needed at every stage. Conversations with the internal team and users helped uncover where time was being lost and which tasks caused the most friction.',
            'The key insights were clear: users need to understand case status instantly, deadlines matter, clinical information must be easy to scan, and different roles need very different tools without the interface feeling like several separate products.',
          ],
        },
        {
          title: 'Users & Goals',
          paragraphs: [
            'The portal serves several roles: doctors and dental practitioners who submit and follow cases, clinicians and senior clinicians who work on treatment plans, dental group and practice admins, and internal administrators who manage users, products, and billing.',
            'From this, I defined the main goals: show each user what needs their attention first, make creating a case quick, keep all information about a case and a patient in one place, and give administrators powerful tools that stay consistent with the rest of the product.',
          ],
        },
        {
          title: 'Information Architecture',
          paragraphs: [
            'I reorganised the navigation into three clear groups. Main holds everyday work: Dashboard, Cases, Patients, Store, and Production. Organization covers Dental groups and Practices. Management gathers the admin tools (Users and Roles, Tiers, Vouchers, Referrals, Templates, Products, and Printers), with Reports and Settings always available at the bottom.',
            'The dashboard, shown at the top of this page, greets practitioners by name and puts their work first. The cases waiting for their review sit in the top-left corner, where the eye lands first, followed by cases on hold with how long they have been waiting and which need action. Alongside them, four stat cards track active and new patients, average approval time, and treatments completed this month, while a status bar at the bottom shows how all active cases are distributed. A compact webinar card in the brand blue highlights upcoming education without competing with the clinical work.',
          ],
        },
        {
          title: 'Finding Cases',
          paragraphs: [
            'The cases list brings together search, a status filter, removable filter chips, and pagination, with colour-coded status badges and an SLA column that flags cases approaching or past their deadline.',
            'For more specific searches, an advanced filter panel groups options into date range, case details, organisation, and team, so users can narrow hundreds of cases down to exactly the ones they need.',
          ],
          galleryAfter: [1, { i: 2, width: 360 }],
        },
        {
          title: 'Creating a Case',
          paragraphs: [
            'Every case belongs to a patient, so I designed several ways into case creation depending on where the user is. The main one starts from the patient\'s profile, which shows their full treatment history as a timeline of cards (each with its status, reference, doctor, and last update) and a New case button to start the next case for that patient without searching for them again.',
            'When a new patient is created, a confirmation modal lets the user either open the patient\'s profile or go straight to the case creation form. And from anywhere in the portal, the New case button in the header opens a modal asking whether the case is for an existing patient or a new one; choosing a new patient leads to the new patient form.',
            'Case creation itself is a nine-step guided flow with a persistent stepper, so users always know where they are and what is left. Products are presented as visual cards with clear prices, prescription details use quick toggle buttons instead of long dropdowns, and scans upload with live progress and clear format requirements.',
            'The prescription chart lets clinicians click any tooth to mark treatments and conditions (such as extractions, crowns, or teeth that should not move) and add notes, turning a detailed clinical task into a direct, visual interaction.',
          ],
          galleryAfter: [10, 4, 3, 5, 6, 7, 8],
        },
        {
          title: 'One Place for Every Case',
          paragraphs: [
            'Each case opens with a consistent header showing the patient, tags, reference, dental group, practice, and doctor, followed by tabs for Case details, Clinical details, Treatment plan, Production, and Orders.',
            'Case details groups information into clear cards (case info with status and complexity, activity, team, and handling) with inline editing and highlighted states such as escalated cases. The header uses the same pattern as the patient profile, so moving between a patient and their cases feels seamless.',
          ],
          galleryAfter: [9],
        },
        {
          title: 'Admin & Management Tools',
          paragraphs: [
            'The management area uses the same patterns as the clinical screens, so admins never feel like they are in a different product. Users are organised into tabs by role with live counts, and can be viewed as cards or a list.',
            'Email templates are built in a four-step flow with a block-based editor: admins drag in text, buttons, dividers, and footers, insert dynamic fields like the doctor\'s name, and adjust colours and spacing with a live preview. A visual workflow builder lets admins compose each product\'s case flow by dragging steps such as clinical conditions, prescriptions, scans, and radiographs into order.',
            'Settings bring integrations with third-party tools like HubSpot, ARCAD, and 3Shape into one place, each in an expandable card with its configuration fields.',
          ],
          galleryAfter: [11, 12, 13, 14],
        },
        {
          title: 'Details & Interactions',
          paragraphs: [
            'Much of the everyday work happens in small surfaces, so I gave modals the same care as full pages. The purchase order modal summarises an order at a glance and shows the buyer\'s other purchases without leaving the store.',
            'The notes thread keeps doctors and clinicians in sync on each case, with a short editing window, status-change entries, attached photos, and visibility controls. When assigning a clinician, each person\'s current workload (treatment plans, refinements, retainers, and modification requests) is shown next to their name, so work can be balanced fairly.',
            'Transferring a patient to another practice is a sensitive action, so the transfer modal asks the user to review before confirming: it shows the current and new practice and doctor side by side, lists every case included in the transfer, and explains that the old practice will keep view-only access.',
          ],
          galleryAfter: [[15, 18], [17, 16]],
        },
        {
          title: 'Visual Design & Design System',
          paragraphs: [
            'The visual design needed to feel clinical and trustworthy without becoming cold. I used a clean, light interface with a confident blue as the primary colour, warm orange accents from the ClearForward brand, a clear typographic hierarchy, and plenty of white space to keep dense information readable.',
            'Alongside the redesign I built a new design system in Figma: colours, typography, buttons, inputs, tabs, tables, status badges, cards, modals, and navigation. Consistent status colours and components make large amounts of data easy to scan and make new features faster to design and develop.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The redesigned ClearForward Portal brings the full orthodontic case workflow into a single, structured platform. Users see what needs their attention the moment they log in, every case and patient has one clear home, and admin tools follow the same patterns as the rest of the product.',
            'The project taught me how to design for expert users in a complex domain: balancing detail with clarity, designing for many roles at once, and building a design system that keeps a large product consistent as it grows.',
          ],
        },
      ],
    },
    {
      slug: 'my-closet',
      name: 'My Closet',
      desc: 'Wardrobe app with an AI stylist, designed and built for real users',
      tags: ['UX Design', 'UI Design', 'React', 'Cloudflare', 'AI'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: '/Portfolio-/my-closet-1.png',
      images: [
        '/Portfolio-/my-closet-1.png',
        '/Portfolio-/my-closet-2.png',
        '/Portfolio-/my-closet-3.png',
        '/Portfolio-/my-closet-4.png',
        '/Portfolio-/my-closet-5.png',
        '/Portfolio-/my-closet-6.png',
        '/Portfolio-/my-closet-7.png',
        '/Portfolio-/my-closet-8.png',
        '/Portfolio-/my-closet-9.png',
        '/Portfolio-/my-closet-10.png',
        '/Portfolio-/my-closet-11.png',
        '/Portfolio-/my-closet-12.png',
        '/Portfolio-/my-closet-13.png',
        '/Portfolio-/my-closet-14.png',
        '/Portfolio-/my-closet-15.png',
        '/Portfolio-/my-closet-16.png',
      ],
      fullDesc:
        'A wardrobe app for adding your clothes in seconds, building outfits, recreating looks from inspiration photos and getting outfit ideas for today’s weather.',
      sections: [
        {
          title: 'Overview',
          paragraphs: [
            'My Closet is a personal project: a wardrobe app I designed and built for myself and six friends, who used it on their phones in everyday life. It started from a problem we all shared, and it grew through their feedback.',
            'I worked on everything, from defining the problem and the flows to the interface design and the development, as an installable web app on Cloudflare with Google sign-in, photo storage and AI features.',
          ],
          galleryAfter: [1],
        },
        {
          title: 'The Problem',
          paragraphs: [
            'Most of us know the feeling of a full closet and nothing to wear. We forget what we own, wear the same few pieces again and again, and sometimes buy things very similar to what is already hanging at home. Inspiration photos rarely help, because they show clothes we don’t have.',
            'Wardrobe apps promise to fix this, but they all share one weakness: before they are useful, you have to photograph, crop and describe every single piece you own. Most people give up long before their closet is complete.',
          ],
        },
        {
          title: 'Users & Key Insight',
          paragraphs: [
            'My test group was six friends who used the app with their own clothes. Watching them made one thing very clear: uploading pieces was the real struggle. Everything else, from outfits to suggestions, only works once the closet is filled, so adding clothes had to become as automatic as possible.',
            'That insight shaped the whole product. The goal for every other feature was the same: do the tedious part for the user, but always let them check and correct the result.',
          ],
        },
        {
          title: 'Adding Clothes in Seconds',
          paragraphs: [
            'Adding a piece now takes a photo and a confirmation. The background is removed automatically, and the category, type and color are pre-filled by AI from the photo, so the user only fixes what is wrong. Every pre-filled field is marked as Suggested, which makes it clear what the AI decided and what still needs a quick check. Several photos can be added at once, with an overview to review them and save everything in one step.',
            'Early versions removed backgrounds on the phone, which failed on some iPhones. Moving that work to the server made it reliable on every device, and clear error messages explain what happened when a photo can’t be processed.',
          ],
          galleryAfter: [3, [4, 5]],
        },
        {
          title: 'Building Outfits',
          paragraphs: [
            'Opening any piece from the closet shows its photo with the same details used when adding it, so the name, type, colors, season and occasion can be changed later, or the photo fixed or replaced.',
            'Outfits are built on a canvas from pieces in the closet, with layers and the possibility to use several pieces of the same kind. Filters for category, type, color and occasion help find the right piece quickly, and the save button always stays in reach, even on small screens.',
          ],
          galleryAfter: [2, [13, 14, 15], 6],
        },
        {
          title: 'Inspo: Recreate a Look',
          paragraphs: [
            'Inspo turns an inspiration photo into a plan built from the user’s own clothes. The app finds the pieces in the photo and suggests the best matches from the closet, so the look can be recreated in a few taps.',
            'This feature went through the most iterations. It started as a long form, became a checklist, then a guided flow that asks one question at a time, and finally an automatic match that the user can still correct.',
          ],
          galleryAfter: [10, 11, 12],
        },
        {
          title: 'Saved Outfits & AI Stylist',
          paragraphs: [
            'Saved outfits live in My Outfits as colorful cards, each showing its pieces as they were arranged on the canvas, so the collection is easy to browse and favorite outfits are always one tap away. Next to Saved, a private Looks tab works as a photo diary of outfits that were worn or tried on, and these photos can be attached to a saved outfit to remember how it actually looked.',
            'The AI stylist answers the everyday question of what to wear. It suggests three outfits from the user’s own closet, taking today’s weather and past Looks into account, with a single Style me button and extra filters folded away for when they are needed.',
          ],
          galleryAfter: [9, 7, 8],
        },
        {
          title: 'Iterating With Real Use',
          paragraphs: [
            'Because my friends used the app on their own phones, problems showed up quickly: sideways scrolling, accidental zooming, rows that didn’t swipe properly on iPhone and screens that felt too busy. Each round of feedback led to small, concrete changes, from a calmer Suggest page to filters hidden behind a single button.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'My Closet became a complete, everyday tool for a small group of real users, focused on removing the biggest barrier of wardrobe apps: getting your clothes into them.',
            'Designing and building it end to end taught me to design for real devices, to keep AI helpful but always correctable, and to simplify a product by watching how people actually use it.',
          ],
        },
      ],
    },
    {
      slug: 'portfolio',
      name: 'This Portfolio',
      desc: 'Snowball game portfolio. Yes, this one',
      tags: ['Creative Dev', 'GSAP', 'React', 'Vite'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: null,
      fullDesc:
        'An interactive portfolio where visitors throw snowballs at targets to discover projects. Built with React, GSAP physics, and a very specific sense of humour.',
    },
  ],
  graphic: [
    {
      slug: 'ritual',
      name: 'Ritual Café',
      desc: 'Brand identity for an intimate minimalist coffee experience',
      tags: ['Branding', 'Typography', 'Print', 'Identity'],
      color: '#E8632A',
      category: 'Graphic Design',
      image: '/Portfolio-/ritual-1.png',
      images: [
        '/Portfolio-/ritual-2.png',
        '/Portfolio-/ritual-3.png',
        '/Portfolio-/ritual-4.png',
        '/Portfolio-/ritual-5.png',
        '/Portfolio-/ritual-6.png',
      ],
      fullDesc:
        'A complete visual identity system for Ritual Café, a specialty coffee shop in Štip, built around the idea of slowness, ritual, and sensory presence.',
      sections: [
        {
          title: 'Overview',
          paragraphs: [
            'Ritual Café is a branding project created for Ritual Café, a real specialty coffee shop in Štip, North Macedonia, built around the idea of slowing down and enjoying everyday rituals. The goal was to design a visual identity that transforms a simple coffee stop into an experience, one that feels warm, welcoming, and memorable.',
            'The identity combines organic shapes, earthy colors, and elegant typography to reflect the calm, comforting atmosphere of the café. Every design decision was made to create a cohesive brand that works consistently across print, social media, and future customer touchpoints.',
          ],
        },
        {
          title: 'The Concept',
          paragraphs: [
            'Rather than positioning Ritual Café as just another coffee shop, the concept focuses on creating moments of pause in a fast-paced world. Coffee becomes a daily ritual, a small moment to reconnect, relax, and enjoy the present.',
            'The visual identity draws inspiration from the movement of coffee, natural forms, and handcrafted details. One of the brand\'s defining elements is the custom letter "a" in the logo, which is designed to resemble the gentle steam rising from a freshly brewed cup of coffee. This subtle detail reinforces the idea of warmth, comfort, and ritual while giving the logo a distinctive and memorable character.',
            'Together, the organic shapes, earthy color palette, and expressive typography create a brand that feels approachable, modern, and authentic.',
          ],
          galleryAfter: [3],
        },
        {
          title: 'Visual Identity',
          paragraphs: [
            'The identity system was developed to communicate warmth and simplicity while remaining highly recognizable.',
            'The logo features elegant custom typography that reflects the café\'s refined yet inviting personality. A palette of warm terracotta, cream, and deep blue creates contrast while reinforcing the cozy atmosphere. Organic graphic elements and flowing shapes add movement throughout the brand, making every application feel dynamic without losing consistency.',
            'Together, these elements form a flexible visual system that can be applied across multiple touchpoints while maintaining a strong and recognizable identity.',
          ],
          galleryAfter: [1, 2, 4],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The final result is a cohesive brand identity that captures the essence of Ritual Café through thoughtful design and consistent visual storytelling.',
            'The project demonstrates how a strong visual system can communicate personality, create emotional connection, and provide a solid foundation for future brand growth. Every element works together to transform a neighbourhood café into a memorable and engaging brand experience.',
          ],
        },
      ],
    },
    {
      slug: 'na-kafe-doma',
      name: 'Na Kafe Doma',
      desc: '',
      tags: ['Branding', 'Typography', 'Print', 'Identity'],
      color: '#E8632A',
      category: 'Graphic Design',
      image: '/Portfolio-/nakafedoma-1.png',
      images: [
        '/Portfolio-/nakafedoma-2.png',
        '/Portfolio-/nakafedoma-3.png',
        '/Portfolio-/nakafedoma-4.png',
        '/Portfolio-/nakafedoma-5.png',
        '/Portfolio-/nakafedoma-6.png',
        '/Portfolio-/nakafedoma-7.png',
      ],
      fullDesc: 'A cozy neighborhood café brand built around the feeling of warmth, comfort, and genuine hospitality.',
      sections: [
        {
          title: 'Overview',
          paragraphs: [
            'Na Kafe Doma is a branding project created for a cozy neighborhood café that celebrates the feeling of being at home. The identity was designed to communicate warmth, comfort, and genuine hospitality, creating a welcoming brand that encourages people to slow down, connect, and enjoy quality coffee in a familiar atmosphere.',
            'The visual system combines clean geometric forms with warm earthy tones, resulting in a timeless identity that feels both modern and approachable. Designed with flexibility in mind, the brand works consistently across signage, merchandise, packaging, social media, and printed materials.',
          ],
        },
        {
          title: 'The Concept',
          paragraphs: [
            'The concept behind Na Kafe Doma is inspired by the comfort of gathering around a table with friends and family. More than a café, the brand represents a place where people can feel relaxed, welcomed, and connected.',
            'The logo is built around a simple yet meaningful illustration that combines a table, two chairs, and a cup of coffee into a single recognizable symbol. Framed within an architectural arch inspired by the café\'s interior, the mark reflects both the physical space and the inviting atmosphere it creates. The combination of these elements transforms the logo into a visual representation of togetherness, conversation, and the feeling of being at home.',
          ],
          galleryAfter: [1],
        },
        {
          title: 'Visual Identity',
          paragraphs: [
            'The visual identity balances simplicity with character through clean linework, warm neutral colors, and carefully considered typography. Earthy greens, deep browns, and soft beige tones evoke the richness of coffee while reinforcing the café\'s welcoming personality.',
            'The logo system was designed in multiple variations to ensure flexibility across different applications while maintaining strong brand recognition. Every element works together to create a cohesive identity that feels authentic, memorable, and adaptable.',
          ],
          galleryAfter: [2, 3, 4, 5],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The final result is a complete visual identity that reflects the values of Na Kafe Doma through thoughtful design and consistent branding. By combining meaningful symbolism with a clean and versatile visual system, the project creates a memorable café brand that feels inviting, familiar, and instantly recognizable across every customer touchpoint.',
          ],
        },
      ],
    },
  ],
  clay: [
    {
      slug: 'clay-work',
      name: 'Clay Sculptures',
      desc: 'Air dry clay modeling: handmade figures and forms',
      tags: ['Handmade', 'Sculpture', 'Air Dry Clay'],
      color: '#C4956A',
      category: 'Clay Work',
      image: null,
      fullDesc:
        'A collection of handmade air dry clay sculptures exploring organic forms, human figures, and everyday objects.',
    },
  ],
};

export const projectsBySlug = Object.values(projects)
  .flat()
  .reduce((acc, p) => ({ ...acc, [p.slug]: p }), {});

export const targetData = [
  {
    id: 'ux',
    label: 'UX/UI Design',
    x: 24,
    y: 30,
    category: 'ux',
    route: '/ux',
    accentColor: '#4A9EBF',
  },
  {
    id: 'graphic',
    label: 'Graphic Design',
    x: 73,
    y: 22,
    category: 'graphic',
    route: '/graphic',
    accentColor: '#E8632A',
  },
  {
    id: 'about',
    label: 'About Me',
    x: 54,
    y: 44,
    category: null,
    route: '/about',
    accentColor: '#4A9EBF',
  },
];
