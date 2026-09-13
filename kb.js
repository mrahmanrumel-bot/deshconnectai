const KB = [
  {
    id: "nid",
    keys: ["nid", "এনআইডি", "জাতীয় পরিচয়", "জাতীয় পরিচয়", "জাতীয় পরিচয়পত্র", "smart card", "স্মার্ট কার্ড", "ভোটার", "nid সংশোধন", "নাম ভুল", "জন্ম তারিখ ভুল"],
    title: "জাতীয় পরিচয়পত্র (NID)",
    answer: "NID সেবা নির্বাচন কমিশনের পোর্টালে হয়।\n\nকী করবেন\n1. services.nidw.gov.bd এ যান\n2. একাউন্ট দাবি বা লগইন করুন\n3. সংশোধন / রিপ্রিন্ট / স্ট্যাটাস আবেদন করুন\n\nপ্রয়োজন হতে পারে: মোবাইল নম্বর, NID নম্বর, জন্ম তারিখ।",
    sources: [
      { name: "NID সেবা", url: "https://services.nidw.gov.bd" },
      { name: "জাতীয় পোর্টাল", url: "https://bangladesh.gov.bd" }
    ]
  },
  {
    id: "passport",
    keys: ["পাসপোর্ট", "passport", "ইমিগ্রেশন", "mrp", "e-passport", "ইপাসপোর্ট", "পাসপোর্ট স্ট্যাটাস", "পাসপোর্ট আবেদন"],
    title: "পাসপোর্ট",
    answer: "পাসপোর্ট আবেদন ও স্ট্যাটাস দেখুন passport.gov.bd এ।\n\nকী করবেন\n1. সাইটে যান\n2. অনলাইন আবেদন পূরণ করুন\n3. অ্যাপয়েন্টমেন্ট ও ফি দেখুন\n4. স্ট্যাটাস ট্র্যাক করুন",
    sources: [{ name: "পাসপোর্ট", url: "https://www.passport.gov.bd" }]
  },
  {
    id: "tin",
    keys: ["tin", "টিন", "কর", "আয়কর", "আয়কর", "e-return", "ই-রিটার্ন", "nbr", "এনবিআর", "etax", "ট্যাক্স"],
    title: "TIN ও আয়কর",
    answer: "TIN ও ই-রিটার্ন etaxnbr.gov.bd এ।\n\nকী করবেন\n1. সাইটে যান\n2. TIN নিবন্ধন বা লগইন\n3. ই-রিটার্ন দাখিল\n\nকর হিসাব এখানে দেওয়া হয় না।",
    sources: [{ name: "e-TIN / NBR", url: "https://etaxnbr.gov.bd" }]
  },
  {
    id: "land",
    keys: ["ভূমি", "খতিয়ান", "খতিয়ান", "নামজারি", "পর্চা", "জমি", "land", "mutation", "khatian", "ভূমি অফিস"],
    title: "ভূমি / খতিয়ান",
    answer: "খতিয়ান, পর্চা ও নামজারি land.gov.bd এবং স্থানীয় ভূমি অফিসে।\n\nকী করবেন\n1. land.gov.bd এ যান\n2. খতিয়ান / পর্চা খুঁজুন\n3. নামজারি স্ট্যাটাস দেখুন\n\nহটলাইন: ১৬১২২",
    sources: [{ name: "ভূমি সেবা", url: "https://land.gov.bd" }]
  },
  {
    id: "mygov",
    keys: ["mygov", "মাইগভ", "সরকারি সেবা", "e-service", "ইসেবা"],
    title: "myGov",
    answer: "অনেক সরকারি সেবা mygov.bd এ একসাথে আছে।\n\nকী করবেন\n1. mygov.bd এ যান\n2. সেবা খুঁজে আবেদন করুন\n3. আবেদন ট্র্যাক করুন\n\nহটলাইন: ৩৩৩",
    sources: [
      { name: "myGov", url: "https://www.mygov.bd" },
      { name: "জাতীয় পোর্টাল", url: "https://bangladesh.gov.bd" }
    ]
  },
  {
    id: "birth",
    keys: ["জন্ম", "জন্ম নিবন্ধন", "birth", "bris", "জন্ম সনদ", "বার্থ সার্টিফিকেট"],
    title: "জন্ম নিবন্ধন",
    answer: "জন্ম নিবন্ধন ও সনদ যাচাই bdris.gov.bd এ।\n\nকী করবেন\n1. সাইটে যান\n2. আবেদন বা সনদ যাচাই করুন\n3. স্থানীয় ইউনিয়ন / পৌরসভা অফিসের নিয়ম দেখুন",
    sources: [{ name: "BRIS", url: "https://bdris.gov.bd" }]
  },
  {
    id: "helpline",
    keys: ["হটলাইন", "hotline", "জরুরি", "নম্বর", "কল", "৩৩৩", "999", "৯৯৯"],
    title: "জরুরি ও সেবা নম্বর",
    answer: "কাজে লাগে:\n- ৩৩৩ — সরকারি তথ্য\n- ৯৯৯ — জরুরি\n- ১০৯ — নারী ও শিশু সহায়তা\n- ১৬১২২ — ভূমি\n- ১০৬ — দুদক\n\nজীবন-ঝুঁকিতে ৯৯৯।",
    sources: [{ name: "জাতীয় পোর্টাল", url: "https://bangladesh.gov.bd" }]
  },
  {
    id: "ekpay",
    keys: ["বিল", "বিদ্যুৎ বিল", "ekpay", "একপে", "gas bill", "পানি বিল", "ইউটিলিটি"],
    title: "সরকারি বিল",
    answer: "অনেক বিল ekpay.gov.bd এ পরিশোধ করা যায়।\n\nকী করবেন\n1. ekpay.gov.bd এ যান\n2. বিলের ধরন বেছে নিন\n3. অ্যাকাউন্ট নম্বর দিয়ে পরিশোধ করুন",
    sources: [{ name: "EkPay", url: "https://ekpay.gov.bd" }]
  }
];

function normalize(s) {
  return (s || "").toLowerCase().replace(/[।!?.,]/g, " ").replace(/\s+/g, " ").trim();
}

function findMatches(q) {
  const text = normalize(q);
  if (!text) return [];
  const scored = KB.map(function (item) {
    let score = 0;
    for (let i = 0; i < item.keys.length; i++) {
      const key = normalize(item.keys[i]);
      if (!key) continue;
      if (text === key) score += 12;
      else if (text.indexOf(key) !== -1) score += 6 + Math.min(key.length, 8);
      else if (key.indexOf(text) !== -1 && text.length >= 3) score += 3;
    }
    return { item: item, score: score };
  }).filter(function (x) { return x.score > 0; });
  scored.sort(function (a, b) { return b.score - a.score; });
  return scored;
}

function findAnswer(q) {
  const hits = findMatches(q);
  if (!hits.length) return null;
  if (hits.length === 1 || hits[0].score >= hits[1].score + 3) return hits[0].item;
  return { multi: true, items: hits.slice(0, 3).map(function (h) { return h.item; }) };
}
