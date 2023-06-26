const frm = document.querySelector('#frm');
const output = document.querySelector('#output');
const spinner = document.querySelector('#loading');
const qrcodeElement = document.querySelector('#qrcode');
const btnSave = document.querySelector('#btn-save');
function generateQRCode(e) {
    e.preventDefault();
    const url = document.querySelector('#url').value;
    const size = document.querySelector('#size').value;
    const clrDark = document.querySelector('#colorDark').value;
    const clrLight = document.querySelector('#colorLight').value;

    if (url === "") {
        alert("Please Enter URL");
    } else {
        //show spinner
        spinner.style.display = 'flex';
        setTimeout(() => {

            //hide Spinner
            spinner.style.display = 'none';
            qrcodeElement.innerHTML = "";
            const qrcode = new QRCode('qrcode', {
                text: url,
                width: size,
                height: size,
                colorDark: clrDark,
                colorLight: clrLight,
                correctLevel: QRCode.CorrectLevel.H
            });

        }, 1000);

        creatDownloadLink();


    }
}
frm.addEventListener('submit', generateQRCode);

function creatDownloadLink() {
    const imgSrc = qrcodeElement.querySelector('img').src;
    btnSave.href = imgSrc;

}

btnSave.addEventListener('click', () => {
    setTimeout(() => {

        btnSave.download = 'qrcode';
    }, 50);
});

