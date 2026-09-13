function el(id) { return document.getElementById(id); }
var KEY_NAME = "deshconnect_gemini_key";

function getKey() {
  try { return localStorage.getItem(KEY_NAME) || ""; } catch (e) { return ""; }
}
function setKey(k) {
  try { localStorage.setItem(KEY_NAME, k); } catch (e) {}
}

function addMsg(role, text, sources) {
  var box = el("messages");
  var wrap = document.createElement("div");
  wrap.className = "msg " + role;
  var bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;
  wrap.appendChild(bubble);
  if (sources && sources.length) {
    var src = document.createElement("div");
    src.className = "sources";
    src.innerHTML = sources.map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.name + "</a>";
    }).join(" · ");
    wrap.appendChild(src);
  }
  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
}

function kbContext() {
  return KB.map(function (item) {
    return item.title + "\n" + item.answer + "\nSources: " + item.sources.map(function (s) { return s.name + " " + s.url; }).join(", ");
  }).join("\n\n");
}

function localReply(q) {
  var hit = findAnswer(q);
  if (!hit) {
    addMsg("bot", "এই মুহূর্তে নিশ্চিত উত্তর নেই। bangladesh.gov.bd বা ৩৩৩ ব্যবহার করুন। অনুমান করে ভুল নির্দেশ দেব না।");
    return;
  }
  if (hit.multi) {
    addMsg("bot", "একাধিক বিষয় মিলছে:\n" + hit.items.map(function (it, i) { return (i + 1) + ". " + it.title; }).join("\n"));
    return;
  }
  addMsg("bot", hit.answer + "\n\nDeshConnect AI সরকারি অফিস নয়।", hit.sources);
}

function systemPrompt() {
  return "তুমি DeshConnect AI। বাংলাদেশের নাগরিক সেবার সহায়ক। বাংলায় সহজ উত্তর দাও। সরকারি অফিস নও। আইন/চিকিৎসা চূড়ান্ত পরামর্শ দিও না। জানলে অফিসিয়াল লিংক দাও। না জানলে তাই বলো। নিচের নোট ব্যবহার করো:\n\n" + kbContext();
}

async function geminiReply(q) {
  var key = getKey();
  var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + encodeURIComponent(key);
  var body = {
    system_instruction: { parts: [{ text: systemPrompt() }] },
    contents: [{ role: "user", parts: [{ text: q }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 600 }
  };
  var res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    var err = await res.text();
    throw new Error(err.slice(0, 180));
  }
  var data = await res.json();
  var text = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts
    ? data.candidates[0].content.parts.map(function (p) { return p.text || ""; }).join("\n")
    : "";
  if (!text.trim()) throw new Error("empty");
  addMsg("bot", text.trim());
}

async function reply(q) {
  if (!getKey()) {
    localReply(q);
    addMsg("bot", "Gemini চালু করতে উপরে ‘কী সেভ’ এ নিজের API কী দিন। কী শুধু এই ফোনে থাকবে।");
    return;
  }
  addMsg("bot", "ভাবছি...");
  try {
    await geminiReply(q);
    var msgs = el("messages").querySelectorAll(".msg.bot");
    var last = msgs[msgs.length - 2];
    if (last && last.innerText.indexOf("ভাবছি") !== -1) last.remove();
  } catch (e) {
    var thinking = el("messages").querySelectorAll(".msg.bot");
    var t = thinking[thinking.length - 1];
    if (t && t.innerText.indexOf("ভাবছি") !== -1) t.remove();
    addMsg("bot", "Gemini এই মুহূর্তে উত্তর দিতে পারেনি। স্থানীয় গাইড ব্যবহার করছি।");
    localReply(q);
  }
}

function send() {
  var input = el("q");
  var q = input.value.trim();
  if (!q) return;
  addMsg("user", q);
  input.value = "";
  reply(q);
}

function ask(text) {
  el("q").value = text;
  send();
}

function saveKey() {
  var k = el("apikey").value.trim();
  if (!k) return;
  setKey(k);
  el("apikey").value = "";
  el("keystatus").innerText = "কী সেভ হয়েছে এই ডিভাইসে।";
}

window.addEventListener("DOMContentLoaded", function () {
  el("send").addEventListener("click", send);
  el("savekey").addEventListener("click", saveKey);
  el("q").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  if (getKey()) el("keystatus").innerText = "Gemini এই ডিভাইসে চালু।";
  addMsg("bot", "আসসালামু আলাইকুম। Gemini কী সেভ করলে খোলা প্রশ্ন করা যাবে। নাহলে NID/পাসপোর্ট গাইড কাজ করবে।");
});
