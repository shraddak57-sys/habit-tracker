(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Logic = factory();
})(this, function () {
  const pad = (n) => String(n).padStart(2, "0");
  const key = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

  // Consecutive days ending today (or yesterday, so an unchecked today doesn't break the streak).
  function currentStreak(done, today) {
    const s = new Set(done);
    let d = new Date(today);
    if (!s.has(key(d))) d = addDays(d, -1);
    let n = 0;
    while (s.has(key(d))) { n++; d = addDays(d, -1); }
    return n;
  }

  function longestStreak(done) {
    let best = 0, run = 0, prev = null;
    for (const k of [...new Set(done)].sort()) {
      run = prev && key(addDays(prev, 1)) === k ? run + 1 : 1;
      best = Math.max(best, run);
      prev = parse(k);
    }
    return best;
  }

  return { key, parse, addDays, currentStreak, longestStreak };
});
