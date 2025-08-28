// =============== Helper Reset ===============
function resetForm(resultId) {
  document.getElementById(resultId).innerText = "";
}

// =============== Show/Hide Section ===============
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// =============== Segitiga ===============
// Luas
function hitungLuasSegitiga() {
  let alas = parseFloat(document.getElementById("alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasil-luas-sgt").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let luas = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas-sgt").innerText = `✅ Luas = ${luas}`;
}

// Keliling
function hitungKelilingSegitiga() {
  let sisiA = parseFloat(document.getElementById("sisi-a").value);
  let sisiB = parseFloat(document.getElementById("sisi-b").value);
  let sisiC = parseFloat(document.getElementById("sisi-c").value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    document.getElementById("hasil-keliling-sgt").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let keliling = sisiA + sisiB + sisiC;
  document.getElementById("hasil-keliling-sgt").innerText = `✅ Keliling = ${keliling}`;
}

// =============== Jajar Genjang ===============
function hitungLuasJG() {
  let alas = parseFloat(document.getElementById("alas-jg").value);
  let tinggi = parseFloat(document.getElementById("tinggi-jg").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasil-luas-jg").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let luas = alas * tinggi;
  document.getElementById("hasil-luas-jg").innerText = `✅ Luas = ${luas}`;
}

function hitungKelilingJG() {
  let alas = parseFloat(document.getElementById("alas-jg-k").value);
  let sisi = parseFloat(document.getElementById("sisi-jg").value);

  if (isNaN(alas) || isNaN(sisi)) {
    document.getElementById("hasil-keliling-jg").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let keliling = 2 * (alas + sisi);
  document.getElementById("hasil-keliling-jg").innerText = `✅ Keliling = ${keliling}`;
}

// =============== Persegi Panjang ===============
// Luas
function hitungLuasPersegiPanjang() {
  let p = parseFloat(document.getElementById("panjang").value);
  let l = parseFloat(document.getElementById("lebar").value);

  if (isNaN(p) || isNaN(l)) {
    document.getElementById("hasil-luas-persegi").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let luas = p * l;
  document.getElementById("hasil-luas-persegi").innerText = `✅ Luas = ${luas}`;
}

// Keliling
function hitungKelilingPersegiPanjang() {
  let p = parseFloat(document.getElementById("panjang-k").value);
  let l = parseFloat(document.getElementById("lebar-k").value);

  if (isNaN(p) || isNaN(l)) {
    document.getElementById("hasil-keliling-persegi").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let keliling = 2 * (p + l);
  document.getElementById("hasil-keliling-persegi").innerText = `✅ Keliling = ${keliling}`;
}

// =============== Lingkaran ===============
// Luas
function hitungLuasLingkaran() {
  let r = parseFloat(document.getElementById("jari").value);

  if (isNaN(r)) {
    document.getElementById("hasil-luas-lingkaran").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let luas = Math.PI * r * r;
  document.getElementById("hasil-luas-lingkaran").innerText =
    `✅ Luas = ${luas.toFixed(2)}`;
}

// Keliling
function hitungKelilingLingkaran() {
  let r = parseFloat(document.getElementById("jari-k").value);

  if (isNaN(r)) {
    document.getElementById("hasil-keliling-lingkaran").innerText = "⚠️ Masukkan angka yang valid!";
    return;
  }

  let keliling = 2 * Math.PI * r;
  document.getElementById("hasil-keliling-lingkaran").innerText =
    `✅ Keliling = ${keliling.toFixed(2)}`;
}
