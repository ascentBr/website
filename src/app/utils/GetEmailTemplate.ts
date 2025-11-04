export function getEmailTemplate(params: { name: string;email: string; subject: string; message: string }) {
    return `
        <div>
            <div style="width: 100%; height: 220px; background: #090606; margin: 20px 0;">
                <img src="https://ascent-website-sigma.vercel.app/mail/header.png" alt="Ascent Logo" style="width: 100%; height: 100%; display: block; object-fit: contain; margin: 0 auto;" />
            </div>
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Novo Contato via Site</h1>
            <hr/>
            <div style="display: block; font-size: 18px;">Nome: ${params.name}</div>
            <div style="display: block; font-size: 18px;">Email: ${params.email}</div>
            <div style="display: block; font-size: 18px;">Data: ${new Date().toLocaleString()}</div>
            <div style="display: block; font-size: 18px;">Subject: ${params.subject}</div>
            <div style="display: block; font-size: 18px;">Message: <p  style="display: block; font-size: 18px;">${params.message}</p></div>
        </div>
    `;
}