document.getElementById('submit').addEventListener('click', function() {
    // Ambil nilai dari formulir
    const nama = document.getElementById('nama').value;
    const usia = document.getElementById('usia').value;
    const alamat = document.getElementById('alamat').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const tempatTanggalLahir = document.getElementById('tempat_tanggal_lahir').value;

    // Validasi sederhana
    if (!nama || !usia || !alamat || !telepon || !email || !tempatTanggalLahir) {
        alert('Harap isi semua field!');
        return;
    }

    // Tambahkan data ke tabel
    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${usia}</td>
        <td>${alamat}</td>
        <td>${telepon}</td>
        <td>${email}</td>
        <td>${tempatTanggalLahir}</td>
    `;

    tableBody.appendChild(newRow);

    // Kosongkan input setelah submit
    document.getElementById('formulir').reset();
});
