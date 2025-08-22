export function getEmailTemplate(params: { email: string; subject: string; message: string }) {
    return `
        <div>
            <div style="width: 100%; height: 1px; background: #000; margin: 20px 0;">
                <img src="https://ascent-website-sigma.vercel.app/mail/header.png" alt="Ascent Logo" style="width: 100px; height: auto; display: block; margin: 0 auto;" />
            </div>
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Novo Contato via Site</h1>
            <hr/>
            <p style="display: block; font-size: 18px;">Email: ${params.email}</p>
            <p style="display: block; font-size: 18px;">Subject: ${params.subject}</p>
            <p style="display: block; font-size: 18px;">Message: ${params.message}</p>
        </div>
    `;
}