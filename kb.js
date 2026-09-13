const KB = [
  {
    id: "nid",
    keys: ["nid", "এনআইডি", "জাতীয় পরিচয়", "জাতীয় পরিচয়", "smart card", "স্মার্ট কার্ড", "ভোটার"],
    title: "জাতীয় পরিচয়পত্র (NID)",
    answer: `NID সংক্রান্ত সেবা সাধারণত নির্বাচন কমিশনের পোর্টালে হয়।

কী করবেন
1. services.nidw.gov.bd এ যান
2. নিজের একাউন্ট দাবি / লগইন করুন
3. সংশোধন, কার্ড রিপ্রিন্ট বা স্ট্যাটাস আবেদন করুন

সোর্স
- NID সেবা: https://services.nidw.gov.bd
- জাতীয় পোর্টাল: https://bangladesh.gov.bd

DeshConnect AI সরকারি অফিস নয়। চূড়ান্ত তথ্য অফিসিয়াল সাইট থেকে নিশ্চিত করুন।`,
    sources: [
      { name: "NID Services", url: "https://services.nidw.gov.bd" },
      { name: "bangladesh.gov.bd", url: "https://bangladesh.gov.bd" }
    ]
  },
  {
    id: "passport",
    keys: ["পাসপোর্ট", "passport", "ইমিগ্রেশন", "mrp", "e-passport"],
    title: "পাসপোর্ট",
    answer: `পাসপোর্ট আবেদন ও স্ট্যাটাস দেখার মূল জায়গা ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর।

কী করবেন
1. passport.gov.bd এ যান
2. অনলাইন আবেদন ফর্ম পূরণ করুন
3. অ্যাপয়েন্টমেন্ট ও ফি নির্দেশনা অনুসরণ করুন
4. স্ট্যাটাস পেজ থেকে আবেদন ট্র্যাক করুন

সোর্স
- https://www.passport.gov.bd

ফি, সময় ও প্রয়োজনীয় কাগজ পরিবর্তন হতে পারে—অফিসিয়াল সাইট দেখে নিন।`,
    sources: [{ name: "Passport", url: "https://www.passport.gov.bd" }]
  },
  {
    id: "tin",
    keys: ["tin", "টিন", "কর", "আয়কর", "e-return", "ই-রিটার্ন", "nbr", "এনবিআর"],
    title: "TIN ও আয়কর",
    answer: `TIN নিবন্ধন ও ই-রিটার্ন জাতীয় রাজস্ব বোর্ডের ই-ট্যাক্স পোর্টালে হয়।

কী করবেন
1. etaxnbr.gov.bd এ যান
2. TIN নিবন্ধন বা লগইন করুন
3. ই-রিটার্ন দাখিল ও প্রয়োজনে সনদ ডাউনলোড করুন

সোর্স
- https://etaxnbr.gov.bd

কর হিসাব বা আইনি পরামর্শ এখানে দেওয়া হয় না।`,
    sources: [{ name: "e-TIN / NBR", url: "https://etaxnbr.gov.bd" }]
  },
  {
    id: "land",
    keys: ["ভূমি", "খতিয়ান", "নামজারি", "পর্চা", "জমি", "land", "mutation", "khatian"],
    title: "ভূমি / খতিয়ান",
    answer: `ভূমি রেকর্ড ও নামজারি সংক্রান্ত সেবা land.gov.bd এবং সংশ্লিষ্ট ভূমি অফিসে।

কী করবেন
1. land.gov.bd এ যান
2. খতিয়ান / পর্চা অনুসন্ধান দেখুন
3. নামজারি স্ট্যাটাস ট্র্যাক করুন
4. প্রয়োজনে স্থানীয় ভূমি অফিসে যাচাই করুন

সোর্স
- https://land.gov.bd
- ভূমি সেবা হটলাইন: ১৬১২২`,
    sources: [{ name: "Land", url: "https://land.gov.bd" }]
  },
  {
    id: "mygov",
    keys: ["mygov", "মাইগভ", "সরকারি সেবা", "আবেদন", "e-service"],
    title: "myGov",
    answer: `অনেক সরকারি সেবা এক জায়গায় আছে myGov গেটওয়েতে।

কী করবেন
1. mygov.bd এ যান
2. সেবা খুঁজে আবেদন করুন
3. আবেদন ট্র্যাক ও ডকুমেন্ট লকার ব্যবহার করুন

সোর্স
- https://www.mygov.bd
- জাতীয় পোর্টাল: https://bangladesh.gov.bd
- তথ্য হটলাইন: ৩৩৩`,
    sources: [
      { name: "myGov", url: "https://www.mygov.bd" },
      { name: "National Portal", url: "https://bangladesh.gov.bd" }
    ]
  },
  {
    id: "birth",
    keys: ["জন্ম", "জন্ম নিবন্ধন", "birth", "bris", "জন্ম সনদ"],
    title: "জন্ম নিবন্ধন",
    answer: `জন্ম নিবন্ধন আবেদন ও যাচাই সাধারণত BRIS পোর্টালে হয়।

কী করবেন
1. bdris.gov.bd এ যান
2. অনলাইন আবেদন বা সনদ যাচাই করুন
3. স্থানীয় ইউনিয়ন / পৌরসভা / সিটি কর্পোরেশন অফিসের নির্দেশনা দেখুন

সোর্স
- https://bdris.gov.bd`,
    sources: [{ name: "BRIS", url: "https://bdris.gov.bd" }]
  }
];

function findAnswer(q) {
  const text = (q || "").toLowerCase();
  if (!text.trim()) return null;
  let best = null;
  let score = 0;
  for (const item of KB) {
    let s = 0;
    for (const k of item.keys) {
      if (text.includes(k.toLowerCase())) s += k.length;
    }
    if (s > score) { score = s; best = item; }
  }
  return score > 0 ? best : null;
}
