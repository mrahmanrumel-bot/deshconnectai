function el(id) { return document.getElementById(id); }

function addMsg(role, text, sources) {
  const box = el("messages");
  const wrap = document.createElement("div");
  wrap.className = "msg " + role;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;
  wrap.appendChild(bubble);
  if (sources && sources.length) {
    const src = document.createElement("div");
    src.className = "sources";
    src.innerHTML = sources.map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.name + "</a>";
    }).join(" · ");
    wrap.appendChild(src);
  }
  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
}

function reply(q) {
  const hit = findAnswer(q);
  if (!hit) {
    addMsg("bot", "এই বিষয়টা এখনো নিশ্চিতভাবে জানি না।\n\nএখন সাহায্য করতে পারি: NID, পাসপোর্ট, TIN/কর, ভূমি, myGov, জন্ম নিবন্ধন, বিল, হটলাইন।\n\nbangladesh.gov.bd বা ৩৩৩ ব্যবহার করুন। অনুমান করে ভুল নির্দেশ দেব না।");
    return;
  }
  if (hit.multi) {
    const lines = hit.items.map(function (it, i) { return (i + 1) + ". " + it.title; }).join("\n");
    addMsg("bot", "একাধিক বিষয় মিলছে। কোনটা চাই?\n\n" + lines + "\n\nনিচের বাটন বা বিষয়ের নাম লিখুন।");
    return;
  }
  addMsg("bot", hit.answer + "\n\nDeshConnect AI সরকারি অফিস নয়। চূড়ান্ত তথ্য অফিসিয়াল সাইট থেকে নিশ্চিত করুন।", hit.sources);
}

function send() {
  const input = el("q");
  const q = input.value.trim();
  if (!q) return;
  addMsg("user", q);
  input.value = "";
  setTimeout(function () { reply(q); }, 200);
}

function ask(text) {
  el("q").value = text;
  send();
}

window.addEventListener("DOMContentLoaded", function () {
  el("send").addEventListener("click", send);
  el("q").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  addMsg("bot", "আসসালামু আলাইকুম। NID, পাসপোর্ট, কর, ভূমি, বিল বা হটলাইন নিয়ে জিজ্ঞাসা করুন। বাংলা, ইংরেজি বা বাংলিশ—যেমন খুশি লিখুন।");
});
