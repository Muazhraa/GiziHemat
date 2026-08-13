let dataPangan = [];


// mengambil data dari JSON
fetch("bahan pangan.json")
.then(response => response.json())
.then(data => {

    data.sort((a, b) => 
        a.nama.localeCompare(b.nama)
    );
    
    dataPangan = data;

    let bahanA = document.getElementById("bahanA");
    let bahanB = document.getElementById("bahanB");
    let bahanC = document.getElementById("bahanC");


    // memasukkan semua bahan dari JSON ke pilihan menu
   if (bahanA && bahanB) {

    data.forEach(item => {

        bahanA.innerHTML += `
        <option value="${item.nama}">
            ${item.nama}
        </option>
        `;


        bahanB.innerHTML += `
        <option value="${item.nama}">
            ${item.nama}
        </option>
        `;

        bahanC.innerHTML += `
        <option value="${item.nama}">
            ${item.nama}
        </option>
        `;

    });
    
    new TomSelect("#bahanA", {
    create: false,
    sortField: {
        field: "text",
        direction: "asc"
    }
});

new TomSelect("#bahanB", {
    create: false,
    sortField: {
        field: "text",
        direction: "asc"
    }
});

new TomSelect("#bahanC", {
    create: false,
    sortField: {
        field: "text",
        direction: "asc"
    }
});

    }

})
.catch(error => console.log(error));



// fungsi tombol hitung
function hitungGizi(){

    let pilihA = document.getElementById("bahanA").value;
    let pilihB = document.getElementById("bahanB").value;

    let beratA = document.getElementById("beratA").value;
    let beratB = document.getElementById("beratB").value;

    let hargaA = document.getElementById("hargaA").value;
    let hargaB = document.getElementById("hargaB").value;


    // cek apakah ada yang kosong
    if(
        pilihA == "" ||
        pilihB == "" ||
        beratA == "" ||
        beratB == "" ||
        hargaA == "" ||
        hargaB == ""
    ){

        alert("Silakan lengkapi semua data terlebih dahulu");
        return;

    }


    let bahanA = dataPangan.find(
        item => item.nama == pilihA
    );

    let bahanB = dataPangan.find(
        item => item.nama == pilihB
    );


    let hasil = {
        bahanA: bahanA,
        bahanB: bahanB,
        beratA: beratA,
        beratB: beratB,
        hargaA: hargaA,
        hargaB: hargaB
    };


    localStorage.setItem(
        "hasilGizi",
        JSON.stringify(hasil)
    );


    window.location.href = "hasil.html";

}


function tambahBahan(){

    document.getElementById("bahanTambahan").style.display = "block";

    document.querySelector("button[onclick='tambahBahan()']").style.display = "none";

}

function hapusIsian(){

    document.getElementById("bahanA").value = "";
    document.getElementById("bahanB").value = "";

    document.getElementById("beratA").value = "";
    document.getElementById("beratB").value = "";

    document.getElementById("hargaA").value = "";
    document.getElementById("hargaB").value = "";

    localStorage.removeItem("hasilGizi");

}

// FUNCTION TOMBOL TARUH DI LUAR

function aturUlang(){

    localStorage.clear();

    window.location.href = "index.html";

}


function bandingkanLagi(){

    localStorage.removeItem("hasilGizi");
    window.location.href = "index.html";

}


function konversiBerat(){

    window.location.href = "konversi-berat.html";

}

function langsungKeKalkulator() {
    localStorage.setItem("aksesKalkulator", "true");
    localStorage.setItem("lewatiKuis", "true");

    window.location.href = "index.html";
}


window.resetData = resetData;
window.bandingkanLagi = bandingkanLagi;
window.lanjutKuis = lanjutKuis;

function keDashboard(){

    window.location.href = "index.html";

}


function keComparison(){

    window.location.href = "index.html";

}

document.getElementById("hasilAnalisis").innerHTML =
`Analisis gabungan menunjukkan <strong>${namaBahanA}</strong> unggul untuk ..., sedangkan <strong>${namaBahanB}</strong> unggul untuk ...`;

document.getElementById("palingHemat").innerHTML =
hasil.bahanA.nama;

document.getElementById("palingHemat").innerHTML =
hasil.bahanB.nama;

document.getElementById("palingHematMikro").innerHTML =
hasil.bahanA.nama + " (Besi & Fosfor)";

document.getElementById("palingHematMikro").innerHTML =
hasil.bahanB.nama + " (Besi & Fosfor)";

document.getElementById("keunggulanMakro").innerHTML =
"Energi & Lemak";


window.keDashboard = keDashboard;
window.keComparison = keComparison;

function toggleDarkMode(){

    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    );
}


function cekAkses() {

    const akses = localStorage.getItem("aksesKalkulator");

    console.log("Akses:", akses);

    if (akses === "true") {
        hitungGizi();
        return;
    }

    document.getElementById("modalAkses").classList.remove("hidden");
}

function tutupModal() {

    document.getElementById("modalAkses").classList.add("hidden");

}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenu.classList.toggle("hidden");
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    );
}

window.toggleDarkMode = toggleDarkMode;

window.addEventListener("load", function () {

    const btnHitung = document.getElementById("btnHitung");
    const pesanAkses = document.getElementById("pesanAkses");

    if (localStorage.getItem("aksesKalkulator") === "true") {

        btnHitung.disabled = false;

        btnHitung.classList.remove(
            "bg-gray-300",
            "text-gray-500",
            "cursor-not-allowed"
        );

        btnHitung.classList.add(
            "bg-primary",
            "text-white",
            "hover:bg-blue-600"
        );

        if (localStorage.getItem("lewatiKuis") === "true") {
        localStorage.removeItem("lewatiKuis");
    } else {
        window.location.href = "kuis.html";
    }

        if (pesanAkses) {
            pesanAkses.style.display = "none";
        }
    }
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tombolKirim = document.getElementById("submitQuiz");

   if (form && tombolKirim) {
    form.addEventListener("submit", function () {
        
    });
}
});

});