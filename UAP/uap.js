const barangData = [
    {kode: '001', nama: 'A', harga: 10000},
    {kode: '002', nama: 'B', harga: 20000},
    {kode: '003', nama: 'C', harga: 30000}
]

function tampilData(){
    const barangTable = document.getElementById('barangTable');
    barangData.forEach((barang, index) => {
        const row = barangTable.insertRow(index + 1);
        const kodeCell = row.insertCell(0);
        const namaCell = row.insertCell(1);
        const hargaCell = row.insertCell(2);

        kodeCell.textContent = barang.kode;
        namaCell.textContent = barang.nama;
        hargaCell.textContent = barang.harga;
    })
    
}

document.addEventListener('DOMContentLoaded', () => {
    tampilData();
})

function tambahTransaksi(event){
    event.preventDefault();
    const kodeInput = document.getElementById('kodeInput');
    const quantityInput = document.getElementById('quantityInput');
    const selectedBarang = barangData.find(barang => barang.kode === kodeInput.value);
    const jumlah = quantityInput.value;
    const totalHarga = selectedBarang.harga * jumlah;
    const bayar = window.prompt(
        'Total Harga yang Harus dibayarkan : ' + totalHarga + '\n' +
        'Masukkan Uang Anda!'
    )
    const kembalian = bayar - totalHarga;
    alert ('Kembalian anda: ' + kembalian);
}