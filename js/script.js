// =============== Helper Reset ===============
function resetForm(resultId) {
    document.getElementById(resultId).innerText = "";
}

// =============== Segitiga ===============
// Luas Segitiga
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

// Keliling Segitiga
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
// Luas Jajar Genjang
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

// Keliling Jajar Genjang
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
