function el(id) { return document.getElementById(id); }
var WORKER = "https://falling-cloud-121c.mrahmanrumel.workers.dev/";

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

function localReply(q) {
  var hit = findAnswer(q);
  if (!hit) {
    addMsg("bot", "এখন নিশ্চিত উত্তর পাইনি। bangladesh.gov.bd বা ৩৩৩ ব্যবহার করুন।");
    return;
  }
  if (hit.multi) {
    addMsg("bot", "একাধিক বিষয় মিলছে:\n" + hit.items.map(function (it, i) { return (i + 1) + ". " + it.title; }).join("\n"));
    return;
  }
  addMsg("bot", hit.answer + "\n\nDeshConnect AI সরকারি অফিস নয়।", hit.sources);
}

async function reply(q) {
  addMsg("bot", "ভাবছি...");
  try {
    var res = await fetch(WORKER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q })
    });
    var data = await res.json();
    var thinking = el("messages").querySelectorAll(".msg.bot");
    var last = thinking[thinking.length - 1];
    if (last && last.innerText.indexOf("ভাবছি") !== -1) last.remove();
    if (data && data.text) addMsg("bot", data.text);
    else localReply(q);
  } catch (e) {
    var thinking = el("messages").querySelectorAll(".msg.bot");
    var last = thinking[thinking.length - 1];
    if (last && last.innerText.indexOf("ভাবছি") !== -1) last.remove();
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

window.addEventListener("DOMContentLoaded", function () {
  el("send").addEventListener("click", send);
  el("q").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  addMsg("bot", "আসসালামু আলাইকুম। এখন সব ব্যবহারকারী Gemini দিয়ে প্রশ্ন করতে পারেন। NID, পাসপোর্ট বা যেকোনো সেবা লিখুন।");
});
