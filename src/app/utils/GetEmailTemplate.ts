export function getEmailTemplate(params: { email: string; subject: string; message: string }) {
    return `
        <div>
            <p style="display: block; font-size: 18px;">Email: ${params.email}</p>
            <p style="display: block; font-size: 18px;">Subject: ${params.subject}</p>
            <p style="display: block; font-size: 18px;">Message: ${params.message}</p>
        </div>
    `;
}