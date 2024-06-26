// Array to store PDF URLs
const pdfFiles = [
    'Infoblätter Kunden/KALO_Kundeninformation_Solarthermie.pdf',
    'Infoblätter Kunden/KALO_Infokarte_RWM-Pflicht_Sachsen.pdf',
    'Infoblätter Kunden/KALO_Infoblatt_Kunden_Messtechnik_UVI_final_web.pdf',    
    'Infoblätter Kunden/KALO_Infoblatt_HKVO_final_web.pdf',
    'Kundenbroschüre/220830_KALO_Kundenbroschuere_Smart-Multimetering_Web.pdf',
    'Kundenbroschüre/Fernablesbare Funkmesstechnik und UVI.pdf',
    'Kundenbroschüre/KALO-Kurzportrait.pdf',
    'Infoblätter Kunden/KvO-GBL_Adressliste.pdf',
    'Kalo_Powerpoint:Master_final_1.pdf',
    // Add more PDF 
];

// Function to dynamically generate navigation links
function generateNavLinks() {
    const navbar = document.getElementById('navbar');

    // Clear previous links
    navbar.innerHTML = '';

    // Create a link for each PDF file
    pdfFiles.forEach((pdf, index) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = pdf.name; // Set the text content to the name of the PDF document
        link.onclick = function() {
            showPDF(pdf.url);
        };
        navbar.appendChild(link);
    });
}

// Function to show PDF
function showPDF(pdfUrl) {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfViewer = document.getElementById('pdf-viewer');

    // Check if PDF viewer exists
    if (!pdfViewer) {
        console.error('PDF viewer element not found.');
        return;
    }

    // Hide welcome screen
    document.getElementById('welcome-screen').style.display = 'none';

    // Show PDF container
    pdfContainer.style.display = 'block';

    // Clear previous PDF
    pdfContainer.innerHTML = '';

    // Create a new embed element for the PDF
    const embedElement = document.createElement('embed');
    embedElement.setAttribute('id', 'pdf-viewer');
    embedElement.setAttribute('src', pdfUrl);
    embedElement.setAttribute('type', 'application/pdf');
    embedElement.setAttribute('width', '100%');
    embedElement.setAttribute('height', '600px');

    // Append the embed element to the container
    pdfContainer.appendChild(embedElement);
}

// Initial function call to generate navigation links
generateNavLinks();
