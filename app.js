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
    src.innerHTML = sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join(" · ");
    wrap.appendChild(src);
  }
  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
}

function reply(q) {
  const hit = findAnswer(q);
  if (hit) {
    addMsg("bot", hit.answer, hit.sources);
    return;
  }
  addMsg("bot", `এই প্রশ্নের নিশ্চিত উত্তর এখনো নলেজবেসে নেই।

চেষ্টা করুন:
- bangladesh.gov.bd
- mygov.bd
- হটলাইন ৩৩৩

DeshConnect AI সরকারি অফিস নয়, অনুমান করে চূড়ান্ত নির্দেশ দেবে না।`);
}

function send() {
  const input = el("q");
  const q = input.value.trim();
  if (!q) return;
  addMsg("user", q);
  input.value = "";
  setTimeout(() => reply(q), 250);
}

function ask(text) {
  el("q").value = text;
  send();
}

window.addEventListener("DOMContentLoaded", () => {
  el("send").addEventListener("click", send);
  el("q").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  addMsg("bot", "আসসালামু আলাইকুম। আমি DeshConnect AI। NID, পাসপোর্ট, TIN, ভূমি বা myGov নিয়ে জিজ্ঞাসা করুন।");
});
